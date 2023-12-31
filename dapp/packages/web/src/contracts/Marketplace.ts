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

export interface MarketplaceInterface extends utils.Interface {
  functions: {
    'ERC721_Interface()': FunctionFragment;
    'addCurrency(address)': FunctionFragment;
    'cancelOrder(address,uint256)': FunctionFragment;
    'createOrder(address,uint256,address,uint256,uint256,uint256)': FunctionFragment;
    'currencyAddresses(address)': FunctionFragment;
    'executeOrder(address,uint256)': FunctionFragment;
    'getOrder(address,uint256)': FunctionFragment;
    'listNFT(address)': FunctionFragment;
    'nftAddresses(address)': FunctionFragment;
    'onERC721Received(address,address,uint256,bytes)': FunctionFragment;
    'orderByAssetId(address,uint256)': FunctionFragment;
    'owner()': FunctionFragment;
    'ownerCutPerMillion()': FunctionFragment;
    'pause()': FunctionFragment;
    'paused()': FunctionFragment;
    'publicationFee()': FunctionFragment;
    'removeCurrency(address)': FunctionFragment;
    'renounceOwnership()': FunctionFragment;
    'setFeeAddress(address)': FunctionFragment;
    'setOwnerCutPerMillion(uint256)': FunctionFragment;
    'setPublicationFee(uint256)': FunctionFragment;
    'transferOwnership(address)': FunctionFragment;
    'unlistNFT(address)': FunctionFragment;
    'unpause()': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'ERC721_Interface'
      | 'addCurrency'
      | 'cancelOrder'
      | 'createOrder'
      | 'currencyAddresses'
      | 'executeOrder'
      | 'getOrder'
      | 'listNFT'
      | 'nftAddresses'
      | 'onERC721Received'
      | 'orderByAssetId'
      | 'owner'
      | 'ownerCutPerMillion'
      | 'pause'
      | 'paused'
      | 'publicationFee'
      | 'removeCurrency'
      | 'renounceOwnership'
      | 'setFeeAddress'
      | 'setOwnerCutPerMillion'
      | 'setPublicationFee'
      | 'transferOwnership'
      | 'unlistNFT'
      | 'unpause',
  ): FunctionFragment;

  encodeFunctionData(functionFragment: 'ERC721_Interface', values?: undefined): string;
  encodeFunctionData(functionFragment: 'addCurrency', values: [string]): string;
  encodeFunctionData(functionFragment: 'cancelOrder', values: [string, BigNumberish]): string;
  encodeFunctionData(
    functionFragment: 'createOrder',
    values: [string, BigNumberish, string, BigNumberish, BigNumberish, BigNumberish],
  ): string;
  encodeFunctionData(functionFragment: 'currencyAddresses', values: [string]): string;
  encodeFunctionData(functionFragment: 'executeOrder', values: [string, BigNumberish]): string;
  encodeFunctionData(functionFragment: 'getOrder', values: [string, BigNumberish]): string;
  encodeFunctionData(functionFragment: 'listNFT', values: [string]): string;
  encodeFunctionData(functionFragment: 'nftAddresses', values: [string]): string;
  encodeFunctionData(
    functionFragment: 'onERC721Received',
    values: [string, string, BigNumberish, BytesLike],
  ): string;
  encodeFunctionData(functionFragment: 'orderByAssetId', values: [string, BigNumberish]): string;
  encodeFunctionData(functionFragment: 'owner', values?: undefined): string;
  encodeFunctionData(functionFragment: 'ownerCutPerMillion', values?: undefined): string;
  encodeFunctionData(functionFragment: 'pause', values?: undefined): string;
  encodeFunctionData(functionFragment: 'paused', values?: undefined): string;
  encodeFunctionData(functionFragment: 'publicationFee', values?: undefined): string;
  encodeFunctionData(functionFragment: 'removeCurrency', values: [string]): string;
  encodeFunctionData(functionFragment: 'renounceOwnership', values?: undefined): string;
  encodeFunctionData(functionFragment: 'setFeeAddress', values: [string]): string;
  encodeFunctionData(functionFragment: 'setOwnerCutPerMillion', values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: 'setPublicationFee', values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: 'transferOwnership', values: [string]): string;
  encodeFunctionData(functionFragment: 'unlistNFT', values: [string]): string;
  encodeFunctionData(functionFragment: 'unpause', values?: undefined): string;

