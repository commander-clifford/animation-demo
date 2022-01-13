import React, { Component } from 'react';
import Nav from '../components/nav';
import Section from '../components/section';

class GsapDemo extends Component {

  componentDidMount() {}
  componentWillUnmount() {}

  render() {
    return (
      <article className="pattern-two">

        <Section color="green">
          <h1 className="art__stagger-in">JS (GSAP) Animations</h1>
        </Section>

        <Section color="green">
          <iframe style={{width: '60vw', height: '80vh'}} scrolling="no" title="CSS GRID ANIMATION GSAP" src="https://codepen.io/GreenSock/embed/qBPqGXd?default-tab=result&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
          See the Pen <a href="https://codepen.io/GreenSock/pen/qBPqGXd">
          CSS GRID ANIMATION GSAP</a> by GreenSock (<a href="https://codepen.io/GreenSock">@GreenSock</a>)
          on <a href="https://codepen.io">CodePen</a>.
          </iframe>
        </Section>

        <Section color="green">
          <iframe style={{width: '60vw', height: '80vh'}} scrolling="no" title="Untitled" src="https://codepen.io/GreenSock/embed/VwMLmBw?default-tab=result&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
          See the Pen <a href="https://codepen.io/GreenSock/pen/VwMLmBw">
          Untitled</a> by GreenSock (<a href="https://codepen.io/GreenSock">@GreenSock</a>)
          on <a href="https://codepen.io">CodePen</a>.
          </iframe>
        </Section>
        <Section color="green">
          <iframe style={{width: '60vw', height: '80vh'}} scrolling="no" title="Smooth Scroll with ScrollTrigger Natively" src="https://codepen.io/GreenSock/embed/QWqwVXG?default-tab=result&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
          See the Pen <a href="https://codepen.io/GreenSock/pen/QWqwVXG">
          Smooth Scroll with ScrollTrigger Natively</a> by GreenSock (<a href="https://codepen.io/GreenSock">@GreenSock</a>)
          on <a href="https://codepen.io">CodePen</a>.
          </iframe>
        </Section>
        <Section color="green">
          <h1 className="art__stagger-in">GSAP Hubble ></h1>
        </Section>


        <footer>
          <Nav {...this.props}/>
        </footer>

      </article>
    )
  }
}

export default GsapDemo;
