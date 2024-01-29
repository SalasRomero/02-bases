import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'iron Man'
  public age: number = 45;

  get capitalizeName():string{
    return this.name.toLocaleUpperCase();
  }

  getHeroDescription():string{
    return `${this.name} - ${this.age}`;
  }

  changeHero():void{
    this.name = 'SpideMan'
  }

  changeAge():void{
    this.age = 25;
  }

  resetForm():void{
    this.name = 'iron Man';
    this.age = 45;
  }

}
