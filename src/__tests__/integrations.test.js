import React from "react";
import { mount } from "enzyme";
import moxios from "moxios";
import Root from "Root";
import App from "components/app";
import { doesNotReject } from "assert";

beforeEach(() => {
  moxios.install();
  moxios.stubRequest("http://jsonplaceholder.typicode.com/comments", {
    status: 200,
    response: [{ name: "Fetched #1" }, { name: "Fetched #2" }]
  });
});

afterEach(() => {
  moxios.uninstall();
});

it("can fetch a list of comments and display them", () => {
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  );

  // find the fetchComments button and click it
  wrapped.find(".fetch-comments").simulate("click");

  // introduce a TINY little pause
  moxios.wait(() => {
    wrapped.update();
    //Expect to find a list of comments!
    expect(wrapped.find("li").length).toEqual(2);
    // Make sure expect is executed, otherwise Jest considers it's all good if the setTimeout is executed
    done();
    wrapped.unmount();
  });
});
