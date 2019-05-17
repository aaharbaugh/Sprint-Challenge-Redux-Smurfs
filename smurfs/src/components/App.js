import React, { Component } from 'react';
import './App.css';
import { connect} from 'react-redux';
import  { fetchSmurf, addSmurf } from '../actions/index';



class App extends Component {
  state = {
    newSmurf: {
      name: '',
      height: '',
      age: ''
    }
  };

  componentDidMount() {
    this.props.fetchSmurf()
  }

  handleChange = e => {
    this.setState({
      newSmurf: {
        ...this.state.newSmurf,
        [e.target.name]: e.target.value
      }
    });
  };

  addSmurf = e => {
    e.preventDefault();
    this.props.addSmurf(this.state.newSmurf)
  }

  render() {
    return (
      <div className="App">
        <h1>These are the smurfs</h1>
        {this.props.smurfs.map(smurf => 
          <div key={smurf.id} className="singleSmurf">
            <h5>{smurf.name}</h5>
            <p>Age: {smurf.age}</p>
            <p>Height: {smurf.height}</p>
          </div>
        )}
        <div className="smurForm">
          <form onSubmit={this.addSmurf}>
            Name: <input
              type="text"
              name="name"
              value={this.state.newSmurf.name}
              onChange={this.handleChange}
            /><br />
            Age: <input
              type="text"
              name="age"
              value={this.state.newSmurf.age}
              onChange={this.handleChange}
            /><br />
            Height: <input
              type="text"
              name="height"
              value={this.state.newSmurf.height}
              onChange={this.handleChange}
            /><br />
          <button>Add Smurf</button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfs
});

export default connect(
  mapStateToProps,
  { fetchSmurf, addSmurf }
)(App);
