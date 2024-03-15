import { useState, useEffect } from "react";

export default function QuestionTimer({ timeout, onTimeout }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    console.log("i am in set timeout");
    setTimeout(() => {
      onTimeout();
    }, timeout);
  }, [timeout, onTimeout]);

  useEffect(() => {
    setInterval(() => {
      console.log("iam inside in set interval");
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);
  }, []);

  return <Progress id="question-time" max={timeout} value={remainingTime} />;
}
