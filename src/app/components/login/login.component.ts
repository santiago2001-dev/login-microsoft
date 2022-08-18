import { Component, OnInit } from '@angular/core';
import { MSAL_GUARD_CONFIG, MsalGuardConfiguration, MsalService, MsalBroadcastService } from '@azure/msal-angular';
import { PopupRequest, AuthenticationResult } from '@azure/msal-browser';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,

    private  msalservice :MsalService

  ) { }

  ngOnInit(): void {
    
    this.msalservice.instance.handleRedirectPromise().then(

      res => {
        if (res != null && res.account != null) {
          this.msalservice.instance.setActiveAccount(res.account)
        }
      }
    )
  }
  
  loginMicrosoft(){
    this.msalservice.loginPopup().subscribe( ( 
       response : AuthenticationResult)=>{
          this.msalservice.instance.setActiveAccount(response.account)
          
          this.router.navigate(['/private'])
      
  
    })
  }
  

}
