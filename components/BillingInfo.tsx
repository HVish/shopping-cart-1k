import styled from '@emotion/styled';
import {
  ChangeEvent,
  forwardRef,
  Ref,
  useImperativeHandle,
  useState,
} from 'react';

import { ShippingInfo } from '../shared/types';
import Paper from './Paper';
import TextField from './TextField';

const Root = styled(Paper)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(6),
  borderRadius: 10,
  padding: theme.spacing(12, 7.5),
}));

const ContactDetails = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: theme.spacing(6),
}));

const InputGroup = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
}));

const InputLabel = styled('label')(({ theme }) => ({
  fontSize: 14,
  marginTop: theme.spacing(2),
  color: theme.palette.text.secondary,
}));

export interface BillingInfoInstance {
  getValue: () => ShippingInfo;
}

interface Props {
  className?: string;
}

const BillingInfo = ({ className }: Props, ref: Ref<BillingInfoInstance>) => {
  const [firstName, setFirstName] = useState('Vishnu');
  const [lastName, setLastName] = useState('Singh');

  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('test@example.com');

  const [city, setCity] = useState('Gurugram');
  const [zipCode, setZipCode] = useState('122003');

  const [address, setAddress] = useState(
    '15A, Some building, Some society, Some landmark'
  );

  const [country, setCountry] = useState('India');

  useImperativeHandle<BillingInfoInstance, BillingInfoInstance>(
    ref,
    () => ({
      getValue: () => ({
        address,
        city,
        country,
        email,
        firstName,
        lastName,
        phone,
        zipCode,
      }),
    }),
    [address, city, country, email, firstName, lastName, phone, zipCode]
  );

  const handleChange = (fn: (value: string) => void) => {
    return (e: ChangeEvent<HTMLInputElement>) => {
      fn(e.target.value);
    };
  };

  return (
    <Root className={className}>
      <ContactDetails>
        <InputGroup>
          <InputLabel>First Name</InputLabel>
          <TextField
            value={firstName}
            onChange={handleChange(setFirstName)}
            placeholder="First name"
          />
        </InputGroup>
        <InputGroup>
          <InputLabel>Last Name</InputLabel>
          <TextField
            value={lastName}
            onChange={handleChange(setLastName)}
            placeholder="Last name"
          />
        </InputGroup>

        <InputGroup>
          <InputLabel>Phone</InputLabel>
          <TextField
            value={phone}
            onChange={handleChange(setPhone)}
            placeholder="+91 (___) __-___-__"
          />
        </InputGroup>
        <InputGroup>
          <InputLabel>Email</InputLabel>
          <TextField
            value={email}
            onChange={handleChange(setEmail)}
            placeholder="Email"
          />
        </InputGroup>

        <InputGroup>
          <InputLabel>City</InputLabel>
          <TextField
            value={city}
            onChange={handleChange(setCity)}
            placeholder="City"
          />
        </InputGroup>
        <InputGroup>
          <InputLabel>Zip code</InputLabel>
          <TextField
            value={zipCode}
            onChange={handleChange(setZipCode)}
            placeholder="Zip code"
          />
        </InputGroup>
      </ContactDetails>
      <InputGroup>
        <InputLabel>Address</InputLabel>
        <TextField
          value={address}
          onChange={handleChange(setAddress)}
          placeholder="Address"
        />
      </InputGroup>
      <InputGroup>
        <InputLabel>Country</InputLabel>
        <TextField
          value={country}
          onChange={handleChange(setCountry)}
          placeholder="Country"
        />
      </InputGroup>
    </Root>
  );
};

export default forwardRef(BillingInfo);
