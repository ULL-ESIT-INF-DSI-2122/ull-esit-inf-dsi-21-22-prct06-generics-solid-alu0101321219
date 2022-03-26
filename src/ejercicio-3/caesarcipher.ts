import {Cipher} from "./cipher";
/**
 * Clase empleada para realizar operaciones de codificación y decodificación
 * propias de un cifrado César.
 */
export class CaesarCipher extends Cipher<string> {
  /**
   * Inicializa un objeto de la clase 'CifradoCesar'
   * @param alphabet Alfabeto de entrada
   * @param key Clave empleada para la codificación
   */
  constructor(alphabet: string, key: string) {
    super(alphabet, key);
    this.formatAlphabet();
  }

  /**
   * Formatea el alfabeto limpiando todos aquellos carácteres
   * repetidos del mismo.
   */
  private formatAlphabet(): void {
    this.setAlphabet([...new Set(this.getAlphabet())].join(''));
  }

  /**
   * Implementamos de nuevo el 'setter' del atributo alfabeto con el objetivo
   * de formatearlo a la hora de introducirlo.
   * @param alphabet Nuevo alfabeto
   */
  public setAlphabet(alphabet: string): void {
    super.setAlphabet(alphabet);
    this.formatAlphabet();
  }

  /**
   * Codifica un mensaje introducido por parámetro
   * @param message Mensaje a codificar o cifrar
   * @returns Mensaje cifrado.
   */
  public encode(message: string): string {
    let encodedMessage: string = '';
    for (let i: number = 0; i < message.length; i++) {
      if (this.getAlphabet().includes(message[i]) &&
        this.getAlphabet().includes(this.getKey()[i % this.getKey().length])) {
        const iMessagePosition: number = this.getAlphabet().indexOf(message[i]);
        const move: number = this.getAlphabet().indexOf(this.getKey()[i % this.getKey().length]) + 1;
        encodedMessage += this.getAlphabet()[(iMessagePosition + move) % this.getAlphabet().length];
      } else {
        encodedMessage += message[i];
      }
    }
    return encodedMessage;
  }

  /**
   * Decodifica un mensaje introducido por parámetro.
   * @param message Mensaje a decodificar o descifrar
   * @returns Mensaje descifrado.
   */
  public decode(message: string): string {
    let decodedMessage: string = '';
    for (let i: number = 0; i < message.length; i++) {
      if (this.getAlphabet().includes(message[i]) &&
        this.getAlphabet().includes(this.getKey()[i % this.getKey().length])) {
        const iMessagePosition: number = this.getAlphabet().indexOf(message[i]);
        const move: number = this.getAlphabet().indexOf(this.getKey()[i % this.getKey().length]) + 1;
        const decodedPosition: number = (iMessagePosition - move) % this.getAlphabet().length;
        decodedMessage += this.getAlphabet().slice(decodedPosition, decodedPosition + 1);
      } else {
        decodedMessage += message[i];
      }
    }
    return decodedMessage;
  }
}

const mycifrado = new CaesarCipher('abcdefghijklmnopqrstuvwxyz', 'clave');
console.log(mycifrado.getAlphabet());
console.log(mycifrado.encode('Tengo una mala noticia, que no fue de casualidad.'));
console.log(mycifrado.decode('Tqoct gow pmmw qauehlm, vxq jt rva gq yfvgbhngme.'));