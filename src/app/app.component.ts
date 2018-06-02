import {Component, OnInit} from '@angular/core';

@Component({selector: 'app-root', templateUrl: './app.component.html', styleUrls: ['./app.component.css']})
export class AppComponent implements OnInit {
    title = 'app';

    items = [];
    cnt = 0;

    delete(idx) {
        --this.cnt;
        this.items.splice(this.items.indexOf(idx)+1, 1);
    }

    addMore() {
        ++this.cnt;
        this.items.push(this.cnt);
    }



    ngOnInit() {
        
    }

}
