import React, { Component } from 'react';
import './code.scss';
class Code extends Component {

  componentDidMount() {
    console.log("TEST",this.props.children);
    console.log("TEST",this.props.children.length);
  }
  componentWillUnmount() {}

  render() {
    return (
      <div className={'code__container my-5 mx-2 ' + this.props.classy}>
        <span className="code__caption">!!! CODE WARNING !!!</span>
        <pre>
          {this.props.children.map(child => <code>{child}</code>)}
        </pre>
    </div>
    )
  }spot
}
export default Code;
