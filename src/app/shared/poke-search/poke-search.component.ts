import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'poke-search',
  templateUrl: './poke-search.component.html',
  styleUrls: ['./poke-search.component.scss']
})
export class PokeSearchComponent implements OnInit {
  @Output() public onSearching: EventEmitter<string> = new EventEmitter();

  private debounce: any;

  constructor() { }

  ngOnInit(): void {
  }

  public search(event: string) : void {
    clearTimeout(this.debounce);

    this.debounce = setTimeout(() => {
      this.onSearching.emit(event);
    }, 500);
  }

}
