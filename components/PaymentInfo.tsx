import styled from '@emotion/styled';
import {
  ChangeEvent,
  forwardRef,
  ReactNode,
  Ref,
  useImperativeHandle,
  useState,
} from 'react';

import MasterCardIcon from '../icons/MasterCardIcon';
import VisaIcon from '../icons/VisaIcon';
import { PaymentInfo as PaymentInfoType, PaymentMode } from '../shared/types';
import Paper from './Paper';
import Radio from './Radio';
import TextField from './TextField';

const Root = styled(Paper)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(6),
  borderRadius: 10,
  padding: theme.spacing(12, 7.5),
}));

const PaymentTypeRow = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
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

const CardSecureInfo = styled('div')(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(4),
}));

export interface PaymentInfoInstance {
  getValue: () => PaymentInfoType;
}

interface Props {
  className?: string;
  children?: ReactNode;
}

const PaymentInfo = (
  { className, children }: Props,
  ref: Ref<PaymentInfoInstance>
) => {
  const [mode, setMode] = useState(PaymentMode.CREDIT_CARD);
  const [name, setName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [securityCode, setSecurityCode] = useState('');

  useImperativeHandle<PaymentInfoInstance, PaymentInfoInstance>(
    ref,
    () => ({
      getValue: () => ({
        cardNumber,
        expiry,
        mode,
        name,
        securityCode,
      }),
    }),
    [cardNumber, expiry, mode, name, securityCode]
  );

  const handlePaymentModeChange = (mode: PaymentMode) => () => {
    setMode(mode);
  };

  const handleChange = (fn: (value: string) => void) => {
    return (e: ChangeEvent<HTMLInputElement>) => {
      fn(e.target.value);
    };
  };

  return (
    <Root className={className}>
      <PaymentTypeRow>
        <Radio
          checked={mode === PaymentMode.CREDIT_CARD}
          onClick={handlePaymentModeChange(PaymentMode.CREDIT_CARD)}
        >
          Credit card
        </Radio>
        <VisaIcon size={32} />
        <MasterCardIcon size={32} />
        <Radio
          checked={mode === PaymentMode.CASH}
          onClick={handlePaymentModeChange(PaymentMode.CASH)}
        >
          Cash
        </Radio>
      </PaymentTypeRow>
      {mode === PaymentMode.CREDIT_CARD && (
        <>
          <InputGroup>
            <InputLabel>Card number</InputLabel>
            <TextField
              value={cardNumber}
              onChange={handleChange(setCardNumber)}
              placeholder="---- ---- ---- ----"
            />
          </InputGroup>
          <InputGroup>
            <InputLabel>Name on card</InputLabel>
            <TextField
              value={name}
              onChange={handleChange(setName)}
              placeholder="Name"
            />
          </InputGroup>
          <CardSecureInfo>
            <InputGroup>
              <InputLabel>Expiration date (MM / YY)</InputLabel>
              <TextField
                value={expiry}
                onChange={handleChange(setExpiry)}
                placeholder="MM / YY"
              />
            </InputGroup>
            <InputGroup>
              <InputLabel>Security code</InputLabel>
              <TextField
                value={securityCode}
                onChange={handleChange(setSecurityCode)}
                placeholder="---"
              />
            </InputGroup>
          </CardSecureInfo>
        </>
      )}
      {children}
    </Root>
  );
};

export default forwardRef(PaymentInfo);
