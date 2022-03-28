<template>
  <div class="w100 f mt15">
    <div class="bg-white-1 mr15 border-radius pt1 pb1 pl1 pr1" style="width:65%">
        <p class="h7 gray">Doanh thu công ty</p>
        <div class="f jcb aic">
            <div class="p-bold">
                150 tỷ
            </div>
            <div class="">
                <div class="f aic bg-gray-1 pt05 pb05 pl1 pr1 border-radius" value="">
                    <p class="p6">Quaterly</p>
                    <svg class="ml1" width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L7 7L13 1" stroke="#8F90A6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
        </div>
        <div>
            <MyChart></MyChart>
        </div>
    </div>
    <div class="border-radius" style="width:35%">
        <div class="f boder-radius">
            <div class="bg-white-1 mr1 border-radius w50">
                <div class="f pt05 pb05 pl1 pr1" style="border-radius: 8px 8px 0 0;background: linear-gradient(180deg, #FFD422 0%, #F2C800 100%);">
                    <img src="../assets/Folder.png" alt="">
                    <p class="h5 white">Note</p>
                </div>
                <div class="pt1 pr1 pl1 pb2">
                    <p class="h6">Thẻ thanh toán</p>
                    <p class="p-small mt05 gray">30 Notes</p>
                </div>
            </div>
            <div class="w50 bg-white-1 border-radius pt05 pb05 pr1 pl1">
                <p class="h6">Thứ hai</p>
                <p class="h5">22, tháng 5</p>
                <div class="border-left-1 mt05 pl05">
                    <p class="h6">Họp với team...</p>
                    <p class="p-small">Online</p>
                    <p class="p-small gray">10:00-11:30</p>
                </div>
            </div>
        </div>
        <div class="mt1 bg-white-1 border-radius">
            <div class="f jcb bg-blue-1 white border-radius pt05 pr1 pl1 pb05" style="border-radius: 8px 8px 0 0">
                <p class="h5">Công việc trong ngày</p>
                <p class="h7">></p>
            </div>
            <div>
                <div class="f fdc pl05 pr05 pt05 pb05">
                    <div class="f jcb">
                        <p class="h7 border-left-2 pl05">Gọi điện cho Nhà cung cấp</p>
                        <input type="radio" name="check" id="">
                    </div>
                    <div class="f jcb aic mt05">
                        <div class="bg-gray-1 w70 h6px border-radius">
                            <div class="bg-red-1 w80 h6px border-radius"></div>
                        </div>
                        <div>
                            <p class="h7 red">15:49s</p>
                        </div>
                    </div>
                </div>
                <hr class="w90 bg-gray-1 mt0 mb0">
                <div class="f fdc pl05 pr05 pt05 pb05">
                    <div class="f jcb">
                        <p class="h7 border-left-2 pl05">Gọi điện cho Nhà cung cấp</p>
                        <input type="radio" name="check" id="">
                    </div>
                    <div class="f jcb aic mt05">
                        <div class="bg-gray-1 w70 h6px border-radius">
                            <div class="bg-red-1 w10 h6px border-radius"></div>
                        </div>
                        <div>
                            <p class="h7 gray">15:49s</p>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import MyChart from './MyChart.vue'

@Component({
  components: {
    MyChart,
  },
})
export default class Body extends Vue {
  @Prop() private msg!: string;
}
</script>

<style lang="scss">

</style>