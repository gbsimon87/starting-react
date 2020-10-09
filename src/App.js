import React from 'react';
import {
  OptimizelyFeature,
  OptimizelyExperiment,
  OptimizelyVariation,
  withOptimizely,
} from '@optimizely/react-sdk'

class Button extends React.Component {
  onClick = () => {
    const { optimizely } = this.props
    optimizely.track('purchased')
  }

  render() {
    return (
      <button onClick={this.onClick}>
        Purchase
      </button>
    )
  }
}


const PurchaseButton = withOptimizely(Button)

function App() {
  return (
    <div className="App">
      <OptimizelyFeature feature="discount">
        {(isEnabled, variables) => {
          console.log(isEnabled);
          console.log(variables);
          return (
            isEnabled
            ? `Price filter enabled with a min price of ${variables.amount}`
            : `Price filter is NOT enabled`
          )}
        }
        {/* <PurchaseButton /> */}
      </OptimizelyFeature>
      <OptimizelyExperiment experiment="coloors">
        <OptimizelyVariation variation="control">
          <h1>Old Site</h1>
          <PurchaseButton />
        </OptimizelyVariation>

        <OptimizelyVariation variation="treatment">
          <h1>Redesigned Site</h1>
          <PurchaseButton />
        </OptimizelyVariation>
      </OptimizelyExperiment>
    </div>
  );
}

export default App;
