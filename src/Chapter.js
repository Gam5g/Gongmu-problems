import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import RadioGroup from "./RadioGroup";
import "./Chapter.css";

const WAIT_TIME_SECONDS = 40;
const WAIT_TIME_MS = WAIT_TIME_SECONDS * 1000;

const Chapter = ({ questions, correctAnswers, title }) => {
  const [userInputs, setUserInputs] = useState(
    Array.from({ length: questions.length }, (_, i) => ({
      [`question${i + 1}`]: null,
    })).reduce((acc, cur) => ({ ...acc, ...cur }), {})
  );
  const [incorrectAnswers, setIncorrectAnswers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(false);
  const [countdown, setCountdown] = useState(WAIT_TIME_SECONDS);
  const navigate = useNavigate();

  const navigateToHomePage = () => {
    navigate("/");
  };

  useEffect(() => {
    const storedSubmitTime = localStorage.getItem("submitTime");
    if (storedSubmitTime) {
      const currentTime = new Date().getTime();
      const timePassed = currentTime - parseInt(storedSubmitTime, 10);

      if (timePassed < WAIT_TIME_MS) {
        const remainingTime = WAIT_TIME_SECONDS - Math.floor(timePassed / 1000);
        setCountdown(remainingTime);
        setIsSubmitDisabled(true);

        const interval = setInterval(() => {
          setCountdown((prev) => {
            if (prev <= 1) {
              clearInterval(interval);
              setIsSubmitDisabled(false);
              localStorage.removeItem("submitTime");
              return WAIT_TIME_SECONDS;
            }
            return prev - 1;
          });
        }, 1000);
      } else {
        localStorage.removeItem("submitTime");
      }
    }
  }, []);

  const handleRadioChange = (e, questionKey) => {
    const selectedValue = parseInt(e.target.value, 10);
    setUserInputs({ ...userInputs, [questionKey]: selectedValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const wrongAnswers = [];

    questions.forEach((q, i) => {
      const questionKey = `question${i + 1}`;
      if (userInputs[questionKey] !== correctAnswers[questionKey][0]) {
        wrongAnswers.push(`${q.year}년도 ${q.number}번 문제`);
      }
    });

    setIncorrectAnswers(wrongAnswers);
    setIsModalOpen(true);
  };

  const handleClear = () => {
    setUserInputs(
      Array.from({ length: questions.length }, (_, i) => ({
        [`question${i + 1}`]: null,
      })).reduce((acc, cur) => ({ ...acc, ...cur }), {})
    );
    setIncorrectAnswers([]);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsSubmitDisabled(true);
    const submitTime = new Date().getTime();
    localStorage.setItem("submitTime", submitTime);
    setCountdown(WAIT_TIME_SECONDS);

    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setIsSubmitDisabled(false);
          localStorage.removeItem("submitTime");
          return WAIT_TIME_SECONDS;
        }
        return prev - 1;
      });
    }, 1000);
  };

  return (
    <div>
      <h1>{title}</h1>
      <h4>무분별한 채점 사용을 막기 위해 채점 버튼은 40초간 비활성화됩니다.</h4>
      <h4>보내드린 파일의 문제 번호대로 답을 기입해주세요.</h4>
      <h4>파일에서 답안이 표기된 문제는 넣지 않았습니다.</h4>
      <h4>
        문제에 대한 풀이 또는 답안 오류와 같은 기타 문의사항은 개인카톡으로
        해주세요.
      </h4>

      <form onSubmit={handleSubmit} className="form-container">
        {questions.map((q, i) => (
          <div key={i}>
            <h2>{`${q.year}년도 ${q.number}번 문제`}</h2>
            <RadioGroup
              questionKey={`question${i + 1}`}
              options={["①", "②", "③", "④"]}
              userInputs={userInputs}
              handleRadioChange={handleRadioChange}
            />
          </div>
        ))}

        <button
          type="submit"
          className="class-button"
          disabled={isSubmitDisabled}
        >
          {isSubmitDisabled ? `제출 불가(${countdown}초)` : "채점"}
        </button>
        <button
          type="button"
          className="class-button"
          onClick={handleClear}
          style={{ marginLeft: "10px" }}
        >
          Clear
        </button>
      </form>

      <button
        type="button"
        className="class-button"
        onClick={navigateToHomePage}
        style={{ width: "20%" }}
      >
        돌아가기
      </button>
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>틀린 문제들</h2>
            {incorrectAnswers.length > 0 ? (
              <ul>
                {incorrectAnswers.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            ) : (
              <p>없습니다!</p>
            )}
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chapter;
