<template>
  <div style="height: 100px;">
    <mt-swipe :auto="4000">
      <mt-swipe-item><i style="color: red;font-size: 22px;" class="iconfont icon-ziliaoku"></i></mt-swipe-item>
      <mt-swipe-item>2</mt-swipe-item>
      <mt-swipe-item>3</mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
export default {
  data () {
    return {
      a: 1
    }
  },
  methods: {

  }

}
</script>

