import React from "react";
import "./styles.css";
import "./toDoList";
import ToDoList from "./toDoList";
import Sortable from "./sortTable";
import Tabs from "./tabs";
import ZipForm from "./zipForm";
import Counter from "./counter";
import Calendar from "./calendar"
export default function App() {
  return (
    <div className="App">
      <ToDoList />
      <hr />
      <Sortable />
      <hr />
      <Tabs />
      <hr />
      <ZipForm />
      <hr />
      <Counter />
      <hr />
      <Calendar/>
    </div>
  );
}
