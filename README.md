# vue-animatecss-mixin
[vuejs - document - css - animation](https://cn.vuejs.org/v2/guide/transitions.html#CSS-%E5%8A%A8%E7%94%BB)

easy to use animate.css .

## DEMO
https://cheere.github.io/vue-animatecss-mixin/

## install
```sh
  # npm
  npm install vue-animatecss-mixin --save-dev
```

or

```sh
  # yarn
  yarn add vue-animatecss-mixin --dev
```

### import with bundler
```js
  import AnimateCssMixin from 'vue-animatecss-mixin'
  export default {
    mixins: [AnimateCssMixin],
  }
```

## Usage
todo: need to improve...

#### have to
```html
  <p data-animation="heartBeat slower repeat-4 delay-1s">I'm animate.css demo</p>
```

```js
  beforeDestory() {
    this.animateRemoveAllListener(/*refs or targets*/)
  }
```

#### use animate.css
```js
  mounted() {
    //-----------------play--------------------------
    const refs = [ref0, ref1]
    this.animatePlayground(refs)
  }
```

or

```js
  mounted() {
    // ----------------get element-------------------
    const target0 = this.animateGetTarget(/* .className */)

    //-----------------play--------------------------
    this.animatePlayground([target0])
  }
```

or

```js
  mounted() {
    // ----------------get element-------------------
    const target0 = this.animateGetTarget(/* .className */))
    // or
    const target1 = this.animateGetTarget(/* #id */))
    // or
    const target2 = this.animateGetTarget(/* ref */)
    // const target2 = ref

    //-----------------play--------------------------
    const targets = [target0, target1, taget2]
    this.animatePlayground(targets)
  }
```

## Animate.css - document
- GitHub: https://github.com/animate-css/animate.css
- Doc: https://animate.style/
