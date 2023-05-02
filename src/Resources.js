import Nav from './Nav.js'
import './Resources.css'
import YouTube from 'react-youtube';

function Resources() {
  return (
    <div className="App">
      <Nav />
      <div className="mainDiv">
        <main>
          <h2><span className="pink">Resource</span>s</h2>
          <div className="videoDiv">
            <p>Videos</p>
            <YouTube videoId="OD6zgzd2NQc" />
            <br/>
            <YouTube videoId="6mg4kfjp_qU" />
          </div>
        </main>
      </div>
    </div>
  );
}

export default Resources;
