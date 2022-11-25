import styled from '@emotion/styled';
import clsx from 'clsx';
import { ReactNode } from 'react';

import { prefixedClassNames } from '../styles/utils';

const radioClasses = prefixedClassNames('Radio', [
  'root',
  'checked',
  'disabled',
]);

const Root = styled('label')(({ theme }) => ({
  fontSize: '1rem',
  fontWeight: 'bold',
  lineHeight: 1.1,
  display: 'grid',
  gridTemplateColumns: '1em auto',
  gap: '0.5em',
  padding: theme.spacing(2),

  '&:focus-within': {
    color: theme.palette.primary.main,
  },

  [`&.${radioClasses.checked}`]: {
    color: theme.palette.primary.main,
  },

  [`&.${radioClasses.disabled}`]: {
    opacity: 0.5,
  },
}));

const Input = styled('input')(({ theme }) => ({
  fontSize: 'inherit',
  appearance: 'none',
  margin: 0,
  width: '1.15em',
  height: '1.15em',
  border: '0.15em solid currentColor',
  borderRadius: '50%',
  transform: 'translateY(-0.075em)',
  display: 'grid',
  placeContent: 'center',

  '&:before': {
    content: '""',
    width: '0.65em',
    height: '0.65em',
    borderRadius: '50%',
    transform: 'scale(0)',
    transition: '120ms transform ease-in-out',
    boxShadow: `inset 1em 1em ${theme.palette.primary.main}`,
  },

  '&:checked::before': {
    transform: 'scale(1)',
  },
}));

interface Props {
  checked?: boolean;
  children: ReactNode;
  classes?: Partial<typeof radioClasses>;
  className?: string;
  /** @default false */
  disabled?: boolean;
  onChange?: (isChecked: boolean) => void;
}

const Radio = ({
  checked,
  children,
  classes,
  className,
  disabled,
  onChange,
}: Props) => {
  const handleChange = () => {
    onChange?.(!checked);
  };

  return (
    <Root
      className={clsx(
        radioClasses.root,
        {
          [radioClasses.checked]: checked,
          [radioClasses.disabled]: disabled,
        },
        className,
        checked && classes?.checked,
        disabled && classes?.disabled
      )}
    >
      <Input
        type="radio"
        disabled={disabled}
        checked={checked}
        onChange={handleChange}
      />
      {children}
    </Root>
  );
};

export default Radio;
