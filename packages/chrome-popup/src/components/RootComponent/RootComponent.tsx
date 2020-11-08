import * as React from "react"

class RootComponent extends React.Component {
  state = { backgroundMessage: "" }

  render() {
    const { backgroundMessage } = this.state
    return (
      <div>
        {backgroundMessage && <p>{backgroundMessage}</p>}
        <button onClick={this.pingBackgroundScript}>Click to contact background script </button>
      </div>
    )
  }

  pingBackgroundScript = () => {
    chrome.runtime.sendMessage({ type: "HELLO" }, (res) => {
      this.setState({ backgroundMessage: res.message })
    })
  }
}

export default RootComponent
