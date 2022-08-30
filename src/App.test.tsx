import React from "react";
import { render, screen } from "@testing-library/react";
import { PurchaseTile } from "./components/PurchaseTile";

describe("Purchase Tile", () => {
  it("should render the purchase information for wants purchase", () => {
    render(
      <PurchaseTile
        id="1"
        name="Movie Tickets"
        amount={420.22}
        isNecessity={false}
        category="Entertainment"
        date="2020-01-01"
      />
    );
    const purchaseNameElement = screen.getByText(/movie tickets/i);
    expect(purchaseNameElement).toBeInTheDocument();

    const purchaseAmountElement = screen.getByText(/420.22/i);
    expect(purchaseAmountElement).toBeInTheDocument();

    const isNecessityElement = screen.getByText(/wants purchase/i);
    expect(isNecessityElement).toBeInTheDocument();
  });

  it("should render the purchase information for needs purchase", () => {
    render(
      <PurchaseTile
        id="1"
        name="Groceries"
        amount={77.22}
        isNecessity={true}
        category="Food"
        date="2020-01-01"
      />
    );
    const purchaseNameElement = screen.getByText(/groceries/i);
    expect(purchaseNameElement).toBeInTheDocument();

    const purchaseAmountElement = screen.getByText(/77.22/i);
    expect(purchaseAmountElement).toBeInTheDocument();

    const isNecessityElement = screen.getByText(/necessary purchase/i);
    expect(isNecessityElement).toBeInTheDocument();
  });
});
