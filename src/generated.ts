import {
  createUseReadContract,
  createUseWriteContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
} from 'wagmi/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC20
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc20Abi = [
  {
    stateMutability: 'nonpayable',
    type: 'constructor',
    inputs: [
      { name: 'name_', internalType: 'string', type: 'string' },
      { name: 'symbol_', internalType: 'string', type: 'string' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'subtractedValue', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'decreaseAllowance',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'addedValue', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'increaseAllowance',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC20
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc20Abi = [
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC20Metadata
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc20MetadataAbi = [
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC20Permit
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc20PermitAbi = [
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'DOMAIN_SEPARATOR',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'nonces',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
      { name: 'v', internalType: 'uint8', type: 'uint8' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'permit',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IMulticall3
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iMulticall3Abi = [
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      {
        name: 'calls',
        internalType: 'struct IMulticall3.Call[]',
        type: 'tuple[]',
        components: [
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'callData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'aggregate',
    outputs: [
      { name: 'blockNumber', internalType: 'uint256', type: 'uint256' },
      { name: 'returnData', internalType: 'bytes[]', type: 'bytes[]' },
    ],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      {
        name: 'calls',
        internalType: 'struct IMulticall3.Call3[]',
        type: 'tuple[]',
        components: [
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'allowFailure', internalType: 'bool', type: 'bool' },
          { name: 'callData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'aggregate3',
    outputs: [
      {
        name: 'returnData',
        internalType: 'struct IMulticall3.Result[]',
        type: 'tuple[]',
        components: [
          { name: 'success', internalType: 'bool', type: 'bool' },
          { name: 'returnData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      {
        name: 'calls',
        internalType: 'struct IMulticall3.Call3Value[]',
        type: 'tuple[]',
        components: [
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'allowFailure', internalType: 'bool', type: 'bool' },
          { name: 'value', internalType: 'uint256', type: 'uint256' },
          { name: 'callData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'aggregate3Value',
    outputs: [
      {
        name: 'returnData',
        internalType: 'struct IMulticall3.Result[]',
        type: 'tuple[]',
        components: [
          { name: 'success', internalType: 'bool', type: 'bool' },
          { name: 'returnData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      {
        name: 'calls',
        internalType: 'struct IMulticall3.Call[]',
        type: 'tuple[]',
        components: [
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'callData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'blockAndAggregate',
    outputs: [
      { name: 'blockNumber', internalType: 'uint256', type: 'uint256' },
      { name: 'blockHash', internalType: 'bytes32', type: 'bytes32' },
      {
        name: 'returnData',
        internalType: 'struct IMulticall3.Result[]',
        type: 'tuple[]',
        components: [
          { name: 'success', internalType: 'bool', type: 'bool' },
          { name: 'returnData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getBasefee',
    outputs: [{ name: 'basefee', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'blockNumber', internalType: 'uint256', type: 'uint256' }],
    name: 'getBlockHash',
    outputs: [{ name: 'blockHash', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getBlockNumber',
    outputs: [
      { name: 'blockNumber', internalType: 'uint256', type: 'uint256' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getChainId',
    outputs: [{ name: 'chainid', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getCurrentBlockCoinbase',
    outputs: [{ name: 'coinbase', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getCurrentBlockDifficulty',
    outputs: [{ name: 'difficulty', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getCurrentBlockGasLimit',
    outputs: [{ name: 'gaslimit', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getCurrentBlockTimestamp',
    outputs: [{ name: 'timestamp', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'addr', internalType: 'address', type: 'address' }],
    name: 'getEthBalance',
    outputs: [{ name: 'balance', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getLastBlockHash',
    outputs: [{ name: 'blockHash', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      { name: 'requireSuccess', internalType: 'bool', type: 'bool' },
      {
        name: 'calls',
        internalType: 'struct IMulticall3.Call[]',
        type: 'tuple[]',
        components: [
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'callData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'tryAggregate',
    outputs: [
      {
        name: 'returnData',
        internalType: 'struct IMulticall3.Result[]',
        type: 'tuple[]',
        components: [
          { name: 'success', internalType: 'bool', type: 'bool' },
          { name: 'returnData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      { name: 'requireSuccess', internalType: 'bool', type: 'bool' },
      {
        name: 'calls',
        internalType: 'struct IMulticall3.Call[]',
        type: 'tuple[]',
        components: [
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'callData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'tryBlockAndAggregate',
    outputs: [
      { name: 'blockNumber', internalType: 'uint256', type: 'uint256' },
      { name: 'blockHash', internalType: 'bytes32', type: 'bytes32' },
      {
        name: 'returnData',
        internalType: 'struct IMulticall3.Result[]',
        type: 'tuple[]',
        components: [
          { name: 'success', internalType: 'bool', type: 'bool' },
          { name: 'returnData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Ownable
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ownableAbi = [
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Ownable2Step
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ownable2StepAbi = [
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'acceptOwnership',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'pendingOwner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferStarted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// VestingWallet
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const vestingWalletAbi = [
  {
    stateMutability: 'nonpayable',
    type: 'constructor',
    inputs: [
      { name: 'beneficiaryAddress', internalType: 'address', type: 'address' },
      { name: 'startTimestamp', internalType: 'uint64', type: 'uint64' },
      { name: 'durationSeconds', internalType: 'uint64', type: 'uint64' },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'acceptOwnership',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'duration',
    outputs: [{ name: '', internalType: 'uint64', type: 'uint64' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'end',
    outputs: [{ name: '', internalType: 'uint64', type: 'uint64' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'pendingOwner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'token', internalType: 'address', type: 'address' }],
    name: 'releasable',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'token', internalType: 'address', type: 'address' }],
    name: 'release',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'released',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'start',
    outputs: [{ name: '', internalType: 'uint64', type: 'uint64' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'address', type: 'address' },
      { name: 'timestamp', internalType: 'uint64', type: 'uint64' },
    ],
    name: 'vestedAmount',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'token',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'ERC20Released',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferStarted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'error',
    inputs: [{ name: 'beneficiary', internalType: 'address', type: 'address' }],
    name: 'VestingWalletInvalidBeneficiary',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// WLD
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const wldAbi = [
  {
    stateMutability: 'nonpayable',
    type: 'constructor',
    inputs: [
      { name: 'existingHolders', internalType: 'address[]', type: 'address[]' },
      { name: 'existingAmounts', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'name_', internalType: 'string', type: 'string' },
      { name: 'symbol_', internalType: 'string', type: 'string' },
      { name: 'inflationCapPeriod_', internalType: 'uint256', type: 'uint256' },
      { name: 'inflationCapWad_', internalType: 'uint256', type: 'uint256' },
      {
        name: 'inflationLockPeriod_',
        internalType: 'uint256',
        type: 'uint256',
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'INITIAL_SUPPLY_CAP',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'WAD_ONE',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'acceptOwnership',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'currentPeriodEnd',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'currentPeriodSupplyCap',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'subtractedValue', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'decreaseAllowance',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'addedValue', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'increaseAllowance',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'inflationCapPeriod',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'inflationCapWad',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'inflationUnlockTime',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'initialMintDone',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'mintInflation',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'newHolders', internalType: 'address[]', type: 'address[]' },
      { name: 'newAmounts', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    name: 'mintOnce',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'minter',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'pendingOwner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'minter_', internalType: 'address', type: 'address' }],
    name: 'setMinter',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'minter',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      { name: 'to', internalType: 'address', type: 'address', indexed: false },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'InflationTokensMinted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferStarted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'newToken',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      { name: 'name', internalType: 'string', type: 'string', indexed: false },
      {
        name: 'symbol',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
      {
        name: 'existingHolders',
        internalType: 'address[]',
        type: 'address[]',
        indexed: false,
      },
      {
        name: 'existingsAmounts',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
      {
        name: 'inflationCapPeriod',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'inflationCapWad',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'inflationLockPeriod',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'TokenUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'minter',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'newHolders',
        internalType: 'address[]',
        type: 'address[]',
        indexed: false,
      },
      {
        name: 'newAmounts',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
    ],
    name: 'TokensMinted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__
 */
export const useReadErc20 = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"allowance"`
 */
export const useReadErc20Allowance = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'allowance',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadErc20BalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"decimals"`
 */
export const useReadErc20Decimals = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'decimals',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"name"`
 */
export const useReadErc20Name = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"symbol"`
 */
export const useReadErc20Symbol = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadErc20TotalSupply = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20Abi}__
 */
export const useWriteErc20 = /*#__PURE__*/ createUseWriteContract({
  abi: erc20Abi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"approve"`
 */
export const useWriteErc20Approve = /*#__PURE__*/ createUseWriteContract({
  abi: erc20Abi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"decreaseAllowance"`
 */
export const useWriteErc20DecreaseAllowance =
  /*#__PURE__*/ createUseWriteContract({
    abi: erc20Abi,
    functionName: 'decreaseAllowance',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"increaseAllowance"`
 */
export const useWriteErc20IncreaseAllowance =
  /*#__PURE__*/ createUseWriteContract({
    abi: erc20Abi,
    functionName: 'increaseAllowance',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transfer"`
 */
export const useWriteErc20Transfer = /*#__PURE__*/ createUseWriteContract({
  abi: erc20Abi,
  functionName: 'transfer',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteErc20TransferFrom = /*#__PURE__*/ createUseWriteContract({
  abi: erc20Abi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20Abi}__
 */
export const useSimulateErc20 = /*#__PURE__*/ createUseSimulateContract({
  abi: erc20Abi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"approve"`
 */
export const useSimulateErc20Approve = /*#__PURE__*/ createUseSimulateContract({
  abi: erc20Abi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"decreaseAllowance"`
 */
export const useSimulateErc20DecreaseAllowance =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc20Abi,
    functionName: 'decreaseAllowance',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"increaseAllowance"`
 */
export const useSimulateErc20IncreaseAllowance =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc20Abi,
    functionName: 'increaseAllowance',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transfer"`
 */
export const useSimulateErc20Transfer = /*#__PURE__*/ createUseSimulateContract(
  { abi: erc20Abi, functionName: 'transfer' },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateErc20TransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc20Abi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20Abi}__
 */
export const useWatchErc20Event = /*#__PURE__*/ createUseWatchContractEvent({
  abi: erc20Abi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20Abi}__ and `eventName` set to `"Approval"`
 */
export const useWatchErc20ApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc20Abi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20Abi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchErc20TransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc20Abi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20Abi}__
 */
export const useReadIerc20 = /*#__PURE__*/ createUseReadContract({
  abi: ierc20Abi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20Abi}__ and `functionName` set to `"allowance"`
 */
export const useReadIerc20Allowance = /*#__PURE__*/ createUseReadContract({
  abi: ierc20Abi,
  functionName: 'allowance',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20Abi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadIerc20BalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: ierc20Abi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20Abi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadIerc20TotalSupply = /*#__PURE__*/ createUseReadContract({
  abi: ierc20Abi,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc20Abi}__
 */
export const useWriteIerc20 = /*#__PURE__*/ createUseWriteContract({
  abi: ierc20Abi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc20Abi}__ and `functionName` set to `"approve"`
 */
export const useWriteIerc20Approve = /*#__PURE__*/ createUseWriteContract({
  abi: ierc20Abi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc20Abi}__ and `functionName` set to `"transfer"`
 */
export const useWriteIerc20Transfer = /*#__PURE__*/ createUseWriteContract({
  abi: ierc20Abi,
  functionName: 'transfer',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc20Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteIerc20TransferFrom = /*#__PURE__*/ createUseWriteContract({
  abi: ierc20Abi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc20Abi}__
 */
export const useSimulateIerc20 = /*#__PURE__*/ createUseSimulateContract({
  abi: ierc20Abi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc20Abi}__ and `functionName` set to `"approve"`
 */
export const useSimulateIerc20Approve = /*#__PURE__*/ createUseSimulateContract(
  { abi: ierc20Abi, functionName: 'approve' },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc20Abi}__ and `functionName` set to `"transfer"`
 */
export const useSimulateIerc20Transfer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc20Abi,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc20Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateIerc20TransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc20Abi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc20Abi}__
 */
export const useWatchIerc20Event = /*#__PURE__*/ createUseWatchContractEvent({
  abi: ierc20Abi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc20Abi}__ and `eventName` set to `"Approval"`
 */
export const useWatchIerc20ApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ierc20Abi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc20Abi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchIerc20TransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ierc20Abi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20MetadataAbi}__
 */
export const useReadIerc20Metadata = /*#__PURE__*/ createUseReadContract({
  abi: ierc20MetadataAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"allowance"`
 */
export const useReadIerc20MetadataAllowance =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc20MetadataAbi,
    functionName: 'allowance',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadIerc20MetadataBalanceOf =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc20MetadataAbi,
    functionName: 'balanceOf',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"decimals"`
 */
export const useReadIerc20MetadataDecimals =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc20MetadataAbi,
    functionName: 'decimals',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"name"`
 */
export const useReadIerc20MetadataName = /*#__PURE__*/ createUseReadContract({
  abi: ierc20MetadataAbi,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"symbol"`
 */
export const useReadIerc20MetadataSymbol = /*#__PURE__*/ createUseReadContract({
  abi: ierc20MetadataAbi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadIerc20MetadataTotalSupply =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc20MetadataAbi,
    functionName: 'totalSupply',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc20MetadataAbi}__
 */
export const useWriteIerc20Metadata = /*#__PURE__*/ createUseWriteContract({
  abi: ierc20MetadataAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"approve"`
 */
export const useWriteIerc20MetadataApprove =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc20MetadataAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"transfer"`
 */
export const useWriteIerc20MetadataTransfer =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc20MetadataAbi,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteIerc20MetadataTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc20MetadataAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc20MetadataAbi}__
 */
export const useSimulateIerc20Metadata =
  /*#__PURE__*/ createUseSimulateContract({ abi: ierc20MetadataAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"approve"`
 */
export const useSimulateIerc20MetadataApprove =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc20MetadataAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"transfer"`
 */
export const useSimulateIerc20MetadataTransfer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc20MetadataAbi,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateIerc20MetadataTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc20MetadataAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc20MetadataAbi}__
 */
export const useWatchIerc20MetadataEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: ierc20MetadataAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `eventName` set to `"Approval"`
 */
export const useWatchIerc20MetadataApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ierc20MetadataAbi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchIerc20MetadataTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ierc20MetadataAbi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20PermitAbi}__
 */
export const useReadIerc20Permit = /*#__PURE__*/ createUseReadContract({
  abi: ierc20PermitAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20PermitAbi}__ and `functionName` set to `"DOMAIN_SEPARATOR"`
 */
export const useReadIerc20PermitDomainSeparator =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc20PermitAbi,
    functionName: 'DOMAIN_SEPARATOR',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20PermitAbi}__ and `functionName` set to `"nonces"`
 */
export const useReadIerc20PermitNonces = /*#__PURE__*/ createUseReadContract({
  abi: ierc20PermitAbi,
  functionName: 'nonces',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc20PermitAbi}__
 */
export const useWriteIerc20Permit = /*#__PURE__*/ createUseWriteContract({
  abi: ierc20PermitAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc20PermitAbi}__ and `functionName` set to `"permit"`
 */
export const useWriteIerc20PermitPermit = /*#__PURE__*/ createUseWriteContract({
  abi: ierc20PermitAbi,
  functionName: 'permit',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc20PermitAbi}__
 */
export const useSimulateIerc20Permit = /*#__PURE__*/ createUseSimulateContract({
  abi: ierc20PermitAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc20PermitAbi}__ and `functionName` set to `"permit"`
 */
export const useSimulateIerc20PermitPermit =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc20PermitAbi,
    functionName: 'permit',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__
 */
export const useReadIMulticall3 = /*#__PURE__*/ createUseReadContract({
  abi: iMulticall3Abi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getBasefee"`
 */
export const useReadIMulticall3GetBasefee = /*#__PURE__*/ createUseReadContract(
  { abi: iMulticall3Abi, functionName: 'getBasefee' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getBlockHash"`
 */
export const useReadIMulticall3GetBlockHash =
  /*#__PURE__*/ createUseReadContract({
    abi: iMulticall3Abi,
    functionName: 'getBlockHash',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getBlockNumber"`
 */
export const useReadIMulticall3GetBlockNumber =
  /*#__PURE__*/ createUseReadContract({
    abi: iMulticall3Abi,
    functionName: 'getBlockNumber',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getChainId"`
 */
export const useReadIMulticall3GetChainId = /*#__PURE__*/ createUseReadContract(
  { abi: iMulticall3Abi, functionName: 'getChainId' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getCurrentBlockCoinbase"`
 */
export const useReadIMulticall3GetCurrentBlockCoinbase =
  /*#__PURE__*/ createUseReadContract({
    abi: iMulticall3Abi,
    functionName: 'getCurrentBlockCoinbase',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getCurrentBlockDifficulty"`
 */
export const useReadIMulticall3GetCurrentBlockDifficulty =
  /*#__PURE__*/ createUseReadContract({
    abi: iMulticall3Abi,
    functionName: 'getCurrentBlockDifficulty',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getCurrentBlockGasLimit"`
 */
export const useReadIMulticall3GetCurrentBlockGasLimit =
  /*#__PURE__*/ createUseReadContract({
    abi: iMulticall3Abi,
    functionName: 'getCurrentBlockGasLimit',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getCurrentBlockTimestamp"`
 */
export const useReadIMulticall3GetCurrentBlockTimestamp =
  /*#__PURE__*/ createUseReadContract({
    abi: iMulticall3Abi,
    functionName: 'getCurrentBlockTimestamp',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getEthBalance"`
 */
export const useReadIMulticall3GetEthBalance =
  /*#__PURE__*/ createUseReadContract({
    abi: iMulticall3Abi,
    functionName: 'getEthBalance',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getLastBlockHash"`
 */
export const useReadIMulticall3GetLastBlockHash =
  /*#__PURE__*/ createUseReadContract({
    abi: iMulticall3Abi,
    functionName: 'getLastBlockHash',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iMulticall3Abi}__
 */
export const useWriteIMulticall3 = /*#__PURE__*/ createUseWriteContract({
  abi: iMulticall3Abi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"aggregate"`
 */
export const useWriteIMulticall3Aggregate =
  /*#__PURE__*/ createUseWriteContract({
    abi: iMulticall3Abi,
    functionName: 'aggregate',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"aggregate3"`
 */
export const useWriteIMulticall3Aggregate3 =
  /*#__PURE__*/ createUseWriteContract({
    abi: iMulticall3Abi,
    functionName: 'aggregate3',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"aggregate3Value"`
 */
export const useWriteIMulticall3Aggregate3Value =
  /*#__PURE__*/ createUseWriteContract({
    abi: iMulticall3Abi,
    functionName: 'aggregate3Value',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"blockAndAggregate"`
 */
export const useWriteIMulticall3BlockAndAggregate =
  /*#__PURE__*/ createUseWriteContract({
    abi: iMulticall3Abi,
    functionName: 'blockAndAggregate',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"tryAggregate"`
 */
export const useWriteIMulticall3TryAggregate =
  /*#__PURE__*/ createUseWriteContract({
    abi: iMulticall3Abi,
    functionName: 'tryAggregate',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"tryBlockAndAggregate"`
 */
export const useWriteIMulticall3TryBlockAndAggregate =
  /*#__PURE__*/ createUseWriteContract({
    abi: iMulticall3Abi,
    functionName: 'tryBlockAndAggregate',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iMulticall3Abi}__
 */
export const useSimulateIMulticall3 = /*#__PURE__*/ createUseSimulateContract({
  abi: iMulticall3Abi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"aggregate"`
 */
export const useSimulateIMulticall3Aggregate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iMulticall3Abi,
    functionName: 'aggregate',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"aggregate3"`
 */
export const useSimulateIMulticall3Aggregate3 =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iMulticall3Abi,
    functionName: 'aggregate3',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"aggregate3Value"`
 */
export const useSimulateIMulticall3Aggregate3Value =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iMulticall3Abi,
    functionName: 'aggregate3Value',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"blockAndAggregate"`
 */
export const useSimulateIMulticall3BlockAndAggregate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iMulticall3Abi,
    functionName: 'blockAndAggregate',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"tryAggregate"`
 */
export const useSimulateIMulticall3TryAggregate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iMulticall3Abi,
    functionName: 'tryAggregate',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"tryBlockAndAggregate"`
 */
export const useSimulateIMulticall3TryBlockAndAggregate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iMulticall3Abi,
    functionName: 'tryBlockAndAggregate',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ownableAbi}__
 */
export const useReadOwnable = /*#__PURE__*/ createUseReadContract({
  abi: ownableAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ownableAbi}__ and `functionName` set to `"owner"`
 */
export const useReadOwnableOwner = /*#__PURE__*/ createUseReadContract({
  abi: ownableAbi,
  functionName: 'owner',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ownableAbi}__
 */
export const useWriteOwnable = /*#__PURE__*/ createUseWriteContract({
  abi: ownableAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ownableAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useWriteOwnableRenounceOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: ownableAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ownableAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useWriteOwnableTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: ownableAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ownableAbi}__
 */
export const useSimulateOwnable = /*#__PURE__*/ createUseSimulateContract({
  abi: ownableAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ownableAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useSimulateOwnableRenounceOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ownableAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ownableAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useSimulateOwnableTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ownableAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ownableAbi}__
 */
export const useWatchOwnableEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: ownableAbi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ownableAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const useWatchOwnableOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ownableAbi,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ownable2StepAbi}__
 */
export const useReadOwnable2Step = /*#__PURE__*/ createUseReadContract({
  abi: ownable2StepAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ownable2StepAbi}__ and `functionName` set to `"owner"`
 */
export const useReadOwnable2StepOwner = /*#__PURE__*/ createUseReadContract({
  abi: ownable2StepAbi,
  functionName: 'owner',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ownable2StepAbi}__ and `functionName` set to `"pendingOwner"`
 */
export const useReadOwnable2StepPendingOwner =
  /*#__PURE__*/ createUseReadContract({
    abi: ownable2StepAbi,
    functionName: 'pendingOwner',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ownable2StepAbi}__
 */
export const useWriteOwnable2Step = /*#__PURE__*/ createUseWriteContract({
  abi: ownable2StepAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ownable2StepAbi}__ and `functionName` set to `"acceptOwnership"`
 */
export const useWriteOwnable2StepAcceptOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: ownable2StepAbi,
    functionName: 'acceptOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ownable2StepAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useWriteOwnable2StepRenounceOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: ownable2StepAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ownable2StepAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useWriteOwnable2StepTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: ownable2StepAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ownable2StepAbi}__
 */
export const useSimulateOwnable2Step = /*#__PURE__*/ createUseSimulateContract({
  abi: ownable2StepAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ownable2StepAbi}__ and `functionName` set to `"acceptOwnership"`
 */
export const useSimulateOwnable2StepAcceptOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ownable2StepAbi,
    functionName: 'acceptOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ownable2StepAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useSimulateOwnable2StepRenounceOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ownable2StepAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ownable2StepAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useSimulateOwnable2StepTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ownable2StepAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ownable2StepAbi}__
 */
export const useWatchOwnable2StepEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: ownable2StepAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ownable2StepAbi}__ and `eventName` set to `"OwnershipTransferStarted"`
 */
export const useWatchOwnable2StepOwnershipTransferStartedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ownable2StepAbi,
    eventName: 'OwnershipTransferStarted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ownable2StepAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const useWatchOwnable2StepOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ownable2StepAbi,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vestingWalletAbi}__
 */
export const useReadVestingWallet = /*#__PURE__*/ createUseReadContract({
  abi: vestingWalletAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vestingWalletAbi}__ and `functionName` set to `"duration"`
 */
export const useReadVestingWalletDuration = /*#__PURE__*/ createUseReadContract(
  { abi: vestingWalletAbi, functionName: 'duration' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vestingWalletAbi}__ and `functionName` set to `"end"`
 */
export const useReadVestingWalletEnd = /*#__PURE__*/ createUseReadContract({
  abi: vestingWalletAbi,
  functionName: 'end',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vestingWalletAbi}__ and `functionName` set to `"owner"`
 */
export const useReadVestingWalletOwner = /*#__PURE__*/ createUseReadContract({
  abi: vestingWalletAbi,
  functionName: 'owner',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vestingWalletAbi}__ and `functionName` set to `"pendingOwner"`
 */
export const useReadVestingWalletPendingOwner =
  /*#__PURE__*/ createUseReadContract({
    abi: vestingWalletAbi,
    functionName: 'pendingOwner',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vestingWalletAbi}__ and `functionName` set to `"releasable"`
 */
export const useReadVestingWalletReleasable =
  /*#__PURE__*/ createUseReadContract({
    abi: vestingWalletAbi,
    functionName: 'releasable',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vestingWalletAbi}__ and `functionName` set to `"released"`
 */
export const useReadVestingWalletReleased = /*#__PURE__*/ createUseReadContract(
  { abi: vestingWalletAbi, functionName: 'released' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vestingWalletAbi}__ and `functionName` set to `"start"`
 */
export const useReadVestingWalletStart = /*#__PURE__*/ createUseReadContract({
  abi: vestingWalletAbi,
  functionName: 'start',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vestingWalletAbi}__ and `functionName` set to `"vestedAmount"`
 */
export const useReadVestingWalletVestedAmount =
  /*#__PURE__*/ createUseReadContract({
    abi: vestingWalletAbi,
    functionName: 'vestedAmount',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vestingWalletAbi}__
 */
export const useWriteVestingWallet = /*#__PURE__*/ createUseWriteContract({
  abi: vestingWalletAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vestingWalletAbi}__ and `functionName` set to `"acceptOwnership"`
 */
export const useWriteVestingWalletAcceptOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: vestingWalletAbi,
    functionName: 'acceptOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vestingWalletAbi}__ and `functionName` set to `"release"`
 */
export const useWriteVestingWalletRelease =
  /*#__PURE__*/ createUseWriteContract({
    abi: vestingWalletAbi,
    functionName: 'release',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vestingWalletAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useWriteVestingWalletRenounceOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: vestingWalletAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vestingWalletAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useWriteVestingWalletTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: vestingWalletAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vestingWalletAbi}__
 */
export const useSimulateVestingWallet = /*#__PURE__*/ createUseSimulateContract(
  { abi: vestingWalletAbi },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vestingWalletAbi}__ and `functionName` set to `"acceptOwnership"`
 */
export const useSimulateVestingWalletAcceptOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vestingWalletAbi,
    functionName: 'acceptOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vestingWalletAbi}__ and `functionName` set to `"release"`
 */
export const useSimulateVestingWalletRelease =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vestingWalletAbi,
    functionName: 'release',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vestingWalletAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useSimulateVestingWalletRenounceOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vestingWalletAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vestingWalletAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useSimulateVestingWalletTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vestingWalletAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link vestingWalletAbi}__
 */
export const useWatchVestingWalletEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: vestingWalletAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link vestingWalletAbi}__ and `eventName` set to `"ERC20Released"`
 */
export const useWatchVestingWalletErc20ReleasedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: vestingWalletAbi,
    eventName: 'ERC20Released',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link vestingWalletAbi}__ and `eventName` set to `"OwnershipTransferStarted"`
 */
export const useWatchVestingWalletOwnershipTransferStartedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: vestingWalletAbi,
    eventName: 'OwnershipTransferStarted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link vestingWalletAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const useWatchVestingWalletOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: vestingWalletAbi,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link wldAbi}__
 */
export const useReadWld = /*#__PURE__*/ createUseReadContract({ abi: wldAbi })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link wldAbi}__ and `functionName` set to `"INITIAL_SUPPLY_CAP"`
 */
export const useReadWldInitialSupplyCap = /*#__PURE__*/ createUseReadContract({
  abi: wldAbi,
  functionName: 'INITIAL_SUPPLY_CAP',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link wldAbi}__ and `functionName` set to `"WAD_ONE"`
 */
export const useReadWldWadOne = /*#__PURE__*/ createUseReadContract({
  abi: wldAbi,
  functionName: 'WAD_ONE',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link wldAbi}__ and `functionName` set to `"allowance"`
 */
export const useReadWldAllowance = /*#__PURE__*/ createUseReadContract({
  abi: wldAbi,
  functionName: 'allowance',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link wldAbi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadWldBalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: wldAbi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link wldAbi}__ and `functionName` set to `"currentPeriodEnd"`
 */
export const useReadWldCurrentPeriodEnd = /*#__PURE__*/ createUseReadContract({
  abi: wldAbi,
  functionName: 'currentPeriodEnd',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link wldAbi}__ and `functionName` set to `"currentPeriodSupplyCap"`
 */
export const useReadWldCurrentPeriodSupplyCap =
  /*#__PURE__*/ createUseReadContract({
    abi: wldAbi,
    functionName: 'currentPeriodSupplyCap',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link wldAbi}__ and `functionName` set to `"decimals"`
 */
export const useReadWldDecimals = /*#__PURE__*/ createUseReadContract({
  abi: wldAbi,
  functionName: 'decimals',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link wldAbi}__ and `functionName` set to `"inflationCapPeriod"`
 */
export const useReadWldInflationCapPeriod = /*#__PURE__*/ createUseReadContract(
  { abi: wldAbi, functionName: 'inflationCapPeriod' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link wldAbi}__ and `functionName` set to `"inflationCapWad"`
 */
export const useReadWldInflationCapWad = /*#__PURE__*/ createUseReadContract({
  abi: wldAbi,
  functionName: 'inflationCapWad',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link wldAbi}__ and `functionName` set to `"inflationUnlockTime"`
 */
export const useReadWldInflationUnlockTime =
  /*#__PURE__*/ createUseReadContract({
    abi: wldAbi,
    functionName: 'inflationUnlockTime',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link wldAbi}__ and `functionName` set to `"initialMintDone"`
 */
export const useReadWldInitialMintDone = /*#__PURE__*/ createUseReadContract({
  abi: wldAbi,
  functionName: 'initialMintDone',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link wldAbi}__ and `functionName` set to `"minter"`
 */
export const useReadWldMinter = /*#__PURE__*/ createUseReadContract({
  abi: wldAbi,
  functionName: 'minter',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link wldAbi}__ and `functionName` set to `"name"`
 */
export const useReadWldName = /*#__PURE__*/ createUseReadContract({
  abi: wldAbi,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link wldAbi}__ and `functionName` set to `"owner"`
 */
export const useReadWldOwner = /*#__PURE__*/ createUseReadContract({
  abi: wldAbi,
  functionName: 'owner',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link wldAbi}__ and `functionName` set to `"pendingOwner"`
 */
export const useReadWldPendingOwner = /*#__PURE__*/ createUseReadContract({
  abi: wldAbi,
  functionName: 'pendingOwner',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link wldAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useReadWldRenounceOwnership = /*#__PURE__*/ createUseReadContract({
  abi: wldAbi,
  functionName: 'renounceOwnership',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link wldAbi}__ and `functionName` set to `"symbol"`
 */
export const useReadWldSymbol = /*#__PURE__*/ createUseReadContract({
  abi: wldAbi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link wldAbi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadWldTotalSupply = /*#__PURE__*/ createUseReadContract({
  abi: wldAbi,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link wldAbi}__
 */
export const useWriteWld = /*#__PURE__*/ createUseWriteContract({ abi: wldAbi })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link wldAbi}__ and `functionName` set to `"acceptOwnership"`
 */
export const useWriteWldAcceptOwnership = /*#__PURE__*/ createUseWriteContract({
  abi: wldAbi,
  functionName: 'acceptOwnership',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link wldAbi}__ and `functionName` set to `"approve"`
 */
export const useWriteWldApprove = /*#__PURE__*/ createUseWriteContract({
  abi: wldAbi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link wldAbi}__ and `functionName` set to `"decreaseAllowance"`
 */
export const useWriteWldDecreaseAllowance =
  /*#__PURE__*/ createUseWriteContract({
    abi: wldAbi,
    functionName: 'decreaseAllowance',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link wldAbi}__ and `functionName` set to `"increaseAllowance"`
 */
export const useWriteWldIncreaseAllowance =
  /*#__PURE__*/ createUseWriteContract({
    abi: wldAbi,
    functionName: 'increaseAllowance',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link wldAbi}__ and `functionName` set to `"mintInflation"`
 */
export const useWriteWldMintInflation = /*#__PURE__*/ createUseWriteContract({
  abi: wldAbi,
  functionName: 'mintInflation',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link wldAbi}__ and `functionName` set to `"mintOnce"`
 */
export const useWriteWldMintOnce = /*#__PURE__*/ createUseWriteContract({
  abi: wldAbi,
  functionName: 'mintOnce',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link wldAbi}__ and `functionName` set to `"setMinter"`
 */
export const useWriteWldSetMinter = /*#__PURE__*/ createUseWriteContract({
  abi: wldAbi,
  functionName: 'setMinter',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link wldAbi}__ and `functionName` set to `"transfer"`
 */
export const useWriteWldTransfer = /*#__PURE__*/ createUseWriteContract({
  abi: wldAbi,
  functionName: 'transfer',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link wldAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteWldTransferFrom = /*#__PURE__*/ createUseWriteContract({
  abi: wldAbi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link wldAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useWriteWldTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: wldAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link wldAbi}__
 */
export const useSimulateWld = /*#__PURE__*/ createUseSimulateContract({
  abi: wldAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link wldAbi}__ and `functionName` set to `"acceptOwnership"`
 */
export const useSimulateWldAcceptOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: wldAbi,
    functionName: 'acceptOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link wldAbi}__ and `functionName` set to `"approve"`
 */
export const useSimulateWldApprove = /*#__PURE__*/ createUseSimulateContract({
  abi: wldAbi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link wldAbi}__ and `functionName` set to `"decreaseAllowance"`
 */
export const useSimulateWldDecreaseAllowance =
  /*#__PURE__*/ createUseSimulateContract({
    abi: wldAbi,
    functionName: 'decreaseAllowance',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link wldAbi}__ and `functionName` set to `"increaseAllowance"`
 */
export const useSimulateWldIncreaseAllowance =
  /*#__PURE__*/ createUseSimulateContract({
    abi: wldAbi,
    functionName: 'increaseAllowance',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link wldAbi}__ and `functionName` set to `"mintInflation"`
 */
export const useSimulateWldMintInflation =
  /*#__PURE__*/ createUseSimulateContract({
    abi: wldAbi,
    functionName: 'mintInflation',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link wldAbi}__ and `functionName` set to `"mintOnce"`
 */
export const useSimulateWldMintOnce = /*#__PURE__*/ createUseSimulateContract({
  abi: wldAbi,
  functionName: 'mintOnce',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link wldAbi}__ and `functionName` set to `"setMinter"`
 */
export const useSimulateWldSetMinter = /*#__PURE__*/ createUseSimulateContract({
  abi: wldAbi,
  functionName: 'setMinter',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link wldAbi}__ and `functionName` set to `"transfer"`
 */
export const useSimulateWldTransfer = /*#__PURE__*/ createUseSimulateContract({
  abi: wldAbi,
  functionName: 'transfer',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link wldAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateWldTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: wldAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link wldAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useSimulateWldTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: wldAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link wldAbi}__
 */
export const useWatchWldEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: wldAbi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link wldAbi}__ and `eventName` set to `"Approval"`
 */
export const useWatchWldApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: wldAbi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link wldAbi}__ and `eventName` set to `"InflationTokensMinted"`
 */
export const useWatchWldInflationTokensMintedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: wldAbi,
    eventName: 'InflationTokensMinted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link wldAbi}__ and `eventName` set to `"OwnershipTransferStarted"`
 */
export const useWatchWldOwnershipTransferStartedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: wldAbi,
    eventName: 'OwnershipTransferStarted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link wldAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const useWatchWldOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: wldAbi,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link wldAbi}__ and `eventName` set to `"TokenUpdated"`
 */
export const useWatchWldTokenUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: wldAbi,
    eventName: 'TokenUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link wldAbi}__ and `eventName` set to `"TokensMinted"`
 */
export const useWatchWldTokensMintedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: wldAbi,
    eventName: 'TokensMinted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link wldAbi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchWldTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: wldAbi,
    eventName: 'Transfer',
  })
