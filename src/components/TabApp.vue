<template>
  <div class="mt2">
    <ul id="list-app" class="f mln5 mr0 fw " style="width: calc(100% + 5em)">
      <li class="ml5 mb2 f fdc aic" style="width: calc(14.28% - 5em)" v-for="item in Apps" :key="item.message">
        <img class="w100" :src="item.imgApp" alt="">
        <p class="align-c p-small white" style="width: 64px">{{item.nameApp}}</p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator';

export default Vue.extend({
  el: '#list-app',
  
})
</script>

<style lang="scss" scoped>

</style>