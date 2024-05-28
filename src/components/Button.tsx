import React from 'react'

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link';
}
// can set a default value for variant
const Button = ({children, onClick, variant = 'primary'}: ButtonProps) => {

    const buttonVariant = () => {
        switch (variant) {
            case 'primary':
                return 'btn btn-primary';
            case 'secondary':
                return 'btn btn-secondary';
            case 'success':
                return 'btn btn-success';
            case 'danger':
                return 'btn btn-danger';
            case 'warning':
                return 'btn btn-warning';
            case 'info':
                return 'btn btn-info';
            case 'light':
                return 'btn btn-light';
            case 'dark':
                return 'btn btn-dark';
            case 'link':
                return 'btn btn-link';
            default:
                return 'btn btn-primary';
        }
    }
    // could do string interpolation instead of switch statement 
    // return `btn btn-${variant}`
  return (
    <button type='button' onClick={onClick} className={`btn btn-${variant}`}>
      {children}
    </button>
  )
}

export default Button
