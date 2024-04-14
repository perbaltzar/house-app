import { ButtonHTMLAttributes } from 'react';
import './Button.css';

type ButtonProps = {
  text: string;
  onClick?: () => void;
} & ButtonHTMLAttributes<HTMLButtonElement>; // This is a type for all props that a button element accept in HTML

// Deconstruction with ...props, will collect all props that are not specified picked by name like onClick and text.
export const Button = ({ onClick, text, ...props }: ButtonProps) => {
  // Spread the props to the button element to pass all props that are not specified to the button element
  return (
    <button className="button" onClick={onClick} aria-label={text} {...props}>
      {text}
    </button>
  );
};
