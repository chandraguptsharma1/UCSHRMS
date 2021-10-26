import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-my-feed',
  templateUrl: './my-feed.page.html',
  styleUrls: ['./my-feed.page.scss'],
})
export class MyFeedPage implements OnInit {

  constructor(private navCtrl:NavController) { }

  ngOnInit() {
  }

  back(){
    this.navCtrl.navigateBack('/home');
  }

}
