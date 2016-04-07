import React from 'react';
import ReactDOM from 'react-dom';

import { AverageReviewTimeReport } from 'averageReviewTimeReport';

// Use React JSX syntax:
ReactDOM.render(
  <div>
    <h1>Gerrit Facts</h1>
    <AverageReviewTimeReport averageHours="36" />
  </div>
  ,
  document.getElementById('app')
);
