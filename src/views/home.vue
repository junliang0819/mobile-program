<template>
  <div>
    <mt-tabbar v-model="selected">
      <mt-tab-item id="cash">
        <img slot="icon" src="../assets/100x100.png">
        收银
      </mt-tab-item>
      <mt-tab-item id="state">
        <img slot="icon" src="../assets/100x100.png">
        流水
      </mt-tab-item>
      <mt-tab-item id="mine">
        <img slot="icon" src="../assets/100x100.png">
        我的
      </mt-tab-item>
    </mt-tabbar>
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

