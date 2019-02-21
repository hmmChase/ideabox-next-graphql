import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import IdeaCard from '../IdeaCard/IdeaCard';

const ALL_IDEAS_QUERY = gql`
  query ALL_IDEAS_QUERY {
    ideas {
      id
      idea
    }
  }
`;

class IdeaContainer extends React.PureComponent {
  displayIdeaCards = data => data.ideas
    .map(idea => <IdeaCard key={`ideaCard${idea.id}`} {...idea} />)
    .sort((a, b) => b.props.id - a.props.id);

  render() {
    return (
      <Query query={ALL_IDEAS_QUERY}>
        {({ data, error, loading }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error: {error.message}</p>;
          return <ul>{this.displayIdeaCards(data)}</ul>;
        }}
      </Query>
    );
  }
}

export default IdeaContainer;
