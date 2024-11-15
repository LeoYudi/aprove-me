import { useState } from 'react';

import { signIn } from './services';
import { useAlert } from 'contexts/AlertContext';
import { useNavigate } from 'react-router-dom';
import { setAuthOnStorage } from 'utils/auth';

export default function LoginViewModel() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const { setAlert } = useAlert();

  const navigate = useNavigate();

  const onLoginChange = (value: string) => {
    setLogin(value);
  };

  const onPasswordChange = (value: string) => {
    setPassword(value);
  };

  const onSubmit = async () => {
    const response = await signIn(login, password);

    if (response.apiError) setAlert(response.apiError.message, 'warning');
    else {
      setAuthOnStorage(response);
      navigate('/');
    }
  };

  return {
    login,
    password,
    onLoginChange,
    onPasswordChange,
    onSubmit,
  };
}
