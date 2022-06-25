/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IERC777Sender,
  IERC777SenderInterface,
} from "../../../../../@openzeppelin/contracts/token/ERC777/IERC777Sender";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "userData",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "operatorData",
        type: "bytes",
      },
    ],
    name: "tokensToSend",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IERC777Sender__factory {
  static readonly abi = _abi;
  static createInterface(): IERC777SenderInterface {
    return new utils.Interface(_abi) as IERC777SenderInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IERC777Sender {
    return new Contract(address, _abi, signerOrProvider) as IERC777Sender;
  }
}
