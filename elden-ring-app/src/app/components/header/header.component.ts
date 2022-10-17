import { Component, OnInit } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { connectFirestoreEmulator } from 'firebase/firestore';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit
{
  	constructor(private firestore: Firestore) { }

  	public loggedIn: boolean = false;

	ngOnInit(): void
	{
		if (environment.emulator)
    	{
    	  	connectFirestoreEmulator(this.firestore, "localhost", 8081);
    	  	console.log("Connected to Emulator.");
    	}
	}
}
