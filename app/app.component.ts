import { Component, OnInit } from '@angular/core';
import { Ichanel, Ireels } from './shared/model/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
   likdedCount ! :number;
 reelArray : Array<Ireels>=[
  {
    title : 'LifeStyele',
    href : 'https://www.youtube.com/watch?v=uMPGyTUMv0Q',
    isLiked : false,
    likedCount : 0,
    id: 0
  },
  {
    title : 'LifeStyele',
    href : 'https://www.youtube.com/watch?v=uMPGyTUMv0Q',
    isLiked : false,
    likedCount : 0,
    id :1
  },
  {
    title : 'LifeStyele',
    href : 'https://www.youtube.com/watch?v=uMPGyTUMv0Q',
    isLiked : false,
    likedCount : 0,
    id:2
  },
  {
    title : 'LifeStyele',
    href : 'https://www.youtube.com/watch?v=uMPGyTUMv0Q',
    isLiked : false,
    likedCount : 400,
    id:3
  }

 ]

 channelArray :Array<Ichanel> =[
  {
    title:'Marathi',
    id:0,
    likeYouChannel:301,
    channelLiked:false
  },
  {
    title:'Marathi',
    id:1,
    likeYouChannel:301,
    channelLiked:false
  },
  {
    title:'Marathi',
    id:2,
    likeYouChannel:301,
    channelLiked:false
  },
  {
    title:'Marathi',
    id:3,
    likeYouChannel:301,
    channelLiked:false
  }

 ]

  ngOnInit(): void {
  }
  title = 'reusableLikedDisliked';

 getCountlike(likestatue :any,id:number){
  console.log(likestatue,id);
  this.reelArray.forEach(reel =>{
    if(reel.id === id){
      if(likestatue){
        reel.likedCount++
      }else{
        reel.likedCount--
      }
    }
  })
 }
 
 sendChannelLiked(channelLiked:any ,id:number){
  console.log(channelLiked , id);
  this.channelArray.forEach(channel =>{

    if(channel.id === id){
      if(channelLiked){
        console.log(channelLiked)
        channel.likeYouChannel = channel.likeYouChannel +1;
        console.log(channel.likeYouChannel)
      }else{
        channel.likeYouChannel = channel.likeYouChannel -1;
      }
    }
  })
 }
}
