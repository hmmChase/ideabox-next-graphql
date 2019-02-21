class IdeaCard extends React.Component {
  state = {
    prevIdea: this.props.idea,
    nextIdea: this.props.idea
  };

  handleInputIdeaCard = (event) => {
    this.setState(
      { nextIdea: event.target.innerText }
      // async () => await this.props.dispatchUpdateIdea(
      //   this.props.id,
      //   this.state.nextIdea,
      //   this.props.stateIdeas
      // )
    );
  };

  handleClickDeleteBtn = (event) => {
    // event.target.disabled = true;
    // this.props.dispatchDeleteIdea(this.props.id, this.props.stateIdeas);
  };

  render() {
    return (
      <li className="IdeaCard">
        <div className="ideaCardContent">
          <button
            className="deleteBtn"
            type="button"
            onClick={event => this.handleClickDeleteBtn(event)}
          >
            X
          </button>
          <p
            className="ideaCardText"
            contentEditable
            suppressContentEditableWarning
            onInput={event => this.handleInputIdeaCard(event)}
          >
            {this.state.prevIdea}
          </p>
        </div>
      </li>
    );
  }
}

export default IdeaCard;
