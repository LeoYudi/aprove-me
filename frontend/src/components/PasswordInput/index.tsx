import { Button } from 'components/Button'

import useViewModel from './viewModel'

import './styles.scss'

type PasswordInputProps = {
  placeholder?: string,
  value: string,
  onChange: (value: string) => void
}

export function PasswordInput({
  placeholder,
  value,
  onChange
}: PasswordInputProps) {
  const { type, setType } = useViewModel()

  return (
    <div className='password-field'>
      <input
        placeholder={placeholder}
        value={value}
        type={type}
        onChange={(e) => onChange(e.target.value)}
      />
      <Button
        text='Show'
        onMouseDown={() => setType('text')}
        onMouseUp={() => setType('password')}
      />
    </div>
  )
}