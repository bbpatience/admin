import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { LoginInfo } from '../service/login.info';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    constructor(
        private router: Router,
        private service: UserService) {
    }

    ngOnInit() {}

    onLogin() {
        // TODO username password.
        const info = new LoginInfo('username', 'fd');
        console.log('hello');
        localStorage.setItem('isLoggedin', 'true');
        this.router.navigate(['/dashboard']);
        // this.service.login(info).subscribe(result => {
        //     console.log(result.code);
        //     if (result.code === 10000) {
        //         localStorage.setItem('isLoggedin', 'true');
        //         this.router.navigate(['/dashboard']);
        //     }
        // });
    }
}
