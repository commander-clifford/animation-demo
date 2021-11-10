import React, { Component } from 'react';
import Nav from '../components/nav';

class LottieDemo extends Component {
  componentDidMount() {}
  componentWillUnmount() {}
  render() {
    return (
      <article className="component container">

        <div className="art__stagger-in art__stagger-out">
          <span>LottieDemo</span>
        </div>

        <footer>
          <Nav {...this.props}/>
        </footer>

      </article>
    )
  }
}

export default LottieDemo;
