import IdeaCard from '../IdeaCard/IdeaCard';

class IdeaContainer extends React.Component {
  componentDidMount = () => this.getIdeas();

  getIdeas = () => [
    {
      id: 1,
      idea: 'If you dig it, do it. If you dig it a lot, do it twice.'
    }
  ];

  displayIdeaCards = () => this.getIdeas()
    .map(idea => <IdeaCard key={`ideaCard${idea.id}`} {...idea} />)
    .sort((a, b) => b.props.id - a.props.id);

  render() {
    return (
      <section className="IdeaContainer">
        <ul>{this.displayIdeaCards()}</ul>
      </section>
    );
  }
}

export default IdeaContainer;
