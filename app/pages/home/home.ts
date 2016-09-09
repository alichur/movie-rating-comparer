import {Component} from "@angular/core";
import {OmdbService} from '../../services/omdb';

@Component({
    templateUrl: 'build/pages/home/home.html',
    providers: [OmdbService]
})
export class HomePage {
    public title;
    public foundMovies;
    public movieTitle;
    public movieRating;

    constructor(private omdb: OmdbService) {
    }

    getMovies() {
      console.log('about to try get some movies')
      this.omdb.getMovies(this.title).subscribe(
        data => {
        this.foundMovies = data.json();
        this.movieTitle = this.foundMovies.Title;
        this.movieRating = this.foundMovies.imdbRating;
      },
        err => console.error(err),
        () => console.log('getMovies completed')
    );

    }
}
