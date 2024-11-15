import { useAlert } from 'contexts/AlertContext';

import './styles.scss'

const AlertPopup = () => {
  const { text, type } = useAlert();

  if (text && type) {
    return (
      <div className={`alert-popup ${type}`}>
        {text}
      </div>
    );
  } else {
    return <></>;
  }
};

export default AlertPopup;