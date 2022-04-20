import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  private apiUrl: string = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20';

  constructor(private http: HttpClient) { }

  public getAllPokemons(): Observable<any> {
    return this.http.get<any>(this.apiUrl) as Observable<any>
  }

  public getPokemonDataByUrl(url: string): Observable<any> {
    return this.http.get<any>(url) as Observable<any>
  }
}
