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
    <div class="bg-white border-radius" style="width:35%">
        <div>
            <div>

            </div>
            <div>

            </div>
        </div>
        <div>

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