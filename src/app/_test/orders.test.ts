import { describe, it, expect } from "vitest";
import { orders } from "@/app/_data/orders";

describe("orders data structure", () => {
  it("should have a list of orders with specific properties", () => {
    expect(orders).toBeInstanceOf(Array);
    orders.forEach((order) => {
      expect(order).toHaveProperty("orderId");
      expect(order).toHaveProperty("orderNumber");
      expect(order).toHaveProperty("customer");
      expect(order).toHaveProperty("channel");
      expect(order).toHaveProperty("date");
      expect(order).toHaveProperty("total");
      expect(order).toHaveProperty("status");
    });
  });

  it("should have unique orderIds for each order", () => {
    const orderIds = orders.map((order) => order.orderId);
    const uniqueOrderIds = new Set(orderIds);
    expect(uniqueOrderIds.size).toBe(orderIds.length);
  });

  it("should have valid total values formatted as currency", () => {
    orders.forEach((order) => {
      expect(order.total).toMatch(/^\$\d+(\.\d{2})?$/);
    });
  });

  it("should have valid dates", () => {
    orders.forEach((order) => {
      expect(new Date(order.date).toString()).not.toBe("Invalid Date");
    });
  });

  it("should have valid status values", () => {
    orders.forEach((order) => {
      expect(["Paid", "Shipped", "Unfulfilled"]).toContain(order.status);
    });
  });
});
