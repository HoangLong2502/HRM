<template>
  <div class="home">
    <Header />
    <div class="swiper-container">
      <div class="carousel" style="width: 100%" data-flickity='{ "contain": true, "prevNextButtons": false, "pageDots": true }'>
        <div class="carousel-cell">
          <Body />
          <ListApp /> 
        </div> 
        <div class="carousel-cell">
          <TabApp /> 
        </div>
      </div>
      <div></div>
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
import TabApp from '@/components/TabApp.vue';



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

/* external css: flickity.css */

* { box-sizing: border-box; }

body { font-family: sans-serif; }

.carousel-cell {
  counter-increment: gallery-cell;
  width: 100%;
  margin-right: 40px;
  
}

/* cell number */
.carousel-cell:before {
  display: block;
}

.flickity-page-dots .dot {
  
  width: 12px;
  height: 12px;
  opacity: 1;
  background: transparent;
  border: 2px solid white;
}

.flickity-page-dots .dot.is-selected {
  background: white;

}

</style>
