import styled from '@emotion/styled';
import clsx from 'clsx';
import _Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';

import { prefixedClassNames } from '../styles/utils';

const navLinkClasses = prefixedClassNames('NavLink', ['root', 'active']);

const Link = styled(_Link)(({ theme }) => ({
  display: 'inline-block',
  color: theme.palette.text.secondary,
  padding: theme.spacing(4),
  textDecoration: 'none',
  fontWeight: 'bold',

  '&:hover': {
    color: theme.palette.text.primary,
  },

  [`&.${navLinkClasses.active}`]: {
    color: theme.palette.text.primary,
  },
}));

interface Props extends LinkProps {
  className?: string;
  classes?: Partial<typeof navLinkClasses>;
  children: ReactNode;
  exact?: boolean;
}

const NavLink = ({ className, classes, exact, href, ...props }: Props) => {
  const { pathname } = useRouter();

  const isActive = exact
    ? pathname === href
    : pathname.startsWith(href.toString());

  return (
    <Link
      className={clsx(className, navLinkClasses.root, classes?.root, {
        [navLinkClasses.active]: isActive,
      })}
      href={href}
      {...props}
    />
  );
};

export default NavLink;
