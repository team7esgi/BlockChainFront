<template>
    <v-row justify="center">
        <v-dialog
        v-model="dialog"
        persistent
        scrollable
        max-width="800px"
        >
        <template v-slot:activator="{ on, attrs }">  
            <v-btn icon color="primary" slot="activator" v-bind="attrs" v-on="on">
                <v-icon>mdi-information-outline</v-icon>
            </v-btn>
        </template>
        <v-card>
            <v-card-title>
                {{house.title}}
            </v-card-title>
            <v-card-text>
                <v-container>
                    <v-img contain height="450" src="@/assets/house.jpg" mt-10></v-img>
                    <h4 class="text-right" >
                        {{house.address.streetName}}, {{house.address.zipCode}}, {{house.address.city}}, {{house.address.country}}
                    </h4>

                    <v-layout row ma-5 justify-center>
                        <v-flex xs12 sm5 md5 lg3 mx-2 text-center>
                            <span style="font-size:1.1em">
                                Number of Room :
                            </span>
                            <br>
                            <span style="font-size:1.5em" font-weight-bold>
                                {{house.nbRoom}}
                            </span>
                        </v-flex>
                        <v-flex xs12 sm5 md5 lg3 mx-2 text-center>
                            <span style="font-size:1.1em">
                                Number of Bedroom :
                            </span>
                            <br>
                            <span style="font-size:1.5em" font-weight-bold>
                                {{house.nbBedRoom}}
                            </span>
                        </v-flex>
                        <v-flex xs12 sm5 lg3 mx-2 text-center>
                            <span style="font-size:1.1em">
                                Surface in m² :
                            </span>
                            <br>
                            <span style="font-size:1.5em" font-weight-bold>
                                {{house.surface}}
                            </span>
                        </v-flex>
                    </v-layout>
                    <h3 ma-5>About </h3>
                    <div pa-5>
                        {{house.about}}
                    </div>
                    
                    <h3 ma-5>More info </h3>
                    <v-simple-table ma-5>
                        <template v-slot:default>
                        <thead>
                            <tr>
                            <th class="text-left">
                                Information
                            </th>
                            <th class="text-left">
                                Description
                            </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="elem in house.others" :key="elem.item">
                                <td>{{ elem.item }}</td>
                                <td>{{ elem.description }}</td>
                            </tr>
                        </tbody>
                        </template>
                    </v-simple-table>
                </v-container>
            </v-card-text>
            <v-card-actions>
            <v-spacer></v-spacer>
                <v-btn
                    color="error"
                    text
                    @click="dialog = false">
                    Close
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
export default {
    props: {
      house : {
            id: String,
            surface: String,
            category: String,
            nbRoom:  String,
            nbBedRoom: String,
            others:[],
            about:String,
            title:String,
            address:{
                streetName: String,
                city: String,
                zipCode: String,
                country: String,
            },
            price:  String,
            owner: String,
           }
    },
    data: () => ({
      dialog: false,
    })
}
</script>