
const HomeAnimateMixin = {
  data() {
    return {
      animateSeekers: [],
      animateEntrances: [],
    }
  },
  beforeDestory() {
    this.animateRemoveAllListener(this.animateSeekers)
    this.animateRemoveAllListener(this.animateEntrances)
  },
  mounted() {
    this.getAllAnimate()
  },
  methods: {
    getAllAnimate() {
      this.getAnimateSeekers()
      this.getAnimagteEntrances()
    },
    getAnimateSeekers() {
      const array = []
      const root = this.animateGetTarget('.seekers')
      this.animateForElement(root[0], array)
      this.animateSeekers = array
    },
    getAnimagteEntrances() {
      const root = this.animateGetTarget('.entrances')
      const array = []
      this.animateForElement(root[0], array)
      this.animateEntrances = array
    },
    playKeynote(event) {
      let loop = true
      let target = event.target
      let className = target.className
      if (!(className === 'data seekers' || className === 'data entrances')) {
        while (loop) {
          target = target.parentElement
          className = target.className
          if (className === 'data seekers' || className === 'data entrances') {
            loop = false
          }
        }
      }
      
      if (className === 'data seekers') {
        this.playSeekersAnimate()
      } else if (className === 'data entrances') {
        this.playEntrancesAnimate()
      }
    },
    playSeekersAnimate() {
      this.animatePlayground(this.animateSeekers)
    },
    playEntrancesAnimate() {
      this.animatePlayground(this.animateEntrances)
    },
    playTarget(event) {
      const target = event.target
      this.animatePlayground([target])
    }
  }
}

export default HomeAnimateMixin