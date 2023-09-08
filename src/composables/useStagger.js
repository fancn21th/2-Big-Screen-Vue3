import gsap from "gsap";
import { ref, unref, watch } from "vue";

// shared / global state
let timeline;
const elements = ref([]);

const register = (element) => {
  elements.value.push(unref(element));
};

const animate = (doms) => {
  // https://greensock.com/docs/v3/Staggers
  // you can refer to the above link for more information about stagger

  // recreate the timeline since it is global
  timeline = gsap.timeline({});

  timeline.from(doms, {
    x: "400%",
    stagger: {
      grid: [4, 3],
      from: "random",
      // each: 0.1,
      amount: 1,
      ease: "ease.inOut",
    },
  });
};

const clear = () => {
  elements.value = [];
  // TODO: not so sure of it is necessary
  timeline.clear();
};

const run = () => {
  // in case the context is lost
  const _doms = unref(elements);

  console.log({
    _doms,
  });

  const interval = setInterval(() => {
    if (_doms.length >= 12) {
      animate(_doms);
      clearInterval(interval);
    }
  }, 100);
};

const undo = () => {
  return new Promise((resolve) => {
    timeline.reverse();
    timeline.eventCallback("onReverseComplete", () => {
      resolve(true);
      clear();
    });
  });
};

export default function useStagger(element, options) {
  return {
    register,
    run,
    undo,
  };
}
