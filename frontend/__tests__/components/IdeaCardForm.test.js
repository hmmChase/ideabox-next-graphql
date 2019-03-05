import React from 'react';
import { mount } from 'enzyme';
import { ApolloConsumer } from 'react-apollo';
import { MockedProvider } from 'react-apollo/test-utils';
import { load } from '../../utils/tests';
import IdeaCardForm, { CREATE_IDEA_MUTATION } from '../../components/IdeaCardForm/IdeaCardForm';
import { ALL_IDEAS_QUERY } from '../../components/IdeaContainer/IdeaContainer';

describe('IdeaCardForm', () => {
  let mockQueries;
  let mockProps;
  let wrapper;

  beforeEach(() => {
    jest.resetAllMocks();
    mockQueries = [
      {
        request: {
          query: CREATE_IDEA_MUTATION,
          variables: { idea: 'mock idea' }
        },
        result: {
          data: {
            createIdea: {
              id: '1'
            }
          }
        }
      },
      {
        request: { query: ALL_IDEAS_QUERY },
        result: {
          data: { ideas: [] }
        }
      }
      // {
      //   request: { query: ALL_IDEAS_QUERY },
      //   result: {
      //     data: { ideas: [{ id: '1', idea: 'mock idea' }] }
      //   }
      // }
    ];
    mockProps = { children: [], id: '1', idea: 'mock idea' };
    wrapper = mount(
      <MockedProvider mocks={mockQueries} addTypename={false}>
        <IdeaCardForm {...mockProps} />
      </MockedProvider>,
      {
        disableLifecycleMethods: true
      }
    );
  });

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  xit('matches snapshot after creating idea', async () => {
    let apolloClient;

    wrapper = mount(
      <MockedProvider mocks={mockQueries} addTypename={false}>
        <ApolloConsumer>
          {(client) => {
            apolloClient = client;
            return <IdeaCardForm {...mockProps} />;
          }}
        </ApolloConsumer>
      </MockedProvider>,
      {
        disableLifecycleMethods: true
      }
    );

    load(wrapper);

    // console.log(wrapper.debug());

    const allIdeas1 = await apolloClient.query({ query: ALL_IDEAS_QUERY });
    console.log(' : -----------------------');
    console.log(' : allIdeas1', allIdeas1.data.ideas);
    console.log(' : -----------------------');

    wrapper.find('textarea').simulate('change', {
      target: { name: 'idea', value: 'mock idea' }
    });

    load(wrapper);

    console.log('state: ', wrapper.find('IdeaCardForm').instance().state);

    wrapper.find('form').simulate('submit');

    load(wrapper);
    // wrapper.update();

    // console.log(wrapper.debug());

    // // const ideaCardForm = wrapper.find('IdeaCardForm').instance();

    const allIdeas2 = await apolloClient.query({ query: ALL_IDEAS_QUERY });
    console.log(' : -----------------------');
    console.log(' : allIdeas2', allIdeas2.data.ideas);
    console.log(' : -----------------------');

    // // expect(wrapper).toMatchSnapshot();
  });
});
