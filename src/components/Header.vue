<template>
  <div class="f fdc w100">
      <div class="f fw jcb w100 mt2">
          <div class="f aic">
              <img class="w10" src='../assets/imgLogoCompany.png' alt="">
              <p class="white ml1 p-bold">Cong ty co phan Cong Nghe Cao IDT</p>
          </div>
          <div class="f aic">
              <img class="w20" src="../assets/imgLogoCompany.png" alt="">
              <div class="ml1">
                  <p class="white h6">
                      Nguyen Thi Bill
                  </p>
                  <p class="white p6">
                      Giam doc Cong Nghe
                  </p>
              </div>
          </div>
      </div>
      <div class="w100 mt15">
          <input class="w100 pt1 pb1" placeholder="Tìm kiếm ..." type="text" name="" id="">
      </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Header extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

