import React from "react";
import Statistics from "./Statistics";
import FeedbackOptions from "./FeedbackOptions";
import Section from "./Section";

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };

  positivePercentage = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return good / total ? ((good / total) * 100).toFixed(0) : 0;
  };

  onLeaveFeedback = (option) => {
    this.setState((prevState) => ({
      [option]: prevState[option] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div>
        <Section title={"Please leave feedback"}>
          <FeedbackOptions
            options={["good", "neutral", "bad"]}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        
        <Section title={"Statistics"}>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback(good, neutral, bad)}
            positivePercentage={this.positivePercentage(good, neutral, bad)}
          />
        </Section>
      </div>
    );
  }
}

export default App;
