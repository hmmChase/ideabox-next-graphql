import React from 'react';
import { shallow } from 'enzyme';
import IdeaCard from '../../components/IdeaCard/IdeaCard';

describe('IdeaCard', () => {
  let mockProps;
  let ideaCard;

  beforeEach(() => {
    mockProps = { id: '1', idea: 'mock idea' };
    ideaCard = shallow(<IdeaCard {...mockProps} />);
  });

  it('matches snapshot', () => {
    expect(ideaCard).toMatchSnapshot();
  });
});
