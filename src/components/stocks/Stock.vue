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
                  v-model="quantity">
        </div>
        <div class="float-right">
          <button class="btn btn-success"
                  @click="buyStock"
                  :disabled="quantity <= 0">Buy</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      quantity: 0
    }
  },
  props: ['stock'],
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
