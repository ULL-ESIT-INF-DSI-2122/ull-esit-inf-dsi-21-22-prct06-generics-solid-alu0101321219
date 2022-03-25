import {Streamable} from "./interfaces/streamable";
import {Category, Puntuation} from "./interfaces/broadcast";

/**
 * Clase abstracta utilizada para gestionar una colección de emisiones.
 * Por emisiones entendemos: películas, series y documentales.
 */
export abstract class BasicStreamableCollection<T> implements Streamable<T> {
  /**
   * Colección de emisiones.
   */
  private collection: T[] = [];

  /**
   * Inicializa un objeto de la clase "BasicStreamableCollection".
   * @param collection Conjunto de emisiones iniciales de tipo T a introducir
   * a la hora de crear el objeto que las colecciona.
   */
  constructor(...collection: T[]) {
    collection.forEach((broadcast) => {
      this.addBroadcast(broadcast);
    });
  }

  /**
   * Devuelve la colección de emisiones.
   * @returns Colección de emisiones.
   */
  public getCollection(): T[] {
    return this.collection;
  }

  /**
   * Comprueba si una determinada emisión ya se encuentra
   * en la lista.
   * @param broadcast Emision a comprobar.
   * @returns Verdadero si se encuentra en la lista.
   */
  public isRegistered(broadcast: T): boolean {
    return this.collection.includes(broadcast);
  }

  /**
   * Añade una emisión a la colección si es que esta no se encuentra ya
   * añadida.
   * @param broadcast Emisión a añadir.
   * @returns Verdadero si se añadió con éxito.
   */
  public addBroadcast(broadcast: T): boolean {
    if (this.isRegistered(broadcast)) return false;
    this.collection.push(broadcast);
    return true;
  }

  /**
   * Elimina todas las emisiones de la colección que concidan con las
   * características de la emisión introducida por parámetro.
   * @param broadcast Emisión a eliminar
   * @returns Verdadero si se eliminó correctamente.
   */
  public removeBroadCast(broadcast: T): boolean {
    if (this.isRegistered(broadcast)) {
      this.collection = this.collection.filter((element) => element != broadcast);
      return true;
    }
    return false;
  }

  /**
   * Busca un determinado conjunto de emisiones cuyo nombre o título de cada
   * una de ellas coincida con el introducido por parámetro.
   * @param name Nombre de las emisiones a buscar.
   */
  public abstract searchByName(name: string): T[];

  /**
   * Busca un determinado conjunto de emisiones cuyo director/creador de las
   * mismas coincida con el introducido por parámetro.
   * @param name Nombre del director.
   */
  public abstract searchByDirector(name: string): T[];

  /**
   * Busca un determinado conjunto de emisiones cuya categoría de cada una
   * de ellas coincida con la especificada por parámetro.
   * @param category Categoría.
   */
  public abstract searchByCategory(category: Category): T[];

  /**
   * Busca un determinado conjunto de emisiones cuyo año de publicación
   * coincida con el introducido por parámetro.
   * @param year Año de publicación.
   */
  public abstract searchByYear(year: number): T[];

  /**
   * Busca un determinado conjunto de emisiones cuya puntuación coincida
   * coincida con la introducida por parámetro.
   * @param puntuation Puntuación
   */
  public abstract searchByPuntuation(puntuation: Puntuation): T[];

  /**
   * Busca un determinado conjunto de emisiones que contengan al personaje
   * o actor cuyo nombre es introducido por parámetro.
   * @param name Nombre del actor, personaje o persona del casting.
   */
  public abstract searchByCast(name: string): T[];
}