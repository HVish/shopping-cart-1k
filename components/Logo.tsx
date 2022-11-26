import styled from '@emotion/styled';

const Root = styled('div')(({ theme }) => ({
  fontSize: 24,
  fontWeight: 'bold',
  letterSpacing: 3,
  color: theme.palette.primary.light,
}));

interface Props {
  className?: string;
}

const Logo = ({ className }: Props) => {
  return <Root className={className}>SHOP</Root>;
};

export default Logo;
