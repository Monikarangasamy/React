import './App.css';
import { useState } from 'react';
import Start from './components/Start';
import Quiz from './components/Quiz';
import Result from './components/Result';
import { QUIZ_STAGES } from './constants/constant';

const App = () => {
	const [quizStage, setQuizStage] = useState(QUIZ_STAGES.START);
	const [score, setScore] = useState(0);

	return (
		<div>
			{quizStage === QUIZ_STAGES.START ? (
				<Start setQuizStage={setQuizStage} />
			) : quizStage === QUIZ_STAGES.IN_PROGRESS ? (
				<Quiz
					score={score}
					setScore={setScore}
					setQuizStage={setQuizStage}
				/>
			) : (
				<Result
					score={score}
					setScore={setScore}
					setQuizStage={setQuizStage}
				/>
			)}
		</div>
	);
};

export default App;
