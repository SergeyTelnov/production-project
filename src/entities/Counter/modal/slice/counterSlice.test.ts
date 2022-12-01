import { CounterSchema } from "../types/counterSchema";
import { counterRerucer, counterActions } from "./counterSlice";

describe("counterSlice", () => {
  test("increment", () => {
    const state: CounterSchema = {
      value: 10
    };
    expect(counterRerucer(state, counterActions.increment())).toEqual({
      value: 11
    });
  });

  test("decrement", () => {
    const state: CounterSchema = {
      value: 10
    };
    expect(counterRerucer(state, counterActions.decrement())).toEqual({
      value: 9
    });
  });

  test("should work with empty state", () => {
    expect(counterRerucer(undefined, counterActions.increment())).toEqual({
      value: 1
    });
  });
});
