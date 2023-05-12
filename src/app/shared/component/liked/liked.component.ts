import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-liked',
  templateUrl: './liked.component.html',
  styleUrls: ['./liked.component.scss']
})
export class LikedComponent implements OnInit{
 
 @Input() isLike !: boolean;
 @Output() getLikedCount : EventEmitter<boolean> = new EventEmitter<boolean>();
  ngOnInit(): void {
  }


  getLiked(){
    console.log('click');
    // this.likeCount++;

  }
  clickonlikeIcon(){
    this.isLike = !this.isLike;
    this.getLikedCount.emit(this.isLike)
  }
}
