import styled from '@emotion/styled';

import { lighten, rgba } from 'styles/color';

export const OpKey = styled.button({
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

export const LongOpKey = styled(OpKey)({
  alignItems: 'center',
  display: 'flex',
  gridColumn: '1 / span 2',
  justifyContent: 'center',
  width: 'auto',
});

export const LongOpKeyText = styled.div<{ isSelected: boolean }>(
  ({ isSelected }) => ({
    color: isSelected ? '#fff' : rgba('#fff', 0.64),
    padding: '3px 16px',
    ':first-of-type': {
      borderRight: `2px solid ${rgba('#fff', 0.24)}`,
    },
  }),
);

export const NumKey = styled(OpKey)({
  backgroundColor: rgba('#fff', 0.4),
  borderBottomColor: rgba('#fff', 0.24),
  ':hover': {
    backgroundColor: rgba('#fff', 0.5),
  },
  ':active': {
    backgroundColor: rgba('#E040FB', 0.6),
  },
});

export const EnterKey = styled(OpKey)({
  backgroundColor: '#E040FB',
  borderBottomColor: lighten('#E040FB', 0.24),
  ':hover': {
    backgroundColor: '#E040FB',
  },
  ':active': {
    backgroundColor: '#D500F9',
  },
});
