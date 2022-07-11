import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

	constructor() { }

	public darkmode: boolean = false;

  	ngOnInit(): void {
  	}

	public toggle_theme()
	{
		var body = document.body.classList.toggle('dark-mode');
		this.darkmode = !this.darkmode;
	}

}
