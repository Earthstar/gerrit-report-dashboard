import React from 'react';
import ReactDOM from 'react-dom';

// Webpack will find this file in src/helper_module.js
import { PersonComponent } from 'helper_module';

// Use React JSX syntax:
ReactDOM.render(
  <PersonComponent myName={"Bob"} myAge={32.5} />,
  document.getElementById('exampleDiv')
);
