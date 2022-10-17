export interface Equipment
{
  name: string;
  type: string;
  weight: number;
  set: string;
  damageNegation: DamageNegation;
  resistance: Resistance;
}

export interface DamageNegation
{
  Lightning: number;
  Physical: number;
  Strike: number;
  Magic: number;
  Slash: number;
  Holy: number;
  Fire: number;
  Pierce: number;
}

export interface Resistance
{
  Robustness: number;
  Focus: number;
  Vitality: number;
  Poise: number;
  Immunity: number;
}
