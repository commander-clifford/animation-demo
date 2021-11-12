import React, { Component } from 'react';
import Nav from '../components/nav';
import Section from '../components/section';

class GsapDemo extends Component {
  
  componentDidMount() {}
  componentWillUnmount() {}

  render() {
    return (
      <article className="pattern-two">

        <Section>
          <span className="art__stagger-in">GSAP Section 1</span>
        </Section>
        <Section>
          <span>GSAP Section 2</span>
        </Section>
        <Section>
          <span>GSAP Section 3</span>
        </Section>
        <Section>
          <span>GSAP Section 4</span>
        </Section>
        <Section>
          <span>GSAP Section 5</span>
        </Section>

        <footer>
          <Nav {...this.props}/>
        </footer>

      </article>
    )
  }
}

export default GsapDemo;
