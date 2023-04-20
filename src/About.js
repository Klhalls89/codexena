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
            <p>My name is Kristen. I began my software journey in 2019 after
            graduating the Turing School of Software & Design. Turing's
            Front-End Engineering certification was so challanging and life
            changing. Previous I had done graphic design and customer
            service. I decided I wanted something more challenging with more
            career options.
            </p>
            <p>
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}

export default About;
