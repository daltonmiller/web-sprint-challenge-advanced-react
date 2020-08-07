import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";


// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />)

    screen.getByText(/checkout form/i)
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm />)

    const firstNameInput = screen.getByLabelText(/First Name:/i)
    const lastNameInput = screen.getByLabelText(/Last Name:/i)
    const addressInput = screen.getByLabelText(/Address:/i)
    const cityInput = screen.getByLabelText(/City:/i)
    const stateInput = screen.getByLabelText(/State:/i)
    const zipInput = screen.getByLabelText(/Zip:/i)

    fireEvent.change(firstNameInput, { target: { value: "Lebron"}})
    fireEvent.change(lastNameInput, { target: { value: "James"}})
    fireEvent.change(addressInput, { target: { value: "da big house"}})
    fireEvent.change(cityInput, { target: { value: "LA"}})
    fireEvent.change(stateInput, { target: { value: "Cali"}})
    fireEvent.change(zipInput, { target: { value: "8423"}})

    const submitBtn = screen.getByRole("button", {name: /checkout/i})

    fireEvent.click(submitBtn)

    expect(screen.getByText(/Lebron/i)).toBeInTheDocument();
    expect(screen.getByText(/James/i)).toBeInTheDocument();
    expect(screen.getByText(/da big house/i)).toBeInTheDocument();
    expect(screen.getByText(/LA,/i)).toBeInTheDocument();
    expect(screen.getByText(/Cali/i)).toBeInTheDocument();
    expect(screen.getByText(/8423/i)).toBeInTheDocument();


});
