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
                <v-icon>mdi-home-edit-outline</v-icon>
            </v-btn>
        </template>
        <v-card>
            <v-card-title>
            <span class="headline">Update the house informations</span>
            </v-card-title>
            <v-card-text>
            <v-container>
                <v-row>
                    <v-col cols="12">
                        <v-text-field
                        label="Title of the advertisement"
                        required
                        v-model="house.title"
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                        <v-text-field
                        label="Description of the advertisement"
                        required
                        v-model="house.about"
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                        <v-text-field
                        label="Price of the house in ether"
                        type="number"
                        required
                        v-model="house.price"
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                        <h2>Location</h2>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                        <v-text-field
                        label="StreetName"
                        v-model="house.address.streetName"
                        required></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="3">
                        <v-text-field
                        label="City"
                        v-model="house.address.city"
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="2">
                        <v-text-field
                        label="ZipCode"
                        type="number"
                        required
                        v-model="house.address.zipCode"
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="3">
                        <v-text-field
                        label="Country"
                        v-model="house.address.country"
                        required
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                        <h2>Details</h2>
                    </v-col>
                    <v-col cols="12" sm="6" md="3">
                        <v-select
                        :items=nbRoomItems
                        label="Number of room"
                        required
                        v-model="house.nbRoom"
                        ></v-select>
                    </v-col>
                    <v-col cols="12" sm="6" md="3">
                        <v-select
                        :items=nbBedRoomItems
                        label="Number of bedroom"
                        required
                        v-model="house.nbBedRoom"
                        ></v-select>
                    </v-col>
                    <v-col cols="12" sm="6" md="3">
                        <v-select
                        :items=houseCategoryItems
                        label="Category of the house"
                        v-model="house.category"
                        required
                        ></v-select>
                    </v-col>
                    <v-col cols="12" sm="6" md="3">
                        <v-text-field
                        label="Surface in m²"
                        required
                        type="number"
                        v-model="house.surface"
                        ></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12">
                        <h2>More informations</h2>
                    </v-col> 
                    <br>
                    <v-row v-for="other in house.others" :key="other.id">
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
                @click="updateHouse()">
            Update
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
        updateHouse(){
            console.log(this.house)
            this.dialog = false
        },
    },
    data: () => ({
      dialog: false,
      houseCategoryItems : ['house', 'villa/loft', 'appartement'],
      nbBedRoomItems : ['0','1','2','3','4','5+'],
      nbRoomItems : ['1','2','3','4','5','6+'],
    }),
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
    }
}
</script>