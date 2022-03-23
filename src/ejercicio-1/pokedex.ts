import {Fighter} from "./universe/fighter";

/**
 * Representa una Pokédex: una estructura capaz de almacenar
 * información a cerca de distintos contendientes.
 */
export class Pokedex {
  /**
   * Vector que almacena todos los contendientes registrados
   * hasta el momento.
   */
  private fighters: Fighter[] = [];

  /**
   * Inicializa un objeto de la clase Pokedex
   * @param fighters Contendientes a registrar.
   */
  constructor(...fighters: Fighter[]) {
    fighters.forEach((fighter) => {
      this.addFighter(fighter);
    });
  }

  /**
   * Comprueba si un contendiente está o no registrado.
   * @param fighter Contendiente a comprobar.
   * @returns Verdadero si el contendiente está registrado.
   */
  public isRegistered(fighter: Fighter): boolean {
    return this.fighters.includes(fighter);
  }

  /**
   * Añade un contendiente a la pokédex. Si ya está regitrado no lo añade.
   * @param fighter Contendiente a añadir.
   */
  public addFighter(fighter: Fighter): void {
    if (!this.isRegistered(fighter)) this.fighters.push(fighter);
  }

  /**
   * Calcula el número de contendientes regitrados.
   * @returns Número de contendientes registrados.
   */
  public numberOfRegisteredFighters(): number {
    return this.fighters.length;
  }
}