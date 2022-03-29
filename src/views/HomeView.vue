<template>
  <div class="home">
    <Header />
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <Body />
          <ListApp /> 
        </div> 
        <div class="swiper-slide">
          <TabApp /> 
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
    <NavBar />
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator';
import Header from '@/components/Header.vue'; // @ is an alias to /src
import Body from '@/components/Body.vue';
import ListApp from '@/components/ListApp.vue';
import NavBar from '@/components/NavBar.vue';
import TabApp from '@/components/TabApp.vue'


// import required modules

export default Vue.extend({
  components: {
    Header,
    Body,
    ListApp,
    NavBar,
    TabApp,
  },
})
</script>

<style lang="scss">
.home {
  width: 924px;
  margin: 0px auto;
}
</style>
