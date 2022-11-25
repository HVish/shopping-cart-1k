import styled from '@emotion/styled';
import { useState } from 'react';

import Button from '../components/Button';
import Radio from '../components/Radio';

const Heading = styled('div')(({ theme }) => ({
  fontSize: 20,
  fontWeight: 'bold',
  padding: theme.spacing(2, 0),
}));

const Row = styled('div')(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
}));

type RadioValue = 'option1' | 'option2' | 'option3';

const Playground = () => {
  const [radioValue, setRadioValue] = useState<'' | RadioValue>('');

  const handleRadioChange = (value: RadioValue) => () => setRadioValue(value);

  return (
    <>
      <Heading>Buttons</Heading>
      <Row>
        <Button>Filled button</Button>
        <Button disabled>Filled button - disabled</Button>
        <Button variant="outlined">Outlined button</Button>
        <Button disabled variant="outlined">
          Outlined button - disabled
        </Button>
      </Row>
      <Heading>Radio Buttons</Heading>
      <Row>
        <form>
          <Radio
            checked={radioValue === 'option1'}
            onChange={handleRadioChange('option1')}
          >
            Option 1
          </Radio>
          <Radio
            checked={radioValue === 'option2'}
            onChange={handleRadioChange('option2')}
          >
            Option 2
          </Radio>
          <Radio
            disabled
            checked={radioValue === 'option3'}
            onChange={handleRadioChange('option3')}
          >
            Option 3 - disabled
          </Radio>
        </form>
      </Row>
    </>
  );
};

export default Playground;
