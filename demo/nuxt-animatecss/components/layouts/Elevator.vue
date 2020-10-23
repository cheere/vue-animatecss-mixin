<template>
  <div id="qd_el_li" class="elevator_list">
    <div class="elevator_item">
      <div class="el_li_totop_icon el_li_icon cursor" @click="click(0, $event)"></div>
    </div>

    <!-- <div class="elevator_item el_p">
      <div class="el_li_contact_icon el_li_icon" @click.stop="click(1, $event)"></div>
      <div class="el_li_p_wx_icon el_li_left_contact">
        <img src="~/assets/img/common/elevator/el_contact_wx_icon.png">
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      contantShow: false,
    }
  },
  mounted() {
    // const _this = this
    // document.onclick = function(e) {
    //   // console.log('document click =>', e)
    //   _this.changeContack(false)
    // }
  },
  methods: {
    click(option, event) {
      if (option === 0) {
        this.gotoTop()
        this.changeContack(false)
      } else if (option === 1) {
        this.clickContack(event)
      }
    },
    gotoTop() {
      document.body.scrollTop = document.documentElement.scrollTop = 0
      setTimeout(() => {
        const rootElevator = document.getElementById('qd_el_li')
        rootElevator.style.display = 'none'
      }, 1);
    },
    clickContack(e) {
      const show = !this.contantShow
      this.changeContack(show)
      this.stopContack(e)
    },
    stopContack(e) {
      // 阻止事件向上传递
      if (e.stopPropagation) { // 非IE浏览器
        e.stopPropagation()
      } else if (typeof e.cancelBubble === 'boolean') { // IE浏览器
        e.cancelBubble = true
      }
    },
    changeContack(show) {
      this.contantShow = show
      this.setElementStyleDisplay('el_li_left_contact', show)
    },
    setElementStyleDisplay(className, show) {
      const element = document.getElementsByClassName(className) || []
      const wxIconDisplay = show ? 'inherit' : 'none'
      if (element) {
        const wxNode = element[0]
        if (wxNode && wxNode.nodeName && wxNode.nodeName === 'DIV') {
          wxNode.style.display = wxIconDisplay
        }
      }
    }
  }
}
</script>