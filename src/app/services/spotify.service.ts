import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify listo');
  }

  getQuery( query: string ) {
    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBuVzJR801i6hLfoU-LOhxJdKKtpjFLIaaogIiv0dRXwRQaH2n04JKppk4zsR0nP6DMonEvT_i_ShoFgvs'
    });

    return this.http.get(url, { headers });
  }

  getNewReleases() {
    // para mandar el token de cabecera
    // const headers = new HttpHeaders({
    //   'Authorization': 'Bearer BQBBpfmBGaUHLeecEUm82naBEZMR2UKmjTt3I0FddT36xTsqsCpWGQ47T6bzZyVRmx2aMCLzuvqy0-S7n8U'
    // });
    // this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers })
    //           .pipe( map( data => {
    //             return data['albums'].items;
    //           }))

    return this.getQuery('browse/new-releases')
              .pipe( map( data => data['albums'].items ));
  }

  getArtista( termino: string ){

    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
              .pipe( map( data => data['artists'].items));
  }
}
