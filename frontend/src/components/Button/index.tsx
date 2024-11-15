type ButtonProps = {
  text: string,
  onClick?: () => void,
  onMouseDown?: () => void,
  onMouseUp?: () => void,
}

export function Button({
  text,
  onClick,
  onMouseDown,
  onMouseUp
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
    >
      {text}
    </button>
  )
}