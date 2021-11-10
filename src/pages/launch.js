import React, { Component } from 'react';
import Nav from '../components/nav';

class Launch extends Component {
  componentDidMount() {}
  componentWillUnmount() {}
  render() {
    return (
      <div className="component container" id="launch-container">

        <div className="art__stagger-in art__stagger-out">
          <span>Launch</span>
        </div>

        <footer>
          <Nav {...this.props}/>
        </footer>

      </div>
    )
  }
}

export default Launch;
