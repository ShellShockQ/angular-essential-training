import { Component, OnInit } from '@angular/core';
import { MediaItemService } from './media-item.service';

@Component({
  selector: 'mw-media-item-list',
  templateUrl: './media-item-list.component.html',
  styleUrls: ['./media-item-list.component.css']
})
export class MediaItemListComponent implements OnInit {
  mediaItems;
  ngOnInit() {
    this.mediaItems=this.mediaItemService.get();
  }
  constructor(private mediaItemService: MediaItemService){}
  onMediaItemDelete(mediaItem) { 
    this.mediaItemService.delete(mediaItem);
  }
}
