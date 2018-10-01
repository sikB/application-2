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
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(NineToTen, div)
  });

  describe('when form isnt filled out', () =>{
    let wrapper;
    beforeAll(() => {
      wrapper = mount(<NineToTen {...state}/>);
    });

    it('button should have green color when no number and no name is selected', () => {
      expect(wrapper.find('button.mr-1').props().className).toBe('btn btn-success mr-1');
    })
  });

  describe('when user clicks the appointment button', ()=>{
    Modal.setAppElement('body');

    it('should trigger the modal', () => {
      const handleModal = jest.fn();
      const wrapper = shallow(<NineToTen handleModal={handleModal} />)
      wrapper.setState({showModal: true});
      wrapper.find('button.btn.btn-success.mr-1').simulate('click');
      expect(handleModal).toHaveBeenCalled;

    })
  });
});