import React, { Component } from 'react';
import Nav from '../components/nav';
import Section from '../components/section';

class Launch extends Component {

  componentDidMount() {}
  componentWillUnmount() {}
  
  render() {
    return (
      <article className="component pattern-three">

        <Section>
          <span className="art__stagger-in">Launch Section 1</span>
        </Section>
        <Section>
          <span>Launch Section 2</span>
        </Section>
        <Section>
          <span>Launch Section 3</span>
        </Section>
        <Section>
          <span>Launch Section 4</span>
        </Section>
        <Section>
          <span>Launch Section 5</span>
        </Section>

        <footer>
          <Nav {...this.props}/>
        </footer>

      </article>
    )
  }
}

export default Launch;
