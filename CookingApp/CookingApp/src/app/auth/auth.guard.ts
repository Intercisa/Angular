import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({providedIn: 'root'})
export class AuthGurad implements CanActivate {
    constructor(private authService:AuthService, private router:Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return this.authService.user.pipe(
            take(1) // we don't need an ongoing listener here, so we take only 1 object and done 
            ,map(user =>{
                const isAuthintivated =  !!user; // converts an object to a boolean -> if it's there it will yield true otherwise
                if(isAuthintivated) return isAuthintivated;
            
                return this.router.createUrlTree(['/auth']);
        }));
    }
}