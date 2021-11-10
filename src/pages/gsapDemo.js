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
      <article className="component container">

        <div className="art__stagger-in art__stagger-out">
          <span>GsapDemo</span>
        </div>

        <footer>
          <Nav {...this.props}/>
        </footer>

      </article>
    )
  }
}

export default GsapDemo;
