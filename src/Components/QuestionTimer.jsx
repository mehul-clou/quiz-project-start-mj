import { useState, useEffect } from "react";

export default function QuestionTimer({ timeout, onTimeout }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    console.log(" set timeout useEffect");
    const out = setTimeout(() => {
      //console.log("calling on timeout method");
      onTimeout();
    }, timeout);

    return () => {
      //console.log("clear timeout");
      clearTimeout(out);
    };
  }, [timeout, onTimeout]);

  useEffect(() => {
    console.log("setinterval useeffect");
    const interval = setInterval(() => {
      //console.log("iam inside in set interval");
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);

    return () => {
      //console.log("clear setinterval");
      clearInterval(interval);
    };
  }, []);

  return <progress id="question-time" max={timeout} value={remainingTime} />;
}
