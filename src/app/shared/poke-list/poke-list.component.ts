import { Component, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/services/poke-api.service';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {

  private listFilterPokemon: any = [];

  public listPokemon: any = [];
  public nextUrl: string = '';


  constructor(private pokeApiService: PokeApiService) { }

  ngOnInit(): void {
    this.pokeApiService.getAllPokemons().subscribe(
      res => {
        this.nextUrl = res.next;

        res.results.map((resPokemon: any) => {
          this.pokeApiService.getPokemonDataByUrl(resPokemon.url).subscribe(res => resPokemon.status = res);
          this.listPokemon.push(resPokemon);
          this.listFilterPokemon.push(resPokemon)
        });
      }
    );
  }

  public filter(value: string) : void {
    this.listPokemon = this.listFilterPokemon.filter((res: any) => !res.name.indexOf(value.toLowerCase()));
  }

  public loadMore(): void {
    this.pokeApiService.getPokemonDataByUrl(this.nextUrl).subscribe(
      res => {
        this.nextUrl = res.next;

        res.results.map((resPokemon: any) => {
          this.pokeApiService.getPokemonDataByUrl(resPokemon.url).subscribe(res => resPokemon.status = res);
          this.listPokemon.push(resPokemon);
          this.listFilterPokemon.push(resPokemon)
        });
      }
    )
  }
}
