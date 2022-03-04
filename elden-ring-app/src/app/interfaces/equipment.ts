export interface ArmorEquipment
{
  name: string;
  type: string;
  weight: number;
  set?: string;
  damageNegation: DamageNegation;
  resistance: Resistance;
}

export interface DamageNegation
{
  Lightning?: number;
  Physical?: number;
  Strike?: number;
  Magic?: number;
  Slash?: number;
  Holy?: number;
  Fire?: number;
  Pierce?: number;
}

export interface Resistance
{
  Robustness?: number;
  Focus?: number;
  Vitality?: number;
  Poise?: number;
  Immunity?: number;
}

export interface WeaponEquipment
{
  name: string
  type: string
  weight: number
  set?: string
  attack: Attack
  guard: Guard
  scaling: Scaling[]
  requires: Require[]
}

export interface Attack
{
  phyiscal?: number
  maigc?: number
  fire?: number
  lightning?: number
  holy?: number
  critical?: number
}

export interface Guard
{
  phyiscal?: number
  maigc?: number
  fire?: number
  lightning?: number
  holy?: number
  boost?: number
}

export interface Scaling
{
  stat: string
  rank: string
}

export interface Require
{
  stat: string
  amount: number
}
