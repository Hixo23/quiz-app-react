import { useState } from "react";
import data from "../../data/questions.json";

const Card = () => {
  const [currentyQuestion, serCurrentlyQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const questions = data.sort(() => 0.5 - Math.random());

  const changeCurrentlyQuestion = (isCorrect: boolean) => {
    const nextQuestion = currentyQuestion + 1;
    if (isCorrect) {
      setScore(score + 1);
    }

    if (nextQuestion < questions.length) {
      serCurrentlyQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }

    return;
  };

  return (
    <div className="w-[42rem] h-96 relative bg-slate-700 rounded-lg flex justify-between">
      {showScore ? (
       <div className="flex justify-center items-center w-full">
         <h1 className="text-4xl text-center text-white p-4">Your score is {score}</h1>
       </div>
      ) : (
        <>
          <div className="flex flex-col w-full h-full justify-center items-center">
            <h1 className="text-2xl text-center text-white ">
              {questions[currentyQuestion].questionText}
            </h1>
            <h2 className="text-white text-xl mt-4">
              Question {currentyQuestion + 1}/{questions.length}
            </h2>
          </div>
          <div className="flex flex-col justify-evenly">
            {questions[currentyQuestion].answerOptions.map((answer) => (
              <button
                key={answer.answerText}
                onClick={() => changeCurrentlyQuestion(answer.isCorrect)}
                className="h-12 w-64 text-white mr-4 rounded-xl mt-2 flex justify-center items-center hover:bg-slate-500 cursor-pointer bg-slate-600"
              >
                {answer.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
