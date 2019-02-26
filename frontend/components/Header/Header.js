import styled from 'styled-components';
import IdeaCardForm from '../IdeaCardForm/IdeaCardForm';

const Header = () => (
  <>
    <StyledHeader>
      <h1>IdeaBox</h1>
      <IdeaCardForm />
    </StyledHeader>
  </>
);

export default Header;

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #282c34;
  padding: 20px 0;
  h1 {
    margin: 0;
    font-size: 2em;
    color: white;
    margin-bottom: 20px;
    font-family: 'Play', sans-serif;
    color: ${props => props.theme.yellow};
  }
`;
