import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { OptimizelyProvider, createInstance } from '@optimizely/react-sdk'
import App from './App';

// Instantiate an Optimizely client
const optimizelyClientInstance = createInstance({
  datafile: window.optimizelyDatafile,
  sdkKey: 'SrY3ooZtRbTP4hHzR8ppV'
})

console.log(optimizelyClientInstance)

ReactDOM.render(
  <React.StrictMode>
    <OptimizelyProvider
      	optimizely={optimizelyClientInstance}
  			user={{id: 'simon_cordova'}}>
        <App />
        <h1>simon_cordova</h1>
      </OptimizelyProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
