import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  padding: 0.5rem 0.75rem;
  background: none;
  border: 2px solid ${({ theme }) => theme.colors.white};
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
`;

export const ErrorMessage = styled.p`
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.red};
`;

export const InfoText = styled.p`
  margin: 0.5rem 0;
  color: ${({ theme }) => theme.colors.white};
`;

export const SpanPhotoId = styled.span`
  color: ${({ theme }) => theme.colors.redLight};
`;
