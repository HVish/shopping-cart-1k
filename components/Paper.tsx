import styled from '@emotion/styled';
import { ReactNode } from 'react';

const Root = styled('div')(({ theme }) => ({
  padding: theme.spacing(2),
  borderRadius: 4,
  backgroundColor: theme.palette.background.paper,
}));

interface Props {
  className?: string;
  children: ReactNode;
}

const Paper = ({ className, children }: Props) => {
  return <Root className={className}>{children}</Root>;
};

export default Paper;
