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
  const { updateUser } = useUser();
  const navigate = useNavigate();
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm({ defaultValues: DEFAULT_VALUES });
  const [message, contextHolder] = useMessage();
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = async (values: SignUpForm) => {
    try {
      setLoading(true);
      const user = await signUp(values);
      if (user) {
        updateUser(user);
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
        <FormItem label="Email" error={errors['email']}>
          <Input
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: 'Email format is invalid',
              },
            })}
            placeholder={'Type email'}
            type="email"
          />
        </FormItem>
        <FormItem label="First name" error={errors['firstName']}>
          <Input
            {...register('firstName', { required: 'First name is required' })}
            placeholder={'Type first name'}
          />
        </FormItem>
        <FormItem label="Last name" error={errors['lastName']}>
          <Input
            {...register('lastName', { required: 'Last name is required' })}
            placeholder={'Type last name'}
          />
        </FormItem>
        <FormItem label="Password" error={errors['password']}>
          <Input
            {...register('password', {
              required: 'Password is required',
              minLength: {
                value: 8,
                message: 'Password length must be at least 8',
              },
            })}
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
