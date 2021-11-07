import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AnniversaryService } from 'src/app/services/anniversary/anniversary.service';

@Component({
  selector: 'app-my-feed',
  templateUrl: './my-feed.page.html',
  styleUrls: ['./my-feed.page.scss'],
})
export class MyFeedPage implements OnInit {

  aniversary:any=[];
  aniversaryNo:any;

  constructor(private navCtrl:NavController,
    private annivarsary:AnniversaryService) { }

  ngOnInit() {
  }

  back(){
    this.navCtrl.navigateBack('/home');
  }

  ionViewDidEnter() {
    this.annivarsary.getAnniversary().subscribe((response) => {
      if(response !=null){
        this.aniversary = response;
      }else{
        this.aniversary = false;
      }
      
      console.log(this.aniversary)
    })
  }



}
