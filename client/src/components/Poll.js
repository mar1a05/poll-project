import "../styles/Poll.css"

const Poll = ({ question, choices }) => {

    return (
        <div className="poll">
            <div>{question}</div>
            <div>
                {
                    choices.map(choice => (
                        <div>
                            <input type="radio" value={choice} />
                            <label>{choice}</label>
                        </div>
                    ))
                }

            </div>
        </div>
    );
}

export default Poll;