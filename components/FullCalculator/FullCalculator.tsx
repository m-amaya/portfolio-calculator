import styled from '@emotion/styled';
import { FC, useState } from 'react';

import Display from 'components/Display/Display';
import {
  EnterKey,
  LongOpKey,
  LongOpKeyText,
  NumKey,
  OpKey,
} from 'components/Keys';

const FullCalculator: FC<{}> = () => {
  const [isRad, setRad] = useState(true);

  const onToggleClick = () => {
    setRad(!isRad);
  };

  return (
    <Grid>
      <Display />
      <LongOpKey onClick={onToggleClick}>
        <LongOpKeyText isSelected={isRad}>Rad</LongOpKeyText>
        <LongOpKeyText isSelected={!isRad}>Deg</LongOpKeyText>
      </LongOpKey>
      <OpKey>x!</OpKey>
      <OpKey>(</OpKey>
      <OpKey>)</OpKey>
      <OpKey>%</OpKey>
      <OpKey>CE</OpKey>
      <OpKey>Inv</OpKey>
      <OpKey>sin</OpKey>
      <OpKey>ln</OpKey>
      <NumKey>7</NumKey>
      <NumKey>8</NumKey>
      <NumKey>9</NumKey>
      <OpKey>&divide;</OpKey>
      <OpKey>π</OpKey>
      <OpKey>cos</OpKey>
      <OpKey>log</OpKey>
      <NumKey>4</NumKey>
      <NumKey>5</NumKey>
      <NumKey>6</NumKey>
      <OpKey>&times;</OpKey>
      <OpKey>e</OpKey>
      <OpKey>tan</OpKey>
      <OpKey>&radic;</OpKey>
      <NumKey>1</NumKey>
      <NumKey>2</NumKey>
      <NumKey>3</NumKey>
      <OpKey>&minus;</OpKey>
      <OpKey>Ans</OpKey>
      <OpKey>EXP</OpKey>
      <OpKey>
        x<sup>y</sup>
      </OpKey>
      <NumKey>0</NumKey>
      <NumKey>.</NumKey>
      <EnterKey>=</EnterKey>
      <OpKey>+</OpKey>
    </Grid>
  );
};

const Grid = styled.div({
  display: 'grid',
  gap: 8,
  gridTemplateColumns: 'repeat(7, 1fr)',
});

export default FullCalculator;
