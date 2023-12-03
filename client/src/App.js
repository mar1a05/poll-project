import NavigationBar from "./components/NavigationBar";
import Poll from "./components/Poll";

import "./index.css";

const polls = [
  {
    question: "Ce animal se afla pe tricourile departamentului de IT?",
    choices: ["Un elefant", "O testoasa", "Un lenes", "Un caine"],
  },
  {
    question: "Ce animal se afla pe tricourile departamentului de IT?",
    choices: ["Un elefant", "O testoasa", "Un lenes", "Un caine"],
  },
  {
    question: "Ce animal se afla pe tricourile departamentului de IT?",
    choices: ["Un elefant", "O testoasa", "Un lenes", "Un caine"],
  },
  {
    question: "Ce animal se afla pe tricourile departamentului de IT?",
    choices: ["Un elefant", "O testoasa", "Un lenes", "Un caine"],
  },
];

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {polls.map((poll, index) => (
          <Poll key={index} question={poll.question} choices={poll.choices} />
        ))}
      </div>
    </div>
  );
}

export default App;
