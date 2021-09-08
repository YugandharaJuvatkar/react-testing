import { render, screen, cleanup } from "@testing-library/react";

import Todo from "./../Todo";

import renderer from "react-test-renderer";

afterEach(() => {
  cleanup();
});

test("should render completed todo componenet", () => {
  const todo = { id: 1, title: "Complete task", completed: true };
  render(<Todo todo={todo} />);
  const todoElement = screen.getByTestId("todo-1");
  expect(todoElement).toBeInTheDocument();
  expect(todoElement).toHaveTextContent("Complete task");
});
test("should render not completed todo componenet", () => {
  const todo = { id: 2, title: "schedule meet", completed: false };
  render(<Todo todo={todo} />);
  const todoElement = screen.getByTestId("todo-2");
  expect(todoElement).toBeInTheDocument();
  expect(todoElement).toHaveTextContent("schedule meet");
});

test("matches snapshot", () => {
  const todo = { id: 1, title: "Complete task", completed: true };
  const tree = renderer.create(<Todo todo={todo} />).toJSON();
  expect(tree).toMatchSnapshot();
});
