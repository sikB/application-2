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
    }
  
    handleModal = () => {
      this.setState({ showModal: !this.state.showModal });
    }
  
    handleSubmit = (event) => {
      event.preventDefault();
      this.setState({showModal: false});
    }
  
    handleNameChange = (value) => {
      this.setState({name: value});
    }
  
    handlePhoneChange = (e) => {
      this.setState({phoneNumber: e.target.value});
    }
  
    render() {
      return(
        <button onClick={this.handleModal} name="nineToTen" type="button" className={(this.state.name !=='' && this.state.phoneNumber !== '') ?"btn btn-danger mr-1" : "btn btn-success mr-1"}>9am-10am
          <Modal isOpen={this.state.showModal}>
            <form onSubmit={this.handleSubmit.bind(this)}>
              <label>Name:
                <input name="name" type="text" value={this.state.name} onChange={e => this.handleNameChange(e.target.value)} />
              </label>
              <label>Phone Number:
                <input name="phone" type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" value={this.state.phoneNumber} onChange={this.handlePhoneChange} />
              </label>
              <input type="submit" value="Submit"/>
            </form>
            <button onClick={this.handleModal}>Close</button>
          </Modal>
      </button>
      );
    }
  }

export default NineToTen;

export class TenToEleven extends React.Component {
constructor(props) {
    super(props);
    this.state = {
    showModal: false,
    phoneNumber: '',
    name: ''
    }
}

    handleModal = () => {
      this.setState({ showModal: !this.state.showModal });
    }

handleSubmit = (event) => {
    event.preventDefault();
    this.setState({showModal: false});
}

handleNameChange = (value) => {
    this.setState({name: value});
}

handlePhoneChange = (e) => {
    this.setState({phoneNumber: e.target.value});
}

render() {
    return(
    <button onClick={this.handleModal} name="tenToEleven" type="button" className={(this.state.name !=='' && this.state.phoneNumber !== '') ?"btn btn-danger mr-1" : "btn btn-success mr-1"}>10am-11am
        <Modal isOpen={this.state.showModal}>
        <form onSubmit={this.handleSubmit.bind(this)}>
            <label>Name:
            <input name="name" type="text" value={this.state.name} onChange={e => this.handleNameChange(e.target.value)} />
            </label>
            <label>Phone Number:
            <input name="phone" type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" value={this.state.phoneNumber} onChange={this.handlePhoneChange} />
            </label>
            <input type="submit" value="Submit"/>
        </form>
        <button onClick={this.handleModal}>Close</button>
        </Modal>
    </button>
    );
}
}
  
export class ElevenToTwelve extends React.Component {
constructor(props) {
    super(props);
    this.state = {
    showModal: false,
    phoneNumber: '',
    name: ''
    }
}

    handleModal = () => {
      this.setState({ showModal: !this.state.showModal });
    }

handleSubmit = (event) => {
    event.preventDefault();
    this.setState({showModal: false});
}

handleNameChange = (value) => {
    this.setState({name: value});
}

handlePhoneChange = (e) => {
    this.setState({phoneNumber: e.target.value});
}

render() {
    return(
    <button onClick={this.handleModal} name="elevenToTwelve" type="button" className={(this.state.name !=='' && this.state.phoneNumber !== '') ?"btn btn-danger mr-1" : "btn btn-success mr-1"}>11am-12pm
        <Modal isOpen={this.state.showModal}>
        <form onSubmit={this.handleSubmit.bind(this)}>
            <label>Name:
            <input name="name" type="text" value={this.state.name} onChange={e => this.handleNameChange(e.target.value)} />
            </label>
            <label>Phone Number:
            <input name="phone" type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" value={this.state.phoneNumber} onChange={this.handlePhoneChange} />
            </label>
            <input type="submit" value="Submit"/>
        </form>
        <button onClick={this.handleModal}>Close</button>
        </Modal>
    </button>
    );
}
}
  
export class TwelveToOne extends React.Component {
constructor(props) {
    super(props);
    this.state = {
    showModal: false,
    phoneNumber: '',
    name: ''
    }
}

    handleModal = () => {
      this.setState({ showModal: !this.state.showModal });
    }

handleSubmit = (event) => {
    event.preventDefault();
    this.setState({showModal: false});
}

handleNameChange = (value) => {
    this.setState({name: value});
}

handlePhoneChange = (e) => {
    this.setState({phoneNumber: e.target.value});
}

render() {
    return(
    <button onClick={this.handleModal} name="twelveToOne" type="button" className={(this.state.name !=='' && this.state.phoneNumber !== '') ?"btn btn-danger mr-1" : "btn btn-success mr-1"}>12pm-1pm
        <Modal isOpen={this.state.showModal}>
        <form onSubmit={this.handleSubmit.bind(this)}>
            <label>Name:
            <input name="name" type="text" value={this.state.name} onChange={e => this.handleNameChange(e.target.value)} />
            </label>
            <label>Phone Number:
            <input name="phone" type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" value={this.state.phoneNumber} onChange={this.handlePhoneChange} />
            </label>
            <input type="submit" value="Submit"/>
        </form>
        <button onClick={this.handleModal}>Close</button>
        </Modal>
    </button>
    );
}
}

