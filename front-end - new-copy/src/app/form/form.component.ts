import { Component } from '@angular/core';
import { Rating } from 'src/app/models/rating.model';
import { RatingService } from 'src/app/service/rating.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  rate: Rating = {
    rating:0,
    reviewText: '',
    username: ''
  };
  submitted = false;

  constructor(private ratingService: RatingService) {}

  addRating(): void {
    const data = {
        username : this.rate.username
    };

    this.ratingService.create(data).subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
      },
      error: (e) => console.error(e)
    });
  }
}
