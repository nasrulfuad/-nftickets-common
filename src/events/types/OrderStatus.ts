export enum OrderStatus {
  /**
   * When the order has been created, but the ticket is trying
   * to order has not been reserved
   */
  Created = "created",

  /**
   * When the order is trying to reserve has already been reserved, or
   * when the user has cancelled the order, OR
   * the order is expires before payment
   */
  Cancelled = "cancelled",

  /**
   * When the order has successfully reserve the ticket
   */
  AwaitingPayment = "awaiting:payment",

  /**
   * When the order has reserved the ticket and the user provided
   * payment successfully
   */
  Complete = "complete",
}
