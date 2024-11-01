import React from "react";
import Chapter from "./Chapter";

const Chapter7 = () => (
  <Chapter
    questions={[
      { year: 2007, number: 7 },
      { year: 2008, number: 5 },
      { year: 2008, number: 29 },
      { year: 2009, number: 13 },
      { year: 2010, number: 14 },
      { year: 2010, number: 16 },
      { year: 2011, number: 5 },
      { year: 2012, number: 4 },
      { year: 2012, number: 13 },
      { year: 2013, number: 4 },
      { year: 2014, number: 4 },
      { year: 2014, number: 11 },
      { year: 2015, number: 13 },
      { year: 2017, number: 7 },
      { year: 2019, number: 7 },
      { year: 2019, number: 9 },
      { year: 2019, number: 19 },
      { year: 2020, number: 16 },
      { year: 2021, number: 23 },
    ]}
    correctAnswers={{
      question1: [3],
      question2: [1],
      question3: [3],
      question4: [2],
      question5: [3],
      question6: [2],
      question7: [1],
      question8: [2],
      question9: [3],
      question10: [2],
      question11: [4],
      question12: [1],
      question13: [2],
      question14: [1],
      question15: [2],
      question16: [2],
      question17: [4],
      question18: [1],
      question19: [2],
    }}
    title="7장 공무원 문제"
  />
);

export default Chapter7;
