import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {RedditService} from "../../app/services/reddit.service";
import {AboutPage} from "../about/about";
import {DetailsPage} from "../details/details";

/*
  Generated class for the Reddits page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-reddits',
  templateUrl: 'reddits.html'
})
export class RedditsPage {
items :any;
category : any;
limit :any;
  constructor(public navCtrl: NavController,private redditService : RedditService) {
    this.getDefault();

  }
  ngOnInit(){
this.getPosts(this.category,this.limit);
  }

  getPosts(category,limit){
this.redditService.getPost(category,limit).subscribe(response =>{
  this.items=response.data.children;
});

  }


  getDefault(){
    this.category='sports';
    this.limit=10;
    }
  viewItem(item){

    this.navCtrl.push(DetailsPage, {
      item : item,
    });
}

  changeCat(){
    this.getPosts(this.category,this.limit);
  }



}
