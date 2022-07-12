import { KeyValue } from "@angular/common";
import { Board } from "./board.h";
import { Card } from "./card.h";
import { Item } from "./item.h";

export interface List extends Item
{
	board: Board;
	cards: KeyValue<string, Card>[];
}
