import { BigNumber } from 'ethers';

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  BigInt: BigInt;
  Int: number;
  Decimal: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: string;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc',
}

export type ListingOrder = {
  __typename: 'Order';
  id: Scalars['BigInt'];
  sellPrice: BigNumber;
  status: OrderStatus;
  sellUserWalletId: Scalars['BigInt'];
  nft: Nft;
};

export type Transaction = {
  sellPrice: BigNumber;
  sellUserWallet: {
    walletAddress: string;
  };
  startedAt: string;
  sellTransaction: {
    txHash: string;
    status: TransactionStatus;
  };
};

export enum OrderStatus {
  OPEN = 'OPEN',
  SOLD = 'SOLD',
  CANCELED = 'CANCELED',
}

export enum TransactionStatus {
  PENDING = 'PENDING',
  CONFIRMED = 'CONFIRMED',
  FAILED = 'FAILED',
}

export enum SortOrder {
  asc = 'asc',
  desc = 'desc',
}

export enum NftType {
  CHARACTER = 'CHARACTER',
  WEAPON = 'WEAPON',
  GEM = 'GEM',
  PLUGIN = 'PLUGIN',
}

export type WeaponMetadata = {
  tokenType: Scalars['String'];
  gunLevel: Scalars['Int'];
  gunStar: Scalars['Int'];
  gunType: Scalars['String'];
  elementalDamage: Scalars['String'];
  aimingTime: Scalars['Int'];
  bulletRange: Scalars['Int'];
  explosionDamageRanger: Scalars['Int'];
  frameWidth: Scalars['Int'];
  gunAttack: Scalars['Int'];
  gunChargeDelay: Scalars['Int'];
  gunDamage: Scalars['Int'];
  gunMagazine: Scalars['Int'];
  gunRarity: Scalars['String'];
  gunReloadTime: Scalars['Int'];
  gunfireShootSpeed: Scalars['Int'];
  numberOfLaserLink: Scalars['Int'];
  rayWidth: Scalars['Int'];
  repeatBulletNumber: Scalars['Int'];
  singleFireBulletNumber: Scalars['Int'];
  __typename: 'WeaponMetadata';
};

export type CharacterMetadata = {
  heroClass: Scalars['String'];
  heroRarity: Scalars['String'];
  attack: Scalars['Int'];
  hp: Scalars['Int'];
  defense: Scalars['Int'];
  criticalRate: Scalars['Int'];
  criticalDamage: Scalars['Int'];
  shotSpeed: Scalars['Int'];
  moveSpeed: Scalars['Int'];
};

export type GemMetadata = {
  gemType: Scalars['String'];
  gemRarity: Scalars['String'];
  primaryAttributes: any; // JSON
  secondaryAttributes: any; // JSON
  tokenType: Scalars['String'];
};

export type PluginMetadata = {
  pluginType: Scalars['String'];
  pluginStar: Scalars['Int'];
  primaryAttributes: any; // JSON
  tokenType: Scalars['String'];
};

export type Nft = {
  __typename: 'Nft';
  id: Scalars['BigInt'];
  nftAddress: Scalars['String'];
  tokenId: Scalars['BigInt'];
  nftType: NftType;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  imageUrl?: Maybe<Scalars['String']>;
  thumbnailUrl?: Maybe<Scalars['String']>;
  weaponMetadata?: WeaponMetadata;
  characterMetadata?: CharacterMetadata;
  gemMetadata?: GemMetadata;
  pluginMetadata?: PluginMetadata;
};

export type StringFilter = {
  equals?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
};

export enum CharacterMetadataScalarFieldEnum {
  Id = 'id',
  NFTID = 'nftId',
  TOKEN_TYPE = 'tokenType',
  HERO_CLASS = 'heroClass',
  HERO_RARITY = 'heroRarity',
  ATTACK = 'attack',
  HP = 'hp',
  DEFENSE = 'defense',
  CRITICAL_RATE = 'criticalRate',
  CRITICAL_DAMAGE = 'criticalDamage',
  SHOT_SPEED = 'shotSpeed',
  MOVE_SPEED = 'moveSpeed',
  TALENTS = 'talents',
}

// export enum WeaponMetadataScalarFieldEnum {
//   Id = 'id',
//   NFTID = 'nftId',
//   TOKEN_TYPE = 'tokenType',
//   GUN_TYPE = 'gunType',
//   GUN_RARITY = 'gunRarity',
//   GUN_STAR = 'gunStar',
//   GUN_LEVEL = 'gunLevel',
//   DEFENSE = 'gunAttack',
//   CRITICAL_RATE = 'criticalRate',
//   CRITICAL_DAMAGE = 'criticalDamage',
//   SHOT_SPEED = 'shotSpeed',
//   MOVE_SPEED = 'moveSpeed',
//   TALENTS = 'talents',
// }
