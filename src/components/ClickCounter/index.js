import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onCounter = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state

    return (
      <div className="container">
        <h1>
          The Button has been clicked <span>{count}</span> times
        </h1>
        <p>Click the button to increase the count!</p>
        <button className="button" type="button" onClick={this.onCounter}>
          Click Me!
        </button>
      </div>
    )
  }
}

export default ClickCounter
