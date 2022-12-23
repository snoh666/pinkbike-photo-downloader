import { ReactNode } from 'react';
import styled from 'styled-components';

const Heading = styled.h1``;

const Header = (): ReactNode => (
  <Heading>Click to download highest resolution image</Heading>
);

export default Header;
