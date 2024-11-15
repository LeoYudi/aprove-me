import { useState } from 'react';

export default function PasswordInputViewModel() {
  const [type, setType] = useState('password');

  return { type, setType };
}
