<template>
    <v-row justify="center">
        <v-dialog
        v-model="dialog"
        persistent
        scrollable
        max-width="800px"
        >
        <template v-slot:activator="{ on, attrs }">  
            <v-btn outlined class="mr-10" slot="activator" v-bind="attrs" v-on="on">
                <span class="hidden-sm-and-down">Sell a house</span>
                <v-icon right>mdi-cart-arrow-up</v-icon>    
            </v-btn>
        </template>
        <v-card>
            <v-card-title>
            <span class="headline">Enter the house informations</span>
            </v-card-title>
            <v-card-text>
                <v-container>
                    <v-row>
                        <v-col cols="12">
                            <v-text-field
                            label="Title of the advertisement*"
                            required
                            v-model="houseTitle"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field
                            label="Description of the advertisement*"
                            required
                            v-model="houseAbout"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field
                            label="Price of the house in ether*"
                            type="number"
                            required
                            v-model="housePrice"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <h2>Location</h2>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                            <v-text-field
                            label="StreetName"
                            v-model="houseStreetname"
                            required></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="3">
                            <v-text-field
                            label="City"
                            v-model="houseCity"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="2">
                            <v-text-field
                            label="ZipCode"
                            type="number"
                            required
                            v-model="houseZipCode"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="3">
                            <v-text-field
                            label="Country"
                            v-model="houseCountry"
                            required
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <h2>Details</h2>
                        </v-col>
                        <v-col cols="12" sm="6" md="3">
                            <v-select
                            :items=nbRoomItems
                            label="Number of room*"
                            required
                            v-model="houseNbRoom"
                            ></v-select>
                        </v-col>
                        <v-col cols="12" sm="6" md="3">
                            <v-select
                            :items=nbBedRoomItems
                            label="Number of bedroom"
                            required
                            v-model="houseNbBedRoom"
                            ></v-select>
                        </v-col>
                        <v-col cols="12" sm="6" md="3">
                            <v-select
                            :items=houseCategoryItems
                            label="Category of the house*"
                            v-model="houseCategory"
                            required
                            ></v-select>
                        </v-col>
                        <v-col cols="12" sm="6" md="3">
                            <v-text-field
                            label="Surface in m²*"
                            required
                            type="number"
                            v-model="houseSurface"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12">
                            <h2>More informations</h2>
                        </v-col> 
                        <br>
                        <v-row v-for="other in houseOthers" :key="other.id">
                            <v-col cols="4">
                                <v-text-field
                                label="Title"
                                v-model="other.item"
                                required></v-text-field>
                            </v-col>
                            <v-col cols="7">
                                <v-text-field
                                label="Description"
                                v-model="other.description"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="1">
                                <v-btn color="red" icon @click="removeItemFromList(other)">
                                    <v-icon>mdi-minus</v-icon>
                                </v-btn>
                            </v-col>
                        </v-row>
                        
                        <v-col cols="12">
                            <v-btn color="primary" right @click="addNewElemToListOfOher">
                                <span>Add an element</span>
                                <v-icon right>mdi-home-plus-outline</v-icon>
                            </v-btn>
                        </v-col>
                    </v-row>

                </v-container>
                <small>*indicates required field</small>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    color="error"
                    text
                    @click="dialog = false">
                    Close
                </v-btn>
                <v-btn
                    color="primary"
                    text
                    @click="createHouse()">
                Save
            </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
  </v-row>
</template>

<script>

export default {
    methods:{
        addNewElemToListOfOher(){
            this.houseOthers.push(
                {
                    id:this.houseOthersNbElem,
                    item :'',
                    description: ''
                })
                this.houseOthersNbElem++
                console.log(this.houseOthers)
        },
        removeItemFromList(other) {
            this.houseOthers.splice(this.houseOthers.indexOf(other),1)
        },
        createHouse(){
            var house = {
                surface: this.houseSurface,
                category: this.houseCategory,
                nbRoom: this.houseNbRoom,
                nbBedRoom: this.houseNbBedRoom,
                others: this.houseOthers,
                about: this.houseAbout,
                title: this.houseTitle,
                address:{
                    streetName: this.houseStreetname,
                    city: this.houseCity,
                    zipCode: this.houseZipCode,
                    country: this.houseCountry,
                },
                price: this.housePrice,
            }
            console.log(house)
            this.dialog = false
        },
    },
    data: () => ({
      dialog: false,
      houseTitle:'',
      houseSurface:'',
      houseNbRoom:'',
      houseNbBedRoom:'',
      houseCategory:'',
      houseStreetname:'',
      houseCity:'',
      houseZipCode:'',
      houseCountry:'',
      housePrice:'',
      houseOthersNbElem:0,
      houseOthers:[],
      houseAbout:'',
      houseCategoryItems : ['house', 'villa/loft', 'appartement'],
      nbBedRoomItems : ['0','1','2','3','4','5+'],
      nbRoomItems : ['1','2','3','4','5','6+'],
    }),
}
</script>