import React, { Component } from 'react';
import './nav.scss';
class Nav extends Component {

  componentDidMount() {
    const options = document.getElementsByClassName('options');
    for (const option of options) {
      // console.log('option',option);
      option.addEventListener('click',() => {
        this.navTo(option);
      });
    }
  }
  componentWillUnmount() {}

  navTo = (node) => {
    // console.log('node',node);
    const {history} = this.props;
    history.push(node.id);
  }

  render() {
    return (
      <nav className="nav art__stagger-out">
        <span id="/" className="options">Home</span>
        <span id="/css-demo" className="options">CSS</span>
        <span id="/gsap-demo" className="options">JS(GSAP)</span>
        <span id="/lottie-demo" className="options">LottieJS</span>
      </nav>
    )
  }
}
export default Nav;
