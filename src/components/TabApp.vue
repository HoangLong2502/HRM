<template>
  <div class="w100 mt2 f fw jcb" >
    <ul v-for="item in app" :key="item" id="list-app-tab" class="f mb2" style="width: 31%; height: 288px; background-color: rgba(20, 20, 20, 0.4); backdrop-filter: blur(20px);">
      <li v-for="item in item.appTab" :key="item" class="f fw pt1 pb1 pr1 pl1" style="width: calc(100% + 5em)">
        <div>
          <img style="width: 64px" :src="item.imgApp" alt="">
          <p class="p-small white align-c" style="width: 64px">{{item.nameApp}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator';

export default Vue.extend({
  el: '#list-app-tab',
  data() {
    return {
      app: [
        {
          appTab: [
            {
              imgApp: 'https://s3-alpha-sig.figma.com/img/2419/c56e/2f51e32b4a01724f41e1d52d04431224?Expires=1649635200&Signature=UOMNknB1t~2J2Kc~K~qcbRDpiZkRPQ0apovFh2~sL2cf4hZjUtXOogYER~pvgTm9ziJ4TqbDXtnWDNw97LNck4R-xTwoIe3q7Fn5rYVf0I7z714ScsWL737Oa4awDnCW6SW6sFVaPFKP1i4FTFn87tYYiAQ8aas~0C9T9IbWFBRYJGktRbVwQx-OJaXw6Ipf11aigkFVBk-2sT-A2hw2LQt6SinpUdPo4ZIud~rp2MiAC3JnNGkJ5Gmc-1NI5NXBUt9q8bPmsE5kLdmUjrE1WLoAUDVCq4ir7i41gLFBxD0CypedmNyAH1j21qogrWEmYGCJpNx-AhmAlOR-cTWDhg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
              nameApp: 'Quản lý trạng thái'
            },
            {
              imgApp: 'https://s3-alpha-sig.figma.com/img/6845/6c04/9de041afe6de95ef451d8ce0dc149005?Expires=1649635200&Signature=HLXwik8oDSpUFQDqnmOgoCG0eH8A3sZrrxMaCUhsjV2qbzfINWT-2m3j91QKqmZeCJCMAZ5ww7bjYIQDoe8-Hnt68SecS~9MUIMfy2xOJHyWVCXjcpp6TZ5mt5GWHC-sFX5ISPIL6HQWcPHdmxeRwGjPjhEDJaFcJzl~8uyyVZ-xz-LoX342Nluuid9O0A4F3eBIraSx7blW~-PRIy1GocWN8SJ2u03D02qa2M6bBxuei2hwNwCsfw2qvNrYQhrVPHoWjuxag~pdU4ynchvb20D7e6W8hkruXYHz8mOug-LSZ50TJEVa1W23xHr0nyee7N0F5OR4JpXb1If7GYNByg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
              nameApp: 'Quản lý nhân sự'
            },
            {
              imgApp: 'https://s3-alpha-sig.figma.com/img/92eb/474f/51ac5907ac2a144a56d60a747e5a97c6?Expires=1649635200&Signature=QhQvAKUxwcsZ9wqbhMyvHD9fapBTFYG7EC4UP3ZDLjzE7lSSBwrY8FZowdsEwWFdVuieVcomFBiKFI5vAkp0OWQPJ3E2wMIE5QDrcGWSD7f-DIH4Zgp058QhNZfjPeJkoGwmqz0TO-GpukAGDI5QnyefILYT~Co5-Mebvu~5wuY0DHotsWRA3PN~jkOmDaJrkS9QlmraSSxPQAP6D2uTheMIhrP4Mr8CQ6wjP~cLihBT5Vl3BLlWUAFkVOyP2FfiJUE5lt4tZ69HafALXrqv9XC2-eVR-G-01q4V3ewbySoTJbgaQI9aCBa7kr8XpX7QgZBknoVA2EMCP7ZEeXIxiQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
              nameApp: 'Quản lý level'
            }
          ]
        },
        {
          appTab: [
            {
              imgApp: 'https://s3-alpha-sig.figma.com/img/2419/c56e/2f51e32b4a01724f41e1d52d04431224?Expires=1649635200&Signature=UOMNknB1t~2J2Kc~K~qcbRDpiZkRPQ0apovFh2~sL2cf4hZjUtXOogYER~pvgTm9ziJ4TqbDXtnWDNw97LNck4R-xTwoIe3q7Fn5rYVf0I7z714ScsWL737Oa4awDnCW6SW6sFVaPFKP1i4FTFn87tYYiAQ8aas~0C9T9IbWFBRYJGktRbVwQx-OJaXw6Ipf11aigkFVBk-2sT-A2hw2LQt6SinpUdPo4ZIud~rp2MiAC3JnNGkJ5Gmc-1NI5NXBUt9q8bPmsE5kLdmUjrE1WLoAUDVCq4ir7i41gLFBxD0CypedmNyAH1j21qogrWEmYGCJpNx-AhmAlOR-cTWDhg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
              nameApp: 'Quản lý trạng thái'
            },
            {
              imgApp: 'https://s3-alpha-sig.figma.com/img/6845/6c04/9de041afe6de95ef451d8ce0dc149005?Expires=1649635200&Signature=HLXwik8oDSpUFQDqnmOgoCG0eH8A3sZrrxMaCUhsjV2qbzfINWT-2m3j91QKqmZeCJCMAZ5ww7bjYIQDoe8-Hnt68SecS~9MUIMfy2xOJHyWVCXjcpp6TZ5mt5GWHC-sFX5ISPIL6HQWcPHdmxeRwGjPjhEDJaFcJzl~8uyyVZ-xz-LoX342Nluuid9O0A4F3eBIraSx7blW~-PRIy1GocWN8SJ2u03D02qa2M6bBxuei2hwNwCsfw2qvNrYQhrVPHoWjuxag~pdU4ynchvb20D7e6W8hkruXYHz8mOug-LSZ50TJEVa1W23xHr0nyee7N0F5OR4JpXb1If7GYNByg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
              nameApp: 'Quản lý nhân sự'
            },
            {
              imgApp: 'https://s3-alpha-sig.figma.com/img/92eb/474f/51ac5907ac2a144a56d60a747e5a97c6?Expires=1649635200&Signature=QhQvAKUxwcsZ9wqbhMyvHD9fapBTFYG7EC4UP3ZDLjzE7lSSBwrY8FZowdsEwWFdVuieVcomFBiKFI5vAkp0OWQPJ3E2wMIE5QDrcGWSD7f-DIH4Zgp058QhNZfjPeJkoGwmqz0TO-GpukAGDI5QnyefILYT~Co5-Mebvu~5wuY0DHotsWRA3PN~jkOmDaJrkS9QlmraSSxPQAP6D2uTheMIhrP4Mr8CQ6wjP~cLihBT5Vl3BLlWUAFkVOyP2FfiJUE5lt4tZ69HafALXrqv9XC2-eVR-G-01q4V3ewbySoTJbgaQI9aCBa7kr8XpX7QgZBknoVA2EMCP7ZEeXIxiQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
              nameApp: 'Quản lý level'
            }
          ]
        },
        {
          appTab: [
            {
              imgApp: 'https://s3-alpha-sig.figma.com/img/2419/c56e/2f51e32b4a01724f41e1d52d04431224?Expires=1649635200&Signature=UOMNknB1t~2J2Kc~K~qcbRDpiZkRPQ0apovFh2~sL2cf4hZjUtXOogYER~pvgTm9ziJ4TqbDXtnWDNw97LNck4R-xTwoIe3q7Fn5rYVf0I7z714ScsWL737Oa4awDnCW6SW6sFVaPFKP1i4FTFn87tYYiAQ8aas~0C9T9IbWFBRYJGktRbVwQx-OJaXw6Ipf11aigkFVBk-2sT-A2hw2LQt6SinpUdPo4ZIud~rp2MiAC3JnNGkJ5Gmc-1NI5NXBUt9q8bPmsE5kLdmUjrE1WLoAUDVCq4ir7i41gLFBxD0CypedmNyAH1j21qogrWEmYGCJpNx-AhmAlOR-cTWDhg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
              nameApp: 'Quản lý trạng thái'
            },
            {
              imgApp: 'https://s3-alpha-sig.figma.com/img/6845/6c04/9de041afe6de95ef451d8ce0dc149005?Expires=1649635200&Signature=HLXwik8oDSpUFQDqnmOgoCG0eH8A3sZrrxMaCUhsjV2qbzfINWT-2m3j91QKqmZeCJCMAZ5ww7bjYIQDoe8-Hnt68SecS~9MUIMfy2xOJHyWVCXjcpp6TZ5mt5GWHC-sFX5ISPIL6HQWcPHdmxeRwGjPjhEDJaFcJzl~8uyyVZ-xz-LoX342Nluuid9O0A4F3eBIraSx7blW~-PRIy1GocWN8SJ2u03D02qa2M6bBxuei2hwNwCsfw2qvNrYQhrVPHoWjuxag~pdU4ynchvb20D7e6W8hkruXYHz8mOug-LSZ50TJEVa1W23xHr0nyee7N0F5OR4JpXb1If7GYNByg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
              nameApp: 'Quản lý nhân sự'
            },
            {
              imgApp: 'https://s3-alpha-sig.figma.com/img/92eb/474f/51ac5907ac2a144a56d60a747e5a97c6?Expires=1649635200&Signature=QhQvAKUxwcsZ9wqbhMyvHD9fapBTFYG7EC4UP3ZDLjzE7lSSBwrY8FZowdsEwWFdVuieVcomFBiKFI5vAkp0OWQPJ3E2wMIE5QDrcGWSD7f-DIH4Zgp058QhNZfjPeJkoGwmqz0TO-GpukAGDI5QnyefILYT~Co5-Mebvu~5wuY0DHotsWRA3PN~jkOmDaJrkS9QlmraSSxPQAP6D2uTheMIhrP4Mr8CQ6wjP~cLihBT5Vl3BLlWUAFkVOyP2FfiJUE5lt4tZ69HafALXrqv9XC2-eVR-G-01q4V3ewbySoTJbgaQI9aCBa7kr8XpX7QgZBknoVA2EMCP7ZEeXIxiQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
              nameApp: 'Quản lý level'
            }
          ]
        },
        {
          appTab: [
            {
              imgApp: 'https://s3-alpha-sig.figma.com/img/2419/c56e/2f51e32b4a01724f41e1d52d04431224?Expires=1649635200&Signature=UOMNknB1t~2J2Kc~K~qcbRDpiZkRPQ0apovFh2~sL2cf4hZjUtXOogYER~pvgTm9ziJ4TqbDXtnWDNw97LNck4R-xTwoIe3q7Fn5rYVf0I7z714ScsWL737Oa4awDnCW6SW6sFVaPFKP1i4FTFn87tYYiAQ8aas~0C9T9IbWFBRYJGktRbVwQx-OJaXw6Ipf11aigkFVBk-2sT-A2hw2LQt6SinpUdPo4ZIud~rp2MiAC3JnNGkJ5Gmc-1NI5NXBUt9q8bPmsE5kLdmUjrE1WLoAUDVCq4ir7i41gLFBxD0CypedmNyAH1j21qogrWEmYGCJpNx-AhmAlOR-cTWDhg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
              nameApp: 'Quản lý trạng thái'
            },
            {
              imgApp: 'https://s3-alpha-sig.figma.com/img/6845/6c04/9de041afe6de95ef451d8ce0dc149005?Expires=1649635200&Signature=HLXwik8oDSpUFQDqnmOgoCG0eH8A3sZrrxMaCUhsjV2qbzfINWT-2m3j91QKqmZeCJCMAZ5ww7bjYIQDoe8-Hnt68SecS~9MUIMfy2xOJHyWVCXjcpp6TZ5mt5GWHC-sFX5ISPIL6HQWcPHdmxeRwGjPjhEDJaFcJzl~8uyyVZ-xz-LoX342Nluuid9O0A4F3eBIraSx7blW~-PRIy1GocWN8SJ2u03D02qa2M6bBxuei2hwNwCsfw2qvNrYQhrVPHoWjuxag~pdU4ynchvb20D7e6W8hkruXYHz8mOug-LSZ50TJEVa1W23xHr0nyee7N0F5OR4JpXb1If7GYNByg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
              nameApp: 'Quản lý nhân sự'
            },
            {
              imgApp: 'https://s3-alpha-sig.figma.com/img/92eb/474f/51ac5907ac2a144a56d60a747e5a97c6?Expires=1649635200&Signature=QhQvAKUxwcsZ9wqbhMyvHD9fapBTFYG7EC4UP3ZDLjzE7lSSBwrY8FZowdsEwWFdVuieVcomFBiKFI5vAkp0OWQPJ3E2wMIE5QDrcGWSD7f-DIH4Zgp058QhNZfjPeJkoGwmqz0TO-GpukAGDI5QnyefILYT~Co5-Mebvu~5wuY0DHotsWRA3PN~jkOmDaJrkS9QlmraSSxPQAP6D2uTheMIhrP4Mr8CQ6wjP~cLihBT5Vl3BLlWUAFkVOyP2FfiJUE5lt4tZ69HafALXrqv9XC2-eVR-G-01q4V3ewbySoTJbgaQI9aCBa7kr8XpX7QgZBknoVA2EMCP7ZEeXIxiQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
              nameApp: 'Quản lý level'
            }
          ]
        },
        {
          appTab: [
            {
              imgApp: 'https://s3-alpha-sig.figma.com/img/2419/c56e/2f51e32b4a01724f41e1d52d04431224?Expires=1649635200&Signature=UOMNknB1t~2J2Kc~K~qcbRDpiZkRPQ0apovFh2~sL2cf4hZjUtXOogYER~pvgTm9ziJ4TqbDXtnWDNw97LNck4R-xTwoIe3q7Fn5rYVf0I7z714ScsWL737Oa4awDnCW6SW6sFVaPFKP1i4FTFn87tYYiAQ8aas~0C9T9IbWFBRYJGktRbVwQx-OJaXw6Ipf11aigkFVBk-2sT-A2hw2LQt6SinpUdPo4ZIud~rp2MiAC3JnNGkJ5Gmc-1NI5NXBUt9q8bPmsE5kLdmUjrE1WLoAUDVCq4ir7i41gLFBxD0CypedmNyAH1j21qogrWEmYGCJpNx-AhmAlOR-cTWDhg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
              nameApp: 'Quản lý trạng thái'
            },
            {
              imgApp: 'https://s3-alpha-sig.figma.com/img/6845/6c04/9de041afe6de95ef451d8ce0dc149005?Expires=1649635200&Signature=HLXwik8oDSpUFQDqnmOgoCG0eH8A3sZrrxMaCUhsjV2qbzfINWT-2m3j91QKqmZeCJCMAZ5ww7bjYIQDoe8-Hnt68SecS~9MUIMfy2xOJHyWVCXjcpp6TZ5mt5GWHC-sFX5ISPIL6HQWcPHdmxeRwGjPjhEDJaFcJzl~8uyyVZ-xz-LoX342Nluuid9O0A4F3eBIraSx7blW~-PRIy1GocWN8SJ2u03D02qa2M6bBxuei2hwNwCsfw2qvNrYQhrVPHoWjuxag~pdU4ynchvb20D7e6W8hkruXYHz8mOug-LSZ50TJEVa1W23xHr0nyee7N0F5OR4JpXb1If7GYNByg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
              nameApp: 'Quản lý nhân sự'
            },
            {
              imgApp: 'https://s3-alpha-sig.figma.com/img/92eb/474f/51ac5907ac2a144a56d60a747e5a97c6?Expires=1649635200&Signature=QhQvAKUxwcsZ9wqbhMyvHD9fapBTFYG7EC4UP3ZDLjzE7lSSBwrY8FZowdsEwWFdVuieVcomFBiKFI5vAkp0OWQPJ3E2wMIE5QDrcGWSD7f-DIH4Zgp058QhNZfjPeJkoGwmqz0TO-GpukAGDI5QnyefILYT~Co5-Mebvu~5wuY0DHotsWRA3PN~jkOmDaJrkS9QlmraSSxPQAP6D2uTheMIhrP4Mr8CQ6wjP~cLihBT5Vl3BLlWUAFkVOyP2FfiJUE5lt4tZ69HafALXrqv9XC2-eVR-G-01q4V3ewbySoTJbgaQI9aCBa7kr8XpX7QgZBknoVA2EMCP7ZEeXIxiQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
              nameApp: 'Quản lý level'
            }
          ]
        },
        {
          appTab: [
            {
              imgApp: 'https://s3-alpha-sig.figma.com/img/2419/c56e/2f51e32b4a01724f41e1d52d04431224?Expires=1649635200&Signature=UOMNknB1t~2J2Kc~K~qcbRDpiZkRPQ0apovFh2~sL2cf4hZjUtXOogYER~pvgTm9ziJ4TqbDXtnWDNw97LNck4R-xTwoIe3q7Fn5rYVf0I7z714ScsWL737Oa4awDnCW6SW6sFVaPFKP1i4FTFn87tYYiAQ8aas~0C9T9IbWFBRYJGktRbVwQx-OJaXw6Ipf11aigkFVBk-2sT-A2hw2LQt6SinpUdPo4ZIud~rp2MiAC3JnNGkJ5Gmc-1NI5NXBUt9q8bPmsE5kLdmUjrE1WLoAUDVCq4ir7i41gLFBxD0CypedmNyAH1j21qogrWEmYGCJpNx-AhmAlOR-cTWDhg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
              nameApp: 'Quản lý trạng thái'
            },
            {
              imgApp: 'https://s3-alpha-sig.figma.com/img/6845/6c04/9de041afe6de95ef451d8ce0dc149005?Expires=1649635200&Signature=HLXwik8oDSpUFQDqnmOgoCG0eH8A3sZrrxMaCUhsjV2qbzfINWT-2m3j91QKqmZeCJCMAZ5ww7bjYIQDoe8-Hnt68SecS~9MUIMfy2xOJHyWVCXjcpp6TZ5mt5GWHC-sFX5ISPIL6HQWcPHdmxeRwGjPjhEDJaFcJzl~8uyyVZ-xz-LoX342Nluuid9O0A4F3eBIraSx7blW~-PRIy1GocWN8SJ2u03D02qa2M6bBxuei2hwNwCsfw2qvNrYQhrVPHoWjuxag~pdU4ynchvb20D7e6W8hkruXYHz8mOug-LSZ50TJEVa1W23xHr0nyee7N0F5OR4JpXb1If7GYNByg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
              nameApp: 'Quản lý nhân sự'
            },
            {
              imgApp: 'https://s3-alpha-sig.figma.com/img/92eb/474f/51ac5907ac2a144a56d60a747e5a97c6?Expires=1649635200&Signature=QhQvAKUxwcsZ9wqbhMyvHD9fapBTFYG7EC4UP3ZDLjzE7lSSBwrY8FZowdsEwWFdVuieVcomFBiKFI5vAkp0OWQPJ3E2wMIE5QDrcGWSD7f-DIH4Zgp058QhNZfjPeJkoGwmqz0TO-GpukAGDI5QnyefILYT~Co5-Mebvu~5wuY0DHotsWRA3PN~jkOmDaJrkS9QlmraSSxPQAP6D2uTheMIhrP4Mr8CQ6wjP~cLihBT5Vl3BLlWUAFkVOyP2FfiJUE5lt4tZ69HafALXrqv9XC2-eVR-G-01q4V3ewbySoTJbgaQI9aCBa7kr8XpX7QgZBknoVA2EMCP7ZEeXIxiQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
              nameApp: 'Quản lý level'
            }
          ]
        }
      ]
    }
  }
})
</script>

<style lang="scss" scoped>

</style>