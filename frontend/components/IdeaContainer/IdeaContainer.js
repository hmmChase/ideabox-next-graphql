import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import styled from 'styled-components';
import IdeaCard from '../IdeaCard/IdeaCard';

export const ALL_IDEAS_QUERY = gql`
  query ALL_IDEAS_QUERY {
    ideas {
      id
      idea
    }
  }
`;

class IdeaContainer extends React.PureComponent {
  displayIdeaCards = data => data.ideas.map(idea => <IdeaCard key={`ideaCard${idea.id}`} {...idea} />);

  render() {
    return (
      <Query query={ALL_IDEAS_QUERY}>
        {({ data, error, loading }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error: {error.message}</p>;
          return <StyledUl>{this.displayIdeaCards(data)}</StyledUl>;
        }}
      </Query>
    );
  }
}

export default IdeaContainer;

const StyledUl = styled.ul`
  width: 100%;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0 auto;
`;
