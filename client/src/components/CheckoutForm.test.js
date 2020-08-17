import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// I was having error problems before but I checked the error and googled it and found the issue. this is the link https://stackoverflow.com/questions/58753539/reactjs-test-fsevents-is-not-a-function/59549892#59549892

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  //Arrange
  const { getByText } = render(<CheckoutForm />);
  //Act
  const formHeader = getByText(/Checkout Form/i);
  //Assert
  expect(formHeader).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
  //Arrange
  const { getByText, getByTestId } = render(<CheckoutForm />);
  //Act
  //I needed to submit the form first so I can have the success message
  const checkoutButton = getByText("Checkout");
  //I learned this way by checking out this link https://testing-library.com/docs/example-input-event
  fireEvent.click(checkoutButton);
  const successMessage = getByTestId("successMessage");
  //Assert
  expect(successMessage.textContent).toMatch(
    "You have ordered some plants! Woo-hoo! 🎉Your new green friends will be shipped to:"
  );
});
