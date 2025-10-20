import React from 'react';
import './Button.css';

/**
 * Qualia Button Component
 * Uses design system tokens for consistent styling
 */
const Button = React.forwardRef((
  {
    children,
    variant = 'primary',
    size = 'medium',
    disabled = false,
    fullWidth = false,
    loading = false,
    onClick,
    type = 'button',
    className = '',
    ...props
  },
  ref
) => {
  const baseClasses = 'qualia-button';
  const variantClass = `qualia-button--${variant}`;
  const sizeClass = `qualia-button--${size}`;
  const fullWidthClass = fullWidth ? 'qualia-button--full-width' : '';
  const loadingClass = loading ? 'qualia-button--loading' : '';
  
  const classes = [
    baseClasses,
    variantClass,
    sizeClass,
    fullWidthClass,
    loadingClass,
    className
  ].filter(Boolean).join(' ');

  return (
    <button
      ref={ref}
      type={type}
      className={classes}
      disabled={disabled || loading}
      onClick={onClick}
      aria-disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <span className="qualia-button__spinner" aria-hidden="true">
          <svg viewBox="0 0 24 24" className="qualia-button__spinner-icon">
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeDasharray="31.416"
              strokeDashoffset="31.416"
            />
          </svg>
        </span>
      )}
      <span className={loading ? 'qualia-button__text--loading' : 'qualia-button__text'}>
        {children}
      </span>
    </button>
  );
});

Button.displayName = 'Button';

export default Button;