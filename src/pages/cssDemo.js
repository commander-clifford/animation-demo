import React, { Component } from 'react';
import Nav from '../components/nav';
import Section from '../components/section';

class CssDemo extends Component {

  componentDidMount() {}
  componentWillUnmount() {}

  render() {
    return (
      <article className="pattern-one">

        <Section color="purple">
          <h1 className="art__stagger-in">CSS Animations</h1>
        </Section>

        <Section color="purple">
          <p>Hover Transitions</p>
          <iframe style={{width: '60vw', height: '80vh'}} scrolling="no" title="Hover Cards" src="https://codepen.io/commander-clifford/embed/XWWzEQz?default-tab=result&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
            See the Pen <a href="https://codepen.io/commander-clifford/pen/XWWzEQz">
            Hover Cards</a> by Clifford Ryan Nelson (<a href="https://codepen.io/commander-clifford">@commander-clifford</a>)
            on <a href="https://codepen.io">CodePen</a>.
          </iframe>
        </Section>

        <Section color="purple">
          <p>Loading Indicators</p>
          <iframe style={{width: '930px', height: '210px'}} scrolling="no" title="CSS Animated Indicators" src="https://codepen.io/commander-clifford/embed/yJKRJz?default-tab=result&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
          See the Pen <a href="https://codepen.io/commander-clifford/pen/yJKRJz">
          CSS Animated Indicators</a> by Clifford Ryan Nelson (<a href="https://codepen.io/commander-clifford">@commander-clifford</a>)
          on <a href="https://codepen.io">CodePen</a>.
          </iframe>
        </Section>

        <Section color="purple">
          <iframe style={{width: '560px', height: '470px'}} scrolling="no" title="Neon Sign with Border" src="https://codepen.io/silvia-odwyer/embed/RwKMOpb?default-tab=result&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
          See the Pen <a href="https://codepen.io/silvia-odwyer/pen/RwKMOpb">
          Neon Sign with Border</a> by Silvia O'Dwyer (<a href="https://codepen.io/silvia-odwyer">@silvia-odwyer</a>)
          on <a href="https://codepen.io">CodePen</a>.
          </iframe>
        </Section>

        <Section color="purple">
          <iframe style={{width: '60vw', height: '80vh'}} scrolling="no" title="Gradient fun" src="https://codepen.io/kevinpowell/embed/EqQyRQ?default-tab=result&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
          See the Pen <a href="https://codepen.io/kevinpowell/pen/EqQyRQ">
          Gradient fun</a> by Kevin (<a href="https://codepen.io/kevinpowell">@kevinpowell</a>)
          on <a href="https://codepen.io">CodePen</a>.
          </iframe>
        </Section>

        <footer>
          <Nav {...this.props}/>
        </footer>

      </article>
    )
  }
}

export default CssDemo;
