<template>
  <div class="per-view-header w100 f jcb aic bg-white-1" style="box-shadow: 0px 0px 10px rgba(68, 79, 120, 0.15)">
      <div class="f aic">
        <div onclick="history.back()" class="button--back f aic ml2">
          <img src="../assets/perView/back.png" alt="">
          <p class="h5 ml2 mr2 gray">Quay lại</p>
        </div>
        <div class="f jcb aic pt05 pb05 pl1 pr1  bg-gray-1">
          <img src="../assets/imgLogoCompany.png" alt="">
          <div class="ml05 mr2">
            <p class="h6 blue-1">Công ty CP Công Nghệ IDT</p>
            <p class="h7 gray mt05">Giám đốc Công Nghệ</p>
          </div>
          <img src="../assets/perView/down.png" alt="">
        </div>
      </div>
      <div class="f jcb aic">
        <div class="mr2 align-c" style="border: 1px solid #D9DDE8; border-radius: 40px; width: 39px; height: 39px">
          <img style="margin: 10px" src="../assets/perView/bell.png" alt="">
        </div>
        <div class="f jcb aic">
          <img src="../assets/imgLogoCompany.png" alt="">
          <div class="mr2 ml1">
            <p class="h6 blue-1">Nguyễn Thị Bill</p>
            <p class="h7 gray mt05">Giám đốc Công Nghệ</p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import { Vue } from 'vue-property-decorator';
export default Vue.extend({

})
</script>

<style>
.button--back p {
    transition: 0.2s;
}

.button--back:hover p {
    color: #585CA2;
}
</style>