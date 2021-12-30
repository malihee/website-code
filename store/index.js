import Vuex from 'vuex'
const createStore = () => {
  return new Vuex.Store({

    state: {
      cart_products: []
    },
    getters: {
      cartProducts: state=> {
        console.log('cp', state.cart_products);
        return state.cart_products
      }
    },
    actions: {
        async saveUser(context, { username, email, password }) {
        
          const data = {
          //   id: uuid(),
            username,
            email,
            password,
            timestamp: new Date().getTime()
          }
            try {
              const res= await this.$axios.post('https://my-json-server.typicode.com/malihee/website/register', data)
              console.log('res is ',res);
            } catch (error) {
              alert('catch')
              console.error(error)
            }
          },
        async fetchcart(context, userId){
          const cart = []
          console.log('cart ppp1', context.state.cart_products);

           await fetch('https://my-json-server.typicode.com/malihee/website/cart?userId=1')
           .then(res => res.json()).then(data => context.state.cart_products = data[0])
           console.log('cart ppp', context.state.cart_products);
        },
        async addToCart(context, {product , amount}){
          // console.log('cart p', this.cart_products);
          console.log('producttt',product);
          const index = context.state.cart_products.products.findIndex((item) => item.productId == product.id)
          console.log('ind:', index);
          if (index == -1){
            context.state.cart_products.products.push({"productId": product.id, "quantity":amount})
            // const newdata = {...cart_products, products:{...products, "productId":product.id , "quantity": amount} }
            await fetch(`https://my-json-server.typicode.com/malihee/website/cart/${context.state.cart_products.id}`,{
              method:'put', 
              headers:{
                'Content-type':'application/json',
              },
              body:JSON.stringify(context.state.cart_products) 
            })
          }
          else{
            context.state.cart_products.products[index].quantity += amount
            
            await fetch(`https://my-json-server.typicode.com/malihee/website/cart/${context.state.cart_products.id}`,{
              method:'PUT', 
              headers:{
                'Content-type':'application/json',
              },
              body:JSON.stringify(context.state.cart_products)
            })
          }
          context.dispatch('dicrease_inventory', {product : product , amount : amount})
        },
        async dicrease_inventory(context,{product, amount}){
          await fetch(`https://my-json-server.typicode.com/malihee/website/products/${product.id}`,{
            method:'POST', 
            })
        },
        async increase_inventory(context,{product, amount}){
          await fetch(`https://my-json-server.typicode.com/malihee/website/products/${product.id}`,{
            method:'POST',
          })
        },
        async delFromCart(context, {product , amount}){   
          const index = context.state.cart_products.products.findIndex((item) => item.productId == product.id)
          if (amount>context.state.cart_products.products[index].quantity){
            alert('the amount is more than stock')
          }
          else{
            context.state.cart_products.products[index].quantity -= amount
          if (context.state.cart_products.products[index].quantity == 0){
            context.state.cart_products.products.splice(index,1)
          }
          await fetch(`https://my-json-server.typicode.com/malihee/website/cart/${context.state.cart_products.id}`,{
            method:'PUT', 
            headers:{
              'Content-type':'application/json',
            },
            body:JSON.stringify(context.state.cart_products) 
          })
          context.dispatch('increase_inventory', {product : product , amount : amount})

          }
        }
    },
    mutations: {}
  })
}
export default createStore