  decodeFunctionResult(functionFragment: 'ERC721_Interface', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'addCurrency', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'cancelOrder', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'createOrder', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'currencyAddresses', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'executeOrder', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getOrder', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'listNFT', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'nftAddresses', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'onERC721Received', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'orderByAssetId', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'ownerCutPerMillion', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'pause', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'paused', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'publicationFee', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'removeCurrency', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'renounceOwnership', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setFeeAddress', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setOwnerCutPerMillion', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setPublicationFee', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'transferOwnership', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'unlistNFT', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'unpause', data: BytesLike): Result;

  events: {
    'AddCurrency(address)': EventFragment;
    'ChangeFeeAddress(address)': EventFragment;
    'ChangedOwnerCutPerMillion(uint256)': EventFragment;
    'ChangedPublicationFee(uint256)': EventFragment;
    'ListNFT(address)': EventFragment;
    'OrderCancelled(bytes32,uint256,address,address)': EventFragment;
    'OrderCreated(bytes32,uint256,address,address,address,uint256,uint256,uint256)': EventFragment;
    'OrderSuccessful(bytes32,uint256,address,address,address,uint256,address)': EventFragment;
    'OwnershipTransferred(address,address)': EventFragment;
    'Paused(address)': EventFragment;
    'RemoveCurrency(address)': EventFragment;
    'UnlistNFT(address)': EventFragment;
    'Unpaused(address)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'AddCurrency'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'ChangeFeeAddress'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'ChangedOwnerCutPerMillion'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'ChangedPublicationFee'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'ListNFT'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'OrderCancelled'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'OrderCreated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'OrderSuccessful'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'OwnershipTransferred'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Paused'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'RemoveCurrency'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'UnlistNFT'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Unpaused'): EventFragment;
}

export interface AddCurrencyEventObject {
  currencyAddress: string;
}
export type AddCurrencyEvent = TypedEvent<[string], AddCurrencyEventObject>;

export type AddCurrencyEventFilter = TypedEventFilter<AddCurrencyEvent>;

export interface ChangeFeeAddressEventObject {
  feeAddress: string;
}
export type ChangeFeeAddressEvent = TypedEvent<[string], ChangeFeeAddressEventObject>;

export type ChangeFeeAddressEventFilter = TypedEventFilter<ChangeFeeAddressEvent>;

export interface ChangedOwnerCutPerMillionEventObject {
  ownerCutPerMillion: BigNumber;
}
export type ChangedOwnerCutPerMillionEvent = TypedEvent<[BigNumber], ChangedOwnerCutPerMillionEventObject>;

export type ChangedOwnerCutPerMillionEventFilter = TypedEventFilter<ChangedOwnerCutPerMillionEvent>;

export interface ChangedPublicationFeeEventObject {
  publicationFee: BigNumber;
}
export type ChangedPublicationFeeEvent = TypedEvent<[BigNumber], ChangedPublicationFeeEventObject>;

export type ChangedPublicationFeeEventFilter = TypedEventFilter<ChangedPublicationFeeEvent>;

export interface ListNFTEventObject {
  nftAddress: string;
}
export type ListNFTEvent = TypedEvent<[string], ListNFTEventObject>;

export type ListNFTEventFilter = TypedEventFilter<ListNFTEvent>;

export interface OrderCancelledEventObject {
  id: string;
  assetId: BigNumber;
  seller: string;
  nftAddress: string;
}
export type OrderCancelledEvent = TypedEvent<[string, BigNumber, string, string], OrderCancelledEventObject>;

export type OrderCancelledEventFilter = TypedEventFilter<OrderCancelledEvent>;

export interface OrderCreatedEventObject {
  id: string;
  assetId: BigNumber;
  seller: string;
  nftAddress: string;
  currencyAddress: string;
  priceInWei: BigNumber;
  startSaleAt: BigNumber;
  expiresAt: BigNumber;
}
export type OrderCreatedEvent = TypedEvent<
  [string, BigNumber, string, string, string, BigNumber, BigNumber, BigNumber],
  OrderCreatedEventObject
>;

export type OrderCreatedEventFilter = TypedEventFilter<OrderCreatedEvent>;

export interface OrderSuccessfulEventObject {
  id: string;
  assetId: BigNumber;
  seller: string;
  nftAddress: string;
  currencyAddress: string;
  priceInWei: BigNumber;
  buyer: string;
}
export type OrderSuccessfulEvent = TypedEvent<
  [string, BigNumber, string, string, string, BigNumber, string],
  OrderSuccessfulEventObject
