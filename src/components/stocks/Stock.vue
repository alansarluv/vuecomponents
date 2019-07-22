<template>
  <div class="col-sm-6 col-md-4 mb-3">
    <div class="card">
      <div class="card-header text-left bg-info text-white">
        <p class="mb-0">
          {{ stock.name }}
          <span>(Price: {{ stock.price }})</span>
        </p>
      </div>
      <div class="card-body">
        <div class="float-left">
          <input type="number"
                  class="form-control"
                  placeholder="Quantity"
                  v-model="quantity"
                  :class="{ 'red-border': insufficientFunds }">
        </div>
        <div class="float-right">
          <button class="btn btn-success"
                  @click="buyStock"
                  :disabled="insufficientFunds || quantity <= 0">
                  {{ insufficientFunds ? 'Margin' : 'Buy' }}
                  </button>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
  .red-border {
    border: 2px solid red;
    box-shadow: none;
  }
  .form-control:focus {
    box-shadow: none;
  }
</style>
<script>
export default {
  data() {
    return {
      quantity: 0
    }
  },
  props: ['stock'],
  computed: {
    funds () {
      return this.$store.getters.funds
    },
    insufficientFunds () {
      return this.quantity * this.stock.price > this.funds
    }
  },
  methods: {
    buyStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      }
      this.$store.dispatch('buyStock', order)
      this.quantity = 0      
    }
  }
}
</script>
