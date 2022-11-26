import styled from '@emotion/styled';
import clsx from 'clsx';
import { ReactNode } from 'react';

import { prefixedClassNames } from '../styles/utils';

export const buttonClasses = prefixedClassNames('Button', [
  'root',
  'outlined',
  'filled',
  'disabled',
]);

interface Props {
  classes?: typeof buttonClasses;
  children: ReactNode;
  /** @default false */
  disabled?: boolean;
  /**
   * @default 'filled'
   */
  variant?: 'filled' | 'outlined';
}

const Root = styled('button')(({ theme }) => ({
  display: 'felx',
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

  [`&.${buttonClasses.outlined}`]: {
    border: `1px solid ${theme.palette.grey.main}`,
    color: theme.palette.text.primary,

    [`&:not(.${buttonClasses.disabled}):hover`]: {
      backgroundColor: theme.palette.grey.light,
    },
  },

  [`&.${buttonClasses.filled}`]: {
    border: 'none',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,

    [`&:not(.${buttonClasses.disabled}):hover`]: {
      backgroundColor: theme.palette.primary.dark,
    },
  },
}));

const Button = ({
  classes,
  children,
  disabled = false,
  variant = 'filled',
}: Props) => {
  return (
    <Root
      className={clsx(classes?.root, buttonClasses[variant], {
        [buttonClasses.disabled]: disabled,
      })}
    >
      {children}
    </Root>
  );
};

export default Button;
