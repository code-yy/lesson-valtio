import { proxy, useSnapshot } from "valtio";

export const autoCountState = proxy({
  autoCount: 0,
  increment: () => {
    autoCountState.autoCount++;
  },
});

setInterval(() => {
  ++autoCountState.autoCount;
}, 1000);

export const useAutoCount = () => {
  const { autoCount } = useSnapshot(autoCountState);
  return { autoCount };
};
