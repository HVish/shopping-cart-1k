import styled from '@emotion/styled';

import _AvatarIcon from '../icons/AvatarIcon';

const HEIGHT = 34;

const Root = styled('div')(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  borderRadius: 100,
  height: HEIGHT,
  paddingLeft: theme.spacing(3),
  paddingRight: HEIGHT,
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
}));

const AvatarIcon = styled(_AvatarIcon)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  bottom: 0,
  right: 0,
}));

interface Props {
  className?: string;
  name: string;
}

const UserCell = ({ className, name }: Props) => {
  return (
    <Root className={className}>
      {name} <AvatarIcon size={HEIGHT} />
    </Root>
  );
};

export default UserCell;
