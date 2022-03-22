import {Fighter} from "./fighter/fighter";

class Combat<T extends Fighter, U extends Fighter> {
  constructor(private fighter1: T, private fighter2: U) {}

  getFighter1(): Fighter {
    return this.fighter1;
  }

  getFighter2(): Fighter {
    return this.fighter2;
  }

  // A la hora de calcular la efectividad como sería??
  // Si son 2 pokémons tengo usar la efectividad de la anterior práctica?
  // Para ello calculo la efectividad en la clase pokemon (pokemon.getefect(tipo)) o creo una funcion privada aqui solo para pokemon?
  // Y si son de distintos universos?????????? que hago? compruebo d q universo es cada uno?
  // Y dentro de cada univverso? efectividad para cada uno como en pokemons?
}