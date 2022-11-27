import styled from '@emotion/styled';
import clsx from 'clsx';
import { MouseEventHandler, ReactNode } from 'react';

import { prefixedClassNames } from '../styles/utils';

export const buttonClasses = prefixedClassNames('Button', [
  'root',
  'outlined',
  'filled',
  'disabled',
  'primary',
  'success',
  'error',
  'grey',
]);

interface Props {
  className?: string;
  classes?: typeof buttonClasses;
  children: ReactNode;
  /** @default 'primary' */
  color?: 'primary' | 'success' | 'error' | 'grey';
  /** @default false */
  disabled?: boolean;
  /**
   * @default 'filled'
   */
  variant?: 'filled' | 'outlined';
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Root = styled('button')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 100,
  padding: theme.spacing(3.5, 8),
  cursor: 'pointer',
  fontWeight: 'bold',
  fontSize: '16px',

  [`&.${buttonClasses.disabled}`]: {
    cursor: 'default',
    opacity: 0.5,
  },

  [`&.${buttonClasses.outlined}.${buttonClasses.grey}`]: {
    border: `2px solid ${theme.palette.grey.light}`,
    color: theme.palette.text.secondary,
    backgroundColor: theme.palette.background.paper,

    [`&:not(.${buttonClasses.disabled}):hover`]: {
      backgroundColor: theme.palette.grey.light,
    },
  },

  [`&.${buttonClasses.outlined}.${buttonClasses.primary}`]: {
    border: `1px solid ${theme.palette.primary.light}`,
    color: theme.palette.primary.light,

    [`&:not(.${buttonClasses.disabled}):hover`]: {
      backgroundColor: theme.palette.grey.light,
    },
  },

  [`&.${buttonClasses.outlined}.${buttonClasses.success}`]: {
    border: `1px solid ${theme.palette.success.main}`,
    color: theme.palette.success.main,

    [`&:not(.${buttonClasses.disabled}):hover`]: {
      backgroundColor: theme.palette.grey.light,
    },
  },

  [`&.${buttonClasses.outlined}.${buttonClasses.error}`]: {
    border: `1px solid ${theme.palette.error.main}`,
    color: theme.palette.error.main,

    [`&:not(.${buttonClasses.disabled}):hover`]: {
      backgroundColor: theme.palette.grey.light,
    },
  },

  [`&.${buttonClasses.filled}.${buttonClasses.grey}`]: {
    border: 'none',
    backgroundColor: theme.palette.grey.main,
    color: theme.palette.grey.contrastText,

    [`&:not(.${buttonClasses.disabled}):hover`]: {
      backgroundColor: theme.palette.grey.dark,
    },
  },

  [`&.${buttonClasses.filled}.${buttonClasses.primary}`]: {
    border: 'none',
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.contrastText,

    [`&:not(.${buttonClasses.disabled}):hover`]: {
      backgroundColor: theme.palette.primary.main,
    },
  },

  [`&.${buttonClasses.filled}.${buttonClasses.success}`]: {
    border: 'none',
    backgroundColor: theme.palette.success.main,
    color: theme.palette.success.contrastText,

    [`&:not(.${buttonClasses.disabled}):hover`]: {
      backgroundColor: theme.palette.success.dark,
    },
  },

  [`&.${buttonClasses.filled}.${buttonClasses.error}`]: {
    border: 'none',
    backgroundColor: theme.palette.error.main,
    color: theme.palette.error.contrastText,

    [`&:not(.${buttonClasses.disabled}):hover`]: {
      backgroundColor: theme.palette.error.dark,
    },
  },
}));

const Button = ({
  className,
  classes,
  children,
  color = 'primary',
  disabled = false,
  variant = 'filled',
  onClick,
}: Props) => {
  return (
    <Root
      className={clsx(
        className,
        classes?.root,
        buttonClasses[color],
        buttonClasses[variant],
        {
          [buttonClasses.disabled]: disabled,
        }
      )}
      onClick={onClick}
    >
      {children}
    </Root>
  );
};

export default Button;
