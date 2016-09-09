import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';

@Injectable()
export class OmdbService {
    constructor(private http: Http) {
    }

    getMovies(title) {
        let movies = this.http.get(`http://www.omdbapi.com/?t=${title}`);
        return movies;
    }
}
