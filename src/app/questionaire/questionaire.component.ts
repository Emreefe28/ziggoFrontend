import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questionaire',
  styleUrls: ['./questionaire.component.css'],
  template: `
    DIT IS EEN TEST
    <h1>{{title}}</h1>
    <h2>My favorite hero is: {{myHero}}</h2>
    <p>Heroes:</p>
    <ul>
      <li *ngFor="let hero of heroes">
        <div class="troubleshoot-card__content mdl-card__supporting-text " align="left">
          <div class="troubleshoot-card__layout-cell mdl-card__supporting-text">
            <p>{{hero}}Mogelijk is er een storing in uw regio, waardoor uw internet of helemaal niet werkt of het internet een
              stuk
              trager is dan u gewent bent.</p>
            <p>Controleer of er een storing in uw regio is door op deze pagina te kijken. <a
              href="https://www.w3schools.com/"
              target="_blank">Storing?</a></p>
            <p>Als er geen storing in uw regio is, ga dan verder naar het volgende punt van deze checklist.</p>
          </div>
        </div>
        {{ hero }}
      </li>
    </ul>

    
    
  `


})
export class QuestionaireComponent implements OnInit {
  title = 'Tour of Heroes';
  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  myHero = this.heroes[0];

  onClickMe() {
    this.heroes.push("anotha one")
  }


  vragen = ['Vraag 1', 'Vraag 2', 'Vraag 3', 'Vraag 4'];
  eersteVraag = this.vragen[0];


  constructor() { }

  ngOnInit() {
  }

}
