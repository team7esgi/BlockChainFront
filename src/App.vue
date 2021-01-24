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

var isConnected = false;

async function connectToMetaMask(){
      await window.ethereum.enable().then((account) => {
        defaultAccount = account[0]
        isConnected=true
      });
}


const myContractAddress = "0x90157c4d60A663D3D99d1C22eE998dfF273EFb7E"
const MY_ABI = [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "idEstate",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint8",
				"name": "surface",
				"type": "uint8"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "category",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "uint8",
				"name": "nbRoom",
				"type": "uint8"
			},
			{
				"indexed": false,
				"internalType": "uint8",
				"name": "nbBedRoom",
				"type": "uint8"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "about",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "uint16",
				"name": "price",
				"type": "uint16"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "title",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "rue",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "nom",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "codePostale",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "ville",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "pays",
				"type": "string"
			}
		],
		"name": "NewEstate",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "estateId",
				"type": "uint256"
			}
		],
		"name": "buyEstateById",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"components": [
					{
						"internalType": "uint8",
						"name": "surface",
						"type": "uint8"
					},
					{
						"internalType": "string",
						"name": "category",
						"type": "string"
					},
					{
						"internalType": "uint8",
						"name": "nbRoom",
						"type": "uint8"
					},
					{
						"internalType": "uint8",
						"name": "nbBedRoom",
						"type": "uint8"
					},
					{
						"internalType": "string",
						"name": "description",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "item",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "about",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "title",
						"type": "string"
					},
					{
						"components": [
							{
								"internalType": "string",
								"name": "rue",
								"type": "string"
							},
							{
								"internalType": "string",
								"name": "nom",
								"type": "string"
							},
							{
								"internalType": "string",
								"name": "codePostale",
								"type": "string"
							},
							{
								"internalType": "string",
								"name": "ville",
								"type": "string"
							},
							{
								"internalType": "string",
								"name": "pays",
								"type": "string"
							}
						],
						"internalType": "struct EstateFactory.Street",
						"name": "street",
						"type": "tuple"
					},
					{
						"internalType": "uint16",
						"name": "price",
						"type": "uint16"
					},
					{
						"internalType": "bool",
						"name": "enVente",
						"type": "bool"
					}
				],
				"internalType": "struct EstateFactory.Estate",
				"name": "estate",
				"type": "tuple"
			}
		],
		"name": "createEstate",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "estateToOwner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "estates",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "surface",
				"type": "uint8"
			},
			{
				"internalType": "string",
				"name": "category",
				"type": "string"
			},
			{
				"internalType": "uint8",
				"name": "nbRoom",
				"type": "uint8"
			},
			{
				"internalType": "uint8",
				"name": "nbBedRoom",
				"type": "uint8"
			},
			{
				"internalType": "string",
				"name": "description",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "item",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "about",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "title",
				"type": "string"
			},
			{
				"components": [
					{
						"internalType": "string",
						"name": "rue",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "nom",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "codePostale",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "ville",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "pays",
						"type": "string"
					}
				],
				"internalType": "struct EstateFactory.Street",
				"name": "street",
				"type": "tuple"
			},
			{
				"internalType": "uint16",
				"name": "price",
				"type": "uint16"
			},
			{
				"internalType": "bool",
				"name": "enVente",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_owner",
				"type": "address"
			}
		],
		"name": "getEstatesByOwner",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "myvar",
				"type": "string"
			}
		],
		"name": "getMsgValue",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getNumberEstates",
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
		"inputs": [],
		"name": "test",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

var _estateFactory;

async function test(){
  const data = await _estateFactory.methods.test().call().then(console.log);
  console.log(data);
}


async function startApp(){

  _estateFactory =new web3.eth.Contract(MY_ABI, myContractAddress);
  
  //console.log(_estateFactory);
  //var test = myContract.at(myContractAddress);

   try {
    await connectToMetaMask()
    if(isConnected){
       console.log("You are connected");
    }
     
    else
      console.log("Your are not connected")
    console.log(defaultAccount)
   
 
    web3.eth.getBalance(defaultAccount, function(err, result) {
      if (err) {
        console.log(err)
       
      } else {
        console.log(web3.utils.fromWei(result, "ether") + " ETH")
         test();
      }
    })
  }catch(error){
    console.error("You should try to connect using metamask.");
  }


  


}
startApp();



/*
function getEstates(id){
  return _estateFactory.methods.estates(id).call();
}

function createEstate(estate){
  return _estateFactory.methods.createEstate(estate).send()({from : defaultAccount });
}
function getEstatesByOwner(address){
  return _estateFactory.methods.getEstatesByOwner(address).call();
}

function buyEstateById(id){
  var price = "0"
  return _estateFactory.methods.buyEstateById(id).send()({from : defaultAccount,  value: web3js.utils.toWei(price, "ether") });
}

function getNumberEstates(){
  return _estateFactory.methods.getNumberEstates().call();
}
*/

  




</script>
