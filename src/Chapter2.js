import React from "react";
import Chapter from "./Chapter";

const Chapter2 = () => (
  <Chapter
    questions={[
      { year: 2007, number: 12 },
      { year: 2007, number: 13 },
      { year: 2008, number: 11 },
      { year: 2009, number: 14 },
      { year: 2009, number: 15 },
      { year: 2010, number: 13 },
      { year: 2010, number: 15 },
      { year: 2011, number: 11 },
      { year: 2012, number: 1 },
      { year: 2012, number: 18 }, //10
      { year: 2013, number: 3 },
      { year: 2014, number: 7 },
      { year: 2014, number: 8 },
      { year: 2015, number: 14 },
      { year: 2015, number: 15 },
      { year: 2016, number: 1 },
      { year: 2016, number: 3 },
      { year: 2016, number: 17 },
      { year: 2017, number: 17 },
      { year: 2018, number: 13 }, //20
      { year: 2018, number: 18 },
      { year: 2020, number: 9 },
      { year: 2020, number: 11 },
      { year: 2020, number: 18 },
      { year: 2021, number: 10 },
      { year: 2021, number: 11 },
      { year: 2021, number: 14 },
      { year: 2022, number: 25 },
      { year: 2023, number: 15 },
      { year: 2022, number: 9 }, //30
    ]}
    correctAnswers={{
      question1: [3],
      question2: [4],
      question3: [4],
      question4: [3],
      question5: [1],
      question6: [4],
      question7: [2],
      question8: [4],
      question9: [1],
      question10: [3],
      question11: [2],
      question12: [4],
      question13: [4],
      question14: [2], //2015년 14번
      question15: [3],
      question16: [3],
      question17: [4],
      question18: [2],
      question19: [2], //2017년 17번
      question20: [4],
      question21: [3],
      question22: [1], //2020년 9번
      question23: [4],
      question24: [2],
      question25: [3],
      question26: [4],
      question27: [3],
      question28: [1],
      question29: [3], // 2023년 15번
      question30: [3],
    }}
    title="2장 공무원 문제"
  />
);

export default Chapter2;
