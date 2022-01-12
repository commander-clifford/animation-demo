import React, { Component } from 'react';
import Nav from '../components/nav';
import Section from '../components/section';
import Code from '../components/code';
import './launch.scss';
import { gsap } from 'gsap';
import { Physics2DPlugin } from "gsap/Physics2DPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

ScrollTrigger.defaults({
  toggleActions: "restart pause resume pause",
  scroller: ".component",
  // markers: true
});

class Launch extends Component {

  gsapHeart(){
    var heartSection = document.getElementById("heart-section");
    var heart = document.getElementById("js-heart");
    let timeline = gsap.timeline({
      scrollTrigger:{
        trigger: heartSection,
      },
      repeat: -1,
      yoyo: false,
      defaults: {
        ease: "ease",
        duration: 0.2,
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
    let ballsTimeline = gsap.timeline({
      scrollTrigger: ".js-balls-section"
    })
    .to(dots, { // create the physics2D animation
      duration: 1,
      autoAlpha: 1
    })
    .to(dots, {
      duration: 5,
      autoAlpha: 1,
      physics2D: {
        velocity: "random(200, 750)",
        angle: "random(250, 290)",
        gravity: 900
      },
      delay: "random(0, 5)"
    });
    return ballsTimeline;
  }

  // GSAP hover list
  gsapList(){
    const jsListSection = document.getElementById("js-list-section");
    // const ul = document.querySelector("ul.gsap-list");
    const lis = document.querySelectorAll("ul.gsap-list li");
    // const liArray = Array.from(lis);

    // console.log('ul',ul);
    // console.log('lis',lis);
    // console.log('lis.length',lis.length);

    let duration = 1;
    let stagger = 3;
    let reducedOpacity = 0.4;
    let increasedScale = 1.1;
    let overlap = lis.length*(stagger-duration)+(stagger-duration);

    let timeline = gsap.timeline({
      scrollTrigger:{
        trigger: jsListSection,
      },
      delay: 1,
      // repeatDelay: 4,
      // repeat: -1,
      yoyo: false,
      defaults: {
        ease: "ease",
        duration: duration,
      }
    })
    .fromTo(lis,{
      opacity: reducedOpacity,
      scale: 1
    },{
      opacity: 1,
      scale: increasedScale,
      stagger: stagger
    })
    .to(lis,{
      opacity: reducedOpacity,
      scale: 1,
      stagger: stagger
    },"-="+overlap)
    .to(lis,{
      opacity: 1,
      scale: increasedScale,
    })

  }


  componentDidMount() {

    gsap.registerPlugin(Physics2DPlugin);
    gsap.registerPlugin(ScrollTrigger);

    this.gsapHeart();

    this.gsapPartyBalls();

    this.gsapList();

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
          <h2 className="hero d-flex flex-row justify-content-center align-items-center">
            I <span className="heart heart--animated my-5"></span> CSS Animations
          </h2>
          <div>
            <Code>
                {"animation: 2s linear 0s normal none infinite heartBeat"}
                {" "}
                {"@keyframes heartBeat{"}
                {"  0%   { transform: scale(1) }"}
                {"  7%   { transform: scale(1.2) }"}
                {"  14%  { transform: scale(1) }"}
                {"  40%  { transform: scale(1) }"}
                {"  47%  { transform: scale(1.2) }"}
                {"  55%  { transform: scale(1) }"}
                {"  62%  { transform: scale(1.2) }"}
                {"  69%  { transform: scale(1) }"}
                {"  100% { transform: scale(1) }"}
                {"}"}
            </Code>
            <a className="mt-5 d-block" href="https://codepen.io/commander-clifford/pen/wckxp" target="_blank">Heart Beat on CodePen.io</a>
          </div>
        </Section>

        <Section color="purple">
          <div>
            <p className="mb-5"><b>CSS</b> animations directly change an element's style properties right from the <b>cascading style sheet</b> (CSS).</p>
          </div>
          <div className="d-flex align-item-center">
            <div className="mx-5" id="bounce-ball"></div>
            <Code className="my-5 mx-2">
              {"animation-timing-function: cubic-bezier(0.5, 0.05, 1, 0.88)"}
              {" "}
              {"@keyframes bounce {"}
              {"  0% {   transform: translateY(0) }"}
              {"  100% { transform: translateY(200px) }"}
              {"}"}
              {" "}
              {"@keyframes colorRotate {"}
              {"  0% { background: GREEN; }"}
              {"  20% { background: BLUE; }"}
              {"  40% { background: WHITE; }"}
              {"  60% { background: LIME; }"}
              {"  80% { background: TEAL; }"}
              {"}"}
            </Code>

          </div>
          <div>
            <a className="mt-5 d-block" href="https://codepen.io/commander-clifford/pen/zmaMPv" target="_blank">Bouncy Ball on CodePen.io</a>
          </div>
        </Section>

        <Section color="purple">
          <h3 className="mb-5">CSS Animations are:</h3>
          <div className="info-block info-block--padded css-list">
            <ul>
              <li>Light-Weight</li>
              <li><i>Easy</i> to code</li>
              <li>Good for 'simple' interations</li>
              <li>Great for loading indications</li>
              <li>Quick load time</li>
              <li>Difficult to time</li>
              <li>Difficult to add dynamic attributes</li>
            </ul>
          </div>
          <Code>
            {"ul, ul li { transition: all 0.2s ease-in-out 0.05s; cursor: grab; }"}
            {"ul:hover { transform: scale(1.1); }"}
            {"ul:hover li { transform: translateX(1em); opacity: 0.6; }"}
            {"ul li:hover { transform: translateX(0); opacity: 1; }"}
          </Code>
        </Section>

        <Section id="heart-section" color="green">
          <div>
            <h2 className="hero d-flex flex-row justify-content-center align-items-center">
              I <span id="js-heart" className="heart my-5"></span> JS Animations
            </h2>
          </div>
          <Code>
            {'let timeline = gsap.timeline({'}
            {'  scrollTrigger:{'}
            {'    trigger: heartSection,'}
            {'  },'}
            {'  repeat: -1,'}
            {'  yoyo: false,'}
            {'  defaults: {'}
            {'    ease: "ease",'}
            {'    duration: 0.2,'}
            {'  }'}
            {'})'}
            {'.to(heart,{ scale:1 })'}
            {'.to(heart,{ scale:1.2, delay: 0.4 })'}
            {'.to(heart,{ scale:1 })'}
            {'.to(heart,{ scale:1.2 })'}
            {'.to(heart,{ scale:1 })'}
            {'.to(heart,{ scale:1.2, delay: 0.8 })'}
            {'.to(heart,{ scale:1 })'}
            {';'}
            {'return timeline;'}
          </Code>
        </Section>

        <Section classy="js-balls-section" color="green">
          <div id="featureBackground"></div>
          <p className="mb-5">JavaScript (<b>JS</b>) animations also manipulate element styles. However, unlike css animations, JS animations add dynamic capabilities.</p>
          <Code>
            {'gsap.set(dots, {'}
            {'  backgroundColor: "random([#5B16BD,#28a92b,#e77614,#122cb3,#b31232])",'}
            {'  scale: "random(0.4, 1)",'}
            {'  autoAlpha: 0,'}
            {'  ...'}
            {''}
            {'.to(dots, {'}
            {'  duration: 5,'}
            {'  autoAlpha: 1,'}
            {'  physics2D: {'}
            {'    velocity: "random(200, 750)",'}
            {'    angle: "random(250, 290)",'}
            {'    gravity: 900'}
            {'  },'}
            {'  delay: "random(0, 5)"'}
            });
          </Code>
        </Section>

        <Section id="js-list-section" color="green">
          <h3 className="mb-5">JS Animations are:</h3>
          <div className="info-block info-block--padded">
            <ul className="gsap-list">
              <li>easiest when used with a Library, such as GSAP</li>
              <li>Great for 'complex' animations</li>
              <li>Great for 'complex' interations</li>
              <li>Good for loading indications</li>
              <li>Easy to time</li>
              <li>Easy to add dynamic attributes</li>
            </ul>
          </div>
          <Code>
            {"ul, ul li { transition: all 0.2s ease-in-out 0.05s; cursor: grab; }"}
            {"ul:hover { transform: scale(1.1); }"}
            {"ul:hover li { transform: translateX(1em); opacity: 0.6; }"}
            {"ul li:hover { transform: translateX(0); opacity: 1; }"}
          </Code>
        </Section>





        <footer>
          <Nav {...this.props}/>
        </footer>

      </article>
    )
  }
}

export default Launch;
