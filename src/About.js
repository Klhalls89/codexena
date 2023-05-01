import Nav from './Nav.js'
import './About.css'
import profile from './assets/profile.jpg'

function About() {
  return (
    <div className="App">
      <Nav />
      <div className="mainDiv">
        <main>
          <h2><span className="pink">About M</span>e</h2>
          <div className="pDiv">
            <img src={profile}/>
            <p> My name is Kristen. I began my software journey in 2019 after graduating from the Turing School of Software & Design. Turing's Front-End Engineering certification was so challenging and life-changing. Previously I had done graphic design and customer service. I decided I wanted something challenging with more career options.
            </p>
            <br/>
            <p> I was a more traditional software Engineering in my first role at Fixd Repair. While I was considered full stack I did work more front-end with JS frameworks like React, Vue, and Angular.
I loved building apps and web pages. I learned a lot about new frameworks and how to work on a professional engineering team. I got to help hire four other Turing grads after I started and it was an amazing well-rounded team. We also used Amazon Web Services for our repo and CI. Our testing was with Jasmine for unit tests and Cypress for end-to-end testing. Angi’s list sold off the company in 2021. I’m still close with that team.
            </p>
            <br/>
            <p> After I was laid off from Fixd I wanted to switch gears a little and focus more on the problem-solving aspect of coding. I became a solutions engineer for Solvvy, a third-party AI chatbot company. I worked with individual clients to solve chatbot bugs, customize our product or design new features. Our product worked so well we were acquired by Zoom in 2022.
            </p>
            <br/>
            <p> At Zoom my role was called PSO (project services org) software engineer. Our team was divided up and I became the sole US support engineer. I also help QA and teach the new version of Solvvy that Zoom was building. In 2023 Zoom laid off 15% of its workforce including me. Now I am looking for my next big adventure in software.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}

export default About;
