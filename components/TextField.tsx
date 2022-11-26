import styled from '@emotion/styled';
import clsx from 'clsx';
import { ChangeEvent, ReactNode } from 'react';

import { prefixedClassNames } from '../styles/utils';

const textFieldClasses = prefixedClassNames('TextField', [
  'root',
  'inputField',
  'withIcon',
  'icon',
  'disabled',
  'hasError',
  'valid',
]);

const Root = styled('div')(({ theme }) => ({
  display: 'flex',
  borderRadius: 100,
  height: 48,
  border: `2px solid ${theme.palette.grey.dark}`,
  alignItems: 'center',

  '&:focus-within': {
    border: `2px solid ${theme.palette.primary.main}`,
  },

  [`& .${textFieldClasses.inputField}`]: {
    paddingRight: theme.spacing(2),
  },
}));

const InputField = styled('input')(({ theme }) => ({
  flex: 1,
  fontSize: 16,
  borderRadius: 100,
  padding: theme.spacing(0, 5),
  color: theme.palette.text.primary,
  border: 'none',
  width: '100%',

  '&:focus': {
    outline: 'none',
  },
}));

interface Props {
  className?: string;
  classes?: Partial<typeof textFieldClasses>;
  icon?: ReactNode;
  placeholder?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const TextField = ({
  className,
  classes,
  icon,
  onChange,
  placeholder,
  value,
}: Props) => {
  return (
    <Root
      className={clsx(className, classes?.root, {
        [textFieldClasses.withIcon]: Boolean(icon),
      })}
    >
      <InputField
        className={clsx(textFieldClasses.inputField, classes?.inputField)}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
      {icon}
    </Root>
  );
};

export default TextField;
