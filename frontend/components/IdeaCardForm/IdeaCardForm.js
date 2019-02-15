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

  handleSubmitIdeaForm = async (event) => {
    event.preventDefault();
    this.setState({ isSubmitDisabled: true });
    // await this.props.dispatchAddIdea(this.state.idea);
    this.setState({ idea: '' }, () => this.canSubmit());
  };

  render() {
    return (
      <form className="IdeaCardForm" onSubmit={event => this.handleSubmitIdeaForm(event)}>
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
    );
  }
}

export default IdeaCardForm;
