
/**
 * Animate.CSS 动画
 * https://github.com/animate-css/animate.css
 */
const AnimateCssMixin = {
  methods: {
    /**
     * 动画对象 添加 监听 动画播放完毕
     * @param {object} target 动画对象
     * @param {[string]} defaultClass 默认class
     */
    animateAddEndListener(target) {
      target.addEventListener('animationend', e => {
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
     * 移除监听
     * @param {object} target 动画对象
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

    animateChildNodes(target, callback) {
      const elChilds = target.childNodes
      // console.log('elChilds=>', elChilds)
      if (elChilds && elChilds.length) {
        for (let i = 0; i < elChilds.length; i++) {
          const element = elChilds[i]
          // console.log('animateChildNodes element=>', element)
          if (element && element.nodeType === 1) {
            if (callback && typeof callback === 'function') {
              callback(element)
            }
          }
        }
      }
    },

    /**
     * 获取对象，id 、 class
     * @param {string} target 字符串
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
     * 播放动画
     * @param {string} target 父级对象
     * @param {Array<object>} items 子级对象数组 - 将要播放对象的
     */
    animatePlayground(targets = []) {
      // console.log('targets=>', targets)
      for (let i = 0; i < targets.length; i++) {
        const itemTarget = targets[i]
        // console.log('itemTarget=>', itemTarget)
        const itemTargetEl = this.animateGetTarget(itemTarget)
        if (itemTargetEl && itemTargetEl.nodeType === 1) {
          // class 还原
          const animation = `animate__${itemTargetEl.getAttribute('data-animation')}`
          if (animation && animation !== 'animate__null') {
            this.animateAddEndListener(itemTargetEl)
            // 添加 动画 class
            itemTargetEl.classList.add('animate__animated', animation)
          }
        }
      }
    },
    animateForElement(root, array) {
      this.animateChildNodes(root, e => {
        const animation = e.getAttribute('data-animation')
        if (animation && typeof animation === 'string') {
          array.push(e)
        }
        if (e.nodeType === 1 && e.childElementCount > 0) {
          this.animateForElement(e, array)
        }
      })
    },
  }
}

export default AnimateCssMixin