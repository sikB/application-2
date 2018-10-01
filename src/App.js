import React, {Component} from 'react';
import Modal from 'react-modal';

export class NineToTen extends Component {
    constructor(props) {
      super(props);
      this.state = {
        showModal: false,
        phoneNumber: '',
        name: ''
      }
      this.handleModal = this.handleModal.bind(this);
      this.handleNameChange = this.handleNameChange.bind(this);
      this.handlePhoneChange = this.handlePhoneChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.closeModal = this.closeModal.bind(this);
    }
  
    handleModal = () => {
      this.setState({ showModal: true });
    }
  
    handleSubmit = (event) => {
      event.preventDefault();
      this.setState({showModal: false});
    }
  
    handleNameChange = (e) => {
      this.setState({name: e.target.value});
    }
  
    handlePhoneChange = (e) => {
      this.setState({phoneNumber: e.target.value});
    }

    closeModal = () => {
      this.setState({showModal: false});
    }
  
    render() {
      return(
        <div className="mb-1">
          <button onClick={this.handleModal} name="nineToTen" type="button" className={(this.state.name !=='' && this.state.phoneNumber !== '') ?"btn btn-danger mr-1" : "btn btn-success mr-1"}>9am-10am</button>
          <Modal isOpen={this.state.showModal}>
            <form onSubmit={this.handleSubmit.bind(this)}>
              <label>Name:
                <input name="name" type="text" value={this.state.name} onChange={this.handleNameChange} />
              </label>
              <label>Phone Number:
                <input name="phone" type="tel" placeholder="123-123-1234" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" value={this.state.phoneNumber} onChange={this.handlePhoneChange} />
              </label>
              <input type="submit" value="Submit"/>
            </form>
            <button className="close-button" onClick={this.closeModal}>Close</button>
          </Modal>
      </div>
      );
    }
  }
export default NineToTen;

export class TenToEleven extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      phoneNumber: '',
      name: ''
    }
    this.handleModal = this.handleModal.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  handleModal = () => {
    this.setState({ showModal: true });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({showModal: false});
  }

  handleNameChange = (e) => {
    this.setState({name: e.target.value});
  }

  handlePhoneChange = (e) => {
    this.setState({phoneNumber: e.target.value});
  }

  closeModal = () => {
    this.setState({showModal: false});
  }

  render() {
    return(
      <div className="mb-1">
        <button onClick={this.handleModal} name="tenToEleven" type="button" className={(this.state.name !=='' && this.state.phoneNumber !== '') ?"btn btn-danger mr-1" : "btn btn-success mr-1"}>10am-11am</button>
        <Modal isOpen={this.state.showModal}>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <label>Name:
              <input name="name" type="text" value={this.state.name} onChange={this.handleNameChange} />
            </label>
            <label>Phone Number:
              <input name="phone" type="tel" placeholder="123-123-1234" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" value={this.state.phoneNumber} onChange={this.handlePhoneChange} />
            </label>
            <input type="submit" value="Submit"/>
          </form>
          <button className="close-button" onClick={this.closeModal}>Close</button>
        </Modal>
    </div>
    );
  }
}
  
export class ElevenToTwelve extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      phoneNumber: '',
      name: ''
    }
    this.handleModal = this.handleModal.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  handleModal = () => {
    this.setState({ showModal: true });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({showModal: false});
  }

  handleNameChange = (e) => {
    this.setState({name: e.target.value});
  }

  handlePhoneChange = (e) => {
    this.setState({phoneNumber: e.target.value});
  }

  closeModal = () => {
    this.setState({showModal: false});
  }

  render() {
    return(
      <div className="mb-1">
        <button onClick={this.handleModal} name="elevenToTwelve" type="button" className={(this.state.name !=='' && this.state.phoneNumber !== '') ?"btn btn-danger mr-1" : "btn btn-success mr-1"}>11am-12pm</button>
        <Modal isOpen={this.state.showModal}>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <label>Name:
              <input name="name" type="text" value={this.state.name} onChange={this.handleNameChange} />
            </label>
            <label>Phone Number:
              <input name="phone" type="tel" placeholder="123-123-1234" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" value={this.state.phoneNumber} onChange={this.handlePhoneChange} />
            </label>
            <input type="submit" value="Submit"/>
          </form>
          <button className="close-button" onClick={this.closeModal}>Close</button>
        </Modal>
    </div>
    );
  }
}
  
export class TwelveToOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      phoneNumber: '',
      name: ''
    }
    this.handleModal = this.handleModal.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  handleModal = () => {
    this.setState({ showModal: true });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({showModal: false});
  }

  handleNameChange = (e) => {
    this.setState({name: e.target.value});
  }

  handlePhoneChange = (e) => {
    this.setState({phoneNumber: e.target.value});
  }

  closeModal = () => {
    this.setState({showModal: false});
  }

  render() {
    return(
      <div className="mb-1">
        <button onClick={this.handleModal} name="twelveToOne" type="button" className={(this.state.name !=='' && this.state.phoneNumber !== '') ?"btn btn-danger mr-1" : "btn btn-success mr-1"}>12pm-1pm</button>
        <Modal isOpen={this.state.showModal}>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <label>Name:
              <input name="name" type="text" value={this.state.name} onChange={this.handleNameChange} />
            </label>
            <label>Phone Number:
              <input name="phone" type="tel" placeholder="123-123-1234" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" value={this.state.phoneNumber} onChange={this.handlePhoneChange} />
            </label>
            <input type="submit" value="Submit"/>
          </form>
          <button className="close-button" onClick={this.closeModal}>Close</button>
        </Modal>
    </div>
    );
  }
}

