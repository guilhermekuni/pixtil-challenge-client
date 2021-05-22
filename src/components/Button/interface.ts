import React from 'react';

export default interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isPrimary?: boolean;
  children: React.ReactNode;
}
