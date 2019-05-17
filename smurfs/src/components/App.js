import React, { Component } from 'react';
import './App.css';
import { connect} from 'react-redux';
import  { fetchSmurf } from '../actions/index';



class App extends Component {

  fetchSmurf = () => {
    this.props.fetchSmurf()
  }

  render() {
    return (
      <div className="App">
        <h1>These are the smurfs</h1>
        {this.props.smurfs.map(smurf => {
          <div key={smurf.id}>
            <h5>{smurf.name}</h5>
            <p>Age: {smurf.age}</p>
            <p>Height: {smurf.height}</p>
          </div>
        })}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfs
});

export default connect(
  mapStateToProps,
  { fetchSmurf }
)(App);
