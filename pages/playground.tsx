import styled from '@emotion/styled';

import Button from '../components/Button';

const Heading = styled('div')(({ theme }) => ({
  fontSize: 20,
  fontWeight: 'bold',
  padding: theme.spacing(2, 0),
}));

const Row = styled('div')(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
}));

const Playground = () => {
  return (
    <>
      <Heading>Buttons</Heading>
      <Row>
        <Button>Filled button</Button>
        <Button variant="outlined">Outlined button</Button>
      </Row>
    </>
  );
};

export default Playground;
