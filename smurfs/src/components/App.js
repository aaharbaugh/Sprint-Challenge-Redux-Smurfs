import React, { Component } from 'react';
import './App.css';
import { connect} from 'react-redux';
import  { fetchSmurf, addSmurf, deleteSmurf, updateSmurf } from '../actions/index';

class App extends Component {
  state = {
    updatingSmurf: false,
    smurfId: '',
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
    if(this.state.updatingSmurf === true){
      console.log('hi')
      this.props.updateSmurf(this.state.smurfId, this.state.newSmurf).then(() => {
        this.props.fetchSmurf()
      })
      .catch(err => {
        console.log(err)
      })
    } else {
      this.props.addSmurf(this.state.newSmurf)
    }
    this.clearForm();
    
  }

  deleteSmurf = smurfId => {
    this.props.deleteSmurf(smurfId)
  }

  updateSmurf = smurf => {
    this.setState({
      smurfId: smurf.id,
      updatingSmurf: true,
      newSmurf: {
        name: smurf.name,
        height: smurf.height,
        age: smurf.age
      }
    })
  }

  clearForm() {
    this.setState({
      updatingSmurf: false,
      smurfId: '',
      newSmurf: {
        name: '',
        height: '',
        age: ''
      }
    })
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
            <button onClick={() => this.deleteSmurf(smurf.id)}>Delete</button>
            <button onClick={() => this.updateSmurf(smurf)}>Update</button>
          </div>
        )}
        <div className="smurfForm">
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
          <button>{this.state.updatingSmurf ? 'Update Smurf': 'Add Smurf'}</button>
          <button onClick={() => this.clearForm}>Clear</button>
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
  { fetchSmurf, addSmurf, deleteSmurf, updateSmurf}
)(App);
