/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers';
import type { FunctionFragment, Result, EventFragment } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from './common';

export interface NftItemInterface extends utils.Interface {
  functions: {
    'DEFAULT_ADMIN_ROLE()': FunctionFragment;
    'MINTER_ROLE()': FunctionFragment;
    'approve(address,uint256)': FunctionFragment;
    'balanceOf(address)': FunctionFragment;
    'burn(uint256)': FunctionFragment;
    'getApproved(uint256)': FunctionFragment;
    'getRoleAdmin(bytes32)': FunctionFragment;
    'getRoleMember(bytes32,uint256)': FunctionFragment;
    'getRoleMemberCount(bytes32)': FunctionFragment;
    'grantRole(bytes32,address)': FunctionFragment;
    'hasRole(bytes32,address)': FunctionFragment;
    'isApprovedForAll(address,address)': FunctionFragment;
    'metadata(uint256)': FunctionFragment;
    'mint(address,string)': FunctionFragment;
    'name()': FunctionFragment;
    'owner()': FunctionFragment;
    'ownerOf(uint256)': FunctionFragment;
    'renounceOwnership()': FunctionFragment;
    'renounceRole(bytes32,address)': FunctionFragment;
    'revokeMinterRole(address)': FunctionFragment;
    'revokeRole(bytes32,address)': FunctionFragment;
    'safeTransferFrom(address,address,uint256)': FunctionFragment;
    'safeTransferFrom(address,address,uint256,bytes)': FunctionFragment;
    'setApprovalForAll(address,bool)': FunctionFragment;
    'setBaseURI(string)': FunctionFragment;
    'setMetadata(uint256,string)': FunctionFragment;
    'setMinterRole(address)': FunctionFragment;
    'supportsInterface(bytes4)': FunctionFragment;
    'symbol()': FunctionFragment;
    'tokenByIndex(uint256)': FunctionFragment;
    'tokenOfOwnerByIndex(address,uint256)': FunctionFragment;
    'tokenURI(uint256)': FunctionFragment;
    'totalSupply()': FunctionFragment;
    'transferFrom(address,address,uint256)': FunctionFragment;
    'transferOwnership(address)': FunctionFragment;
    'walletOfOwner(address,uint256,uint256)': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'DEFAULT_ADMIN_ROLE'
      | 'MINTER_ROLE'
      | 'approve'
      | 'balanceOf'
      | 'burn'
      | 'getApproved'
      | 'getRoleAdmin'
      | 'getRoleMember'
      | 'getRoleMemberCount'
      | 'grantRole'
      | 'hasRole'
      | 'isApprovedForAll'
      | 'metadata'
      | 'mint'
      | 'name'
      | 'owner'
      | 'ownerOf'
      | 'renounceOwnership'
      | 'renounceRole'
      | 'revokeMinterRole'
      | 'revokeRole'
      | 'safeTransferFrom(address,address,uint256)'
      | 'safeTransferFrom(address,address,uint256,bytes)'
      | 'setApprovalForAll'
      | 'setBaseURI'
      | 'setMetadata'
      | 'setMinterRole'
      | 'supportsInterface'
      | 'symbol'
      | 'tokenByIndex'
      | 'tokenOfOwnerByIndex'
      | 'tokenURI'
      | 'totalSupply'
      | 'transferFrom'
      | 'transferOwnership'
      | 'walletOfOwner',
  ): FunctionFragment;

