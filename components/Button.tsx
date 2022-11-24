import styled from '@emotion/styled';
import clsx from 'clsx';
import { ReactNode } from 'react';

import { prefixedClassNames } from '../styles/utils';

export const buttonClasses = prefixedClassNames('Button', [
  'root',
  'outlined',
  'filled',
]);

interface Props {
  classes?: typeof buttonClasses;
  children: ReactNode;
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

  '&:disabled': {
    cursor: 'default',
    opacity: 0.5,
  },

  [`&.${buttonClasses.outlined}`]: {
    border: `1px solid ${theme.palette.grey.main}`,
    color: theme.palette.typography.primary,
  },

  [`&.${buttonClasses.filled}`]: {
    border: 'none',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
}));

const Button = ({ classes, children, variant = 'filled' }: Props) => {
  return (
    <Root className={clsx(classes?.root, buttonClasses[variant])}>
      {children}
    </Root>
  );
};

export default Button;
