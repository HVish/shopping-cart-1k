import styled from '@emotion/styled';
import { ReactNode } from 'react';

const Root = styled('div')(() => ({
  position: 'relative',
  display: 'inline-block',
}));

const BadgeContent = styled('span')(({ theme }) => ({
  display: 'grid',
  placeContent: 'center',
  position: 'absolute',
  color: theme.palette.primary.light,
  backgroundColor: theme.palette.common.white,
  minHeight: 24,
  minWidth: 24,
  border: '2px solid currentColor',
  borderRadius: '50%',
  top: theme.spacing(-3),
  right: theme.spacing(-2),
}));

interface Props {
  badgeContent: ReactNode;
  children: ReactNode;
}

const Badge = ({ badgeContent, children }: Props) => {
  return (
    <Root>
      {children}
      {badgeContent ? <BadgeContent>{badgeContent}</BadgeContent> : null}
    </Root>
  );
};

export default Badge;
