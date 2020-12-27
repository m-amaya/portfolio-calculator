import styled from '@emotion/styled';
import { FC } from 'react';

import FullCalculator from 'components/FullCalculator/FullCalculator';
import SimpleCalculator from 'components/SimpleCalculator/SimpleCalculator';
import bp from 'styles/breakpoints';
import useWindowSize from 'utils/hooks/useWindowSize';

const IndexPage: FC<{}> = () => {
  const [width] = useWindowSize();

  return (
    <Page>
      {width && width > bp.tablet.portrait ? (
        <FullCalculator />
      ) : (
        <SimpleCalculator />
      )}
    </Page>
  );
};

const Page = styled.div({
  alignItems: 'center',
  display: 'flex',
  height: '100vh',
  justifyContent: 'center',
});

export default IndexPage;
