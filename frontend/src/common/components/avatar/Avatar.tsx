import { Avatar as AntdAvatar, AvatarProps } from 'antd';
import classes from './Avatar.module.css';

function Avatar(props: AvatarProps) {
  return <AntdAvatar className={classes.container} {...props} />;
}

export default Avatar;
