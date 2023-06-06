import {Component, Input, OnInit} from '@angular/core';
import {HeroService} from "../../service/hero.service";
import {ActivatedRoute} from "@angular/router";
import {Hero} from "../../models/hero";
import {Location} from "@angular/common";

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit{
  // @Input() hero?: Hero;

  hero?: Hero;

  constructor(private route: ActivatedRoute,
              private heroService: HeroService,
              private location: Location) {
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.hero) {
      this.heroService.updateHero(this.hero)
        .subscribe(() => this.goBack());
    }
  }

  ngOnInit(): void {
    this.getHero();
  }
}

