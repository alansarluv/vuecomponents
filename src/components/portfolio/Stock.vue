<template>
  <div class="col-sm-6 col-md-4 mb-3">
    <div class="card">
      <div class="card-header text-left bg-success text-white">
        <p class="mb-0">
          {{ stock.name }}
          <span>(Price: {{ stock.price }} | Quantity: {{ stock.quantity }})</span>
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
                  @click="sellStock"
                  :disabled="quantity <= 0">Sell</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  props: ['stock'],
  data() {
    return {
      quantity: 0
    }
  },
  methods: {
    ...mapActions({
      placeSellOrder: 'sellStock'
    }),
    sellStock () {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity,
      }
      this.placeSellOrder(order)
      this.quantity = 0
    }
  }
}
</script>
