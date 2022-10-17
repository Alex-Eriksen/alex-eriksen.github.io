export interface ArmorEquipment
{
	equipmentName: string;
	equipmentType: string;
  	weight: number;
  	set: string;
  	damageNegation: DamageNegation;
  	resistance: Resistance;
}

export interface DamageNegation
{
  	lightning: number;
  	physical: number;
  	strike: number;
  	magic: number;
  	slash: number;
  	holy: number;
  	fire: number;
  	pierce: number;
}

export interface Resistance
{
  robustness: number;
  focus: number;
  vitality: number;
  poise: number;
  immunity: number;
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
