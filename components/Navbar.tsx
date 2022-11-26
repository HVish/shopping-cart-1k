import styled from '@emotion/styled';
import clsx from 'clsx';
import { useSelector } from 'react-redux';

import CartIcon from '../icons/CartIcon';
import { selectCartItems } from '../store/selectors';
import { prefixedClassNames } from '../styles/utils';
import Badge from './Badge';
import Logo from './Logo';
import NavLink from './NavLink';
import UserCell from './UserCell';

export const navbarClasses = prefixedClassNames('Navbar', ['root', 'navbar']);

const Root = styled('header')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(0, 4),
  minHeight: theme.variables.navHeight,
  backgroundColor: theme.palette.background.paper,
}));

const Nav = styled('nav')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  maxWidth: theme.variables.mainContentWidth,
}));

const RightContent = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(8),
}));

interface Props {
  classes?: typeof navbarClasses;
  className?: string;
}

const Navbar = ({ classes, className }: Props) => {
  const cartItems = useSelector(selectCartItems);
  return (
    <Root className={clsx(className, classes?.root)}>
      <Nav className={classes?.navbar}>
        <Logo />
        <div>
          <NavLink href="/about">About Us</NavLink>
          <NavLink href="/catalog">Catalog</NavLink>
          <NavLink href="/delivery">Delivery</NavLink>
          <NavLink href="/reviews">Reviews</NavLink>
          <NavLink href="/contacts">Contacts</NavLink>
        </div>
        <RightContent>
          <Badge badgeContent={cartItems.length}>
            <CartIcon size={32} />
          </Badge>
          <UserCell name="Vishnu Singh" />
        </RightContent>
      </Nav>
    </Root>
  );
};

export default Navbar;
