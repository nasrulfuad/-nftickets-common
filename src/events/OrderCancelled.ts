import { Subjects } from "./types/Subjects";

export interface OrderCreatedEvent {
  subject: Subjects.OrderCancelled;
  data: {
    id: string;
    ticket: {
      id: string;
    };
  };
}
