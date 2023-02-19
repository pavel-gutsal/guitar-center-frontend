import styled from 'styled-components';

export const SBlockSelectBar = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  width: 100%;
  padding-bottom: 20px;
`;

export const SBlockSelectSX = {
  height: '32px',
  'font-size': '14px',
  'border-radius': '7px',
  outline: 'none',
  color: '#575757',
};

export const SBlockMenuItemSX = {
  color: '#575757',
  height: '32px',

  '&:hover, &:focus': {
    color: '#3c3c3c',
    backgroundColor: '#f8961e2d',
  },
};
