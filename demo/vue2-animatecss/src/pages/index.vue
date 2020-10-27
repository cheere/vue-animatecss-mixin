<template>
  <div class="home">
    <h2 @click="goback">vue-animatecss-mixin demo</h2>
    <hr>
    <div class="container">
      <div
        v-for="(item,i) in data"
        :key="'data_'+i"
        class="data"
        :class="item.className"
        @click="playKeynote"
      >
        <div
          :data-animation="item.dataAnimation"
          class="title"
        >{{ item.keynote }}</div>
        <div class="content">
          <div
            v-for="(des,j) in item.des"
            :key="'des_'+j"
            class="des cursor"
            :data-animation="des"
            @click.stop="playTarget"
          >
            {{ des }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AnimateCssMixin from '@/utils/mixins/animate-css'
import HomeAnimateMixin from '@/utils/mixins/home-animate'
export default {
  mixins: [AnimateCssMixin, HomeAnimateMixin],
  data() {
    return {
      data: [
        {
          className: 'seekers',
          keynote: 'Attention seekers',
          dataAnimation: 'heartBeat',
          des: [
            'bounce',
            'flash',
            'pulse',
            'rubberBand',
            'shakeX',
            'shakeY',
            'headShake',
            'swing',
            'tada',
            'wobble',
            'jello',
            'heartBeat'
          ],
        },

        {
          className: 'entrances',
          keynote: 'Back entrances',
          dataAnimation: 'backInUp',
          des: [
            'backInDown',
            'backInLeft',
            'backInRight',
            'backInUp',
          ],
        },
      ]
    }
  },
  methods: {
    goback() {
      history.go(-1)
    }
  }
}
</script>