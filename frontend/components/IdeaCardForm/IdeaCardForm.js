import { gql } from 'apollo-boost';
import { Mutation } from 'react-apollo';
import { ALL_IDEAS_QUERY } from '../IdeaContainer/IdeaContainer';

const CREATE_IDEA_MUTATION = gql`
  mutation CREATE_IDEA_MUTATION($idea: String!) {
    createIdea(idea: $idea) {
      id
    }
  }
`;

class IdeaCardForm extends React.Component {
  state = {
    idea: '',
    isSubmitDisabled: true
  };

  canSubmit = () => {
    if (this.state.idea === '') {
      this.setState({ isSubmitDisabled: true });
    } else {
      this.setState({ isSubmitDisabled: false });
    }
  };

  handleChangeIdeaInput = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value }, () => this.canSubmit());
  };

  handleSubmitIdeaForm = async (event, createIdea) => {
    event.preventDefault();
    this.setState({ isSubmitDisabled: true });
    // await this.props.dispatchAddIdea(this.state.idea);
    createIdea();
    this.setState({ idea: '' }, () => this.canSubmit());
  };

  render() {
    return (
      <Mutation
        mutation={CREATE_IDEA_MUTATION}
        variables={{ idea: this.state.idea }}
        refetchQueries={[{ query: ALL_IDEAS_QUERY }]}
      >
        {createIdea => (
          <form
            className="IdeaCardForm"
            onSubmit={event => this.handleSubmitIdeaForm(event, createIdea)}
          >
            <input
              className="IdeaCardInput"
              name="idea"
              type="text"
              placeholder="Enter idea"
              value={this.state.idea}
              onChange={event => this.handleChangeIdeaInput(event)}
            />
            <button type="submit" disabled={this.state.isSubmitDisabled}>
              Add idea
            </button>
          </form>
        )}
      </Mutation>
    );
  }
}

export default IdeaCardForm;
