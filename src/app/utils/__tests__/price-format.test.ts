import { expect, describe, it } from "vitest";
import { priceFormatter } from "../price-format";

describe("Testing price format function", () => {
  it("should return string format with currency symbol and formatted price", () => {
    const currency = "USD";
    const price = 123456.78;
    const formattedPrice = priceFormatter(currency, price);
    expect(formattedPrice).toEqual("123,456.78USD");
  });

  it("should return dash if price is not a number", () => {
    const currency = "USD";
    const price = NaN;
    const formattedPrice = priceFormatter(currency, price);
    expect(formattedPrice).toEqual("USD--");
  });
});
