<template>
    <nav>  
        <v-app-bar color="teal accent-4" dark>

            <v-toolbar-title  class="mx-10">Real Estate MarketPlace </v-toolbar-title>

            <v-btn outlined class="mr-10" router :to="{path: '/'}">
                <span>MarketPlace</span>
                <v-icon right>mdi-storefront</v-icon>    
            </v-btn>
            
            <HouseFormPopUp/>

            <v-btn outlined class="mr-10" router :to="{path: '/myhouses'}">
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
import HouseFormPopUp from './HouseFormPopUp'

export default {
    components: {
        HouseFormPopUp
    },
    data() {
        return{
        }
    }, 
}
</script>