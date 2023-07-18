import { message } from 'antd';

message.config({
  top: 100,
  duration: 2,
});

export function useMessage() {
  return message.useMessage();
}
