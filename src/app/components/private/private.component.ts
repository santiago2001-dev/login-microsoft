import { Component, OnInit } from '@angular/core';
import { MsalService } from '@azure/msal-angular';


@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.css']
})
export class PrivateComponent implements OnInit {

  constructor(
    private msalservice :MsalService
  ) { }

  ngOnInit(): void {
    console.log('hola')
  }


  logoutMicrosot(){
    this.msalservice.logout()
    
  }
}
