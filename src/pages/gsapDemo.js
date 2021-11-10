import React, { Component } from 'react';
import Nav from '../components/nav';

class GsapDemo extends Component {
  componentDidMount() {

  }
  componentWillUnmount() {

  }

  onClick = node => {
    this.props.history.push('/css');
  }

  render() {
    return (
      <div className="component container" id="css-container">
        <div className="art__stagger-in art__stagger-out">
          <span>GsapDemo</span>
        </div>
        <footer>
          <Nav {...this.props}/>
        </footer>
      </div>
    )
  }
}

export default GsapDemo;
