import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { paths } from '#/application/routes/paths';
import { useI18n } from '#/common/hooks/i18n';
import { createUser } from '#/common/services/users';
import Button from '#/common/components/button/Button';
import FormItem from '#/common/components/form-item/FormItem';
import Input from '#/common/components/input/Input';
import { SignUpForm, DEFAULT_VALUES } from './config/form';
import classes from './SignUp.module.css';

function SignUp() {
  const { t } = useI18n();
  const { handleSubmit, register } = useForm({
    defaultValues: DEFAULT_VALUES,
  });

  const handleFormSubmit = async (values: SignUpForm) => {
    try {
      const user = await createUser(values);
      console.log('user', user);
    } catch (err) {
      console.log('err', err);
    }
  };

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>{t('pages.sign-up.title')}</h1>
      <form onSubmit={(...args) => void handleSubmit(handleFormSubmit)(...args)}>
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
