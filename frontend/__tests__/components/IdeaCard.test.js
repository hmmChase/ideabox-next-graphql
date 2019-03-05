import React from 'react';
import { mount } from 'enzyme';
import { ApolloConsumer } from 'react-apollo';
import { MockedProvider } from 'react-apollo/test-utils';
import { load } from '../../utils/tests';
import IdeaCard, {
  UPDATE_IDEA_MUTATION,
  DELETE_IDEA_MUTATION
} from '../../components/IdeaCard/IdeaCard';
import { ALL_IDEAS_QUERY } from '../../components/IdeaContainer/IdeaContainer';

describe('IdeaCard', () => {
  let mockQueries;
  let mockProps;
  let wrapper;

  beforeEach(() => {
    jest.resetAllMocks();
    mockQueries = [
      {
        request: {
          query: UPDATE_IDEA_MUTATION,
          variables: { id: '1', idea: 'updated mock idea' }
        },
        result: {
          data: {
            updateIdea: {
              id: '1',
              idea: 'updated mock idea'
            }
          }
        }
      },
      {
        request: {
          query: DELETE_IDEA_MUTATION,
          variables: { id: '1' }
        },
        result: {
          data: {
            deleteIdea: { id: '1' }
          }
        }
      },
      {
        request: { query: ALL_IDEAS_QUERY },
        result: {
          data: { ideas: [{ id: '1', idea: 'mock idea' }] }
        }
      }
    ];
    mockProps = { children: [], id: '1', idea: 'mock idea' };
    wrapper = mount(
      <MockedProvider mocks={mockQueries} addTypename={false}>
        <IdeaCard {...mockProps} />
      </MockedProvider>,
      {
        disableLifecycleMethods: true
      }
    );
  });

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  xit('matches snapshot after deleting idea', async () => {
    let apolloClient;

    wrapper = mount(
      <MockedProvider mocks={mockQueries} addTypename={false}>
        <ApolloConsumer>
          {(client) => {
            apolloClient = client;
            return <IdeaCard {...mockProps} />;
          }}
        </ApolloConsumer>
      </MockedProvider>,
      {
        disableLifecycleMethods: true
      }
    );

    console.log(wrapper.debug());

    const allIdeas1 = await apolloClient.query({ query: ALL_IDEAS_QUERY });
    console.log(' : -----------------------');
    console.log(' : allIdeas1', allIdeas1.data.ideas);
    console.log(' : -----------------------');

    const btn = wrapper.find('button');
    console.log(' : -----------');
    console.log(' : btn', btn.debug());
    console.log(' : -----------');

    btn.simulate('click');

    load(wrapper);
    wrapper.update();

    console.log(wrapper.debug());

    // const ideaCard = wrapper.find('IdeaCard').instance();

    const allIdeas2 = await apolloClient.query({ query: ALL_IDEAS_QUERY });
    console.log(' : -----------------------');
    console.log(' : allIdeas2', allIdeas2.data.ideas);
    console.log(' : -----------------------');

    // expect(wrapper).toMatchSnapshot();
  });
});
