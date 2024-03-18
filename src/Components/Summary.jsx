import quizCompletedImg from "../assets/quiz-complete.png";
import QUESTION from "../questions";

export default function Summary({ userAnswer }) {
  const skippedAnswer = userAnswer.filter((answer) => answer === null);
  const correctAnswer = userAnswer.filter(
    (answer, index) => answer === QUESTION[index].answers[0],
  );

  const skippedAnswerShare = Math.round(
    (skippedAnswer.length / userAnswer.length) * 100,
  );

  const correctAnswerShare = Math.round(
    (correctAnswer.length / userAnswer.length) * 100,
  );

  const wrongAnswerShared = 100 - skippedAnswerShare - correctAnswerShare;

  return (
    <div id="summary">
      <img src={quizCompletedImg} alt="Trophy..." />
      <h2>Quiz Completed</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skippedAnswerShare}%</span>
          <span className="text">Skipped</span>
        </p>
        <p>
          <span className="number">{correctAnswerShare}%</span>
          <span className="text">answered correctly</span>
        </p>
        <p>
          <span className="number">{wrongAnswerShared}%</span>
          <span className="text">incorrectly answered</span>
        </p>
      </div>
      <ol>
        {userAnswer.map((answer, index) => {
          let cssClasses = "user-answer";

          if (answer === null) {
            cssClasses += " skipped";
          } else if (answer === QUESTION[index].answers[0]) {
            cssClasses += " correct";
          } else {
            cssClasses += " wrong";
          }

          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{QUESTION[index].text}</p>
              <p className={cssClasses}>{answer ?? "skipped"}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
