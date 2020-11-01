import React from "react";

class ZipForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { value: "", zipcode: "", error: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    fetch("https://api.zippopotam.us/us/" + this.state.value)
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            zipcode: result
          });
        },
        (error) => {
          this.setState({
            error
          });
        }
      );
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>zipcode</label>
        <input
          type="number"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default ZipForm;
