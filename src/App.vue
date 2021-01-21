<template>
  <v-app>
    <NavBar/>
    <v-main class="pa-7">
      <router-view></router-view>
    </v-main>

  </v-app>

</template>

<script>
import NavBar from '@/components/NavBar'

export default {
  name: 'App',
  components : {
    NavBar
  },
  data: () => ({
    //
  }),
};

const Web3 = require("web3")

const web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/v3/59abde443d5642698d98c8c7f87877c4"))

var defaultAccount;

async function connectToMetaMask(){
      await window.ethereum.enable().then((account) => {
        defaultAccount = account[0]
      });
}


const myContractAddress = "0xecda1435f86f1d3d2438f5ef087c1acca32e5d37"
const MY_ABI = [
        {
          "inputs": [],
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "name": "deposits",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "seller",
              "type": "address"
            }
          ],
          "name": "deposit",
          "outputs": [],
          "stateMutability": "payable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address payable",
              "name": "seller",
              "type": "address"
            }
          ],
          "name": "withdraw",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        }
      ]


async function startApp(){

  var myContract =new web3.eth.Contract(MY_ABI, myContractAddress);
  
  //var test = myContract.at(myContractAddress);

  console.log(myContract);
  await connectToMetaMask()
  console.log(defaultAccount)
}
startApp()

  




</script>
