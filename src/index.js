import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { NineToTen, TenToEleven, ElevenToTwelve, TwelveToOne, OneToTwo, TwoToThree, ThreeToFour, FourToFive } from './App';
import Modal from 'react-modal';
import './App.css';

class Appointment extends Component {
  componentWillMount() {
    Modal.setAppElement('body');
  }
  render() {
    return (
      <div className="App mt-5">
        <NineToTen />
        <TenToEleven />
        <ElevenToTwelve />
        <TwelveToOne />
        <OneToTwo />
        <TwoToThree />
        <ThreeToFour />
        <FourToFive />
      </div>
    );
  }
}

ReactDOM.render(<Appointment />, document.getElementById('root'));
registerServiceWorker();
