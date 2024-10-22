import React from "react";

const RadioGroup = ({
  questionKey,
  options,
  userInputs,
  handleRadioChange,
}) => {
  return (
    <div
      style={{
        marginBottom: "20px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      {options.map((option, i) => (
        <label key={i} style={{ display: "flex", alignItems: "center" }}>
          <input
            type="radio"
            name={questionKey}
            value={i + 1}
            checked={userInputs[questionKey] === i + 1}
            onChange={(e) => handleRadioChange(e, questionKey)}
            style={{ marginRight: "5px" }}
          />
          {option}
        </label>
      ))}
    </div>
  );
};

export default RadioGroup;
