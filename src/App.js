import './App.css';
import Nav from './Nav.js'
import editing from './assets/editing.JPG'

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="mainDiv">
        <main>
          <h2><span className="pink">Hom</span>e</h2>
          <img className="editingPic" src={editing}/>
          <p> I started Code Xena because I wanted to combine my communication skills and my coding to help others learn about software engineering. I did not think I could engineer but with grit, determination, and my coding bootcamp I made it. If I can learn it so can you. Let me help you on your software journey.
          </p>
          <br/>
          <p>This is me and my cat worf editing.
          </p>
        </main>
      </div>
    </div>
  );
}

export default App;
