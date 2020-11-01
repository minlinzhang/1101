import React, { Component } from "react";
import "./styles.css";

function Bio() {
  return <div>bio</div>;
}

function Support() {
  return <div>support</div>;
}

function Home() {
  return <div>home</div>;
}

class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: 0
    };
  }

  onTabClick = (tabNumber) => (e) => {
    e.preventDefault();
    this.setState({
      tab: tabNumber
    });
  };
  render() {
    const tabs = ["tab1", "tab2", "tab3"];
    const { tab } = this.state;
    return (
      <div>
        <div className="top-bar">
          {tabs.map((el, i) => {
            const seletedClass = i === tab ? "tab-select" : "tab";
            return (
              <div
                key={"tabKey" + el + i}
                className={seletedClass}
                onClick={this.onTabClick(i)}
              >
                {el}
              </div>
            );
          })}
        </div>
        <div className="content">
          {tab === 0 && <Home />}
          {tab === 1 && <Bio />}
          {tab === 2 && <Support />}
        </div>
      </div>
    );
  }
}

export default Tabs;
