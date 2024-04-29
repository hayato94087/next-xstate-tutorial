import { createMachine } from "xstate";

export const toggleMachine = createMachine({
  id: "toggle",
  initial: "Inactive",
  states: {
    Inactive: {
      on: { type: "toggle", target: "Active" },
    },
    Active: {
      on: { type: "toggle", target: "Inactive" },
    },
  },
});