import styled from '@emotion/styled';
import { faHistory } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC, useRef, useState } from 'react';

import useOutsideClick from 'utils/hooks/useOutsideClick';

const Display: FC<{}> = () => {
  const ref = useRef(null);
  const [isHover, setHover] = useState(false);
  const [isFocused, setFocus] = useState(false);

  useOutsideClick(ref, () => {
    if (isFocused) {
      setFocus(false);
    }
  });

  return (
    <Area
      ref={ref}
      isFocused={isFocused}
      isHover={isHover}
      onClick={() => setFocus(true)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}>
      <AnswerRow>
        <HistoryIcon icon={faHistory} />
        <Answer>Ans = 2</Answer>
      </AnswerRow>
      <Input>1 + 1</Input>
    </Area>
  );
};

const Area = styled.div<{ isFocused: boolean; isHover: boolean }>(
  ({ isFocused, isHover }) => ({
    backgroundColor: '#fff',
    borderColor: isFocused ? '#D500F9' : isHover ? '#EA80FC' : 'transparent',
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 5,
    color: '#212121',
    display: 'flex',
    flexDirection: 'column',
    gridColumn: '1 / span 7',
    height: 72,
    justifyContent: 'space-between',
    padding: '10px 12px',
    transition: 'border 200ms',
    userSelect: 'none',
  }),
);

const AnswerRow = styled.div({
  display: 'flex',
});

const HistoryIcon = styled(FontAwesomeIcon)({
  color: '#EA80FC',
  cursor: 'pointer',
  transition: 'color 200ms',
  ':hover': {
    color: '#D500F9',
  },
});

const Answer = styled.div({
  color: '#9E9E9E',
  display: 'flex',
  flex: 1,
  fontSize: 14,
  justifyContent: 'flex-end',
  paddingLeft: 8,
});

const Input = styled.div({
  display: 'flex',
  fontSize: 22,
  fontWeight: 500,
  justifyContent: 'flex-end',
});

export default Display;
