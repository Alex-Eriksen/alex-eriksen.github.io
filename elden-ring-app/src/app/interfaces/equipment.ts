import { DamageNegation } from "./damage-negation";
import { Resistance } from "./resistance";

export interface Equipment
{
  name: string;
  weight: number;
  set: string;
  damageNegation: DamageNegation;
  resistance: Resistance;
}
