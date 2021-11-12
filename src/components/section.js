import React, { Component } from 'react';
import './section.scss';
class Nav extends Component {

  componentDidMount() {}
  componentWillUnmount() {}

  render() {
    return (
      <section className="section">
        <div className="section__container">
          {this.props.children}
        </div>
      </section>
    )
  }
}
export default Nav;
