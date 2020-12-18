<template>
    <div>
        <h1>House info {{id}} </h1>
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
                "others":[],
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
    },
    props: {
        id: {
            type: Number,
            required: true
        }
    }
}
</script>