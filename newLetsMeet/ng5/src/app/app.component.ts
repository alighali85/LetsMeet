import { Component } from '@angular/core';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabaseModule, AngularFireDatabase,  } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
items: Observable<any>;
name: any;
msgVal : string = '';
constructor ( public af: AngularFireModule ) {
  

  
}

}