  encodeFunctionData(functionFragment: 'DEFAULT_ADMIN_ROLE', values?: undefined): string;
  encodeFunctionData(functionFragment: 'MINTER_ROLE', values?: undefined): string;
  encodeFunctionData(functionFragment: 'approve', values: [string, BigNumberish]): string;
  encodeFunctionData(functionFragment: 'balanceOf', values: [string]): string;
  encodeFunctionData(functionFragment: 'burn', values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: 'getApproved', values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: 'getRoleAdmin', values: [BytesLike]): string;
  encodeFunctionData(functionFragment: 'getRoleMember', values: [BytesLike, BigNumberish]): string;
  encodeFunctionData(functionFragment: 'getRoleMemberCount', values: [BytesLike]): string;
  encodeFunctionData(functionFragment: 'grantRole', values: [BytesLike, string]): string;
  encodeFunctionData(functionFragment: 'hasRole', values: [BytesLike, string]): string;
  encodeFunctionData(functionFragment: 'isApprovedForAll', values: [string, string]): string;
  encodeFunctionData(functionFragment: 'metadata', values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: 'mint', values: [string, string]): string;
  encodeFunctionData(functionFragment: 'name', values?: undefined): string;
  encodeFunctionData(functionFragment: 'owner', values?: undefined): string;
  encodeFunctionData(functionFragment: 'ownerOf', values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: 'renounceOwnership', values?: undefined): string;
  encodeFunctionData(functionFragment: 'renounceRole', values: [BytesLike, string]): string;
  encodeFunctionData(functionFragment: 'revokeMinterRole', values: [string]): string;
  encodeFunctionData(functionFragment: 'revokeRole', values: [BytesLike, string]): string;
  encodeFunctionData(
    functionFragment: 'safeTransferFrom(address,address,uint256)',
    values: [string, string, BigNumberish],
  ): string;
  encodeFunctionData(
    functionFragment: 'safeTransferFrom(address,address,uint256,bytes)',
    values: [string, string, BigNumberish, BytesLike],
  ): string;
  encodeFunctionData(functionFragment: 'setApprovalForAll', values: [string, boolean]): string;
  encodeFunctionData(functionFragment: 'setBaseURI', values: [string]): string;
  encodeFunctionData(functionFragment: 'setMetadata', values: [BigNumberish, string]): string;
  encodeFunctionData(functionFragment: 'setMinterRole', values: [string]): string;
  encodeFunctionData(functionFragment: 'supportsInterface', values: [BytesLike]): string;
  encodeFunctionData(functionFragment: 'symbol', values?: undefined): string;
  encodeFunctionData(functionFragment: 'tokenByIndex', values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: 'tokenOfOwnerByIndex', values: [string, BigNumberish]): string;
  encodeFunctionData(functionFragment: 'tokenURI', values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: 'totalSupply', values?: undefined): string;
  encodeFunctionData(functionFragment: 'transferFrom', values: [string, string, BigNumberish]): string;
  encodeFunctionData(functionFragment: 'transferOwnership', values: [string]): string;
  encodeFunctionData(functionFragment: 'walletOfOwner', values: [string, BigNumberish, BigNumberish]): string;

