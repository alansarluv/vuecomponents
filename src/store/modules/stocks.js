import stocks from '../../data/stocks'

const state = {
  stocks: []
}

const mutations = {
  'SET-STOCKS' (state, stocks) {
    state.stocks = stocks
  },
  'RND-STOCKS' (state) {
    state.stocks.forEach(stock => {
      stock.price = Math.round(stock.price * ( 1 +  Math.random() - 0.5))
    });
  }
}

const actions = {
  buyStock: ({commit}, order) => {
    commit('BUY_STOCK', order)
  },
  initStocks: ({commit}) => {
    commit('SET-STOCKS', stocks)
  },
  randomizeStock: ({commit}) => {
    commit('RND-STOCKS')
  }
}

const getters = {
  stocks: state => {
    return state.stocks
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}