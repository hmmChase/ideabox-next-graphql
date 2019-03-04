import React from 'react';
import { shallow } from 'enzyme';
import IdeaContainer from '../../components/IdeaContainer/IdeaContainer';

describe('IdeaContainer', () => {
  let mockProps;
  let ideaContainer;

  beforeEach(() => {
    mockProps = {};
    ideaContainer = shallow(<IdeaContainer {...mockProps} />);
  });

  it('matches snapshot', () => {
    expect(ideaContainer).toMatchSnapshot();
  });
});
