import "../index.css";

const Poll = ({ question, choices, ...props }) => {
  return (
    <div className="poll" {...props}>
      <div>{question}</div>
      <div>
        {choices.map((choice) => (
          <div>
            <input type="radio" value={choice} />
            <label>{choice}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Poll;
