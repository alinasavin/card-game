import { render, shallow } from "@testing-library/react";
// import { shallow } from 'enzyme';

import Deck from './Deck';

// test("getCard funtion called with button click", () => {
//     render(<Deck />);
  
//     // Get the draw card button from an array of all buy buttons.
//     const cardButton = screen.queryAllByText("Draw Card");
  
//     userEvent.click(cardButton);
  
//     expect(getCard).toHaveBeenCalled;
//   });

describe('simple test', () => {
    render(<Deck />);
    it('clicks it', () => {
       const deck = shallow(<Deck />)
       const instance = deck.instance()
       const spy = jest.spyOn(instance, 'onClick')
       instance.forceUpdate();
  
       const button = deck.find('.draw-button')
       button.simulate('click')
       expect(spy).toHaveBeenCalled()
   })
  });