  decodeFunctionResult(functionFragment: 'DEFAULT_ADMIN_ROLE', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'MINTER_ROLE', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'approve', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'balanceOf', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'burn', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getApproved', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getRoleAdmin', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getRoleMember', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getRoleMemberCount', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'grantRole', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'hasRole', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'isApprovedForAll', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'metadata', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'mint', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'name', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'ownerOf', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'renounceOwnership', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'renounceRole', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'revokeMinterRole', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'revokeRole', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'safeTransferFrom(address,address,uint256)',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'safeTransferFrom(address,address,uint256,bytes)',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: 'setApprovalForAll', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setBaseURI', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setMetadata', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setMinterRole', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'supportsInterface', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'symbol', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'tokenByIndex', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'tokenOfOwnerByIndex', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'tokenURI', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'totalSupply', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'transferFrom', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'transferOwnership', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'walletOfOwner', data: BytesLike): Result;

  events: {
    'Approval(address,address,uint256)': EventFragment;
    'ApprovalForAll(address,address,bool)': EventFragment;
    'BaseURIChanged(string)': EventFragment;
    'Created(address,uint256,string)': EventFragment;
    'MetadataChanged(uint256,string)': EventFragment;
    'OwnershipTransferred(address,address)': EventFragment;
    'RoleAdminChanged(bytes32,bytes32,bytes32)': EventFragment;
    'RoleGranted(bytes32,address,address)': EventFragment;
    'RoleRevoked(bytes32,address,address)': EventFragment;
    'Transfer(address,address,uint256)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'Approval'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'ApprovalForAll'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'BaseURIChanged'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Created'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'MetadataChanged'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'OwnershipTransferred'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'RoleAdminChanged'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'RoleGranted'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'RoleRevoked'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Transfer'): EventFragment;
}

export interface ApprovalEventObject {
  owner: string;
  approved: string;
  tokenId: BigNumber;
}
export type ApprovalEvent = TypedEvent<[string, string, BigNumber], ApprovalEventObject>;

export type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>;

export interface ApprovalForAllEventObject {
  owner: string;
  operator: string;
  approved: boolean;
}
export type ApprovalForAllEvent = TypedEvent<[string, string, boolean], ApprovalForAllEventObject>;

export type ApprovalForAllEventFilter = TypedEventFilter<ApprovalForAllEvent>;

export interface BaseURIChangedEventObject {
  baseURIExtended: string;
}
export type BaseURIChangedEvent = TypedEvent<[string], BaseURIChangedEventObject>;

export type BaseURIChangedEventFilter = TypedEventFilter<BaseURIChangedEvent>;

export interface CreatedEventObject {
  to: string;
  tokenId: BigNumber;
  metadataId: string;
}
export type CreatedEvent = TypedEvent<[string, BigNumber, string], CreatedEventObject>;

export type CreatedEventFilter = TypedEventFilter<CreatedEvent>;

export interface MetadataChangedEventObject {
  tokenId: BigNumber;
  metadataId: string;
}
export type MetadataChangedEvent = TypedEvent<[BigNumber, string], MetadataChangedEventObject>;

export type MetadataChangedEventFilter = TypedEventFilter<MetadataChangedEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<[string, string], OwnershipTransferredEventObject>;

export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;

export interface RoleAdminChangedEventObject {
  role: string;
  previousAdminRole: string;
  newAdminRole: string;
}
export type RoleAdminChangedEvent = TypedEvent<[string, string, string], RoleAdminChangedEventObject>;

export type RoleAdminChangedEventFilter = TypedEventFilter<RoleAdminChangedEvent>;

export interface RoleGrantedEventObject {
  role: string;
  account: string;
  sender: string;
}
export type RoleGrantedEvent = TypedEvent<[string, string, string], RoleGrantedEventObject>;

export type RoleGrantedEventFilter = TypedEventFilter<RoleGrantedEvent>;

export interface RoleRevokedEventObject {
  role: string;
  account: string;
  sender: string;
}
export type RoleRevokedEvent = TypedEvent<[string, string, string], RoleRevokedEventObject>;

export type RoleRevokedEventFilter = TypedEventFilter<RoleRevokedEvent>;

export interface TransferEventObject {
  from: string;
  to: string;
  tokenId: BigNumber;
}
export type TransferEvent = TypedEvent<[string, string, BigNumber], TransferEventObject>;

export type TransferEventFilter = TypedEventFilter<TransferEvent>;

export interface NftItem extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: NftItemInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<[string]>;

    MINTER_ROLE(overrides?: CallOverrides): Promise<[string]>;

    approve(
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    balanceOf(owner: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    burn(
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    getApproved(tokenId: BigNumberish, overrides?: CallOverrides): Promise<[string]>;

    getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<[string]>;

    getRoleMember(role: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<[string]>;

    getRoleMemberCount(role: BytesLike, overrides?: CallOverrides): Promise<[BigNumber]>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<[boolean]>;

    isApprovedForAll(owner: string, operator: string, overrides?: CallOverrides): Promise<[boolean]>;

    metadata(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;

    mint(
      _to: string,
      _metadataId: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    name(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    ownerOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    revokeMinterRole(
      from: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    'safeTransferFrom(address,address,uint256)'(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    'safeTransferFrom(address,address,uint256,bytes)'(
      from: string,
      to: string,
      tokenId: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    setApprovalForAll(
      operator: string,
      approved: boolean,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    setBaseURI(
      baseURI: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    setMetadata(
      tokenId: BigNumberish,
      _metadataId: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    setMinterRole(
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;

    symbol(overrides?: CallOverrides): Promise<[string]>;

    tokenByIndex(index: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;

    tokenOfOwnerByIndex(owner: string, index: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;

    tokenURI(tokenId: BigNumberish, overrides?: CallOverrides): Promise<[string]>;

    totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    transferFrom(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    walletOfOwner(
      _owner: string,
      _offset: BigNumberish,
      _limit: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<[BigNumber[]]>;
  };

  DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

  MINTER_ROLE(overrides?: CallOverrides): Promise<string>;

  approve(
    to: string,
    tokenId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

  burn(
    tokenId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  getApproved(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;

  getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;

  getRoleMember(role: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<string>;

  getRoleMemberCount(role: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

  grantRole(
    role: BytesLike,
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<boolean>;

  isApprovedForAll(owner: string, operator: string, overrides?: CallOverrides): Promise<boolean>;

  metadata(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  mint(
    _to: string,
    _metadataId: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  name(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  ownerOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  renounceRole(
    role: BytesLike,
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  revokeMinterRole(
    from: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  revokeRole(
    role: BytesLike,
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  'safeTransferFrom(address,address,uint256)'(
    from: string,
    to: string,
    tokenId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  'safeTransferFrom(address,address,uint256,bytes)'(
    from: string,
    to: string,
    tokenId: BigNumberish,
    _data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  setApprovalForAll(
    operator: string,
    approved: boolean,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  setBaseURI(
    baseURI: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  setMetadata(
    tokenId: BigNumberish,
    _metadataId: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  setMinterRole(
    to: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;

  symbol(overrides?: CallOverrides): Promise<string>;

  tokenByIndex(index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

  tokenOfOwnerByIndex(owner: string, index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

  tokenURI(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  transferFrom(
    from: string,
    to: string,
    tokenId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  walletOfOwner(
    _owner: string,
    _offset: BigNumberish,
    _limit: BigNumberish,
    overrides?: CallOverrides,
  ): Promise<BigNumber[]>;

  callStatic: {
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

    MINTER_ROLE(overrides?: CallOverrides): Promise<string>;

    approve(to: string, tokenId: BigNumberish, overrides?: CallOverrides): Promise<void>;

    balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

    burn(tokenId: BigNumberish, overrides?: CallOverrides): Promise<void>;

    getApproved(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;

    getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;

    getRoleMember(role: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<string>;

    getRoleMemberCount(role: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    grantRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<void>;

    hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<boolean>;

    isApprovedForAll(owner: string, operator: string, overrides?: CallOverrides): Promise<boolean>;

    metadata(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

    mint(_to: string, _metadataId: string, overrides?: CallOverrides): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    ownerOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    renounceRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<void>;

    revokeMinterRole(from: string, overrides?: CallOverrides): Promise<void>;

    revokeRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<void>;

    'safeTransferFrom(address,address,uint256)'(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<void>;

    'safeTransferFrom(address,address,uint256,bytes)'(
      from: string,
      to: string,
      tokenId: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides,
    ): Promise<void>;

    setApprovalForAll(operator: string, approved: boolean, overrides?: CallOverrides): Promise<void>;

    setBaseURI(baseURI: string, overrides?: CallOverrides): Promise<void>;

    setMetadata(tokenId: BigNumberish, _metadataId: string, overrides?: CallOverrides): Promise<void>;

    setMinterRole(to: string, overrides?: CallOverrides): Promise<void>;

    supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;

    symbol(overrides?: CallOverrides): Promise<string>;

    tokenByIndex(index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    tokenOfOwnerByIndex(owner: string, index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    tokenURI(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    transferFrom(from: string, to: string, tokenId: BigNumberish, overrides?: CallOverrides): Promise<void>;

    transferOwnership(newOwner: string, overrides?: CallOverrides): Promise<void>;

    walletOfOwner(
      _owner: string,
      _offset: BigNumberish,
      _limit: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber[]>;
  };

  filters: {
    'Approval(address,address,uint256)'(
      owner?: string | null,
      approved?: string | null,
      tokenId?: BigNumberish | null,
    ): ApprovalEventFilter;
    Approval(
      owner?: string | null,
      approved?: string | null,
      tokenId?: BigNumberish | null,
    ): ApprovalEventFilter;

    'ApprovalForAll(address,address,bool)'(
      owner?: string | null,
      operator?: string | null,
      approved?: null,
    ): ApprovalForAllEventFilter;
    ApprovalForAll(
      owner?: string | null,
      operator?: string | null,
      approved?: null,
    ): ApprovalForAllEventFilter;

    'BaseURIChanged(string)'(baseURIExtended?: string | null): BaseURIChangedEventFilter;
    BaseURIChanged(baseURIExtended?: string | null): BaseURIChangedEventFilter;

    'Created(address,uint256,string)'(
      to?: string | null,
      tokenId?: BigNumberish | null,
      metadataId?: null,
    ): CreatedEventFilter;
    Created(to?: string | null, tokenId?: BigNumberish | null, metadataId?: null): CreatedEventFilter;

    'MetadataChanged(uint256,string)'(
      tokenId?: BigNumberish | null,
      metadataId?: null,
    ): MetadataChangedEventFilter;
    MetadataChanged(tokenId?: BigNumberish | null, metadataId?: null): MetadataChangedEventFilter;

    'OwnershipTransferred(address,address)'(
      previousOwner?: string | null,
      newOwner?: string | null,
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null,
    ): OwnershipTransferredEventFilter;

    'RoleAdminChanged(bytes32,bytes32,bytes32)'(
      role?: BytesLike | null,
      previousAdminRole?: BytesLike | null,
      newAdminRole?: BytesLike | null,
    ): RoleAdminChangedEventFilter;
    RoleAdminChanged(
      role?: BytesLike | null,
      previousAdminRole?: BytesLike | null,
      newAdminRole?: BytesLike | null,
    ): RoleAdminChangedEventFilter;

    'RoleGranted(bytes32,address,address)'(
      role?: BytesLike | null,
      account?: string | null,
      sender?: string | null,
    ): RoleGrantedEventFilter;
    RoleGranted(
      role?: BytesLike | null,
      account?: string | null,
      sender?: string | null,
    ): RoleGrantedEventFilter;

    'RoleRevoked(bytes32,address,address)'(
      role?: BytesLike | null,
      account?: string | null,
      sender?: string | null,
    ): RoleRevokedEventFilter;
    RoleRevoked(
      role?: BytesLike | null,
      account?: string | null,
      sender?: string | null,
    ): RoleRevokedEventFilter;

    'Transfer(address,address,uint256)'(
      from?: string | null,
      to?: string | null,
      tokenId?: BigNumberish | null,
    ): TransferEventFilter;
    Transfer(from?: string | null, to?: string | null, tokenId?: BigNumberish | null): TransferEventFilter;
  };

  estimateGas: {
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

    MINTER_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

    approve(
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

    burn(
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    getApproved(tokenId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    getRoleMember(role: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    getRoleMemberCount(role: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<BigNumber>;

    isApprovedForAll(owner: string, operator: string, overrides?: CallOverrides): Promise<BigNumber>;

    metadata(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    mint(
      _to: string,
      _metadataId: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    ownerOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    revokeMinterRole(
      from: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    'safeTransferFrom(address,address,uint256)'(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    'safeTransferFrom(address,address,uint256,bytes)'(
      from: string,
      to: string,
      tokenId: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    setApprovalForAll(
      operator: string,
      approved: boolean,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    setBaseURI(
      baseURI: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    setMetadata(
      tokenId: BigNumberish,
      _metadataId: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    setMinterRole(
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    symbol(overrides?: CallOverrides): Promise<BigNumber>;

    tokenByIndex(index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    tokenOfOwnerByIndex(owner: string, index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    tokenURI(tokenId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    transferFrom(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    walletOfOwner(
      _owner: string,
      _offset: BigNumberish,
      _limit: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MINTER_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    approve(
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    balanceOf(owner: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    burn(
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    getApproved(tokenId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getRoleMember(
      role: BytesLike,
      index: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    getRoleMemberCount(role: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isApprovedForAll(
      owner: string,
      operator: string,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    metadata(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    mint(
      _to: string,
      _metadataId: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ownerOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    revokeMinterRole(
      from: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    'safeTransferFrom(address,address,uint256)'(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    'safeTransferFrom(address,address,uint256,bytes)'(
      from: string,
      to: string,
      tokenId: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    setApprovalForAll(
      operator: string,
      approved: boolean,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    setBaseURI(
      baseURI: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    setMetadata(
      tokenId: BigNumberish,
      _metadataId: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    setMinterRole(
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    tokenByIndex(index: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    tokenOfOwnerByIndex(
      owner: string,
      index: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    tokenURI(tokenId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferFrom(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    walletOfOwner(
      _owner: string,
      _offset: BigNumberish,
      _limit: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;
  };
}