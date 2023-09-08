import gsap from "gsap";
import { ref, unref, watch } from "vue";

const timeline = gsap.timeline({});

// shared state
const elements = ref([]);

export default function useStagger(element, options) {
  const register = (element) => {
    elements.value.push(unref(element));
  };

  const animate = () => {
    // https://greensock.com/docs/v3/Staggers
    // you can refer to the above link for more information about stagger
    timeline.from(elements.value, {
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

  const run = () => {
    const _elements = unref(elements);

    const interval = setInterval(() => {
      if (_elements.length >= 12) {
        animate();
        clearInterval(interval);
      }
    }, 100);
  };

  const undo = () => {
    return new Promise((resolve) => {
      timeline.reverse();
      timeline.eventCallback("onReverseComplete", () => {
        resolve(true);
      });
    });
  };

  return {
    register,
    run,
    undo,
  };
}
