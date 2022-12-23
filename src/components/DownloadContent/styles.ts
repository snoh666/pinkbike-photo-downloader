import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  border: 2px solid ${({ theme }) => theme.colors.red};
  background: none;
`;

export default Container;
