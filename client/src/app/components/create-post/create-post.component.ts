import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css'],
})
export class CreatePostComponent implements OnInit {
  public post = {
    title: '',
    image: '',
    text: '',
  };

  constructor(private dataService: DataService, public authService: AuthService) {}

  ngOnInit(): void { }
  
  createPost(): void {
    this.dataService.createPost(this.post).subscribe();
  }
}
