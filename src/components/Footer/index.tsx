import styled from 'styled-components';

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Link = styled.a`
  color: ${({ theme }) => theme.colors.white};
  text-transform: underline;
`;

const Footer = () => (
  <Flex>
    <Link href='https://discord.gg/5F5dfneRTy' target='_blank'>
      Discord
    </Link>
    <Link
      href='https://github.com/snoh666/pinkbike-photo-downloader'
      target='_blank'
    >
      GitHub
    </Link>
  </Flex>
);

export default Footer;
