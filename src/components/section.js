import React, { Component } from 'react';
import './section.scss';
class Nav extends Component {

  componentDidMount() {}
  componentWillUnmount() {}

  render() {
    return (
      <section className={this.props.classy + ' ' + this.props.color+'-bg section'}>
        <div className={ 'section__container container-fluid' }>
          {this.props.children}
        </div>
      </section>
    )
  }
}
export default Nav;
