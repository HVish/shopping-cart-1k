import styled from '@emotion/styled';
import { ChangeEvent, useMemo, useState } from 'react';

import ArrowForwardIcon from '../icons/ArrowForwardIcon';
import _FbIcon from '../icons/FbIcon';
import _IgIcon from '../icons/IgIcon';
import Button from './Button';
import _Logo from './Logo';
import NavLink from './NavLink';
import TextField from './TextField';

const Root = styled('footer')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(0, 4),
  minHeight: theme.variables.footerHeight,
  backgroundColor: theme.palette.background.paper,
}));

const Content = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  maxWidth: theme.variables.mainContentWidth,
}));

const Branding = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateAreas: '"logo logo" "fb ig"',
  gridTemplateColumns: '1fr 1fr',
  gap: theme.spacing(2),
  justifyItems: 'center',
}));

const Logo = styled(_Logo)(() => ({
  gridArea: 'logo',
}));

const FbIcon = styled(_FbIcon)(() => ({
  gridArea: 'fb',
}));

const IgIcon = styled(_IgIcon)(() => ({
  gridArea: 'ig',
}));

const SiteMap = styled('div')(() => ({
  display: 'grid',
  gridTemplateAreas: '"links links" "separator separator" "copyright contact"',
  gridTemplateColumns: '1fr auto',
}));

const Links = styled('div')(() => ({
  gridArea: 'links',
  display: 'flex',
  justifyContent: 'space-between',
}));

const Separator = styled('div')(({ theme }) => ({
  gridArea: 'separator',
  height: 2,
  margin: theme.spacing(0, 4),
  backgroundColor: theme.palette.grey.light,
}));

const Copyright = styled('div')(({ theme }) => ({
  gridArea: 'copyright',
  fontSize: 14,
  padding: theme.spacing(4),
  color: theme.palette.text.secondary,
}));

const Contact = styled('div')(({ theme }) => ({
  gridArea: 'contact',
  fontWeight: 'bold',
  padding: theme.spacing(4),
}));

const EmailUs = styled('div')(() => ({
  width: 204,
}));

const RightArrowButton = styled(Button)(() => ({
  borderRadius: '50%',
  padding: 0,
  width: 32,
  height: 32,
  marginRight: 6,
}));

const SignupText = styled('div')(({ theme }) => ({
  marginTop: theme.spacing(2),
  paddingLeft: theme.spacing(5.5),
  fontSize: 14,
  color: theme.palette.text.secondary,
}));

interface Props {
  className?: string;
}

const Footer = ({ className }: Props) => {
  const [email, setEmail] = useState('');

  const year = useMemo(() => new Date().getFullYear(), []);

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <Root className={className}>
      <Content>
        <Branding>
          <Logo />
          <FbIcon size={22} />
          <IgIcon size={22} />
        </Branding>
        <SiteMap>
          <Links>
            <NavLink href="/about">About Us</NavLink>
            <NavLink href="/catalog">Catalog</NavLink>
            <NavLink href="/delivery">Delivery</NavLink>
            <NavLink href="/reviews">Reviews</NavLink>
            <NavLink href="/contacts">Contacts</NavLink>
          </Links>
          <Separator />
          <Copyright>
            Copyright &copy; {year}. All rights are reserved
          </Copyright>
          <Contact>+91 123 456 7890</Contact>
        </SiteMap>
        <EmailUs>
          <TextField
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
            icon={
              <RightArrowButton>
                <ArrowForwardIcon size={20} />
              </RightArrowButton>
            }
          />
          <SignupText>Signup for our newletter</SignupText>
        </EmailUs>
      </Content>
    </Root>
  );
};

export default Footer;
