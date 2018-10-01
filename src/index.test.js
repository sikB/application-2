import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import NineToTen from './App';
import Enzyme, {mount, shallow, render} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Modal from 'react-modal';
Enzyme.configure({ adapter: new Adapter() });

describe('NineToTen', () => {
  let state = {
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

    it('should have default state if there is no data stored', () => {
      expect(state.showModal).toBe(false);
      expect(state.name).toBe('');
      expect(state.phoneNumber).toBe('');
    })
  });

  describe('toggle modal', ()=>{
    Modal.setAppElement('body');
    const handleModal = jest.fn();
    const wrapper = shallow(<NineToTen handleModal={handleModal} />)

    it('modal should toggle', () => {
      wrapper.find('button.btn.btn-success.mr-1').simulate('click');
      expect(handleModal).toHaveBeenCalled;
    });
  });

  describe('when name and phone is entered', ()=>{
    let wrapper;
    beforeAll(() => {
      wrapper = mount(<NineToTen {...state}/>);
    });

    it('button background should be red', () => {
      wrapper.setState({name: 'test'});
      wrapper.setState({phoneNumber: 123-123-1234});

      expect(wrapper.find('button.mr-1').props().className).toBe('btn btn-danger mr-1');

      expect(wrapper.state.name).not.toBe("");
      expect(wrapper.state.phoneNumber).not.toBe("");
    });
  });
});