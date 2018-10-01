import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import NineToTen from './App';
import Enzyme, {mount, shallow, render} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Modal from 'react-modal';
Enzyme.configure({ adapter: new Adapter() });

describe('NineToTen', () => {
  const state = {
    showModal: false,
    phoneNumber: '',
    name: ''
  }
  // let onClickFunc, form;

  // beforeEach(function() {
  //   onClickFunc = jest.getMockFunction();
  //   form = TestUtils.renderIntoDocument(
  //     <NineToTen onClick={onClickFunc} />
  //   );
  it('renders without crashing', () => {
    const app = shallow(<NineToTen />);
    expect(1).toEqual(1);
  });
});

// test('NineToTen opens modal on click', () => {
//   const modalOpen = shallow(<NineToTen/>)
//   expect(modalOpen.showModal()).toEqual(false);
//   modalOpen.find('button').simulate('change');
//   expect(modalOpen.showModal()).toEqual(true);
// })
// test('Application', () => {
//   let mockFetch = jest.fn();
//   const wrapper = mount(<Appointment fetch={mockFetch}/> );
//   expect(wrapper).toBeDefined();
//   expect(mockFetch).toHaveBeenCalled();
  // expect(mockFetch.mock.calls[0].toEqual(['data']));
  // it('renders without crashing', () => {
  //   const div = document.createElement('div');
  //   ReactDOM.render(<Appointment />, div)
  // })
// });
// let button = TestUtils.findRenderedDOMComponentWithClass(form, 'btn btn-success mr-1');
// TestUtils.Simulate.click(button);
// expect(onClickFunc).toBeCalled()