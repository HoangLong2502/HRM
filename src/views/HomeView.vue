<template>
  <div class="home">
    <Header msg="Welcome to Your Vue.js + TypeScript App"/>
    <Body msg="Welcome to Your Vue.js + TypeScript App"/>
    <ListApp msg="Welcome to Your Vue.js + TypeScript App"/>
    <Footer msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from '@/components/Header.vue'; // @ is an alias to /src
import Body from '@/components/Body.vue';
import ListApp from '@/components/ListApp.vue';
import Footer from '@/components/Footer.vue';

@Component({
  components: {
    Header,
    Body,
    ListApp,
    Footer,
  },
})
export default class HomeView extends Vue {}
</script>

<style lang="scss">
.home {
  width: 924px;
  margin: 0px auto;
}
</style>
