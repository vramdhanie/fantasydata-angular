import { Component } from '@angular/core';

	@Component({
	  moduleId: module.id,
	  selector: 'my-app',
	  template:`
		    <h1>{{title}}</h1>
		    <nav>
		      <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
		      <a routerLink="/heroes" routerLinkActive="active">Players</a>
		    </nav>
		    <router-outlet></router-outlet>
		`,
		styleUrls: ['app.component.css']
		// styles: [`
		//   .selected {
		//     background-color: #CFD8DC !important;
		//     color: white;
		//   }
		//   .players {
		//     margin: 0 0 2em 0;
		//     list-style-type: none;
		//     padding: 0;
		//     width: 15em;
		//   }
		//   .players li {
		//     cursor: pointer;
		//     position: relative;
		//     left: 0;
		//     background-color: #EEE;
		//     margin: .5em;
		//     padding: .3em 0;
		//     height: 1.6em;
		//     border-radius: 4px;
		//   }
		//   .players li.selected:hover {
		//     background-color: #BBD8DC !important;
		//     color: white;
		//   }
		//   .players li:hover {
		//     color: #607D8B;
		//     background-color: #DDD;
		//     left: .1em;
		//   }
		//   .players .text {
		//     position: relative;
		//     top: -3px;
		//   }
		//   .players .badge {
		//     display: inline-block;
		//     font-size: small;
		//     color: white;
		//     padding: 0.8em 0.7em 0 0.7em;
		//     background-color: #607D8B;
		//     line-height: 1em;
		//     position: relative;
		//     left: -1px;
		//     top: -4px;
		//     height: 1.8em;
		//     margin-right: .8em;
		//     border-radius: 4px 0 0 4px;
		//   }
		// `],
		//	providers: [PlayersService]

	})

export class AppComponent {
	title = 'Fantasy Data Capstone';
}

