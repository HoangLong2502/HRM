<template>
  <div class="f fdc w100">
      <div class="f fw jcb w100 mt2">
          <div class="f aic">
              <img class="w10" src='../assets/imgLogoCompany.png' alt="">
              <p class="white ml1 mr1 p-bold">Công ty cổ phần Công Nghệ Cao IDT</p>
              <img src="../assets/downWhite.png" alt="">
          </div>
          <div class="f aic">
              <img class="w20" src="../assets/imgLogoCompany.png" alt="">
              <div class="ml1 align-r">
                  <p class="white h6">
                      Nguyễn Sơn Tùng
                  </p>
                  <p class="white p6">
                      Giám đốc công nghệ
                  </p>
              </div>
          </div>
      </div>
      <div class="w100 mt15 ralative">
          <img src="../assets/Enter email.png" class="absolute mt1 ml15" style="height: 18px">
          <input class="w100 pt1 pb1 pl4" placeholder="Tìm kiếm ..." type="text" name="" id="">
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

