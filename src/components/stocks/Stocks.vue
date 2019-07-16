<template>
  <div class="row">
    <app-stock v-for="(stock, idx) in stocks" :key="idx" :stock='stock'></app-stock>
  </div>
</template>
<script>
import Stock from './Stock'
export default {
  data() {
    return {
      stocks: [
        { id: 1, name: 'HMSP', price: 3050 },
        { id: 2, name: 'ICBP', price: 650 },
        { id: 3, name: 'ASII', price: 110 },
        { id: 4, name: 'TLKM', price: 2350 },
      ]
    }
  },
  components: {
    appStock: Stock
  }
}
</script>
