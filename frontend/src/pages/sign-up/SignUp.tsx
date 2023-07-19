import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { paths } from '#/application/routes/paths';
import { useUser } from '#/application/state/user';
import { useI18n } from '#/common/hooks/i18n';
import { useMessage } from '#/common/hooks/useMessage';
import { signUp } from '#/common/services/auth';
import Button from '#/common/components/button/Button';
import FormItem from '#/common/components/form-item/FormItem';
import Input from '#/common/components/input/Input';
import Spinner from '#/common/components/spinner/Spinner';
import { SignUpForm, DEFAULT_VALUES } from './config/form';
import classes from './SignUp.module.css';

function SignUp() {
  const { t } = useI18n();
  const { setUser } = useUser();
  const navigate = useNavigate();
  const { handleSubmit, register } = useForm({ defaultValues: DEFAULT_VALUES });
  const [message, contextHolder] = useMessage();
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = async (values: SignUpForm) => {
    try {
      setLoading(true);
      const user = await signUp(values);
      if (user) {
        setUser(user);
      } else {
        navigate(paths.SIGN_IN);
      }
    } catch (err) {
      console.log('err', err);
      message.open({
        type: 'error',
        content: 'Error signing up.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Spinner spinning={loading} size="large">
      {contextHolder}
      <h1 className={classes.title}>{t('pages.sign-up.title')}</h1>
      <form onSubmit={(...args) => void handleSubmit(handleFormSubmit)(...args)}>
        <FormItem label="Email">
          <Input
            {...register('email', { required: true })}
            placeholder={'Type email'}
            type="email"
          />
        </FormItem>
        <FormItem label="First name">
          <Input {...register('firstName', { required: true })} placeholder={'Type first name'} />
        </FormItem>
        <FormItem label="Last name">
          <Input {...register('lastName', { required: true })} placeholder={'Type last name'} />
        </FormItem>
        <FormItem label="Password">
          <Input
            {...register('password', { required: true })}
            placeholder={'Type password'}
            type="password"
          />
        </FormItem>
        <Button className={classes.button} type="submit">
          {t('common.actions.create')}
        </Button>
      </form>
      <nav className={classes.footerNav}>
        <Link to={paths.SIGN_IN}>{t('common.actions.sign-in')}</Link>
      </nav>
    </Spinner>
  );
}

export default SignUp;
