import { TextInput } from 'components/TextInput';

import useViewModel from './viewModel'
import { PasswordInput } from 'components/PasswordInput';
import { Button } from 'components/Button';

export function Login() {
  const {
    login,
    password,
    onLoginChange,
    onPasswordChange,
    onSubmit
  } = useViewModel()

  return <div className='login-page'>
    <TextInput
      value={login}
      onChange={onLoginChange}
    />

    <PasswordInput
      value={password}
      onChange={onPasswordChange}
    />

    <Button
      text='Submit'
      onClick={onSubmit}
    />
  </div>
}