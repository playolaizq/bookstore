import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { paths } from '#/application/routes/paths';
import { useUser } from '#/application/state/user';
import { useI18n } from '#/common/hooks/i18n';
import { useMessage } from '#/common/hooks/useMessage';
import { signIn } from '#/common/services/auth';
import { setLocalStorageItem } from '#/common/utils/local-storage';
import Button from '#/common/components/button/Button';
import FormItem from '#/common/components/form-item/FormItem';
import Input from '#/common/components/input/Input';
import Spinner from '#/common/components/spinner/Spinner';
import { SignInForm, DEFAULT_VALUES } from './config/form';
import classes from './SignIn.module.css';

function SignIn() {
  const { t } = useI18n();
  const { setUser } = useUser();
  const { handleSubmit, register } = useForm({ defaultValues: DEFAULT_VALUES });
  const [message, contextHolder] = useMessage();
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = async (values: SignInForm) => {
    try {
      setLoading(true);
      const user = await signIn(values);
      setLocalStorageItem('bookstore-userid', user.id);
      setUser(user);
    } catch (err) {
      console.log('err', err);
      message.open({
        type: 'error',
        content: 'Invalid email and/or password.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Spinner spinning={loading} size="large">
      {contextHolder}
      <h1 className={classes.title}>{t('pages.sign-in.title')}</h1>
      <form onSubmit={(...args) => void handleSubmit(handleFormSubmit)(...args)}>
        <FormItem label="Email">
          <Input
            {...register('email', { required: true })}
            placeholder={'Type email'}
            type="email"
          />
        </FormItem>
        <FormItem label="Password">
          <Input
            {...register('password', { required: true })}
            placeholder={'Type password'}
            type="password"
          />
        </FormItem>
        <Button className={classes.button} type="submit">
          {t('common.actions.sign-in')}
        </Button>
      </form>
      <nav className={classes.footerNav}>
        <Link to={paths.SIGN_UP}>{t('common.actions.sign-up')}</Link>
      </nav>
    </Spinner>
  );
}

export default SignIn;
