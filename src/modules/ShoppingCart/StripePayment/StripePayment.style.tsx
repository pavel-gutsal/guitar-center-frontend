import styled from 'styled-components';
import { colors } from '../../../Theme';

export const SForm = styled.form``;

export const SButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 42px;
  background: ${colors.successGreen};
  font-size: 18px;
  font-weight: 400px;
  border-radius: 5px;
  color: white;
  border: 0;
  padding: 12px 16px;
  margin-top: 16px;
  opacity: 0.7;
  cursor: pointer;
  transition: all 0.4s ease;

  &:hover,
  &:focus,
  &:active {
    opacity: 1;
    box-shadow: 0 0 5px 0 rgba(204, 204, 204, 0.3);
  }
`;

export const SButtonCancel = styled(SButton)`
  background: ${colors.pink};
`;

export const SGroupHorizontal = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 30px;
`;
