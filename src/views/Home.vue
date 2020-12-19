<template>
    <div class="home">
        <v-card pa-5>
            <v-layout row>
                <v-flex 10 px-5 pt-5>
                    <v-text-field
                    v-model="searchLabel"
                    label="House search "
                    outlined
                    clearable
                    ></v-text-field>
                </v-flex>
            </v-layout>
            <v-container>
                <v-layout row wrap align-center>
                    <v-flex xs12 sm5 md5 lg2 mx-2>
                        <v-select
                            v-model="houseCategorySelect"
                            :items="houseCategory"
                            :menu-props="{ maxHeight: '400' }"
                            label="House category"
                            multiple
                            hint="Pick the house category you want to see"
                            persistent-hint
                            ></v-select>
                    </v-flex>
                    <v-flex xs12 sm5 md5 lg2 mx-2>
                        <v-select
                        v-model="nbRoomSelect"
                        :items="nbBedRoomItems"
                        :menu-props="{ maxHeight: '400' }"
                        label="Number of rooms"
                        multiple
                        hint="Pick the number of rooms"
                        persistent-hint
                        ></v-select>
                    </v-flex>
                    <v-flex xs12 sm5 md5 lg2 mx-2>
                        <v-select
                        v-model="nbBedRoomSelect"
                        :items="nbRoomItems"
                        :menu-props="{ maxHeight: '400' }"
                        label="Number of bed rooms"
                        multiple
                        hint="Pick the number of bed rooms"
                        persistent-hint
                        ></v-select>
                    </v-flex>
                    <v-flex xs12 sm5 md5 lg3 mx-2 class="justify-center">
                        <v-subheader>Surface of the house in m²</v-subheader>
                        <v-range-slider
                            v-model="range"
                            :max="max"
                            :min="min">
                            <template v-slot:prepend>
                                <v-text-field
                                    :value="range[0]"
                                    class="mt-0 pt-0"
                                    hide-details
                                    single-line
                                    type="number"
                                    readonly
                                    style="width: 60px"
                                ></v-text-field>
                            </template>
                            <template v-slot:append>
                                <v-text-field
                                    :value="range[1]"
                                    class="mt-0 pt-0"
                                    hide-details
                                    single-line
                                    type="number"
                                    readonly
                                    style="width: 60px"
                                ></v-text-field>
                            </template>
                        </v-range-slider>
                    </v-flex>
                    <v-flex xs1 lg1>
                        <v-btn 
                        color="error"
                        @click="clearField">
                        Clear 
                        <v-icon right>
                        mdi-close
                    </v-icon>
                        </v-btn>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-card>

        <v-layout row ma-5 justify-center> 
            <v-flex xs12 sm5 md5 lg2 mx-2 v-for="house in filteredHouses" :key="house.id">
                <v-card elevation="5" outlined pa-5 text-wrap>
                    <v-img height="200" src="@/assets/house.jpg"></v-img>
                    <v-card-title text-truncate>
                        {{house.title}}
                    </v-card-title>
                    <v-card-text >
                        {{house.nbRoom}} Room • {{house.surface}}m² • {{house.address.city}}
                    </v-card-text>
                    <v-card-subtitle text-truncate>
                        {{house.about}}
                    </v-card-subtitle>
                    <v-card-actions>
                        <v-btn rounded outlined color="primary">
                            {{house.owner}}
                            <v-icon>mdi-account</v-icon>
                        </v-btn>
                        <v-spacer></v-spacer>
                        <v-btn icon color="primary" to='/houseinfo/${house.id}'>
                            <v-icon>mdi-information-outline</v-icon>
                        </v-btn>
                    </v-card-actions>
                    <v-card-actions pa-0>
                        <v-btn block color="primary">
                            {{house.price}} Ethernum
                            <v-icon>mdi-cart-plus</v-icon>
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>

