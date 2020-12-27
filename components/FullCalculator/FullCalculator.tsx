import styled from '@emotion/styled';
import { FC } from 'react';

import Display from 'components/Display/Display';
import { lighten, rgba } from 'styles/color';

const FullCalculator: FC<{}> = () => {
  return (
    <Grid>
      <Display />
      <ExtraLongButton>Rad</ExtraLongButton>
      <ExtraButton>x!</ExtraButton>
      <ExtraButton>(</ExtraButton>
      <ExtraButton>)</ExtraButton>
      <ExtraButton>%</ExtraButton>
      <ExtraButton>CE</ExtraButton>
      <ExtraButton>Inv</ExtraButton>
      <ExtraButton>sin</ExtraButton>
      <ExtraButton>ln</ExtraButton>
      <SimpleButton>7</SimpleButton>
      <SimpleButton>8</SimpleButton>
      <SimpleButton>9</SimpleButton>
      <ExtraButton>&divide;</ExtraButton>
      <ExtraButton>π</ExtraButton>
      <ExtraButton>cos</ExtraButton>
      <ExtraButton>log</ExtraButton>
      <SimpleButton>4</SimpleButton>
      <SimpleButton>5</SimpleButton>
      <SimpleButton>6</SimpleButton>
      <ExtraButton>&times;</ExtraButton>
      <ExtraButton>e</ExtraButton>
      <ExtraButton>tan</ExtraButton>
      <ExtraButton>&radic;</ExtraButton>
      <SimpleButton>1</SimpleButton>
      <SimpleButton>2</SimpleButton>
      <SimpleButton>3</SimpleButton>
      <ExtraButton>&minus;</ExtraButton>
      <ExtraButton>Ans</ExtraButton>
      <ExtraButton>EXP</ExtraButton>
      <ExtraButton>
        x<sup>y</sup>
      </ExtraButton>
      <SimpleButton>0</SimpleButton>
      <SimpleButton>.</SimpleButton>
      <MainButton>=</MainButton>
      <ExtraButton>+</ExtraButton>
    </Grid>
  );
};

const Grid = styled.div({
  display: 'grid',
  gap: 8,
  gridTemplateColumns: 'repeat(7, 1fr)',
});

const ExtraButton = styled.button({
  backgroundColor: rgba('#fff', 0.16),
  border: 'none',
  borderBottomColor: rgba('#fff', 0.16),
  borderBottomStyle: 'solid',
  borderBottomWidth: 2,
  borderRadius: 5,
  color: '#fff',
  cursor: 'pointer',
  height: 58,
  outline: 0,
  transition: 'all 200ms',
  width: 72,
  ':hover': {
    backgroundColor: rgba('#fff', 0.24),
  },
  ':active': {
    backgroundColor: rgba('#E040FB', 0.32),
    borderBottomColor: 'transparent',
    transform: 'translateY(2px)',
  },
});

const ExtraLongButton = styled(ExtraButton)({
  gridColumn: '1 / span 2',
  width: 'auto',
});

const SimpleButton = styled(ExtraButton)({
  backgroundColor: rgba('#fff', 0.4),
  borderBottomColor: rgba('#fff', 0.24),
  ':hover': {
    backgroundColor: rgba('#fff', 0.5),
  },
  ':active': {
    backgroundColor: rgba('#E040FB', 0.6),
  },
});

const MainButton = styled(ExtraButton)({
  backgroundColor: '#E040FB',
  borderBottomColor: lighten('#E040FB', 0.24),
  ':hover': {
    backgroundColor: '#E040FB',
  },
  ':active': {
    backgroundColor: '#D500F9',
  },
});

export default FullCalculator;
