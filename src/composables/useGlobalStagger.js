import gsap from 'gsap';
import { unref } from 'vue';
import { useDebounceFn } from '@vueuse/core';
import cloneDeep from 'lodash/cloneDeep';

/**
 *  stages for animation
 *  1. registration stage
 *  2. boot stage
 *  3. run stage
 *  4. undo stage
 *
 *  some key takeaways from this design:
 *  1. every element expects to be animated should be in charge of both registering and unregistering itself
 *  2. as long as there is no element about to be animated in 1 seconds, the animation will start
 *
 */
class Stagger {
  constructor() {
    this.init();
  }

  init() {
    this.master = gsap.timeline();
    this.registeredGroups = {};
    this.registeredAnimations = {};
    this.isAnimationStarted = false;
  }

  debug(stageName) {
    const info = cloneDeep({
      registeredGroups: this.registeredGroups,
      registeredAnimations: this.registeredAnimations,
      isAnimationStarted: this.isAnimationStarted,
    });
    console.log(stageName, info);
  }

  register(dom, groupName, option) {
    const domElement = unref(dom);

    this.debug('注册前');

    if (this.registeredGroups[groupName]) {
      this.registeredGroups[groupName] = {
        ...this.registeredGroups[groupName],
        doms: [...this.registeredGroups[groupName].doms, domElement],
      };
    } else {
      this.registeredGroups[groupName] = {
        option: option,
        doms: [domElement],
      };
    }

    this.debug('注册后');
  }

  unregister(dom, groupName) {
    this.debug('注销前');
    // 避免重复注销
    if (this.registeredGroups[groupName]) {
      this.removeAnimation(groupName);
      delete this.registeredGroups[groupName];
      delete this.registeredAnimations[groupName];
    }
    this.debug('注销后');
  }

  addAnimation(groupName) {
    this.master.add(this.registeredAnimations[groupName]);
  }

  removeAnimation(groupName) {
    this.master.remove(this.registeredAnimations[groupName]);
  }

  reset() {
    this.isAnimationStarted = false;
  }

  animate() {
    this.debug('执行前');

    this.isAnimationStarted = true;

    Object.keys(this.registeredGroups).map((key) => {
      const { doms, option } = this.registeredGroups[key];
      const timeline = gsap.timeline({});
      timeline.from(doms, option);
      this.registeredAnimations[key] = timeline;
      this.addAnimation(key);
    });

    this.reset();

    this.debug('执行后');
  }

  unanimate() {
    return new Promise((resolve, reject) => {
      try {
        this.master.reverse();
        this.master.eventCallback('onReverseComplete', () => {
          this.init();
          resolve(true);
        });
      } catch (error) {
        reject(error);
      }
    });
  }

  ready() {
    return Object.keys(this.registeredGroups).length === 2;
  }

  run() {
    if (this.isAnimationStarted) {
      throw new Error('animation is already started');
    }
    const interval = setInterval(() => {
      if (this.ready()) {
        this.animate();
        clearInterval(interval);
      }
    }, 100);
  }

  undo() {
    return this.unanimate();
  }
}

const stagger = new Stagger();

export default function useGlobalStagger(element, options) {
  return {
    register: (dom, groupName, option) => stagger.register(dom, groupName, option),
    unregister: (dom, groupName) => stagger.unregister(dom, groupName),
    run: () => stagger.run(),
    undo: () => stagger.undo(),
  };
}
