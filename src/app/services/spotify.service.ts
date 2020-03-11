import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify listo');
  }

  getNewReleases() {
    // para mandar el token de cabecera
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQB2ZNTUpbkDnKoa2yfcpi26lJRpTLTDBXujWQ8DRxoW7bDy4Q9PazNF5me49jSq261vtv9MPlO5IZYjwpI'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });
  }
}
