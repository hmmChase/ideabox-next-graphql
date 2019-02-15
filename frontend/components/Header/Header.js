import styled from 'styled-components';

const StyledHeader = styled.header`
  background-color: #282c34;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const Header = () => (
  <StyledHeader>
    <h1>IdeaBox</h1>
  </StyledHeader>
);

export default Header;