>;

export type OrderSuccessfulEventFilter = TypedEventFilter<OrderSuccessfulEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<[string, string], OwnershipTransferredEventObject>;

export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;

export interface PausedEventObject {
  account: string;
}
export type PausedEvent = TypedEvent<[string], PausedEventObject>;

export type PausedEventFilter = TypedEventFilter<PausedEvent>;

export interface RemoveCurrencyEventObject {
  currencyAddress: string;
}
export type RemoveCurrencyEvent = TypedEvent<[string], RemoveCurrencyEventObject>;

export type RemoveCurrencyEventFilter = TypedEventFilter<RemoveCurrencyEvent>;

export interface UnlistNFTEventObject {
  nftAddress: string;
}
export type UnlistNFTEvent = TypedEvent<[string], UnlistNFTEventObject>;

export type UnlistNFTEventFilter = TypedEventFilter<UnlistNFTEvent>;

export interface UnpausedEventObject {
  account: string;
}
export type UnpausedEvent = TypedEvent<[string], UnpausedEventObject>;

export type UnpausedEventFilter = TypedEventFilter<UnpausedEvent>;

export interface Marketplace extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MarketplaceInterface;

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
    ERC721_Interface(overrides?: CallOverrides): Promise<[string]>;

    addCurrency(
      _currency: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    cancelOrder(
      _nftAddress: string,
      _assetId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    createOrder(
      _nftAddress: string,
      _assetId: BigNumberish,
      _currencyAddress: string,
      _priceInWei: BigNumberish,
      _startSaleAt: BigNumberish,
      _expiresAt: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    currencyAddresses(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;

    executeOrder(
      _nftAddress: string,
      _assetId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    getOrder(
      _nftAddress: string,
      _tokenId: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<
      [string, string, string, BigNumber, BigNumber, BigNumber] & {
        id: string;
        seller: string;
        currencyAddress: string;
        price: BigNumber;
        startSaleAt: BigNumber;
        expiresAt: BigNumber;
      }
    >;

    listNFT(
      _nftAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    nftAddresses(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;

    onERC721Received(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    orderByAssetId(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<
      [string, string, string, string, BigNumber, BigNumber, BigNumber] & {
        id: string;
        seller: string;
        nftAddress: string;
        currencyAddress: string;
        price: BigNumber;
        startSaleAt: BigNumber;
        expiresAt: BigNumber;
      }
    >;

    owner(overrides?: CallOverrides): Promise<[string]>;

    ownerCutPerMillion(overrides?: CallOverrides): Promise<[BigNumber]>;

    pause(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

    paused(overrides?: CallOverrides): Promise<[boolean]>;

    publicationFee(overrides?: CallOverrides): Promise<[BigNumber]>;

    removeCurrency(
      _currency: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    setFeeAddress(
      _newFeeAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    setOwnerCutPerMillion(
      _ownerCutPerMillion: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    setPublicationFee(
      _publicationFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    unlistNFT(
      _nftAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    unpause(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;
  };

  ERC721_Interface(overrides?: CallOverrides): Promise<string>;

  addCurrency(
    _currency: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  cancelOrder(
    _nftAddress: string,
    _assetId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  createOrder(
    _nftAddress: string,
    _assetId: BigNumberish,
    _currencyAddress: string,
    _priceInWei: BigNumberish,
    _startSaleAt: BigNumberish,
    _expiresAt: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  currencyAddresses(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  executeOrder(
    _nftAddress: string,
    _assetId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  getOrder(
    _nftAddress: string,
    _tokenId: BigNumberish,
    overrides?: CallOverrides,
  ): Promise<
    [string, string, string, BigNumber, BigNumber, BigNumber] & {
      id: string;
      seller: string;
      currencyAddress: string;
      price: BigNumber;
      startSaleAt: BigNumber;
      expiresAt: BigNumber;
    }
  >;

  listNFT(
    _nftAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  nftAddresses(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  onERC721Received(
    arg0: string,
    arg1: string,
    arg2: BigNumberish,
    arg3: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  orderByAssetId(
    arg0: string,
    arg1: BigNumberish,
    overrides?: CallOverrides,
  ): Promise<
    [string, string, string, string, BigNumber, BigNumber, BigNumber] & {
      id: string;
      seller: string;
      nftAddress: string;
      currencyAddress: string;
      price: BigNumber;
      startSaleAt: BigNumber;
      expiresAt: BigNumber;
    }
  >;

  owner(overrides?: CallOverrides): Promise<string>;

  ownerCutPerMillion(overrides?: CallOverrides): Promise<BigNumber>;

  pause(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  paused(overrides?: CallOverrides): Promise<boolean>;

  publicationFee(overrides?: CallOverrides): Promise<BigNumber>;

  removeCurrency(
    _currency: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  setFeeAddress(
    _newFeeAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  setOwnerCutPerMillion(
    _ownerCutPerMillion: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  setPublicationFee(
    _publicationFee: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  unlistNFT(
    _nftAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  unpause(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  callStatic: {
    ERC721_Interface(overrides?: CallOverrides): Promise<string>;

    addCurrency(_currency: string, overrides?: CallOverrides): Promise<void>;

    cancelOrder(_nftAddress: string, _assetId: BigNumberish, overrides?: CallOverrides): Promise<void>;

    createOrder(
      _nftAddress: string,
      _assetId: BigNumberish,
      _currencyAddress: string,
      _priceInWei: BigNumberish,
      _startSaleAt: BigNumberish,
      _expiresAt: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<void>;

    currencyAddresses(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    executeOrder(_nftAddress: string, _assetId: BigNumberish, overrides?: CallOverrides): Promise<void>;

    getOrder(
      _nftAddress: string,
      _tokenId: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<
      [string, string, string, BigNumber, BigNumber, BigNumber] & {
        id: string;
        seller: string;
        currencyAddress: string;
        price: BigNumber;
        startSaleAt: BigNumber;
        expiresAt: BigNumber;
      }
    >;

    listNFT(_nftAddress: string, overrides?: CallOverrides): Promise<void>;

    nftAddresses(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    onERC721Received(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BytesLike,
      overrides?: CallOverrides,
    ): Promise<string>;

    orderByAssetId(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<
      [string, string, string, string, BigNumber, BigNumber, BigNumber] & {
        id: string;
        seller: string;
        nftAddress: string;
        currencyAddress: string;
        price: BigNumber;
        startSaleAt: BigNumber;
        expiresAt: BigNumber;
      }
    >;

    owner(overrides?: CallOverrides): Promise<string>;

    ownerCutPerMillion(overrides?: CallOverrides): Promise<BigNumber>;

    pause(overrides?: CallOverrides): Promise<void>;

    paused(overrides?: CallOverrides): Promise<boolean>;

    publicationFee(overrides?: CallOverrides): Promise<BigNumber>;

    removeCurrency(_currency: string, overrides?: CallOverrides): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setFeeAddress(_newFeeAddress: string, overrides?: CallOverrides): Promise<void>;

    setOwnerCutPerMillion(_ownerCutPerMillion: BigNumberish, overrides?: CallOverrides): Promise<void>;

    setPublicationFee(_publicationFee: BigNumberish, overrides?: CallOverrides): Promise<void>;

    transferOwnership(newOwner: string, overrides?: CallOverrides): Promise<void>;

    unlistNFT(_nftAddress: string, overrides?: CallOverrides): Promise<void>;

    unpause(overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    'AddCurrency(address)'(currencyAddress?: null): AddCurrencyEventFilter;
    AddCurrency(currencyAddress?: null): AddCurrencyEventFilter;

    'ChangeFeeAddress(address)'(feeAddress?: string | null): ChangeFeeAddressEventFilter;
    ChangeFeeAddress(feeAddress?: string | null): ChangeFeeAddressEventFilter;

    'ChangedOwnerCutPerMillion(uint256)'(ownerCutPerMillion?: null): ChangedOwnerCutPerMillionEventFilter;
    ChangedOwnerCutPerMillion(ownerCutPerMillion?: null): ChangedOwnerCutPerMillionEventFilter;

    'ChangedPublicationFee(uint256)'(publicationFee?: null): ChangedPublicationFeeEventFilter;
    ChangedPublicationFee(publicationFee?: null): ChangedPublicationFeeEventFilter;

    'ListNFT(address)'(nftAddress?: null): ListNFTEventFilter;
    ListNFT(nftAddress?: null): ListNFTEventFilter;

    'OrderCancelled(bytes32,uint256,address,address)'(
      id?: null,
      assetId?: BigNumberish | null,
      seller?: string | null,
      nftAddress?: null,
    ): OrderCancelledEventFilter;
    OrderCancelled(
      id?: null,
      assetId?: BigNumberish | null,
      seller?: string | null,
      nftAddress?: null,
    ): OrderCancelledEventFilter;

    'OrderCreated(bytes32,uint256,address,address,address,uint256,uint256,uint256)'(
      id?: null,
      assetId?: BigNumberish | null,
      seller?: string | null,
      nftAddress?: null,
      currencyAddress?: null,
      priceInWei?: null,
      startSaleAt?: null,
      expiresAt?: null,
    ): OrderCreatedEventFilter;
    OrderCreated(
      id?: null,
      assetId?: BigNumberish | null,
      seller?: string | null,
      nftAddress?: null,
      currencyAddress?: null,
      priceInWei?: null,
      startSaleAt?: null,
      expiresAt?: null,
    ): OrderCreatedEventFilter;

    'OrderSuccessful(bytes32,uint256,address,address,address,uint256,address)'(
      id?: null,
      assetId?: BigNumberish | null,
      seller?: string | null,
      nftAddress?: null,
      currencyAddress?: null,
      priceInWei?: null,
      buyer?: string | null,
    ): OrderSuccessfulEventFilter;
    OrderSuccessful(
      id?: null,
      assetId?: BigNumberish | null,
      seller?: string | null,
      nftAddress?: null,
      currencyAddress?: null,
      priceInWei?: null,
      buyer?: string | null,
    ): OrderSuccessfulEventFilter;

    'OwnershipTransferred(address,address)'(
      previousOwner?: string | null,
      newOwner?: string | null,
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null,
    ): OwnershipTransferredEventFilter;

    'Paused(address)'(account?: null): PausedEventFilter;
    Paused(account?: null): PausedEventFilter;

    'RemoveCurrency(address)'(currencyAddress?: null): RemoveCurrencyEventFilter;
    RemoveCurrency(currencyAddress?: null): RemoveCurrencyEventFilter;

    'UnlistNFT(address)'(nftAddress?: null): UnlistNFTEventFilter;
    UnlistNFT(nftAddress?: null): UnlistNFTEventFilter;

    'Unpaused(address)'(account?: null): UnpausedEventFilter;
    Unpaused(account?: null): UnpausedEventFilter;
  };

  estimateGas: {
    ERC721_Interface(overrides?: CallOverrides): Promise<BigNumber>;

    addCurrency(
      _currency: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    cancelOrder(
      _nftAddress: string,
      _assetId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    createOrder(
      _nftAddress: string,
      _assetId: BigNumberish,
      _currencyAddress: string,
      _priceInWei: BigNumberish,
      _startSaleAt: BigNumberish,
      _expiresAt: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    currencyAddresses(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    executeOrder(
      _nftAddress: string,
      _assetId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    getOrder(_nftAddress: string, _tokenId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    listNFT(
      _nftAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    nftAddresses(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    onERC721Received(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    orderByAssetId(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    ownerCutPerMillion(overrides?: CallOverrides): Promise<BigNumber>;

    pause(overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    paused(overrides?: CallOverrides): Promise<BigNumber>;

    publicationFee(overrides?: CallOverrides): Promise<BigNumber>;

    removeCurrency(
      _currency: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    renounceOwnership(overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    setFeeAddress(
      _newFeeAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    setOwnerCutPerMillion(
      _ownerCutPerMillion: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    setPublicationFee(
      _publicationFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    unlistNFT(
      _nftAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    unpause(overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;
  };

  populateTransaction: {
    ERC721_Interface(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    addCurrency(
      _currency: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    cancelOrder(
      _nftAddress: string,
      _assetId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    createOrder(
      _nftAddress: string,
      _assetId: BigNumberish,
      _currencyAddress: string,
      _priceInWei: BigNumberish,
      _startSaleAt: BigNumberish,
      _expiresAt: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    currencyAddresses(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    executeOrder(
      _nftAddress: string,
      _assetId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    getOrder(
      _nftAddress: string,
      _tokenId: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    listNFT(
      _nftAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    nftAddresses(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    onERC721Received(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    orderByAssetId(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ownerCutPerMillion(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pause(overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>;

    paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    publicationFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    removeCurrency(
      _currency: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    setFeeAddress(
      _newFeeAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    setOwnerCutPerMillion(
      _ownerCutPerMillion: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    setPublicationFee(
      _publicationFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    unlistNFT(
      _nftAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    unpause(overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>;
  };
}
