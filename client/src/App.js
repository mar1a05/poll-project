import './App.css';
import Navbar from './components/Navbar';
import Poll from './components/Poll';

const polls = [
  {
    question: "Ce animal se afla pe tricourile departamentului de IT?",
    choices: ['Un elefant', 'O testoasa', 'Un lenes', 'Un caine']
  },
  {
    question: "Ce animal se afla pe tricourile departamentului de IT?",
    choices: ['Un elefant', 'O testoasa', 'Un lenes', 'Un caine']
  },
  {
    question: "Ce animal se afla pe tricourile departamentului de IT?",
    choices: ['Un elefant', 'O testoasa', 'Un lenes', 'Un caine']
  },
  {
    question: "Ce animal se afla pe tricourile departamentului de IT?",
    choices: ['Un elefant', 'O testoasa', 'Un lenes', 'Un caine']
  },
];

function App() {
  return (
    <div className="App">
      <Navbar />
      {
        polls.map(poll => (
          <Poll question={poll.question} choices={poll.choices} />
        ))
      }
    </div>
  );
}

export default App;
