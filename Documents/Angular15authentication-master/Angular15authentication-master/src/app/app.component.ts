import { Component,DoCheck, ElementRef, Renderer2 } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AuthService } from './service/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { UpdatepopupComponent } from './updatepopup/updatepopup.component';
import { LoginComponent } from './login/login.component';
import { DynamicServiceService } from './dynamic-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {
  title = 'authentication';
  isadmin=false;
  isUser= false ;
  isMenuVisible=false;
  constructor(private route:Router ,private dialog: MatDialog,private dynamicServiceService: DynamicServiceService,
     public service: AuthService, private el: ElementRef, private renderer: Renderer2){
    let role=sessionStorage.getItem('role');
    if(role=='admin'){
      this.isadmin=true;
    }
    if(role=='User'){
      this.isUser= true;
  }
  }

  ngOnInit() {

  }

  scrollToSection(id: string) {
    const element = document.querySelector(`#${id}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  onLogout() {
    this.service.logout();
  }


  //validate role and show menu based on role
  ngDoCheck(): void {
    let currentroute = this.route.url;
    let role=sessionStorage.getItem('role');
    //hide menu if user is not logged in
    if (currentroute == '/login' || currentroute == '/register') {
      this.isMenuVisible = false
    } else {
      this.isMenuVisible = true
    }

    if(role=='User'){
      this.isUser=true;
    }else{
      this.isUser=false;
    }

    if (role == 'admin') {
      this.isadmin = true;
    }else{
      this.isadmin = false;
    }
  }

  login(){
    this.OpenDialog('1000ms', '600ms');
  }
   
  OpenDialog(enteranimation: any, exitanimation: any) {
    const popup = this.dialog.open(LoginComponent, {
      enterAnimationDuration: enteranimation,
      exitAnimationDuration: exitanimation,
      width: '30%',
      data: {

      }
    });
    popup.afterClosed().subscribe((res) => {
      console.log(res);
      if (res === 'login') {
        popup.close();
      }
    });
  }

}
