import React from "react";
import "./app.css";

export default class NewTheme extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({value: e.target.value});
  }

  onSubmit(e) {
    e.preventDefault();

    if (this.state.value) {
      this.props.onChange(this.state.value);
    }
  }

  render() {
    return (
      <div className="new-theme-container">
        <form onSubmit={this.onSubmit}>
          <input name="new" value={this.state.value} onChange={this.onChange} />
          <button className="submit-button" type="submit">Add new</button>
        </form>
      </div>
    );
  }
}
