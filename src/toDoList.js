import React, { Component } from "react";
import "./styles.css";

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      toDoList: []
    };
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      text: e.target.value
    });
  };

  handleAdd = () => {
    const list = [...this.state.toDoList];
    list.push(this.state.text);
    this.setState({
      toDoList: list,
      text: ""
    });
  };

  onDelete = (index) => (e) => {
    let list = [...this.state.toDoList];
    list = list.slice(0, index).concat(list.slice(index + 1));
    this.setState({ toDoList: list });
  };
  render() {
    const { toDoList } = this.state;
    return (
      <div>
        <h1>To do list</h1>
        <input
          type="text"
          value={this.state.text}
          onChange={this.handleChange}
        />
        <span onClick={this.handleAdd}>add</span>

        <ul>
          {toDoList.map((el, index) => {
            return (
              <li>
                {el} <span onClick={this.onDelete(index)}>Done</span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ToDoList;
