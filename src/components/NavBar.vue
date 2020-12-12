<template>
    <nav>  

        <v-app-bar color="blue darken-1" dark>

            <v-toolbar-title  class="mx-16">Real Estate MarketPlace </v-toolbar-title>

            <v-btn outlined class="mx-15" router :to="{path: '/'}">
                <span>MarketPlace</span>
                <v-icon right>mdi-storefront</v-icon>    
            </v-btn>
            
            <v-btn outlined class="mr-15">
                <span>Sell a house</span>
                <v-icon right>mdi-cart-arrow-up</v-icon>    
            </v-btn>

            <v-btn outlined class="mr-15" router :to="{path: '/myhouses'}">
                <span>My houses</span>
                <v-icon right>mdi-home</v-icon>    
            </v-btn>
            <v-spacer></v-spacer>

            <v-spacer></v-spacer>
        </v-app-bar>
      
        <v-spacer></v-spacer>
    </nav>
</template>

<script>
export default {
    data() {
        return{
            links: [
                { icon: 'mdi-storefront', text: 'MarketPlace', route: '/projects' },
                { icon: 'mdi-home', text: 'My houses', route: '/myhouses' },
                { icon: 'mdi-cart-arrow-up', text: 'Sell a house', route: '/team' },
            ]
        }
    }, 
}
</script>