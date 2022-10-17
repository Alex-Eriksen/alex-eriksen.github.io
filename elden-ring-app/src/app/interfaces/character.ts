import { ArmorEquipment, WeaponEquipment } from "./equipment";

export interface Character
{
	helmet: ArmorEquipment | null;
	chest: ArmorEquipment | null;
	arms: ArmorEquipment | null;
	legs: ArmorEquipment | null;

	mainHand: WeaponEquipment | null;
	offHand: WeaponEquipment | null;
}
