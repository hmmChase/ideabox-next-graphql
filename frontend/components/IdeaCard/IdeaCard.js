import PropTypes from 'prop-types';
import { gql } from 'apollo-boost';
import styled from 'styled-components';
import { Mutation } from 'react-apollo';
import { ALL_IDEAS_QUERY } from '../IdeaContainer/IdeaContainer';

export const UPDATE_IDEA_MUTATION = gql`
  mutation UPDATE_IDEA_MUTATION($id: ID!, $idea: String!) {
    updateIdea(id: $id, idea: $idea) {
      id
      idea
    }
  }
`;

export const DELETE_IDEA_MUTATION = gql`
  mutation DELETE_IDEA_MUTATION($id: ID!) {
    deleteIdea(id: $id) {
      id
    }
  }
`;

class IdeaCard extends React.Component {
  state = {
    prevIdea: this.props.idea,
    nextIdea: this.props.idea
  };

  handleInputIdeaCard = (e, updateIdea) => {
    this.setState({ nextIdea: e.target.innerText }, updateIdea);
  };

  handleClickDeleteBtn = (e, deleteIdea) => {
    e.target.disabled = true;
    deleteIdea();
  };

  render() {
    return (
      <StyledLi>
        <Mutation
          mutation={DELETE_IDEA_MUTATION}
          variables={{ id: this.props.id }}
          refetchQueries={[{ query: ALL_IDEAS_QUERY }]}>
          {deleteIdea => (
            <StyledDeleteBtn
              type="button"
              onClick={e => this.handleClickDeleteBtn(e, deleteIdea)}
            />
          )}
        </Mutation>
        <Mutation
          mutation={UPDATE_IDEA_MUTATION}
          variables={{
            id: this.props.id,
            idea: this.state.nextIdea
          }}
          refetchQueries={[{ query: ALL_IDEAS_QUERY }]}>
          {updateIdea => (
            <StyledIdeaP
              contentEditable
              suppressContentEditableWarning
              onInput={e => this.handleInputIdeaCard(e, updateIdea)}>
              {this.state.prevIdea}
            </StyledIdeaP>
          )}
        </Mutation>
      </StyledLi>
    );
  }
}

IdeaCard.propTypes = {
  id: PropTypes.string.isRequired,
  idea: PropTypes.string.isRequired
};

export default IdeaCard;

const StyledLi = styled.li`
  display: flex;
  position: relative;
  width: 80%;
  margin: 20px;
`;

const StyledDeleteBtn = styled.button`
  background: none;
  background-image: url('/static/delete.svg');
  position: absolute;
  right: -10px;
  top: -10px;
  height: 20px;
  width: 20px;
  border: none;
  cursor: pointer;
  border-radius: 50%;
`;

const StyledIdeaP = styled.p`
  text-align: left;
  width: 100%;
  outline: none;
  border: black solid 1px;
  padding: 5px;
  margin: 0;
`;
