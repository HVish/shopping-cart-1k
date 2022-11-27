import styled from '@emotion/styled';
import clsx from 'clsx';
import { MouseEvent } from 'react';

import { prefixedClassNames } from '../styles/utils';

const stepperClasses = prefixedClassNames('Stepper', [
  'root',
  'item',
  'itemActive',
  'itemClickable',
]);

const Root = styled('div', {
  shouldForwardProp: propName => propName !== 'progress',
})<{ progress: number }>(({ theme, progress }) => ({
  position: 'relative',
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
    backgroundColor: theme.palette.primary.light,
    transition: 'width 200ms ease-in',
  },
}));

const Step = styled('button', {
  shouldForwardProp: propName => propName !== 'left',
})<{ left: number }>(({ theme, left }) => ({
  position: 'absolute',
  top: 0,
  left: `${left}%`,
  transform: 'translateX(-50%)',
  color: theme.palette.text.secondary,
  height: '100%',
  display: 'flex',
  border: 'none',
  backgroundColor: 'transparent',

  '&::after': {
    content: '""',
    position: 'absolute',
    top: 26,
    left: '50%',
    transform: 'translateX(-50%)',
    width: 11,
    height: 11,
    borderRadius: '50%',
    backgroundColor: theme.palette.grey.dark,
    transition: 'all 100ms ease-in 200ms',
  },

  [`&.${stepperClasses.itemActive}`]: {
    fontWeight: 'bold',
    color: theme.palette.text.primary,

    '&::after': {
      top: 24,
      width: 15,
      height: 15,
      backgroundColor: theme.palette.primary.light,
    },
  },

  [`&.${stepperClasses.itemClickable}`]: {
    cursor: 'pointer',
  },
}));

interface Props {
  /**
   * Index of active step in {@link Props.steps steps} array, it should be
   * a non-negative integer and less than or equal to the length of
   * {@link Props.steps steps} array
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
      {steps.map((step, index) => {
        const isActive = index <= activeStepIndex;
        return (
          <Step
            key={index}
            className={clsx(
              stepperClasses.item,
              isActive && stepperClasses.itemActive,
              onSelect && stepperClasses.itemClickable,
              classes?.item,
              isActive ? classes?.itemActive : '',
              onSelect ? classes?.itemClickable : ''
            )}
            left={getLeftOffset(index)}
            onClick={handleSelect(index)}
          >
            {step}
          </Step>
        );
      })}
    </Root>
  );
};

export default Stepper;
