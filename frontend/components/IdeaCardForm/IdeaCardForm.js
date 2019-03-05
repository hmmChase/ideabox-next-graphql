import { gql } from 'apollo-boost';
import styled from 'styled-components';
import { Mutation } from 'react-apollo';
import { ALL_IDEAS_QUERY } from '../IdeaContainer/IdeaContainer';

export const CREATE_IDEA_MUTATION = gql`
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
          <StyledForm onSubmit={event => this.handleSubmitIdeaForm(event, createIdea)}>
            <img src="static/ideabox.png" alt="ideabox" />
            <textarea
              name="idea"
              type="text"
              placeholder="What's on your mind?"
              value={this.state.idea}
              onChange={event => this.handleChangeIdeaInput(event)}
            />
            <button type="submit" disabled={this.state.isSubmitDisabled}>
              Add Idea
            </button>
          </StyledForm>
        )}
      </Mutation>
    );
  }
}

export default IdeaCardForm;

const StyledForm = styled.form`
  display: flex;
  width: 80%;
  max-width: 800px;
  position: relative;
  img {
    width: 100px;
    position: absolute;
    top: -60px;
    left: -45px;
  }
  textarea {
    padding: 10px;
    outline: none;
    width: 100%;
    padding-left: 20px;
    resize: vertical;
  }
  button {
    width: 60px;
    border: none;
    background-color: #fffacd;
  }
`;
