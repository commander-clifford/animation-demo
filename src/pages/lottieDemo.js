import React, { Component } from 'react';
import Nav from '../components/nav';
import Section from '../components/section';

class LottieDemo extends Component {

  componentDidMount() {}
  componentWillUnmount() {}

  render() {
    return (
      <article className="component pattern-three">

        <Section>
          <span className="art__stagger-in">Lottie Section 1</span>
        </Section>
        <Section>
          <span>Lottie Section 2</span>
        </Section>
        <Section>
          <span>Lottie Section 3</span>
        </Section>
        <Section>
          <span>Lottie Section 4</span>
        </Section>
        <Section>
          <span>Lottie Section 5</span>
        </Section>

        <footer>
          <Nav {...this.props}/>
        </footer>

      </article>
    )
  }
}

export default LottieDemo;
