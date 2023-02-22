import styled from 'styled-components';

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin: 1rem 0.25rem;
`;

const Heading = styled.h1`
  font-size: 1rem;
`;

const SubHeading = styled.h4`
  font-size: 0.75rem;
`;

const Header = () => (
  <Flex>
    <Heading>PinkBike Image Download</Heading>
    <SubHeading>Download highest resolution image available</SubHeading>
  </Flex>
);

export default Header;