export class OneToTwo extends React.Component {
constructor(props) {
    super(props);
    this.state = {
    showModal: false,
    phoneNumber: '',
    name: ''
    }
}

    handleModal = () => {
      this.setState({ showModal: !this.state.showModal });
    }

handleSubmit = (event) => {
    event.preventDefault();
    this.setState({showModal: false});
}

handleNameChange = (value) => {
    this.setState({name: value});
}

handlePhoneChange = (e) => {
    this.setState({phoneNumber: e.target.value});
}

render() {
    return(
    <button onClick={this.handleModal} name="oneToTwo" type="button" className={(this.state.name !=='' && this.state.phoneNumber !== '') ?"btn btn-danger mr-1" : "btn btn-success mr-1"}>1pm-2pm
        <Modal isOpen={this.state.showModal}>
        <form onSubmit={this.handleSubmit.bind(this)}>
            <label>Name:
            <input name="name" type="text" value={this.state.name} onChange={e => this.handleNameChange(e.target.value)} />
            </label>
            <label>Phone Number:
            <input name="phone" type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" value={this.state.phoneNumber} onChange={this.handlePhoneChange} />
            </label>
            <input type="submit" value="Submit"/>
        </form>
        <button onClick={this.handleModal}>Close</button>
        </Modal>
    </button>
    );
}
}

export class TwoToThree extends React.Component {
constructor(props) {
    super(props);
    this.state = {
    showModal: false,
    phoneNumber: '',
    name: ''
    }
}

    handleModal = () => {
      this.setState({ showModal: !this.state.showModal });
    }

handleSubmit = (event) => {
    event.preventDefault();
    this.setState({showModal: false});
}

handleNameChange = (value) => {
    this.setState({name: value});
}

handlePhoneChange = (e) => {
    this.setState({phoneNumber: e.target.value});
}

render() {
    return(
    <button onClick={this.handleModal} name="twoToThree" type="button" className={(this.state.name !=='' && this.state.phoneNumber !== '') ?"btn btn-danger mr-1" : "btn btn-success mr-1"}>2pm-3pm
        <Modal isOpen={this.state.showModal}>
        <form onSubmit={this.handleSubmit.bind(this)}>
            <label>Name:
            <input name="name" type="text" value={this.state.name} onChange={e => this.handleNameChange(e.target.value)} />
            </label>
            <label>Phone Number:
            <input name="phone" type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" value={this.state.phoneNumber} onChange={this.handlePhoneChange} />
            </label>
            <input type="submit" value="Submit"/>
        </form>
        <button onClick={this.handleModal}>Close</button>
        </Modal>
    </button>
    );
}
}

export class ThreeToFour extends React.Component {
constructor(props) {
    super(props);
    this.state = {
    showModal: false,
    phoneNumber: '',
    name: ''
    }
}

    handleModal = () => {
      this.setState({ showModal: !this.state.showModal });
    }

handleSubmit = (event) => {
    event.preventDefault();
    this.setState({showModal: false});
}

handleNameChange = (value) => {
    this.setState({name: value});
}

handlePhoneChange = (e) => {
    this.setState({phoneNumber: e.target.value});
}

render() {
    return(
    <button onClick={this.handleModal} name="threeToFour" type="button" className={(this.state.name !=='' && this.state.phoneNumber !== '') ?"btn btn-danger mr-1" : "btn btn-success mr-1"}>3pm-4pm
        <Modal isOpen={this.state.showModal}>
        <form onSubmit={this.handleSubmit.bind(this)}>
            <label>Name:
            <input name="name" type="text" value={this.state.name} onChange={e => this.handleNameChange(e.target.value)} />
            </label>
            <label>Phone Number:
            <input name="phone" type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" value={this.state.phoneNumber} onChange={this.handlePhoneChange} />
            </label>
            <input type="submit" value="Submit"/>
        </form>
        <button onClick={this.handleModal}>Close</button>
        </Modal>
    </button>
    );
}
}

export class FourToFive extends React.Component {
constructor(props) {
    super(props);
    this.state = {
    showModal: false,
    phoneNumber: '',
    name: ''
    }
}

    handleModal = () => {
      this.setState({ showModal: !this.state.showModal });
    }

handleSubmit = (event) => {
    event.preventDefault();
    this.setState({showModal: false});
}

handleNameChange = (value) => {
    this.setState({name: value});
}

handlePhoneChange = (e) => {
    this.setState({phoneNumber: e.target.value});
}

render() {
    return(
    <button onClick={this.handleModal} name="fourToFive" type="button" className={(this.state.name !=='' && this.state.phoneNumber !== '') ?"btn btn-danger mr-1" : "btn btn-success mr-1"}>4pm-5pm
        <Modal isOpen={this.state.showModal}>
        <form onSubmit={this.handleSubmit.bind(this)}>
            <label>Name:
            <input name="name" type="text" value={this.state.name} onChange={e => this.handleNameChange(e.target.value)} />
            </label>
            <label>Phone Number:
            <input name="phone" type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" value={this.state.phoneNumber} onChange={this.handlePhoneChange} />
            </label>
            <input type="submit" value="Submit"/>
        </form>
        <button onClick={this.handleModal}>Close</button>
        </Modal>
    </button>
    );
}
}