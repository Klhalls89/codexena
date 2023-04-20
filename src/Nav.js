import './Nav.css';
import codexena_sword from './assets/codexena_sword.png'

function Nav() {
  return (
    <div className="Nav">
      <header className="App-header">
        <div className="header-logo">
          <h1> =<span className="hilt">l</span>===&gt; <span className="pink">Code X</span>ena </h1>
        </div>
        <nav>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/resources">Resources</a>
        </nav>
      </header>
    </div>
  );
}

export default Nav;
