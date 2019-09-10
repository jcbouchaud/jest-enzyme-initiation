import React from "react";
import { shallow } from "enzyme";
import App from "components/App";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";

let wrapped;
// in order to be out of scope
// only apply inside this file
beforeEach(() => {
  wrapped = shallow(<App />);
});

it("shows a comment box", () => {
  expect(wrapped.find(CommentBox).length).toEqual(1);
});

it("shows a comment lis", () => {
  expect(wrapped.find(CommentList).length).toEqual(1);
});

// create a fake DOM (JSDOM) so React code can be executed
//  const div = document.createElement("div");
//  ReactDOM.render(<App />, div);
//   console.log(div.innerHTML);
//  expect(div.innerHTML).toContain("Comment Box");
// unmount the component in oder to not lose performance
//  ReactDOM.unmountComponentAtNode(div);
