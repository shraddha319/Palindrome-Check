import React from "react";
import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: "",
      outputText: ""
    };
  }

  updateInput = (event) => {
    this.setState({ inputText: event.target.value });
  };

  submitHandler = (e) => {
    if (this.state.inputText === "") {
      alert("PLease enter input!");
      return;
    }
    let reverse = this.state.inputText
      .split("")
      .reverse()
      .join("")
      .toLowerCase();
    if (reverse === this.state.inputText.toLowerCase()) {
      this.setState({ outputText: "Palindrome!" });
    } else {
      this.setState({ outputText: "not a Palindrome!" });
    }
    console.log(this.state.outputText);
    e.preventDefault();
  };

  tryAgain = () => {
    this.setState({ inputText: "" });
    this.setState({ outputText: "" });
  };

  render() {
    return (
      <div>
        <div className="app-header">
          <div className="hero-text">Palindrome check</div>
          <img
            className="hero-gif"
            src="https://images.squarespace-cdn.com/content/v1/585c1d8abebafb75e3380189/1546813736658-O92ESNOT8V67I6T1A65R/ke17ZwdGBToddI8pDm48kGDpvalPb1SqHoCn1hwN0Y57gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmjTeiQ8v2Gi6jnuD7IilWB1aFTl2rN_NJyVfSxiuM_6AwcSnARVzH7DJZbr4wQ8RL/aha.gif"
            alt=""
          />
        </div>
        <div className="app-form app-container">
          <textarea
            className="input-text"
            value={this.state.inputText}
            rows="4"
            placeholder="Enter text here"
            onChange={this.updateInput}
          ></textarea>
          <button onClick={this.submitHandler} type="submit">
            Submit
          </button>
          <button onClick={this.tryAgain}>Again</button>
          <div className="output-text">{this.state.outputText}</div>
        </div>
      </div>
    );
  }
}

export default App;
