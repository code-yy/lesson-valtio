import { proxy, useSnapshot } from "valtio";

export const countState = proxy({
  count: 0,
  increment: () => {
    countState.count++;
  },
  decrement: () => {
    countState.count--;
  },
});

export const useCount = () => {
  const { count } = useSnapshot(countState);
  return { count };
};
