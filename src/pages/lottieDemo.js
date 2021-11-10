import React, { Component } from 'react';
import Nav from '../components/nav';

class LottieDemo extends Component {
  componentDidMount() {}
  componentWillUnmount() {}
  render() {
    return (
      <div className="component container" id="css-container">
        <div className="art__stagger-in art__stagger-out">
          <span>LottieDemo</span>
        </div>
        <footer>
          <Nav {...this.props}/>
        </footer>
      </div>
    )
  }
}

export default LottieDemo;
