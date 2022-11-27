import { Component } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent {

    ngOnInit() {
      const tag = document.createElement('script');
    
      tag.src = "https://www.youtube.com/iframe_api";
      document.body.appendChild(tag);
    }
}
