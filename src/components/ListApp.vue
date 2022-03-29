<template>
  <div class="mt2">
    <ul id="list-app" class="f mln5 mr0 fw " style="width: calc(100% + 5em)">
      <li class="ml5 mb2 f fdc aic" style="width: calc(14.28% - 5em)" v-for="item in Apps" :key="item.message">
        <img class="w100" :src="item.imgApp" alt="">
        <p class="align-c p-small white" style="width: 64px">{{item.nameApp}}</p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator';

export default Vue.extend({
  el: '#list-app',
  data() { 
    return {
      Apps: [
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
        },
        {
          imgApp: 'https://s3-alpha-sig.figma.com/img/a9b9/167b/60a09f8091c36aa2ea5fbc4ac1d94304?Expires=1649635200&Signature=VVOZ~r3oZ83x24EupwNWxagyOnCGh07urgTcbZyOYxtfJ4nupDiimn4UX8vMcq9gZmXJKlwt6SiT9mvOFXMJdvdAHhacWLqjo2Q87FhVfKnlOdF5qunRo3c3stgW7SxORd0xsenDbcPonkDUJVqGjNEIdfC6sBg9RoiIvkPV1ZwiWuONvnV0CRBDFt7xLHgp9T6uWiUcTPwh9SMN23sxH9r3tvFqskFiNy5qc7yV5scBbe1K~pdRXxU3Kh5mUEYhDKYmzFg7Gdmie3JYkjfhU16gp3tjl0v8JwrhkZaNIgDFfvjTT4~ZaCF4BTk2UXeqzTXqK6Cnuw60fWs8P4hQjA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
          nameApp: 'Trạng thái công việc'
        },
        {
          imgApp: 'https://s3-alpha-sig.figma.com/img/885a/9355/97a192125af190eb8e80081c74f1ff7c?Expires=1649635200&Signature=HAvITzcrqu-MRoI4MWBV4lzVQEAi2vsGIzCtrJbBZTSw8lKk9KKZL4cj8Q1sg20QVMd~Y9cz7quhvC0S~rbm8rzrKDF2H0C3IHs2a7dZ9kZ3ElFMpWxFK7vkwNwf58intezFbv74NzfegCW6kBlNfs~LZ63TvzBBqHEdfW7eJn~XRq8coum23kAs5wKVCm8mz60~4xYFtti0dt1rhaoPBKvhAQ7EX3kuFqeq6ALV1hR3z82M7~QdDClQutwSEwklIDuAZBGjnR8YRG-6opeDv21YlCXASB8mZ8LP0BzgywMihhagzzF4vok0~nVT16tD0Kani7kkoQlzprn8u9vSqQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
          nameApp: 'Label công việc'
        },
        {
          imgApp: 'https://s3-alpha-sig.figma.com/img/a59d/4212/7e82dcbb749d74a078a73c08034f8ebe?Expires=1649635200&Signature=MaV2ojSHEZtyOX4Yc29UL9tFZV5e7PyDGijl-bEFiMgaM7z7gokA9P63Oroo2BDDjP40D7fMWKhDzvqTqHQIJdtnW5kj0-1qe57T14Qfv9sBHKH3-n79-MskxAE1wnLQLxusYaP-lyN8y1a-uI-753mFTNLvXsfsppuVM9n3g5DSxBJt7KbfLoAfwzU-rAiatPqCniX0ugNrRzwzrCawmVryVmsQ8pEh5wY9i-4ItxK7ojO5qePuivP3XR8RmspwMY6LFn3ug6F8-2lN8O5LAf707ybOKBe0p56wwz3CX6MuR0sWl4KfnshhRawvhaOTpZ5RIQIS6Ttc~jXnUnfr-Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
          nameApp: 'Luồng công việc'
        },
        {
          imgApp: 'https://s3-alpha-sig.figma.com/img/5aa7/a359/a6d8b5eca42651a3964a633e10357b49?Expires=1649635200&Signature=Ty-M4Ysavs9eMleMTX2tk24EBxXM6xjPARMUft6Mas-r0yXg8TQPCHPQ4ihI4gK1cU-9j1XJpobbwxpmLxYvNGUFmHpA4QghAJf9FyuFS4WT-Xpt0-Kbcf-oYMqak85L39-Es6vejd3zb37t4sz16Tpyc1l-UpQYV2T5kDfcgK8tvHS6uxKYHabbxzj7z5OtkeiPjMalTxJZevAyeVUEMl3wVZW-6ZoDSLAa1biU1by~e9jpzz-FnagPJrhbO6sOuzx2AJfWknxjfvkTpHJVfKc6CauEvYbaupO-1cvmA8CnP1NRyBZuS79JqHJA7-WptDnghQ5i3D3Q7UnqCxuwzg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
          nameApp: 'Độ ưu tiên công việc'
        },
        {
          imgApp: 'https://s3-alpha-sig.figma.com/img/44ad/5d18/647bcfd80ae7a09e43db78fa064b4d42?Expires=1649635200&Signature=VzKpJVn3kyF75pD4Sa-eHpzea09GcVGZ2ZyVED9jjKrv0IRFQJIcPlZt3ncckciumMafwscPbx86Tgq1eVrEUL2Av42V3F9Tlatypj4VapPa6v6CAf81iMxOVIMXdbdVL2pdL31JcwJUWqdL6sXmZYKY3-2x8wLcGmKVpZvFYfD6IRuU-JtAyPk3HSWoAizKd5DrbGekK4q2eGKkQryaT0H9yVVr7Ldl6pS-NiBmEXUmOh3nH2xyf-L8szvCkQQGjZbR0qANFGSfZBJm~iYSQWpAnb~YKNxeDNruS6vSZYTbWOsO9kziJ3PYRgx0Z2OfYgREw0RAUYFi9ZPboCzXDA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
          nameApp: 'Bình luận công việc'
        },
        {
          imgApp: 'https://s3-alpha-sig.figma.com/img/92eb/474f/51ac5907ac2a144a56d60a747e5a97c6?Expires=1649635200&Signature=QhQvAKUxwcsZ9wqbhMyvHD9fapBTFYG7EC4UP3ZDLjzE7lSSBwrY8FZowdsEwWFdVuieVcomFBiKFI5vAkp0OWQPJ3E2wMIE5QDrcGWSD7f-DIH4Zgp058QhNZfjPeJkoGwmqz0TO-GpukAGDI5QnyefILYT~Co5-Mebvu~5wuY0DHotsWRA3PN~jkOmDaJrkS9QlmraSSxPQAP6D2uTheMIhrP4Mr8CQ6wjP~cLihBT5Vl3BLlWUAFkVOyP2FfiJUE5lt4tZ69HafALXrqv9XC2-eVR-G-01q4V3ewbySoTJbgaQI9aCBa7kr8XpX7QgZBknoVA2EMCP7ZEeXIxiQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
          nameApp: 'Tag công việc'
        },
        {
          imgApp: 'https://s3-alpha-sig.figma.com/img/a172/0cb5/8018339a43725350037a158b8e057df6?Expires=1649635200&Signature=GKydxvhuS0L65JSIn4WSin4XHXk29EFjGmJLtqV6j0Rmt1rV2KZ-cJXWGqQtXC603eINDNkgUDi6UC2Z-Lr9kK9ihw8aG0OGPf-j9rDnD2xJpyqaYefuRjWn3B2TahnOepyCnOAOdC6-PC3ncNWUGgC0LqtgGp8iSsdUqOk1iuodJrzahsfaEfV68T91yNNb5PrizEQWonWQhrouBuJjrP7VFJotJcJFJ3fxsv6p4W1XClC0oJE5ybBFgZD57kol~gIhWoUdOXkg1RYIvDsvUcodO2gG~t-8PBJLrXwsx1KQInjMXVPxZZQbjzqjXvaKoWNyDDY-o-gBEbe~drRkCQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
          nameApp: 'Danh mục dự án'
        },
        {
          imgApp: 'https://s3-alpha-sig.figma.com/img/af14/0f6d/f0bc8752215bb77fd9ee4cc70e0239c9?Expires=1649635200&Signature=hnmbiPmcprCOmM7987cMSgu7OUSlewrSi3-XFVX5rcCNFATLc3mxNdXRQ1H6F7ULRUqA6BqardXbzPmyAbj3yvV3WrUOsi8SkxIk3CUG3HM1lSQTlnXxjO6MMzFpcfNYPO~8cwMwUND2tCG0NtZZCwu~W0SvWYJU-PN0Kc4pMDiJA4KQ4IX~u29X7BVK~8EynYYhQVDLK6Gku08P3lymB-F4PzguW39Z4rx06JSOH6-BNvD7eKYg~7asjqrVhEyDIY-7XvJMmTbISdUT5TFWvPJGTwzUsXYndmtklXrgsCveMNODTe0TQBySjtFJZht14ro-BFYTTOKx-i-4P2xrzQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
          nameApp: 'Trạng thái dự án'
        },
        {
          imgApp: 'https://s3-alpha-sig.figma.com/img/3452/2413/f1bb071a33a122b3eaa39558041851a7?Expires=1649635200&Signature=COFzBSakfjig0tbXnSu9~ERB7Xf8VdBLT16TbqbcuEF3l5rjIoRe31GjEyv0PZL8EjFnLdgXrW5ArdETEiPpEdEJbXKoTqJ4-j6EJyBmYo3oMRS~ucWogI5T4OHmjr~hfcmdVhBSpC2NvGB2SpOh22RqRSplkJVujpkTnxE4brsBV6Ea1LLzeMgP8ZfQIkNLszF9ey7OR7tywb02mLkr~-o02dz536S8h0O1YfUGb1PVQZ040VkKWHeCD4etDoxaT-s1cctQ1onLFfsdRPEIcTU~r4Cyc42yYSYCyONEDQu02KTNKmoO-Vo2M2EoWmvPjVAjcSJ-dlnctuLej0HTsQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
          nameApp: 'Mục tiêu dự án'
        },
        {
          imgApp: 'https://s3-alpha-sig.figma.com/img/9be2/458a/88eb1b6375ee78c91396a61145a2e9ff?Expires=1649635200&Signature=TtqsBdIa~4l33OtyvJtete1UE64L9vegbpuEKJn~kI3BVsWK7BkLYESlVZ~Kbu0dLEtC2mWY3kZqK8Rzhi-pjSAIDbiGogg8VDivW-IHXB2WdmvblCqIF9sYHiJlIum3TLjQAN~gttf9G3H3W5Y5660zWC6UKHy-HA64h2QWLk88iyGCfYqG8Dn6kkQapycsyWrhFvJ3W0369Rxu9KPSNJCozvbqDc1V2-d9XT65Bt0HA-IBwzjw8X2h-MLzlGgyKHsM7bSy1oy~bGijqasCoMuI6oLOiOVT2BviAems6VNxouXOjCgg8hkauNNu5B4Lm00dMgqJDf1vKUetZr5GdQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
          nameApp: 'Mục tiêu dự án'
        },
        {
          imgApp: 'https://s3-alpha-sig.figma.com/img/fe84/d1e4/035452ef0ad99be43c8c66754d6a69c6?Expires=1649635200&Signature=YkUmWVGXbo3e38WSUbvp2Bra9DJ9RfVNEtACz571ElbBP32YO8gGi~JBXBoN7T3pd5C92hofIoiqE~B00l4xTK8Qg5KJFXFqKuIP4zXtjEf4z1~rkpMsbMs~yRHyhdI3H-Kr4fHivSexmZtaRmwdsSF-4rngwdf4K16HuyPfkH3W~~yffxy6bisudRBy0DMxEDMyJfi0ijlGC73yLTyD1myahlmsgnBXOEdq9vedWpGh2Nu1twhsItLMsxA42zEEgK~GnEETRzHXjmoWOYcTVcQ5lTLhDQ~1S2YWMy-h3UxHWa1gWuM0N9aFJAjbWt4W9DxgUpxBPY3lH~6QoLfGcA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
          nameApp: 'Mô hình dự án'
        }
      ]
    }
  }
})
</script>

<style lang="scss" scoped>

</style>