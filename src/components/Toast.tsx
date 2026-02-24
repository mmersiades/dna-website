import { FC } from 'react';
import { ToastContentProps } from 'react-toastify';
import './toast.css';

type Props = Partial<ToastContentProps> & {
  title: string;
  message?: string;
};

const Toast: FC<Props> = ({ message, title }) => {
  const { h4, p } = {
    h4: 'font-display text-xl font-bold',
    p: 'text-lg !font-sans',
  };

  return (
    <div>
      <h4 className={h4}>{title}</h4>
      {message && <p className={p}>{message}</p>}
    </div>
  );
};

export default Toast;
