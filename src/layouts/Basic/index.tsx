import { ReactNode } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  min-width: 300px;
  min-height: 300px;
  background: ${({ theme }) => theme.colors.black};
  border-radius: 8px;
  overflow: hidden;
`;

interface BasicProps {
  children: ReactNode;
}

const Basic = ({ children }: BasicProps) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Basic;
