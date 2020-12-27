import styled from '@emotion/styled';
import { FC } from 'react';

import Display from 'components/Display/Display';

const FullCalculator: FC<{}> = () => {
  return (
    <Grid>
      <Display />
      <div>button</div>
      <div>button</div>
      <div>button</div>
      <div>button</div>
      <div>button</div>
      <div>button</div>
      <div>button</div>
      <div>button</div>
    </Grid>
  );
};

const Grid = styled.div({
  display: 'grid',
  gap: 8,
  gridTemplateColumns: 'repeat(7, 1fr)',
});

export default FullCalculator;
