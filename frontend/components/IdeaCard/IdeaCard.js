import { gql } from 'apollo-boost';
import { Mutation } from 'react-apollo';

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

  handleInputIdeaCard = (e) => {
    this.setState(
      { nextIdea: e.target.innerText }
      // async () => await this.props.dispatchUpdateIdea(
      //   this.props.id,
      //   this.state.nextIdea,
      //   this.props.stateIdeas
      // )
    );
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
          <Mutation mutation={DELETE_IDEA_MUTATION} variables={{ id: this.props.id }}>
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

          <p
            className="ideaCardText"
            contentEditable
            suppressContentEditableWarning
            onInput={e => this.handleInputIdeaCard(e)}
          >
            {this.state.prevIdea}
          </p>
        </div>
      </li>
    );
  }
}

export default IdeaCard;
