import "./SeasonDisplay.css";
import React from "react";

const seasonConfig = {
  summer: {
    textToDisplay: "Hot!",
    iconName: "sun"
  },
  winter: {
    textToDisplay: "Cold!",
    iconName: "snowflake"
  }
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { iconName, textToDisplay } = seasonConfig[season];
  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`} />
      <h1>{textToDisplay}</h1>
    </div>
  );
};

export default SeasonDisplay;
