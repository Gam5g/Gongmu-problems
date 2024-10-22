import React from "react";
import Chapter from "./Chapter";

const Chapter1 = () => (
  <Chapter
    questions={[
      { year: 2007, number: 11 },
      { year: 2007, number: 16 },
      { year: 2007, number: 17 },
      { year: 2008, number: 16 },
      { year: 2009, number: 11 },
      { year: 2009, number: 12 },
      { year: 2010, number: 11 },
      { year: 2010, number: 12 },
      { year: 2010, number: 17 },
      { year: 2011, number: 2 }, //10
      { year: 2012, number: 1 },
      { year: 2012, number: 19 },
      { year: 2013, number: 2 },
      { year: 2013, number: 14 },
      { year: 2014, number: 3 },
      { year: 2015, number: 11 },
      { year: 2015, number: 12 },
      { year: 2016, number: 2 },
      { year: 2016, number: 8 },
      { year: 2016, number: 13 }, //20
      { year: 2017, number: 1 },
      { year: 2017, number: 13 },
      { year: 2018, number: 15 },
      { year: 2019, number: 14 },
      { year: 2019, number: 15 },
      { year: 2019, number: 16 },
      { year: 2020, number: 10 },
      { year: 2020, number: 19 },
      { year: 2021, number: 1 },
      { year: 2021, number: 2 }, //30
      { year: 2021, number: 8 },
      { year: 2021, number: 13 },
      { year: 2022, number: 3 },
      { year: 2022, number: 13 },
      { year: 2022, number: 14 },
      { year: 2023, number: 1 },
      { year: 2023, number: 6 },
      { year: 2023, number: 9 },
      { year: 2015, number: 4 },
      { year: 2018, number: 5 }, //40
    ]}
    correctAnswers={{
      question1: [4],
      question2: [1],
      question3: [4],
      question4: [3],
      question5: [4],
      question6: [1],
      question7: [2],
      question8: [1],
      question9: [4],
      question10: [4],
      question11: [4],
      question12: [4],
      question13: [2],
      question14: [4], //2013년 14번
      question15: [2],
      question16: [4],
      question17: [2],
      question18: [1],
      question19: [3],
      question20: [2],
      question21: [3],
      question22: [3],
      question23: [4],
      question24: [3],
      question25: [2],
      question26: [2],
      question27: [3],
      question28: [1],
      question29: [4], // 2021년 1번
      question30: [2],
      question31: [1],
      question32: [1],
      question33: [1],
      question34: [3],
      question35: [1],
      question36: [1],
      question37: [3],
      question38: [4],
      question39: [4],
      question40: [2],
    }}
    title="1장 공무원 문제"
  />
);

export default Chapter1;