export class OneToTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      phoneNumber: '',
      name: ''
    }
    this.handleModal = this.handleModal.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  handleModal = () => {
    this.setState({ showModal: true });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({showModal: false});
  }

  handleNameChange = (e) => {
    this.setState({name: e.target.value});
  }

  handlePhoneChange = (e) => {
    this.setState({phoneNumber: e.target.value});
  }

  closeModal = () => {
    this.setState({showModal: false});
  }

  render() {
    return(
      <div className="mb-1">
        <button onClick={this.handleModal} name="oneToTwo" type="button" className={(this.state.name !=='' && this.state.phoneNumber !== '') ?"btn btn-danger mr-1" : "btn btn-success mr-1"}>1pm-2pm</button>
        <Modal isOpen={this.state.showModal}>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <label>Name:
              <input name="name" type="text" value={this.state.name} onChange={this.handleNameChange} />
            </label>
            <label>Phone Number:
              <input name="phone" type="tel" placeholder="123-123-1234" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" value={this.state.phoneNumber} onChange={this.handlePhoneChange} />
            </label>
            <input type="submit" value="Submit"/>
          </form>
          <button className="close-button" onClick={this.closeModal}>Close</button>
        </Modal>
    </div>
    );
  }
}

export class TwoToThree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      phoneNumber: '',
      name: ''
    }
    this.handleModal = this.handleModal.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  handleModal = () => {
    this.setState({ showModal: true });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({showModal: false});
  }

  handleNameChange = (e) => {
    this.setState({name: e.target.value});
  }

  handlePhoneChange = (e) => {
    this.setState({phoneNumber: e.target.value});
  }

  closeModal = () => {
    this.setState({showModal: false});
  }

  render() {
    return(
      <div className="mb-1">
        <button onClick={this.handleModal} name="twoToThree" type="button" className={(this.state.name !=='' && this.state.phoneNumber !== '') ?"btn btn-danger mr-1" : "btn btn-success mr-1"}>2pm-3pm</button>
        <Modal isOpen={this.state.showModal}>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <label>Name:
              <input name="name" type="text" value={this.state.name} onChange={this.handleNameChange} />
            </label>
            <label>Phone Number:
              <input name="phone" type="tel" placeholder="123-123-1234" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" value={this.state.phoneNumber} onChange={this.handlePhoneChange} />
            </label>
            <input type="submit" value="Submit"/>
          </form>
          <button className="close-button" onClick={this.closeModal}>Close</button>
        </Modal>
    </div>
    );
  }
}

export class ThreeToFour extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      phoneNumber: '',
      name: ''
    }
    this.handleModal = this.handleModal.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  handleModal = () => {
    this.setState({ showModal: true });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({showModal: false});
  }

  handleNameChange = (e) => {
    this.setState({name: e.target.value});
  }

  handlePhoneChange = (e) => {
    this.setState({phoneNumber: e.target.value});
  }

  closeModal = () => {
    this.setState({showModal: false});
  }

  render() {
    return(
      <div className="mb-1">
        <button onClick={this.handleModal} name="threeToFour" type="button" className={(this.state.name !=='' && this.state.phoneNumber !== '') ?"btn btn-danger mr-1" : "btn btn-success mr-1"}>3pm-4pm</button>
        <Modal isOpen={this.state.showModal}>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <label>Name:
              <input name="name" type="text" value={this.state.name} onChange={this.handleNameChange} />
            </label>
            <label>Phone Number:
              <input name="phone" type="tel" placeholder="123-123-1234" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" value={this.state.phoneNumber} onChange={this.handlePhoneChange} />
            </label>
            <input type="submit" value="Submit"/>
          </form>
          <button className="close-button" onClick={this.closeModal}>Close</button>
        </Modal>
    </div>
    );
  }
}

export class FourToFive extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      phoneNumber: '',
      name: ''
    }
    this.handleModal = this.handleModal.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  handleModal = () => {
    this.setState({ showModal: true });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({showModal: false});
  }

  handleNameChange = (e) => {
    this.setState({name: e.target.value});
  }

  handlePhoneChange = (e) => {
    this.setState({phoneNumber: e.target.value});
  }

  closeModal = () => {
    this.setState({showModal: false});
  }

  render() {
    return(
      <div className="mb-1">
        <button onClick={this.handleModal} name="fourToFive" type="button" className={(this.state.name !=='' && this.state.phoneNumber !== '') ?"btn btn-danger mr-1" : "btn btn-success mr-1"}>4pm-5pm</button>
        <Modal isOpen={this.state.showModal}>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <label>Name:
              <input name="name" type="text" value={this.state.name} onChange={this.handleNameChange} />
            </label>
            <label>Phone Number:
              <input name="phone" type="tel" placeholder="123-123-1234" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" value={this.state.phoneNumber} onChange={this.handlePhoneChange} />
            </label>
            <input type="submit" value="Submit"/>
          </form>
          <button className="close-button" onClick={this.closeModal}>Close</button>
        </Modal>
    </div>
    );
  }
}
