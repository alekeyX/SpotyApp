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
      'Authorization': 'Bearer BQCM9uo4QgF4buhIe3dMJyUcEWfBP4PUUlTmVBYApfFdv5-ctCwXRFc5QmeFC8FAnf_9dOzkP2-_IUvsFQI'
    });

    this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers })
            .subscribe( data => {
              console.log(data);
            });
  }
}
