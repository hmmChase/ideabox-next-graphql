import React from 'react';
import { shallow } from 'enzyme';
import IdeaCardForm from '../../components/IdeaCardForm/IdeaCardForm';

describe('IdeaCardForm', () => {
  let mockProps;
  let ideaCardForm;

  beforeEach(() => {
    mockProps = {};
    ideaCardForm = shallow(<IdeaCardForm {...mockProps} />);
  });

  it('matches snapshot', () => {
    expect(ideaCardForm).toMatchSnapshot();
  });
});
