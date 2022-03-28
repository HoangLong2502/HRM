<template>
  <div class="w100 f mt15">
    <div class="bg-white mr15 border-radius pt1 pb1 pl1 pr1" style="width:65%">
        <p>Doanh thu công ty</p>
        <div class="f jcb aic">
            <div>
                150 tỷ
            </div>
            <div>
                <select name="" id="">
                    <option value="">quaterly</option>
                </select>
            </div>
        </div>
    </div>
    <div class="border-radius" style="width:35%">
        <div class="f boder-radius">
            <div class="bg-white mr1 border-radius w50">
                <div class="bg-orange pt1 pb1 pl1 pr1 h5 white" style="border-radius: 8px 8px 0 0;background: linear-gradient(180deg, #FFD422 0%, #F2C800 100%);">
                    Note
                </div>
                <div class="pt1 pr1 pl1 pb2">
                    <p class="h6">Thẻ thanh toán</p>
                    <p class="p-small mt05">39 Notes</p>
                </div>
            </div>
            <div class="w50 bg-white border-radius pt1 pb1 pr1 pl1">
                <p class="h6">Thứ hai</p>
                <p class="h5">22, tháng 5</p>
                <div>

                </div>
            </div>
        </div>
        <div class="mt2 bg-white border-radius">
            <div class="bg-orange border-radius pt1 pr1 pl1 pb1">
                Công việc trong ngày
            </div>
            <div></div>
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Body extends Vue {
  @Prop() private msg!: string;
}
</script>