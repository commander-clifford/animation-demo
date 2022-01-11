import React, { Component } from 'react';
import Nav from '../components/nav';
import Section from '../components/section';

class CssDemo extends Component {

  componentDidMount() {}
  componentWillUnmount() {}

  render() {
    return (
      <article className="pattern-one">

        <Section color="red">
          <span className="art__stagger-in">CSS Section 1</span>
        </Section>
        <Section color="red">
          <span>CSS Section 2</span>
        </Section>
        <Section color="red">
          <span>CSS Section 3</span>
        </Section>
        <Section color="red">
          <span>CSS Section 4</span>
        </Section>
        <Section color="red">
          <span>CSS Section 5</span>
        </Section>

        <footer>
          <Nav {...this.props}/>
        </footer>

      </article>
    )
  }
}

export default CssDemo;
