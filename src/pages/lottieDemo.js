import React, { Component, useState, memo, useRef, useEffect } from 'react';
import Nav from '../components/nav';
import Section from '../components/section';
import Lottie from 'react-lottie-player'
import lottieCar from "./lottieCar.json";
import lottieBicycle from "./lottieBicycle.json";
import lottieLab from "./lottieLab.json";
import lottieStory from "./lottieStory.json";
import lottieFullStack from "./lottieFullStack.json";

/**
  *  Lottie ScrollyBicycle
  *
  */
const ScrollyBicycle = memo(() => {
  const scrollRef = useRef();
  const [animationPosition, setAnimationPosition] = useState(0);

  useEffect(() => {
    function handleScroll(e) {
      setAnimationPosition(Math.max((0, e.target.scrollTop - 50) * 0.4));
    }
    const scroller = scrollRef.current
    scroller.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      scroller.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={scrollRef} style={{ height: 800, overflowY: 'scroll' }}>
      <Lottie
        animationData={lottieBicycle}
        goTo={animationPosition}
        style={{ width: 400, height: 800, alignSelf: 'center', marginTop: 200, marginBottom: 600 }}
      />
    </div>
  )
});

class LottieDemo extends Component {

  componentDidMount() {}
  componentWillUnmount() {}

  render() {
    return (
      <article className="component pattern-three">

        <Section color="blue">
          <h1 className="hero art__stagger-in">Lottie Animations</h1>
        </Section>

        <Section color="blue">
            <Lottie
              animationData={lottieBicycle}
              play
              style={{ width: 600, height: 600 }}
            />
        </Section>

        <Section color="blue">
            <Lottie
              animationData={lottieLab}
              play
              style={{ width: 600, height: 600 }}
            />
        </Section>

        <Section color="blue">
            <Lottie
              animationData={lottieStory}
              play
              style={{ width: 600, height: 600 }}
            />
        </Section>

        <Section color="blue">
            <Lottie
              animationData={lottieFullStack}
              play
              style={{ width: 600, height: 600 }}
            />
            <p>
              next time...
              <br/>
              Lottie animations with scroll pin trigger
            </p>
        </Section>

      </article>
    )
  }
}

export default LottieDemo;
