import { assign, createMachine } from "xstate";

export const toggleMachine = createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QBcD2UoBswDoCSAdgIYDGyAlgG5gDEJm5JA1gNoAMAuoqAA6qzkKqAtxAAPRAEYAzACYcATgDsMgKwAOWWwAs03bOkAaEAE9EWtji2btGybck6Avk+NoM2HAEEyVWvUZWTlE+ASERJHEpOUUVaQ0tXX0jU0RtADYcePVpe2189XV09NkXVxACVAg4UXcsMBD+QXJhUQkEAFpinCUFWQKFdW0FNklB4zNO7UsFdNsFEdVpEqUlFzd0evxiX2pGsJaI0HaOyXUevoGhkbH1CaktRSLZnPSFSXS1dZA6zx8KPaRULNVqRdqyJSWWTqJQ5dSzaRsYopSaSR6DN7pV7vT7SNZlIA */
  id: "toggle",
  initial: "Inactive",
  context: {
    count: 0,
    maxCount: 3,
  },
  states: {
    Inactive: {
      // targetを省略しない記述方法
      on: {
        click: {
          target: "Active",
          guard: ({ context }) => context.count < context.maxCount,
        },
      },
    },
    Active: {
      entry: assign({
        count: ({ context }) => context.count + 1,
      }),
      // targetを省略した記述方法
      on: { click: "Inactive" },
      after: { 2000: "Inactive" },
    },
  },
});
