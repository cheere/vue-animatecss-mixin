
const ElevatorMixin = {
  data() {
    return {

    }
  },
  mounted() {
    window.addEventListener('scroll', this.elOnScroll)
    window.addEventListener('resize', this._onResize)

    setTimeout(() => {
      this._onResize()
      this.elOnScroll()
    }, 10);
  },
  beforeDestory() {
    window.removeEventListener('scroll', this.elOnScroll)
    window.removeEventListener('resize', this.onResize)
  },
  methods: {
    elOnScroll() {
      let isMobile = false
      if (this.isMobileMixin()) {
        isMobile = true
      }

      const elevatorTop = isMobile ? 100 : 300
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

      if (this.onScroll && typeof this.onScroll === 'function') {
        this.onScroll(isMobile, scrollTop)
      }

      if (this.onScroller && typeof this.onScroller === 'function') {
        this.onScroller(isMobile, scrollTop)
      }

      // console.log('scrollTop=>', scrollTop)
      const rootElevator = document.getElementById('qd_el_li')
      if (scrollTop > elevatorTop) {
        setTimeout(() => {
          rootElevator.style.display = 'inherit'
        }, 1);
      } else {
        setTimeout(() => {
          rootElevator.style.display = 'none'
        }, 1);
      }
    },
    _onResize() {
      const width = document.body.clientWidth || 0
      const height = document.body.clientHeight || 0
      if (this.onResize && typeof this.onResize === 'function') {
        setTimeout(() => {
          this.onResize(width, height)
        }, 1);
      }
    },
    // 获取style样式的css属性,考虑兼容;ie,火狐/谷歌;
    getStyleMinix(parm1, parm2) {
      // parm1, 要改变的元素代替名;
      // parm2,要改变的属性名
      return parm1.currentStyle ? parm1.currentStyle[parm2] : getComputedStyle(parm1)[parm2]
    },
    isMobileMixin() {
      const width = this.getDocumentWidth() || 0
      if (width <= 882) {
        return true
      }
      return false
    },
    layoutPCSizeMixin(size) {
      const width = this.getDocumentWidth() || 0
      const px = (size * width / 1920.00)
      // console.log('px=', px)
      return Math.floor(px)
    },
    layoutMobileSizeMixin(size) {
      const width = this.getDocumentWidth() || 0
      return Math.floor(size * width / 375.00)
    },
    getDocumentWidth () {
      const width = document.body.clientWidth || 0
      return width
    }
  }
}

export default ElevatorMixin