import React, { Component } from "react";

const exampleItems = [
  { idName: "126", teamName: "Alpha Team", domain: "eCommerce" },
  { idName: "124", teamName: "Enforcers", domain: "Finance" },
  { idName: "125", teamName: "Bachelors", domain: "Global" },
  { idName: "129", teamName: "Bad Boys", domain: "Finance" }
];

class SortTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exampleItems: exampleItems,
      dropdown: false
    };

    this.onSortUp = this.onSortUp.bind(this);
    this.onSortDown = this.onSortDown.bind(this);
  }

  onSortUp(event, sortKey) {
    const exampleItems = this.state.exampleItems;
    exampleItems.sort((a, b) => a[sortKey].localeCompare(b[sortKey]));
    this.setState({ dropdown: false });
  }

  onSortDown(event, sortKey) {
    const exampleItems = this.state.exampleItems;
    exampleItems.sort((a, b) => b[sortKey].localeCompare(a[sortKey]));
    this.setState({ dropdown: true });
  }

  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>
                AccountName
                {this.state.dropdown === true && (
                  <span onClick={(e) => this.onSortUp(e, "idName")}>∧</span>
                )}
                {this.state.dropdown === false && (
                  <span onClick={(e) => this.onSortDown(e, "idName")}>∨</span>
                )}
              </th>
              <th>
                teamName
                {this.state.dropdown === true && (
                  <span onClick={(e) => this.onSortUp(e, "teamName")}>∧</span>
                )}
                {this.state.dropdown === false && (
                  <span onClick={(e) => this.onSortDown(e, "teamName")}>∨</span>
                )}
              </th>
              <th>
                domain
                {this.state.dropdown === true && (
                  <span onClick={(e) => this.onSortUp(e, "domain")}>∧</span>
                )}
                {this.state.dropdown === false && (
                  <span onClick={(e) => this.onSortDown(e, "domain")}>∨</span>
                )}
              </th>
            </tr>
          </thead>
          <tbody>
            {this.state.exampleItems.map((item) => (
              <tr key={item.id}>
                <td>{item.idName}</td>
                <td>{item.teamName}</td>
                <td>{item.domain}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
export default SortTable;
