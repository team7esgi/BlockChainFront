<template>
    <nav>  
        <v-app-bar color="teal accent-4" dark justify-center>

            <v-toolbar-title  class="hidden-sm-and-down" mx-10>Real Estate MarketPlace </v-toolbar-title>
            <v-spacer class="hidden-sm-and-down" mr-10></v-spacer>
            
            <v-btn outlined class="mr-10" router :to="{path: '/'}">
                <span class="hidden-sm-and-down">MarketPlace</span>
                <v-icon right>mdi-storefront</v-icon>    
            </v-btn>
            <HouseFormPopUp/>

            <v-btn outlined class="mr-10" router :to="{path: '/myhouses'}">
                <span class="hidden-sm-and-down">My houses</span>
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