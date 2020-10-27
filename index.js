/*!
 * vue-animatecss-mixin - 1.0.2
 * (c) 2020 srxboys
 * Released under the MIT License.
 * https://github.com/cheere/vue-animatecss-mixin
 */

/**
 * Animate.CSS
 * https://github.com/animate-css/animate.css
 */
const AnimateCssMixin = {
  methods: {
    /**
     * Monitor the animation finish.
     * 动画对象 添加 监听 动画播放完毕
     * @param {Object} target animation object(动画对象)
     */
    animateAddEndListener(target) {
      target.addEventListener('animationend', () => {
        const classList = target.classList || []
        const newList = []
        for (let i = 0; i < classList.length; i++) {
          const name = classList[i]
          if (!name) {
            continue
          } else if (name.length > 6 && name.substring(0, 7) === 'animate') {
            continue
          }
          newList.push(name)
        }
        target.classList = newList
        target.classList.value = newList.join(' ')
      })
    },

    /**
     * Remove monitor animation, play finished
     * 移除监听
     * @param {Object} target animation object(动画对象)
     */
    animateRemoveAllListener(targets) {
      if (!targets || !Array.isArray(targets)) {
        return
      }
      targets.forEach(element => {
        element.removeEventListener('animationend')
      });
    },
    animateRemoveListener(target) {
      target.removeEventListener('animationend')
    },

    /**
     * loop get DOM.node
     * @param {Object} target animation object(动画对象)
     * @param {Function} callback
     */
    animateChildNodes(target, callback) {
      const elChilds = target.childNodes
      if (elChilds && elChilds.length) {
        for (let i = 0; i < elChilds.length; i++) {
          const element = elChilds[i]
          if (element && element.nodeType === 1) {
            if (callback && typeof callback === 'function') {
              callback(element)
            }
          }
        }
      }
    },
    
    /**
     * loop get animate object
     * @param {Object} target animation object(动画对象)
     * @param {Array} array
     */
    animateForElement(target, array) {
      this.animateChildNodes(target, e => {
        const animation = e.getAttribute('data-animation')
        if (animation && typeof animation === 'string') {
          array.push(e)
        }
        if (e.nodeType === 1 && e.childElementCount > 0) {
          this.animateForElement(e, array)
        }
      })
    },

    /**
     * get animation object
     * 获取对象(id 、 class、ref)
     * @param {Any<string/Object>} target animation object(动画对象)
     */
    animateGetTarget(target) {
      if (!target) {
        throw new TypeError('animateGetTarget target = null')
      } else if (typeof target === 'string') {
        const prefix = target.substring(0, 1)
        if (prefix === '#') {
          const id = target.slice(1, target.length)
          const e = document.getElementById(id)
          return e
        } else {
          if (prefix !== '.') {
            target = '.' + target
          }
          const className = target.slice(1, target.length)
          const e = document.getElementsByClassName(className)
          return e
        }
      } else if (typeof target === 'object') {
        if (target.nodeType === 1) {
          return target
        } else {
          throw new TypeError('animateGetTarget target.nodeType !== 1')
        }
      } else {
        throw new TypeError('animateGetTarget target allow string/object')
      }
    },

    /**
     * play animation
     * @param {Array<String>} target animation Array(动画对象数组)
     */
    animatePlayground(targets = []) {
      for (let i = 0; i < targets.length; i++) {
        const itemTarget = targets[i]
        const itemTargetEl = this.animateGetTarget(itemTarget)
        if (itemTargetEl && itemTargetEl.nodeType === 1) {
          const animation = `${itemTargetEl.getAttribute('data-animation')}`
          if (animation && animation !== 'null') {
            this.animateAddEndListener(itemTargetEl)
            const animationClassList = animation.split(' ')
            itemTargetEl.classList.add('animate__animated')
            for (let i in animationClassList) {
              const aniClassName = animationClassList[i]
              if (aniClassName && typeof aniClassName === 'string' && aniClassName.length) {
                const cn = 'animate__' + aniClassName
                itemTargetEl.classList.add(cn)
              }
            }
          }
        }
      }
    },
  }
}

export default AnimateCssMixin