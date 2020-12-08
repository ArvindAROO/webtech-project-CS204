import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className = "App">
        <img src={logo} className="App-logo" alt="logo" />
        <br></br>
        
        <a
          className="Author1"
          href="https:github.com/ArvindAROO"
        >
            Arvind Krishna - PES1UG19CS090
        </a>
        <br></br>
        <a
          className="Author2"
          href="https:github.com/sach-12"
          
        >
            Sachin Shankar - PES1UG19CS102
        </a>
        <br></br>
        <a
          className="Author3"
          href="https:github.com/anuragisfree"
          
        >
            Anurag Khanra - PES1UG19CS072
        </a>
        <br></br>
        <a
          className="Author4"
          href="https:github.com/aranyabhalla"
          
        >
            Aranya Bhalla - PES1UG19CS081
        </a>
    </div>
  );
}

export default App;
