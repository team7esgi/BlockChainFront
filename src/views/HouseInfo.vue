<template>
    <div pa-10>
        <v-layout row ma-5 justify-center>
            <v-flex xs12 sm5 lg3 ma-2 text-center>
                Owned by :
                <v-btn rounded outlined color="primary">
                    {{house.owner}}
                    <v-icon>mdi-account</v-icon>
                </v-btn>
            </v-flex>
            <v-flex xs12 sm5 lg3 ma-2 text-center>
                Price : {{house.price}} Ethernum
                <v-btn fab small color="primary">
                    <v-icon>mdi-cart-plus</v-icon>
                </v-btn>
            </v-flex>
        </v-layout>
        <div>

        </div>
        
        <h3 class="text-center">
            {{house.title}}
        </h3>
        <v-img contain height="450" src="@/assets/house.jpg"></v-img>
        <h4 class="text-right">
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

    </div>
</template>
<script>
export default {
    data() {
        return {
            house : {
                "id":"1",
                "surface":120,
                "category":"house",
                "nbRoom":3,
                "nbBedRoom":2,
                "others":[
                    {
                        "id": 0,
                        "item": "micro-onde",
                        "description": "micro onde 200w"
                    },
                    {
                        "id": 1,
                        "item": "Parking",
                        "description": "2 places de parking"
                    },
                    {
                        "id": 2,
                        "item": "Climtisation",
                        "description": "Climatisation récemment ramoner par une société connu mondialement dans le quartier"
                    },
                ],
                "about":"Maison à rénover près de république",
                "title":"Maison de 120 m² près de république",
                "address":{
                    "streetName":"12 boulevard richar lenoir",
                    "city":"Paris",
                    "zipCode":"75011",
                    "country":"France",
                },
                "price": 10,
                "owner":"Djadji"
            }
        }
    }
}
</script>