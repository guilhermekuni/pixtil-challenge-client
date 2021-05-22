import { InputHTMLAttributes } from 'react';

export default interface FilterInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  customSize: 'sm' | 'md' | 'lg';
}
