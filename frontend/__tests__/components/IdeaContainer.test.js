import React from 'react';
import { shallow } from 'enzyme';
import IdeaContainer from '../../components/IdeaContainer/IdeaContainer';

describe('IdeaContainer', () => {
  let mockProps;
  let wrapper;

  beforeEach(() => {
    jest.resetAllMocks();
    mockProps = { children: [] };
    wrapper = shallow(<IdeaContainer {...mockProps} />, {
      disableLifecycleMethods: true
    });
  });

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
