import React from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";

const items = [
  {
    title: "What is React?",
    content: "React is a front end JS framework",
  },
  {
    title: "Why use React?",
    content: "Because it is my favorite framework.",
  },
  {
    title: "What is your name man?",
    content: "Ashraf Khan",
  },
];

export default () => {
  return (
    <div>
      <Search />
    </div>
  );
};
