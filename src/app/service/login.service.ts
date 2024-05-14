import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root'
})
export class LoginService {

    isUserLogin() {
        const token = 'da7asdf';
        if (token) return true;
        return false;
    }
}