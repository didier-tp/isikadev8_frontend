import { Component, Input, OnInit } from '@angular/core';
import { MenuDefinition } from 'src/bs-util/data/MenuDefinition';
import { PreferencesService } from '../common/service/preferences.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input()
  public titre :string ="app";

  myMenuDefs : MenuDefinition[] = [
    { label : "Pour admin" , 
      children : [
        { label : "login" , path : "ngr-login" } ,
        { label : "admin-devise" , path : "ngr-admin-devise" } ,
        { divider : true },
        { label : "welcome" , path : "ngr-welcome" },
      ]
    },
    { label : "basic" , path : "ngr-basic" } , 
    { label : "conversion" , path : "ngr-conversion" } ,
    { label : "welcome" , path : "ngr-welcome" }
    ];
 

  public couleurFondPrefereeLocale : string = "lightgrey";

  constructor(private _preferencesService : PreferencesService) {
    //synchronisation de la "copie locale":
    this._preferencesService.couleurFondPrefereeObservable
    .subscribe(
      //callback qui sera éventuellement re-déclenchée plusieurs fois:
      (couleurFondPreferee)=>{
          console.log("nouvelle couleurFondPreferee="+couleurFondPreferee)
          this.couleurFondPrefereeLocale=couleurFondPreferee;}
    );
   }

  ngOnInit(): void {
  }

}
