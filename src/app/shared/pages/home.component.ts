import { Component, HostBinding } from '@angular/core';
import { fadeInAnimation } from '../../animations';

@Component({
    templateUrl: './home.component.html',
    animations: [fadeInAnimation]
})
export class HomeComponent {
    @HostBinding('@fadeInAnimation') animation = true;
    constructor() {

    }
}
