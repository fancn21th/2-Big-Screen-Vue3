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
    this.registeredGroups = {};
    this.registeredAnimations = {};
    this.run = useDebounceFn(this.animate, 100);
    this.master = gsap.timeline();
  }

  debug(stageName) {
    const info = cloneDeep({
      registeredGroups: this.registeredGroups,
      registeredAnimations: this.registeredAnimations,
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

  unregister(groupName) {
    this.removeAnimation(groupName);
  }

  addAnimation(groupName) {
    this.master.add(this.registeredAnimations[groupName]);
  }

  removeAnimation(groupName) {
    this.master.remove(this.registeredAnimations[groupName]);
  }

  animate() {
    this.debug('执行前');

    Object.keys(this.registeredGroups).map((key) => {
      const { doms, option } = this.registeredGroups[key];
      const timeline = gsap.timeline({});
      timeline.from(doms, option);
      this.registeredAnimations[key] = timeline;
      this.addAnimation(key);
    });

    this.debug('执行后');
  }

  unanimate() {
    return new Promise((resolve, reject) => {
      try {
        this.master.reverse();
        this.master.eventCallback('onReverseComplete', () => {
          resolve(true);
        });
      } catch (error) {
        reject(error);
      }
    });
  }

  run() {
    this.run();
  }

  undo() {
    return this.unanimate();
  }
}

const stagger = new Stagger();

export default function useGlobalStagger(element, options) {
  return {
    register: (dom, groupName, option) => stagger.register(dom, groupName, option),
    run: () => stagger.run(),
    undo: () => stagger.undo(),
  };
}
