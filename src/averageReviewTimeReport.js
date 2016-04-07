import React from 'react';

// "Pure Function" way of declaring React classes. Useful if don't need to store state
const AverageReviewTimeReport = (props) =>
<div className="report-container">
  <h2>Average Review Time</h2>
  <span className="large-report">{props.averageHours} hours</span>
</div>;

module.exports = AverageReviewTimeReport;