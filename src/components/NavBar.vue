<template>
  <div class="w100 mt4 f jcc">
    <div id="listAppNav" class="border-radius" style="width: 806px; background-color: rgba(255, 255, 255, 0.4)">
        <img style="width: 62.5px" v-for="item in listAppNav" :key="item" :src="item.img" alt="">
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator';

export default Vue.extend({
  el: '#listAppNav',
  data() {
      return {
          listAppNav : [
              {img: "https://s3-alpha-sig.figma.com/img/3a54/094e/a5160dfb44e90c63cfa06cc6cdd3a069?Expires=1649635200&Signature=Bjm4SnqI0kSCTWlbEMdcQsKNINAx6-T9XdBeyQiEbdpaG7MIudHNpuZcB3w~ZYDUTBZaT~siw59KgpIJ7rTcmDD1~CUjPYSaLkBhLue-IYJT8eETYAk~GZU8IKwTf0fb-DO1goapYK3-h0eiKdLy-PSHZBPpFXwKVwkX8tFT1pess6WNAp4XqLv5zLF9va3xHj-jylI0jz6lCM1MMb1tEjq758FU8tTP9w5tAm9Rca826rNWLBP3xc-v-12TvknTFjMdMo171KX9c-jJKiY9rlvstk6KpuZkOTek0ViGYxpHJzFKoNj0xHNiUtX7rT~9lY4XVbtiDmyUKUmlJl9V7w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"},
              {img: "https://s3-alpha-sig.figma.com/img/a415/e4c0/bd8d87b19486a80559c9a3c5125d8325?Expires=1649635200&Signature=S9Z-2bHH~AnGP10GY3-hZqaLk-AGPxje0rzCk3o6t36SW~rQIlgmdgeCNbCbrTaf5bal5iaDSumkwF6iZ0xFcDYA1UqLZ~iBWb5d15Tm~76TTMkbp3g0fKN-Z15AKt1AvO09lffpuVB4fFwoQQN2wviRBk5z3xP0ChZhcCRSM27cLZQrLpPbfFoGTvQeIkzhZ4n4Ccyo0zFcU1TkNIGRa70uDx70NFA9vxwxIyUtpbIXceJ-82rLpvPM8Ui2UHr8hV9LqgkuB4qI5ALoJVmWNTyW99BRuMrL6qD8yI2wksoeYCPcc23z0O6xbvkyj1YYpGm~nW9TtmlrKTfXbGbC3A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"},
              {img: "https://s3-alpha-sig.figma.com/img/5466/077d/f594833397a3a9f5c6ef74b9d2985d02?Expires=1649635200&Signature=aNxuSuia7VtNwFnOVGIAc7kbECTIMEAds4pHyXKCHSmCxuRAi87USUyN2aF1os5dOSTskJ8Wpa~tjdHi~enmB620PGu9c3OrVtBa-0TAmUq9t5v-4DTLOTUW2I4uAWRjGPrQhEc8lKscNC8BJPtBoTLg0Ks~BmLqOeUPf8JWctfZqVy8vnhlUHuxfWxUnKD5lnS4IL5BTvDUMKctbJd0BYe1Nt-6uzBMsrJwx88LY5w~ONlIdAZEGmLct8AV-SofgXJDJRbWg6LX2YnC24IUsNwqplcJJTIZfdtVYr3h~dIyi7ogjKs4Z1XBYj664brBAJmPQWhY9TAmQk44Rdlwtg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"},
              {img: "https://s3-alpha-sig.figma.com/img/754f/35ae/281991879a9816296a9b9ba24893b876?Expires=1649635200&Signature=DlSZGOoxhISD95ozoe7aJn~yv-SJuT8d-YkXlQ93UE37W7GMlpCAvUzIEEFaNblqA37DPV2ep98RlN7lyVPLDYK9CuPx~OmAY-QB9E1sFI08VNEv8a1CroCOkczXRgY7woSopYoLIZkNe4vh2fqnaSJcwt3nG1137IBf7A7sYe8NMzTLsM2276L-VHiuKyOdXvf9UGZfnCHlSTKTWLQdkedknf9RUQ8mliA~8OtHhgXuHcBKGVqyg6XVvWuTIyPlFubCKmc9koCQg42-3PyNB0E3cgGsGjpqN0LhBjaMmPOHtX53tQYiHm3xxKIaDjmeZZlWr-I4PKcH43x0QQXaCQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"},
              {img: "https://s3-alpha-sig.figma.com/img/735c/1d32/6b4061658467cebfc010beee7dfb2f4d?Expires=1649635200&Signature=Lkp75p2z9PxPopAbBslob6uGzyJwf9DXLvQ1GdgpKBgYfOGed8UJYWzajv0a~gRNt-HAvVntsMS5olQGgkqoRaXKuLSIdnYgRokgSHg5WO8SpONXZXooyBLbKbwRXGHhuTiinjNFRFWa216M4cJdpfSpGB-e1rMyguNdIvKR1xPtdX0rREUguRhCM3nhHsKLRUXijyNpXEZcZTylDRY33WFTPiWpGEk8-E2OxxzhdhBRZNaC1RKNwJFMCuW4N1NCFb1OqvPqUXxdF5XdMQvvOYUia7tT~oZ6xeawg48FdphQChJLVZJA~Vb1No1NhWVdvYUlWftUdDrYC9S2GnvqvQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"},
              {img: "https://s3-alpha-sig.figma.com/img/30f0/b3dc/8117e71823d6ca6f5e577646b97d0707?Expires=1649635200&Signature=b0hYygq2AYwgG6~lVv3cK3vg9Nse~WAt-72i9aZ4GlsZsusJKWlPmd9Y-mT8KFpRfspc2vQ-ZvdFOee5c4RHttmWltpIhoz3X9VzPBI~Ahdc6re8KjvnMCDlYgCdJW9rj3dXKnX9dGJWeYaAdW3Jx1RHG-KwbgxSUicMV-rz1z1uHgdmrJtjH7KyhcLFoIAKGarPMKCVNFAj-mm85cZ7-lIHge4In6KvJSY4piBbzHOS5t6wamtuSgadhQ~QH-WHpX3SijLkVoAT5AawC8~qygNjHZN0oPVFa0sS6jHGfmQ~qJ6kl-PhMQux0T3LXH-xCzLUcDDGbOzbng6gGFv9Pw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"},
              {img: "https://s3-alpha-sig.figma.com/img/da7f/86a2/f64818f2168b865eabe1a1294d5df2cf?Expires=1649635200&Signature=cQVvNllcv-SKajKnTn7AM2AQyW3NqUW7QyW-YrTFqEahBNuiWrpr5YRTx66QO9WViSuF95jpl6x8BE4qAfFGJe4t6Oytq0Frk5IB9Q2sstoj22cDwWUQcgregaFM3pBtsOBswRzSaTA72g-4uYopzsiAD0GIHGmAxOUjSA0Hv8K2TKjTy6~CoklZDYUr1hKwO6WaYiwqHgzRW~QwakwEmqhQnTbdxo~FSAwqVmHtDz~DPAIefu7sQBuc1mbyn2AezGupP~SOwMRQkpJO228fb-XwYpfjEXuiOXvqcJj9zLPVxmjBesgBaapFlhHsjNPEbXHG0FqIAueWnYe8PWwe~A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"},
              {img: "https://s3-alpha-sig.figma.com/img/69c1/3256/1ae414205e3ce013656ee1e8f301f888?Expires=1649635200&Signature=PLSBxdcCshgP5blvmjJbp1eSjTRAKgAJGuD9hmijYm0d~lBTT3aWvmbKQ5SgcHrHX28Ek9HfXHFFbb2lWsb6F~jN1~b7mH4cLgiILjkpKqv5iPF5KqPYk-BZb1fLt13ilau7qVqTOQzHeTIsycBoJKfkZNJ1eV-EaB9KUwUCQ4uuRYOsCosWmMObdSmD7LTuJyYc7fe1F2k3WWXF3sb2CIu0pyLC407gL0hvfaxWjMK5zZ3UTDpA2lIOWj7-S7t8tm3FT-sgeqZPLBWbn6YYOZbh6vX4WQvkfr4hsz6SwvaL-07Ewd6HURuREfII43cV66a~ZaZyQPbC~4s3HY8jsg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"},
              {img: "https://s3-alpha-sig.figma.com/img/7e58/6f8b/49857351c8472fb56faf77b1481ceeaa?Expires=1649635200&Signature=US1rZIxhJFugU8RwWN6rjgQHWQ3X1U3VEvXBw0AczHnb-74QoCD7ngE~gaU2u-ZomYODxaw~86OTr0-cGUb~RIv9JRePRO4Sl60OpF45GYxBdNFkwP1vvVbIrMzZS0RobfBN3WmnLrNPK66VXxdDrYjOlmNlb2B7OQkBF~3cYsXZdqd33l~Vi1TyayNhYLVK-UldfjIol3Kgyf~wOEB4QRRoMqWoceL1EnTuPffeLAABFqIcXEEDOiYXMXEdqGUWc1Wa0tIuAS8R5oL8Zm4vqFyiP1XgH8FAkpHOEh0vZvo2usRmxwg92Pj-OsKFY2sp-scVHZDR5rR9J9Voh66auQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"},
              
          ]
      }
  }
})
</script>

<style lang="scss" scoped>

</style>