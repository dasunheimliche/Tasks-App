import { render, fireEvent } from "@testing-library/react";

import AddForm from "../components/add-form";

jest.mock("../components/ui/alert-dialog", () => ({
  AlertDialogContent: "div",
  AlertDialogHeader: "div",
  AlertDialogTitle: "div",
  AlertDialogFooter: "div",
  AlertDialogCancel: "div",
  AlertDialogAction: "div",
}));

test("Add subtask to task form", async () => {
  const { getByText, getByPlaceholderText, getAllByTestId } = render(
    <AddForm />
  );

  const input = getByPlaceholderText("Tarea");
  fireEvent.change(input, { target: { value: "Nueva Tarea" } });
  fireEvent.click(getByText("+"));
  expect(getAllByTestId("subtask")).toHaveLength(1);
});
