import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AxiosError, HttpStatusCode } from 'axios';
import { paths } from '#/application/routes/paths';
import { useUser } from '#/application/state/user';
import { useI18n } from '#/common/hooks/i18n';
import { createUser } from '#/common/services/users';
import Button from '#/common/components/button/Button';
import FormItem from '#/common/components/form-item/FormItem';
import Input from '#/common/components/input/Input';
import { SignUpForm, DEFAULT_VALUES } from './config/form';
import classes from './SignUp.module.css';

function SignUp() {
  const { t } = useI18n();
  const navigate = useNavigate();
  const { setUser } = useUser();
  const { handleSubmit, register } = useForm({ defaultValues: DEFAULT_VALUES });
  const [isDuplicated, setIsDuplicated] = useState(false);

  const handleFormSubmit = async (values: SignUpForm) => {
    try {
      const user = await createUser(values);
      setUser(user);
      navigate(paths.BOOKS_LIST);
    } catch (err) {
      if (err instanceof AxiosError) {
        if (err.response?.status == HttpStatusCode.Conflict) {
          setIsDuplicated(true);
        } else {
          setIsDuplicated(false);
        }
      } else {
        console.log('err', err);
      }
    }
  };

  return (
    <div>
      <h1 className={classes.title}>{t('pages.sign-up.title')}</h1>
      <form onSubmit={(...args) => void handleSubmit(handleFormSubmit)(...args)}>
        {isDuplicated && (
          <div className={classes.errorContainer}>
            <p className={classes.errorText}>Email is already in use.</p>
          </div>
        )}
        <FormItem label="Email">
          <Input {...register('email', { required: true })} placeholder={'Type email'} />
        </FormItem>
        <FormItem label="First name">
          <Input {...register('firstName', { required: true })} placeholder={'Type first name'} />
        </FormItem>
        <FormItem label="Last name">
          <Input {...register('lastName', { required: true })} placeholder={'Type last name'} />
        </FormItem>
        <FormItem label="Password">
          <Input {...register('password', { required: true })} placeholder={'Type password'} />
        </FormItem>
        <Button className={classes.button} type="submit">
          {t('common.actions.create')}
        </Button>
      </form>
      <nav className={classes.footerNav}>
        <Link to={paths.SIGN_IN}>{t('common.actions.sign-in')}</Link>
      </nav>
    </div>
  );
}

export default SignUp;
