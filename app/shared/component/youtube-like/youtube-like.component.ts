import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-youtube-like',
  templateUrl: './youtube-like.component.html',
  styleUrls: ['./youtube-like.component.scss']
})
export class YoutubeLikeComponent implements OnInit{

@Input() channelliked ! :boolean;
@Output() getChannelLiked :EventEmitter<boolean> = new EventEmitter<boolean>()

  ngOnInit(): void {
  }
  getChannelyoutube(){
    console.log('click');
    this.channelliked = !this.channelliked;
    this.getChannelLiked.emit(this.channelliked)
  }
 
  

}
