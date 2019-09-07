import React, {Component} from 'react';

class ReadData extends Component {
  state = {
    dataKey: ''
 }
 
 componentDidMount() {
  const AmazingDapp = this.props.drizzle.contracts.AmazingDapp;
  const dataKey = AmazingDapp.methods['checkIfExists'].cacheCall();
  this.setState({dataKey});
 }
 
 render() {
  const {AmazingDapp} = this.props.drizzleState.contracts;
  const {dataKey} = this.state;
  const data = AmazingDapp.checkIfExists[dataKey];
  return (
      <div>
        <h2> getData() </h2>
        <p> {data && data.value}</p>
      </div>
    );
  }
}

export default ReadData;
