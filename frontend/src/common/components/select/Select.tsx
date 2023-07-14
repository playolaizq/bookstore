import { Select as AntdSelect, SelectProps } from 'antd';
import classes from './Select.module.css';

function Select(props: SelectProps) {
  return <AntdSelect className={classes.container} {...props} />;
}

export default Select;
