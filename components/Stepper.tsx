import styled from '@emotion/styled';
import clsx from 'clsx';
import { MouseEvent } from 'react';

import { prefixedClassNames } from '../styles/utils';

const stepperClasses = prefixedClassNames('Stepper', [
  'root',
  'item',
  'itemActive',
]);

const Root = styled('div', {
  shouldForwardProp: propName => propName !== 'progress',
})<{ progress: number }>(({ theme, progress }) => ({
  position: 'relative',
  width: '100%',
  padding: 20,

  '&::before': {
    content: '""',
    position: 'absolute',
    left: 0,
    top: 30,
    display: 'block',
    width: '100%',
    height: 4,
    backgroundColor: theme.palette.grey.dark,
  },

  '&::after': {
    content: '""',
    position: 'absolute',
    left: 0,
    top: 30,
    display: 'block',
    width: `${progress}%`,
    height: 4,
    backgroundColor: theme.palette.primary.main,
    transition: 'width 200ms ease-in',
  },
}));

const Step = styled('div', {
  shouldForwardProp: propName => !['left', 'isActive'].includes(propName),
})<{ left: number; isActive: boolean }>(({ theme, left, isActive }) => ({
  position: 'absolute',
  top: 0,
  left: `${left}%`,
  transform: 'translateX(-50%)',
  cursor: 'pointer',
  color: !isActive ? theme.palette.text.secondary : undefined,
  fontWeight: isActive ? 'bold' : undefined,

  '&::after': {
    content: '""',
    position: 'absolute',
    top: 24,
    left: '50%',
    transform: 'translateX(-50%)',
    width: 15,
    height: 15,
    borderRadius: '50%',
    backgroundColor: isActive
      ? theme.palette.primary.main
      : theme.palette.grey.dark,
    transition: 'background-color 100ms ease-in 200ms',
  },
}));

interface Props {
  /**
   * Index of active step in {@link Props.steps steps} array, it should be
   * a non-negative integer and less than the length of {@link Props.steps steps} array
   */
  activeStepIndex: number;
  className?: string;
  classes?: Partial<typeof stepperClasses>;
  steps: string[];
  onSelect?: (stepIndex: number, e: MouseEvent) => void;
}

const Stepper = ({
  activeStepIndex,
  className,
  classes,
  steps,
  onSelect,
}: Props) => {
  const getLeftOffset = (index: number) => {
    return ((index + 1) * 100) / (steps.length + 1);
  };

  const handleSelect = (index: number) => (e: MouseEvent) =>
    onSelect?.(index, e);

  return (
    <Root
      className={clsx(className, stepperClasses.root, classes?.root)}
      progress={getLeftOffset(activeStepIndex)}
    >
      {steps.map((step, index) => (
        <Step
          key={index}
          left={getLeftOffset(index)}
          isActive={index <= activeStepIndex}
          onClick={handleSelect(index)}
        >
          {step}
        </Step>
      ))}
    </Root>
  );
};

export default Stepper;
