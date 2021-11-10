import React, { Component } from 'react';
import Nav from '../components/nav';

class CssDemo extends Component {
  componentDidMount() {

  }
  componentWillUnmount() {

  }

  render() {
    return (
      <article className="component container">

        <div className="art__stagger-in art__stagger-out">
          <span>CssDemo</span>
        </div>

        <ul>
          <li className="art__stagger-in art__stagger-out">lorem ipsum</li>
          <li className="art__stagger-in art__stagger-out">lorem ipsum</li>
          <li className="art__stagger-in art__stagger-out">lorem ipsum</li>
        </ul>

        <footer>
          <Nav {...this.props}/>
        </footer>

      </article>
    )
  }
}

export default CssDemo;