import styled from '@emotion/styled';

import NavLink, { navLinkClasses } from './NavLink';

const Root = styled(NavLink)(({ theme }) => ({
  fontSize: 24,
  fontWeight: 'bold',
  letterSpacing: 3,

  [`&.${navLinkClasses.root}`]: {
    color: theme.palette.primary.light,
  },
}));

interface Props {
  className?: string;
}

const Logo = ({ className }: Props) => {
  return (
    <Root className={className} href="/">
      SHOP
    </Root>
  );
};

export default Logo;
