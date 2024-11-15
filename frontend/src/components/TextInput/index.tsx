import './styles.scss'

type TextInputProps = {
  placeholder?: string,
  value: string,
  onChange: (value: string) => void
}

export function TextInput({
  placeholder,
  value,
  onChange
}: TextInputProps) {
  return (
    <input
      placeholder={placeholder}
      value={value}
      type='text'
      onChange={(e) => onChange(e.target.value)}
    />
  )
}