export default {
    data() {
        return {
            houses: [
                {
                    "id":"1",
                    "surface":120,
                    "category":"house",
                    "nbRoom":3,
                    "nbBedRoom":2,
                    "others":[],
                    "about":"Maison à rénover près de république",
                    "title":"Maison de 120 m² près de république",
                    "address":{
                        "streetName":"12 boulevard richard lenoir",
                        "city":"Paris",
                        "zipCode":"75011",
                        "country":"France",
                    },
                    "price": 10,
                    "owner":"Djadji"
                },
                {
                    "id":"2",
                    "surface":100,
                    "category":"villa",
                    "nbRoom":4                                                                                                                                                                                                                      ,
                    "nbBedRoom":3,
                    "others":[],
                    "about":"Maison d'architecte près de la Seine, récemment rénové",
                    "title":"Villa de 100 m² près du cimetière du père lachaise",
                    "address":{
                        "streetName":"401 allée du rigolo",
                        "city":"Paris",
                        "zipCode":"75019",
                        "country":"France",
                    },
                    "price": 25,
                    "owner":"Rafael"
                },
                {
                    "id":"3",
                    "surface":45,
                    "category":"appartement",
                    "nbRoom":2                                                                                                                                                                                                                      ,
                    "nbBedRoom":1,
                    "others":[],
                    "about":"Appartement quasi neuf, 2012, avec 1 école à 50m, 2 arrêt de bus à moins de 3min.",
                    "title":"Appartement à montréal près du centre ville",
                    "address":{
                        "streetName":"275 rue Notre-Dame Est",
                        "city":"Montreal",
                        "zipCode":"11290",
                        "country":"Canada",
                    },
                    "price": 25,
                    "owner":"France-Lise"
                },
            ],
            searchLabel: '',
            houseCategory : ['house', 'villa/loft', 'appartement'],
            houseCategorySelect: [],
            nbBedRoomItems : ['0','1','2','3','4','5+'],
            nbBedRoomSelect: [],
            nbRoomItems : ['1','2','3','4','5','6+'],
            nbRoomSelect: [],
            min: 0,
            max: 750,
            range: [0, 750],
        }
    },
    methods: {
        hello: function(){
            alert("hello")
        },
        getEstateImage(estate){
            return require('../assets/'+estate+'.jpg')
        },
        clearField(){
            this.searchLabel= ''
            this.houseCategorySelect= []
            this.nbBedRoomSelect= []
            this.nbRoomSelect= []
        },
        houseSearchFilter(house){
            if(this.searchLabel==="")
                return true
            return house.title.toLowerCase().match(this.searchLabel.toLowerCase()) ||
             house.address.city.toLowerCase().match(this.searchLabel.toLowerCase()) ||
             house.address.streetName.toLowerCase().match(this.searchLabel.toLowerCase()) ||
             house.address.country.toLowerCase().match(this.searchLabel.toLowerCase())

        },
        houseNbRoomFilter(house){
            if(this.nbRoomSelect.length==0)
                return true 
            else if(this.nbRoomSelect.includes('6+') && house.nbRoom>=6)
                return true
            return this.nbRoomSelect.some(nbRoom => nbRoom==house.nbRoom)
        },
        houseNbBedRoomFilter(house){
            if(this.nbBedRoomSelect.length==0)
                return true 
            else if(this.nbBedRoomSelect.includes('5+') && house.nbBedRoom>=5)
                return true
            return this.nbBedRoomSelect.some(nbBedRoom => nbBedRoom==house.nbBedRoom)
        },
        houseCategoryFilter(house){
            if(this.houseCategorySelect.length==0)
                return true 
            return this.houseCategorySelect.some(category => category===house.category)
        },
        houseSurfaceFilter(house){
            return (house.surface>=this.range[0] && house.surface<=this.range[1])
        }
    },
    computed: {
        filteredHouses: function(){
            return this.houses.filter((house) => {
                return this.houseSearchFilter(house) &&
                    this.houseNbRoomFilter(house) &&
                    this.houseNbBedRoomFilter(house) &&
                    this.houseCategoryFilter(house) &&
                    this.houseSurfaceFilter(house)
            })
        }
    }
}
</script>