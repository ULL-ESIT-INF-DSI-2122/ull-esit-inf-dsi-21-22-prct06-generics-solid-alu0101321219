import {Fighter} from "./fighter/fighter";

/**
 * Clase empleada para realizar la simulación de un combate
 * entre 2 contendientes.
 */
class Combat {
  /**
   * Inicializa un objeto de la clase Combat
   * @param fighter1 Contendiente nº 1
   * @param fighter2 Contendiente nº 2
   */
  constructor(private fighter1: Fighter, private fighter2: Fighter) {}

  getFighter1(): Fighter {
    return this.fighter1;
  }

  getFighter2(): Fighter {
    return this.fighter2;
  }

  setFighter1(fighter: Fighter): void {
    this.fighter1 = fighter;
  }

  setFighter2(fighter: Fighter): void {
    this.fighter2 = fighter;
  }
/*
  private getPokemonDamage(fighter: (1 | 2)): number {
    if (fighter == 1) {
      switch (this.fighter1.getType()) {
        case 'fire':
          return 50 * (this.fighter1.getAttack() / this.fighter2.getDefense()) * fire[this.fighter2.getType() as PokemonType];
        case 'grass':
          return 50 * (this.fighter1.getAttack() / this.fighter2.getDefense()) * grass[this.fighter2.getType() as PokemonType];
        case 'water':
          return 50 * (this.fighter1.getAttack() / this.fighter2.getDefense()) * water[this.fighter2.getType() as PokemonType];
        case 'electric':
          return 50 * (this.fighter1.getAttack() / this.fighter2.getDefense()) * electric[this.fighter2.getType() as PokemonType];
      }
    } else {
      switch (this.fighter2.getType()) {
        case 'fire':
          return 50 * (this.fighter2.getAttack() / this.fighter1.getDefense()) * fire[this.fighter1.getType() as PokemonType];
        case 'grass':
          return 50 * (this.fighter2.getAttack() / this.fighter1.getDefense()) * grass[this.fighter1.getType() as PokemonType];
        case 'water':
          return 50 * (this.fighter2.getAttack() / this.fighter1.getDefense()) * water[this.fighter1.getType() as PokemonType];
        case 'electric':
          return 50 * (this.fighter2.getAttack() / this.fighter1.getDefense()) * electric[this.fighter1.getType() as PokemonType];
      }
    }
    return -1;
  }

  private getMarvelDamage(fighter: (1 | 2)): number {
    if (fighter == 1) {
      switch (this.fighter1.getType()) {
        case 'avenger':
          return 50 * (this.fighter1.getAttack() / this.fighter2.getDefense()) * avenger[this.fighter2.getType() as MarvelType];
        case 'thanosSupporter':
          return 50 * (this.fighter1.getAttack() / this.fighter2.getDefense()) * thanosSupporter[this.fighter2.getType() as MarvelType];
        case 'guardianOfTheGalaxy':
          return 50 * (this.fighter1.getAttack() / this.fighter2.getDefense()) * guardianOfTheGalaxy[this.fighter2.getType() as MarvelType];
      }
    } else {
      switch (this.fighter2.getType()) {
        case 'avenger':
          return 50 * (this.fighter2.getAttack() / this.fighter1.getDefense()) * avenger[this.fighter1.getType() as MarvelType];
        case 'thanosSupporter':
          return 50 * (this.fighter2.getAttack() / this.fighter1.getDefense()) * thanosSupporter[this.fighter1.getType() as MarvelType];
        case 'guardianOfTheGalaxy':
          return 50 * (this.fighter2.getAttack() / this.fighter1.getDefense()) * guardianOfTheGalaxy[this.fighter1.getType() as MarvelType];
      }
    }
    return -1;
  }
  */
}