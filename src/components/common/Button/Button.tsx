import { ButtonHTMLAttributes } from 'react';

type ButtonProps = {
  text: string;
  onClick?: () => void;
} & ButtonHTMLAttributes<HTMLButtonElement>; // This is a type for all props that a button element accept in HTML

// Deconstruction with ...props, will collect all other props that are not specified by name, in this case onClick and text.
export const Button = ({ onClick, text, ...props }: ButtonProps) => {
  return (
    <button onClick={onClick} aria-label={text} {...props}>
      {text}
    </button>
  );
};
