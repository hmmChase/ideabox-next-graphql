import { gql } from 'apollo-boost';
import { Mutation } from 'react-apollo';
import { ALL_IDEAS_QUERY } from '../IdeaContainer/IdeaContainer';

const UPDATE_IDEA_MUTATION = gql`
  mutation UPDATE_IDEA_MUTATION($id: ID!, $idea: String!) {
    updateIdea(id: $id, idea: $idea) {
      id
      idea
    }
  }
`;

const DELETE_IDEA_MUTATION = gql`
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
    // this.props.dispatchDeleteIdea(this.props.id, this.props.stateIdeas);
    deleteIdea();
  };

  render() {
    return (
      <li className="IdeaCard">
        <div className="ideaCardContent">
          <Mutation
            mutation={DELETE_IDEA_MUTATION}
            variables={{ id: this.props.id }}
            refetchQueries={[{ query: ALL_IDEAS_QUERY }]}
          >
            {deleteIdea => (
              <button
                className="deleteBtn"
                type="button"
                onClick={e => this.handleClickDeleteBtn(e, deleteIdea)}
              >
                X
              </button>
            )}
          </Mutation>
          <Mutation
            mutation={UPDATE_IDEA_MUTATION}
            variables={{
              id: this.props.id,
              idea: this.state.nextIdea
            }}
            refetchQueries={[{ query: ALL_IDEAS_QUERY }]}
          >
            {updateIdea => (
              <p
                className="ideaCardText"
                contentEditable
                suppressContentEditableWarning
                onInput={e => this.handleInputIdeaCard(e, updateIdea)}
              >
                {this.state.prevIdea}
              </p>
            )}
          </Mutation>
        </div>
      </li>
    );
  }
}

export default IdeaCard;
