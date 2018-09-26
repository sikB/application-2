import {shallow} from 'enzyme';

test('NineToTen opens modal on click', () => {
  const modalOpen = shallow(<NineToTen/>)
  expect(modalOpen.showModal()).toEqual(false);
  modalOpen.find('button').simulate('change');
  expect(modalOpen.showModal()).toEqual(true);
})

// it('renders without crashing', () => {
//   const div = document.createElement('div');
// });

// describe('NineToTen', () => {
//   let onClickFunc, form;

//   beforeEach(function() {
//     onClickFunc = jest.getMockFunction();
//     form = TestUtils.renderIntoDocument(
//       <NineToTen onClick={onClickFunc} />
//     );
//   });
//   it('opens modal', () => {
//     let button = TestUtils.findRenderedDOMComponentWithClass(form, 'btn btn-success mr-1');
//     TestUtils.Simulate.click(button);
//     expect(onClickFunc).toBeCalled()
//   });

// });
