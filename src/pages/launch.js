import React, { Component } from 'react';
import Nav from '../components/nav';
import Section from '../components/section';
import './launch.scss';
import { gsap } from 'gsap';
import { Physics2DPlugin } from "gsap/Physics2DPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

class Launch extends Component {

  gsapHeart(){
    var heart = document.getElementById("js-heart");
    let timeline = gsap.timeline({
      scrollTrigger:{
        trigger: ".heart-section",
        start: "center bottom",
        end: "center top",
        markers: true
      },
      repeat: -1,
      yoyo: false,
      defaults: {
        duration: 0.1,
        ease: "none",
      }
    })
    .to(heart,{ scale:1 })
    .to(heart,{ scale:1.2, delay: 0.4 })
    .to(heart,{ scale:1 })
    .to(heart,{ scale:1.2 })
    .to(heart,{ scale:1 })
    .to(heart,{ scale:1.2, delay: 0.8 })
    .to(heart,{ scale:1 })
    ;
    return timeline;
  }

  gsapPartyBalls(){
    /*
    * See https://greensock.com/gsap/ for details about GSAP.
    */

    let dots = [],
    	bg = document.querySelector("#featureBackground"),
    	i, dot;

    // create 80 dot elements and put them in an array
    for (i = 0; i < 360; i++) {
    	dot = document.createElement("div");
    	dot.setAttribute("class", "dot");
    	bg.appendChild(dot);
    	dots.push(dot);
    }

    //set the initial position of all the dots, and pick a random color for each from an array of colors
    gsap.set(dots, {
    	backgroundColor: "random([#5B16BD,#28a92b,#e77614,#122cb3,#b31232])",
      scale: "random(0.4, 1)",
      autoAlpha: 0,
    	x:0,
    	y:0
    });

    let timeline = gsap.timeline({
      repeat: -1,
      yoyo: false
    });

    // create the physics2D animation
    timeline.to(dots, {
      duration: 1,
      autoAlpha: 1
    });
    timeline.to(dots, {
      duration: 5,
      autoAlpha: 1,
      physics2D: {
        velocity: "random(200, 750)",
        angle: "random(250, 290)",
        gravity: 900
      },
      delay: "random(0, 5)"
    });
    return timeline;
  }

  componentDidMount() {

    gsap.registerPlugin(Physics2DPlugin);
    gsap.registerPlugin(ScrollTrigger);

    this.gsapHeart();

    this.gsapPartyBalls();

  }

  componentWillUnmount() {}

  render() {
    return (
      <article className="component pattern-three">

        <Section color="red">
          <p className="art__stagger">Why I love </p>
          <h1 className="hero art__stagger-in">Web Animations</h1>
          <p className="art__stagger">a web demo by Clifford Nelson</p>
        </Section>

        <Section color="purple">
          <h2 className="hero d-flex flex-row justify-content-center align-items-center art__stagger-in">
            I <span className="heart heart--animated my-5"></span> CSS Animations
          </h2>
          <div>

            <div className="code-block mt-5">
              <pre>
                <code>{"animation: 2s linear 0s normal none infinite heartBeat"}</code>
                <code>{"@keyframes heartBeat{"}</code>
                <code>{"  0%   { transform: scale("}<b>1</b>{") }"}</code>
                <code>{"  7%   { transform: scale("}<b>1.2</b>{") }"}</code>
                <code>{"  14%  { transform: scale("}<b>1</b>{") }"}</code>
                <code>{"  40%  { transform: scale("}<b>1</b>{") }"}</code>
                <code>{"  47%  { transform: scale("}<b>1.2</b>{") }"}</code>
                <code>{"  55%  { transform: scale("}<b>1</b>{") }"}</code>
                <code>{"  62%  { transform: scale("}<b>1.2</b>{") }"}</code>
                <code>{"  69%  { transform: scale("}<b>1</b>{") }"}</code>
                <code>{"  100% { transform: scale("}<b>1</b>{") }"}</code>
                <code>{"}"}</code>
              </pre>
            </div>

            <a className="mt-5 d-block" href="https://codepen.io/commander-clifford/pen/wckxp" target="_blank">Heart Beat on CodePen.io</a>

          </div>
        </Section>

        <Section color="purple">
          <div>
            <p className="mb-5"><b>CSS</b> animations directly change an element's style properties right from the <b>cascading style sheet</b> (CSS).</p>

          </div>

          <div className="d-flex align-item-center">
            <div className="mx-5" id="bounce-ball"></div>

            <div className="code-block my-5 mx-2">
              <pre>
                <code>{"animation-timing-function: cubic-bezier(0.5, 0.05, 1, 0.88)"}</code>
                <code>{"@keyframes bounce {"}</code>
                <code>{"  0% {   transform: translateY(0) }"}</code>
                <code>{"  100% { transform: translateY(200px) }"}</code>
                <code>{"}"}</code>
              </pre>
            </div>
            <div className="code-block my-5 mx-2">
              <pre>
                <code>{"@keyframes colorRotate {"}</code>
                <code>{"  0% { background: GREEN; }"}</code>
                <code>{"  20% { background: BLUE; }"}</code>
                <code>{"  40% { background: WHITE; }"}</code>
                <code>{"  60% { background: LIME; }"}</code>
                <code>{"  80% { background: TEAL; }"}</code>
                <code>{"}"}</code>

              </pre>
            </div>

          </div>

          <div>
            <a className="mt-5 d-block" href="https://codepen.io/commander-clifford/pen/zmaMPv" target="_blank">Bouncy Ball on CodePen.io</a>
          </div>

        </Section>

        <Section color="purple">


              <h3 className="">CSS Animations are:</h3>
              <div className="code-block">
                <ul>
                  <li>Light-Weight</li>
                  <li>~Easy~ to code</li>
                  <li>Good for 'simple' interations</li>
                  <li>Great for loading indications</li>
                  <li>Difficult to time</li>
                  <li>Difficult to add dynamic variables</li>
                </ul>
              </div>



        </Section>

        <Section classy="heart-section" color="green">
          <h2 className="hero d-flex flex-row justify-content-center align-items-center art__stagger-in">
            I <span id="js-heart" className="heart my-5"></span> JS Animations
          </h2>
        </Section>

        <Section color="green">
          <div id="featureBackground"></div>
          <p className="mb-5">JavaScript (<b>JS</b>) animations also manipulate element styles. However, unlike css animations, JS animations add dynamic capabilities.</p>
        </Section>





        <footer>
          <Nav {...this.props}/>
        </footer>

      </article>
    )
  }
}

export default Launch;
