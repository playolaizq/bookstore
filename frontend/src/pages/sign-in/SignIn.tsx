import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { paths } from '#/application/routes/paths';
import { useUser } from '#/application/state/user';
import { useI18n } from '#/common/hooks/i18n';
import { signIn } from '#/common/services/auth';
import Button from '#/common/components/button/Button';
import FormItem from '#/common/components/form-item/FormItem';
import Input from '#/common/components/input/Input';
import { SignInForm, DEFAULT_VALUES } from './config/form';
import classes from './SignIn.module.css';

function SignIn() {
  const { t } = useI18n();
  const navigate = useNavigate();
  const { setUser } = useUser();
  const { handleSubmit, register } = useForm({ defaultValues: DEFAULT_VALUES });

  const handleFormSubmit = async (values: SignInForm) => {
    try {
      const user = await signIn(values);
      setUser(user);
      navigate(paths.BOOKS_LIST);
    } catch (err) {
      console.log('err', err);
    }
  };

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>{t('pages.sign-in.title')}</h1>
      <form onSubmit={(...args) => void handleSubmit(handleFormSubmit)(...args)}>
        <FormItem label="Email">
          <Input {...register('email', { required: true })} placeholder={'Type email'} />
        </FormItem>
        <FormItem label="Password">
          <Input {...register('password', { required: true })} placeholder={'Type password'} />
        </FormItem>
        <Button className={classes.button} type="submit">
          {t('common.actions.sign-in')}
        </Button>
      </form>
      <nav className={classes.footerNav}>
        <Link to={paths.SIGN_UP}>{t('common.actions.sign-up')}</Link>
      </nav>
    </div>
  );
}

export default SignIn;
