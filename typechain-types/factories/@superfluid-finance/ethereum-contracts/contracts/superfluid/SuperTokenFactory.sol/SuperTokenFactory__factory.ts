/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../../common";
import type {
  SuperTokenFactory,
  SuperTokenFactoryInterface,
} from "../../../../../../@superfluid-finance/ethereum-contracts/contracts/superfluid/SuperTokenFactory.sol/SuperTokenFactory";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract ISuperfluid",
        name: "host",
        type: "address",
      },
      {
        internalType: "contract SuperTokenFactoryHelper",
        name: "helper",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "uuid",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "codeAddress",
        type: "address",
      },
    ],
    name: "CodeUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract ISuperToken",
        name: "token",
        type: "address",
      },
    ],
    name: "CustomSuperTokenCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract ISuperToken",
        name: "token",
        type: "address",
      },
    ],
    name: "SuperTokenCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract ISuperToken",
        name: "tokenLogic",
        type: "address",
      },
    ],
    name: "SuperTokenLogicCreated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "contract ERC20WithTokenInfo",
        name: "underlyingToken",
        type: "address",
      },
      {
        internalType: "enum ISuperTokenFactory.Upgradability",
        name: "upgradability",
        type: "uint8",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
    ],
    name: "createERC20Wrapper",
    outputs: [
      {
        internalType: "contract ISuperToken",
        name: "superToken",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "underlyingToken",
        type: "address",
      },
      {
        internalType: "uint8",
        name: "underlyingDecimals",
        type: "uint8",
      },
      {
        internalType: "enum ISuperTokenFactory.Upgradability",
        name: "upgradability",
        type: "uint8",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
    ],
    name: "createERC20Wrapper",
    outputs: [
      {
        internalType: "contract ISuperToken",
        name: "superToken",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ISuperfluid",
        name: "host",
        type: "address",
      },
    ],
    name: "createSuperTokenLogic",
    outputs: [
      {
        internalType: "address",
        name: "logic",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getCodeAddress",
    outputs: [
      {
        internalType: "address",
        name: "codeAddress",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getHost",
    outputs: [
      {
        internalType: "address",
        name: "host",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getSuperTokenLogic",
    outputs: [
      {
        internalType: "contract ISuperToken",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "customSuperTokenProxy",
        type: "address",
      },
    ],
    name: "initializeCustomSuperToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "proxiableUUID",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newAddress",
        type: "address",
      },
    ],
    name: "updateCode",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60c06040523480156200001157600080fd5b50604051620021b5380380620021b583398181016040528101906200003791906200016c565b818073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1681525050508073ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff16815250505050620001b3565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620000db82620000ae565b9050919050565b6000620000ef82620000ce565b9050919050565b6200010181620000e2565b81146200010d57600080fd5b50565b6000815190506200012181620000f6565b92915050565b60006200013482620000ce565b9050919050565b620001468162000127565b81146200015257600080fd5b50565b60008151905062000166816200013b565b92915050565b60008060408385031215620001865762000185620000a9565b5b6000620001968582860162000110565b9250506020620001a98582860162000155565b9150509250929050565b60805160a051611fc7620001ee60003960006103460152600081816101f1015281816102a2015281816105950152610b3d0152611fc76000f3fe608060405234801561001057600080fd5b506004361061009e5760003560e01c806352d1902d1161006657806352d1902d1461015b5780638129fc1c146101795780639470a5b214610183578063a6d0c534146101a1578063d412d344146101d15761009e565b806320bc4425146100a3578063431f1481146100c157806346951954146100f15780634dcc4d791461010d57806350d75d251461013d575b600080fd5b6100ab6101ed565b6040516100b89190610e1f565b60405180910390f35b6100db60048036038101906100d69190610f0c565b610215565b6040516100e89190611012565b60405180910390f35b61010b60048036038101906101069190611059565b6102a0565b005b610127600480360381019061012291906110c4565b610342565b6040516101349190610e1f565b60405180910390f35b6101456103e7565b6040516101529190610e1f565b60405180910390f35b6101636103f6565b604051610170919061110a565b60405180910390f35b61018161041e565b005b61018b6104b2565b6040516101989190611012565b60405180910390f35b6101bb60048036038101906101b6919061119c565b6104db565b6040516101c89190611012565b60405180910390f35b6101eb60048036038101906101e69190611059565b61085f565b005b60007f0000000000000000000000000000000000000000000000000000000000000000905090565b6000610294878873ffffffffffffffffffffffffffffffffffffffff1663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa158015610266573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061028a919061126d565b88888888886104db565b90509695505050505050565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461032e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103259061131d565b60405180910390fd5b61033781610938565b61033f610b1f565b50565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16639ed93318836040518263ffffffff1660e01b815260040161039d919061135e565b6020604051808303816000875af11580156103bc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103e0919061138e565b9050919050565b60006103f1610c62565b905090565b60007fb146a22bc9644a3313a7e28592f37d32718a2b618d3d136aa524b0d86b87b620905090565b600061042a6001610c8b565b9050801561044e576001600060016101000a81548160ff0219169083151502179055505b610456610b1f565b80156104af5760008060016101000a81548160ff0219169083151502179055507f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb384740249860016040516104a691906113f6565b60405180910390a15b50565b60008060029054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60008073ffffffffffffffffffffffffffffffffffffffff168873ffffffffffffffffffffffffffffffffffffffff160361054b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105429061145d565b60405180910390fd5b6000600281111561055f5761055e61147d565b5b8660028111156105725761057161147d565b5b0361061a573073ffffffffffffffffffffffffffffffffffffffff16634dcc4d797f00000000000000000000000000000000000000000000000000000000000000006040518263ffffffff1660e01b81526004016105d0919061135e565b6020604051808303816000875af11580156105ef573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610613919061138e565b905061079c565b6001600281111561062e5761062d61147d565b5b8660028111156106415761064061147d565b5b0361070957600060405161065490610dc4565b604051809103906000f080158015610670573d6000803e3d6000fd5b5090508073ffffffffffffffffffffffffffffffffffffffff16634a0687ef600060029054906101000a900473ffffffffffffffffffffffffffffffffffffffff166040518263ffffffff1660e01b81526004016106ce9190610e1f565b600060405180830381600087803b1580156106e857600080fd5b505af11580156106fc573d6000803e3d6000fd5b505050508091505061079b565b600060405161071790610dd1565b604051809103906000f080158015610733573d6000803e3d6000fd5b5090508073ffffffffffffffffffffffffffffffffffffffff16638129fc1c6040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561077e57600080fd5b505af1158015610792573d6000803e3d6000fd5b50505050809150505b5b8073ffffffffffffffffffffffffffffffffffffffff166342fe09808989888888886040518763ffffffff1660e01b81526004016107df96959493929190611529565b600060405180830381600087803b1580156107f957600080fd5b505af115801561080d573d6000803e3d6000fd5b505050508073ffffffffffffffffffffffffffffffffffffffff167fb52c6d9d122e8c07769b96d7bb14e66db58ee03fdebaaa2f92547e9c7ef0e65f60405160405180910390a2979650505050505050565b60008190508073ffffffffffffffffffffffffffffffffffffffff16634a0687ef600060029054906101000a900473ffffffffffffffffffffffffffffffffffffffff166040518263ffffffff1660e01b81526004016108bf9190610e1f565b600060405180830381600087803b1580156108d957600080fd5b505af11580156108ed573d6000803e3d6000fd5b505050508173ffffffffffffffffffffffffffffffffffffffff167f437790724a6e97b75d23117f28cdd4b1beeafc34f7a0911ef256e9334f4369a560405160405180910390a25050565b600073ffffffffffffffffffffffffffffffffffffffff16610958610c62565b73ffffffffffffffffffffffffffffffffffffffff16036109ae576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109a5906115cc565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff166352d1902d6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156109f9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a1d9190611618565b610a256103f6565b14610a65576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a5c906116b7565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff1603610ad3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610aca90611723565b60405180910390fd5b610adc81610d7b565b7fe011bc04c286c344a8fcbb8de77f953da762c3e25d8cdea984147fc4168a5dcc610b056103f6565b82604051610b14929190611743565b60405180910390a150565b3073ffffffffffffffffffffffffffffffffffffffff16634dcc4d797f00000000000000000000000000000000000000000000000000000000000000006040518263ffffffff1660e01b8152600401610b78919061135e565b6020604051808303816000875af1158015610b97573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bbb919061138e565b600060026101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600060029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167fc13fb19d60857980e565bf5dae406b8802d3c1cec50c6156b30b12b87402978360405160405180910390a2565b60007f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc54905090565b60008060019054906101000a900460ff1615610d025760018260ff16148015610cba5750610cb830610da1565b155b610cf9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cf0906117de565b60405180910390fd5b60009050610d76565b8160ff1660008054906101000a900460ff1660ff1610610d57576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d4e906117de565b60405180910390fd5b816000806101000a81548160ff021916908360ff160217905550600190505b919050565b807f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5550565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b6103c4806117ff83390190565b6103cf80611bc383390190565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610e0982610dde565b9050919050565b610e1981610dfe565b82525050565b6000602082019050610e346000830184610e10565b92915050565b600080fd5b600080fd5b6000610e4f82610dfe565b9050919050565b610e5f81610e44565b8114610e6a57600080fd5b50565b600081359050610e7c81610e56565b92915050565b60038110610e8f57600080fd5b50565b600081359050610ea181610e82565b92915050565b600080fd5b600080fd5b600080fd5b60008083601f840112610ecc57610ecb610ea7565b5b8235905067ffffffffffffffff811115610ee957610ee8610eac565b5b602083019150836001820283011115610f0557610f04610eb1565b5b9250929050565b60008060008060008060808789031215610f2957610f28610e3a565b5b6000610f3789828a01610e6d565b9650506020610f4889828a01610e92565b955050604087013567ffffffffffffffff811115610f6957610f68610e3f565b5b610f7589828a01610eb6565b9450945050606087013567ffffffffffffffff811115610f9857610f97610e3f565b5b610fa489828a01610eb6565b92509250509295509295509295565b6000819050919050565b6000610fd8610fd3610fce84610dde565b610fb3565b610dde565b9050919050565b6000610fea82610fbd565b9050919050565b6000610ffc82610fdf565b9050919050565b61100c81610ff1565b82525050565b60006020820190506110276000830184611003565b92915050565b61103681610dfe565b811461104157600080fd5b50565b6000813590506110538161102d565b92915050565b60006020828403121561106f5761106e610e3a565b5b600061107d84828501611044565b91505092915050565b600061109182610dfe565b9050919050565b6110a181611086565b81146110ac57600080fd5b50565b6000813590506110be81611098565b92915050565b6000602082840312156110da576110d9610e3a565b5b60006110e8848285016110af565b91505092915050565b6000819050919050565b611104816110f1565b82525050565b600060208201905061111f60008301846110fb565b92915050565b600061113082610dfe565b9050919050565b61114081611125565b811461114b57600080fd5b50565b60008135905061115d81611137565b92915050565b600060ff82169050919050565b61117981611163565b811461118457600080fd5b50565b60008135905061119681611170565b92915050565b600080600080600080600060a0888a0312156111bb576111ba610e3a565b5b60006111c98a828b0161114e565b97505060206111da8a828b01611187565b96505060406111eb8a828b01610e92565b955050606088013567ffffffffffffffff81111561120c5761120b610e3f565b5b6112188a828b01610eb6565b9450945050608088013567ffffffffffffffff81111561123b5761123a610e3f565b5b6112478a828b01610eb6565b925092505092959891949750929550565b60008151905061126781611170565b92915050565b60006020828403121561128357611282610e3a565b5b600061129184828501611258565b91505092915050565b600082825260208201905092915050565b7f5375706572546f6b656e466163746f72793a206f6e6c7920686f73742063616e60008201527f2075706461746520636f64650000000000000000000000000000000000000000602082015250565b6000611307602c8361129a565b9150611312826112ab565b604082019050919050565b60006020820190508181036000830152611336816112fa565b9050919050565b600061134882610fdf565b9050919050565b6113588161133d565b82525050565b6000602082019050611373600083018461134f565b92915050565b6000815190506113888161102d565b92915050565b6000602082840312156113a4576113a3610e3a565b5b60006113b284828501611379565b91505092915050565b6000819050919050565b60006113e06113db6113d6846113bb565b610fb3565b611163565b9050919050565b6113f0816113c5565b82525050565b600060208201905061140b60008301846113e7565b92915050565b7f5375706572546f6b656e466163746f72793a207a65726f206164647265737300600082015250565b6000611447601f8361129a565b915061145282611411565b602082019050919050565b600060208201905081810360008301526114768161143a565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b60006114b782610fdf565b9050919050565b6114c7816114ac565b82525050565b6114d681611163565b82525050565b82818337600083830152505050565b6000601f19601f8301169050919050565b6000611508838561129a565b93506115158385846114dc565b61151e836114eb565b840190509392505050565b600060808201905061153e60008301896114be565b61154b60208301886114cd565b818103604083015261155e8186886114fc565b905081810360608301526115738184866114fc565b9050979650505050505050565b7f5555505350726f786961626c653a206e6f742075706772616461626c65000000600082015250565b60006115b6601d8361129a565b91506115c182611580565b602082019050919050565b600060208201905081810360008301526115e5816115a9565b9050919050565b6115f5816110f1565b811461160057600080fd5b50565b600081519050611612816115ec565b92915050565b60006020828403121561162e5761162d610e3a565b5b600061163c84828501611603565b91505092915050565b7f5555505350726f786961626c653a206e6f7420636f6d70617469626c65206c6f60008201527f6769630000000000000000000000000000000000000000000000000000000000602082015250565b60006116a160238361129a565b91506116ac82611645565b604082019050919050565b600060208201905081810360008301526116d081611694565b9050919050565b7f5555505350726f786961626c653a2070726f7879206c6f6f7000000000000000600082015250565b600061170d60198361129a565b9150611718826116d7565b602082019050919050565b6000602082019050818103600083015261173c81611700565b9050919050565b600060408201905061175860008301856110fb565b6117656020830184610e10565b9392505050565b7f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160008201527f647920696e697469616c697a6564000000000000000000000000000000000000602082015250565b60006117c8602e8361129a565b91506117d38261176c565b604082019050919050565b600060208201905081810360008301526117f7816117bb565b905091905056fe608060405234801561001057600080fd5b506103a4806100206000396000f3fe6080604052600436106100225760003560e01c80634a0687ef1461003b57610031565b366100315761002f610064565b005b610039610064565b005b34801561004757600080fd5b50610062600480360381019061005d9190610258565b61007e565b005b61006c61016f565b61007c610077610171565b610180565b565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036100ed576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016100e4906102e2565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff1661010d6101a6565b73ffffffffffffffffffffffffffffffffffffffff1614610163576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161015a9061034e565b60405180910390fd5b61016c816101cf565b50565b565b600061017b6101a6565b905090565b3660008037600080366000845af43d6000803e80600081146101a1573d6000f35b3d6000fd5b60007f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc54905090565b807f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5550565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610225826101fa565b9050919050565b6102358161021a565b811461024057600080fd5b50565b6000813590506102528161022c565b92915050565b60006020828403121561026e5761026d6101f5565b5b600061027c84828501610243565b91505092915050565b600082825260208201905092915050565b7f5555505350726f78793a207a65726f2061646472657373000000000000000000600082015250565b60006102cc601783610285565b91506102d782610296565b602082019050919050565b600060208201905081810360008301526102fb816102bf565b9050919050565b7f5555505350726f78793a20616c726561647920696e697469616c697a65640000600082015250565b6000610338601e83610285565b915061034382610302565b602082019050919050565b600060208201905081810360008301526103678161032b565b905091905056fea2646970667358221220ababa5b6f238b47699518bf2d96face676b5430255688c73e2dbafffb40ab0a164736f6c634300080e0033608060405234801561001057600080fd5b506103af806100206000396000f3fe6080604052600436106100225760003560e01c80638129fc1c1461003b57610031565b366100315761002f610052565b005b610039610052565b005b34801561004757600080fd5b5061005061006c565b005b61005a61012a565b61006a61006561012c565b610205565b565b60007fb8fcd5719b3ddf8626f3664705a89b7fc476129a58c1aa5eda57c600cc1821a0549050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610101576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016100f890610288565b60405180910390fd5b339050807fb8fcd5719b3ddf8626f3664705a89b7fc476129a58c1aa5eda57c600cc1821a05550565b565b6000807fb8fcd5719b3ddf8626f3664705a89b7fc476129a58c1aa5eda57c600cc1821a0549050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036101905761018f6102a8565b5b8073ffffffffffffffffffffffffffffffffffffffff16639470a5b26040518163ffffffff1660e01b8152600401602060405180830381865afa1580156101db573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101ff919061034c565b91505090565b3660008037600080366000845af43d6000803e8060008114610226573d6000f35b3d6000fd5b600082825260208201905092915050565b7f416c726561647920696e697469616c697a656400000000000000000000000000600082015250565b600061027260138361022b565b915061027d8261023c565b602082019050919050565b600060208201905081810360008301526102a181610265565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052600160045260246000fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610307826102dc565b9050919050565b6000610319826102fc565b9050919050565b6103298161030e565b811461033457600080fd5b50565b60008151905061034681610320565b92915050565b600060208284031215610362576103616102d7565b5b600061037084828501610337565b9150509291505056fea2646970667358221220b2f5a658a4562716a14d6bd1f223a37fbd1d73f5960dbfd0985bec9c6fac5af464736f6c634300080e0033a2646970667358221220db2c602418bd96d3dff2b1e2941372094efc854a21be9b8a193b5d406e3d914264736f6c634300080e0033";

type SuperTokenFactoryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SuperTokenFactoryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SuperTokenFactory__factory extends ContractFactory {
  constructor(...args: SuperTokenFactoryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    host: PromiseOrValue<string>,
    helper: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<SuperTokenFactory> {
    return super.deploy(
      host,
      helper,
      overrides || {}
    ) as Promise<SuperTokenFactory>;
  }
  override getDeployTransaction(
    host: PromiseOrValue<string>,
    helper: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(host, helper, overrides || {});
  }
  override attach(address: string): SuperTokenFactory {
    return super.attach(address) as SuperTokenFactory;
  }
  override connect(signer: Signer): SuperTokenFactory__factory {
    return super.connect(signer) as SuperTokenFactory__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SuperTokenFactoryInterface {
    return new utils.Interface(_abi) as SuperTokenFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SuperTokenFactory {
    return new Contract(address, _abi, signerOrProvider) as SuperTokenFactory;
  }
}
