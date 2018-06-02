import {Component, OnInit, OnChanges } from '@angular/core';

@Component({selector: 'app-root', templateUrl: './app.component.html', styleUrls: ['./app.component.css']})
export class AppComponent implements OnInit, OnChanges {
    title = 'app';

    items = [];
    cnt = 0;
    fontSize = 15;

    delete(idx) {
        this.items.splice(this.items.indexOf(idx)+1, 1);
    }

    addMore() {
        ++this.cnt;
        this.items.push(this.cnt);
    }

    valueChanged(e) {
        this.fontSize = e;
    }

    ngOnChanges() {

    }

    ngOnInit() {
        
    }

}
