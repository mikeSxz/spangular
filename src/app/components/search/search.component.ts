import { Component, OnInit } from "@angular/core";
import { Heroe, HeroesService } from "../../services/heroes.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent implements OnInit {
  heroes: Heroe[] = [];
  termino: string;
  constructor(
    private _heroesService: HeroesService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe(params => {
      console.log(params);
      this.termino = params["termino"];
      this.heroes = this._heroesService.buscarHeroes(params["termino"]);
      console.log(this.heroes);
    });
  }

  ngOnInit() {}

  verHeroe(idx: number) {
    this.router.navigate(["/heroe", idx]);
  }
}
