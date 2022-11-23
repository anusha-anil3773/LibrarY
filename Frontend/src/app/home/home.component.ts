import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css',
  "../../assets/css/style.css",
  "../../assets/css/skeleton.css",
  "../../assets/css/normalize.css",
  "../../assets/css/font-awesome.css",
  "../../assets/css/font-awesome.min.css"
]
})
export class HomeComponent implements OnInit {
  collapsed = true;
  ngOnInit() {
  }

  constructor(public _auth: AuthService,
    private _router: Router) { }

    logout() {
      localStorage.removeItem('token')
      this._router.navigate([''])
    }
  
    loggedUser() {
      this._router.navigate(['/add'])
    }
    
    goToBottom() {
      window.scrollTo(0, document.body.scrollHeight);
    }

}
