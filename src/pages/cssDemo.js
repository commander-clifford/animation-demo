import React, { Component } from 'react';
import Nav from '../components/nav';

class CssDemo extends Component {
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
          <span>CssDemo</span>
        </div>

        <footer>
          <Nav {...this.props}/>
        </footer>
      </div>
    )
  }
}

export default CssDemo;
