export default async function({ store, redirect }) {
    if (!store.state.auth.loggedIn) {
      return redirect("/auth/login");
    }
    else{
        await this.$store.dispatch('fetchcart')
    }
    // if(this.$auth.loggedIn){
    //     await this.$store.dispatch('fetchcart')}
    
}