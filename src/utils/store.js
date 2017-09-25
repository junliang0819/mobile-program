export default {
  getShopId() {
    return localStorage.getItem('shop_id')
  },
  setShopId(id) {
    localStorage.setItem('shop_id',id)
  }
}