# DSI - Práctica 6: Clases e interfaces genéricas. Principios SOLID
En esta [github page](https://pages.github.com/) se describe la realización de la [práctica 6](https://ull-esit-inf-dsi-2122.github.io/prct06-generics-solid/) de la asignatura "Desarrollo de Sistemas Informáticos".

## Acerca de
- Universidad de La Laguna
  - Grado en Ingeniería Informática, 3º Curso, 2º Cuatrimestre
  - Desarrollo de Sistemas Informáticos
- Autor:
  - Adrián González Galván
  - alu0101321219@ull.edu.es
  - Cuenta de GitHub: [alu0101321219](https://github.com/alu0101321219)
- Fecha de entrega: 27/03/2022

# Ejercicio 1 - El combate definitivo
## Enunciado
Partiendo del desarrollo realizado para el Ejercicio 1 de la Práctica 5, supongamos que ahora queremos incluir distintos tipos de contendientes a la pelea. Por ejemplo, podríamos incluir personajes del universo Marvel, DC Comics, Star Wars o Dragon Ball entre otros. Puede incluir otros universos y/o personajes que desee. Para extender el desarrollo anterior se pide:
- Desarrolle una clase abstracta llamada Fighter que permita hacer que un contendiente pueda luchar. Esta clase se considerará la superclase del resto de clases a implementar. Para cada universo, desarrolle la clase que lo represente (Pokemon, Marvel, DC, Star Wars, Dragon Ball, etc).
- Cada contendiente debe ser descendiente de su clase universo. Además, para cada contendiente se debe poder acceder a la información requerida para la clase Pokemon de la práctica anterior (nombre, altura, peso, etc). Puede incluir información extra que considere oportuna según el universo.
- La clase Combat ahora permitará que los combates se disputen entre contendientes de distintos universos. Todas las combinaciones deben ser posibles, incluso contendientes del mismo universo. Asimismo, la simulación de los combates debe ser similar a la realizada en la práctica anterior. Sin embargo, ahora con cada ataque los contendientes deberán mostrar alguna catching phrase representativa de su personaje.
- Actualice los valores de efectividad de los movimientos de los nuevos contendientes de la forma que considere oportuna. Contendientes de un universo son más fuertes que los de otro, personajes concretos son más fuertes que otros sin importar el universo o una mezcla de ambas. Puede basarse en un criterio similar al empleado en las prácticas anteriores sobre los tipos de Pokemon.
- La clase Pokedex deberá actualizarse para incluir también el resto de contendientes. Esto es, deberá ser capaz de almacenar personajes de todos los universos considerados dentro de una misma estructura de datos. Además, deberá ofrecer todas las funcionalidades previamente requeridas para los nuevos contendientes.
- Por último, desarrolle este ejercicio empleando los principios SOLID Single Responsability y Open-Closed.

## Resolución
### Resumen
Para realizar este ejercicio se han creado un total de **19 clases**, dicho número viene en gran parte dado por la aplicación del primer principio SOLID. 

#### Contamos con las siguientes clases abstracctas:
- La clase abstracta `Fighter` que representa un contendiente cualquiera de nuestros posibles universos. Esta cuenta con las siguientes derivadas.
- La clase abstracta `FighterPrinter`, que extiende la clase `Fighter` agregando una funcionalidad que permite imprimir por pantalla los datos de la misma.
- La clase abstracta `FighterCatchingPhrase` que extiende `Fighter` agregando un método que muestra la 'catching phrase' de un contendiente cualquiera.
- La clase abstracta `FighterFight` que extiende `Fighter` agregando una funcionalidad que permite calcular el daño que el contendiente invocante causaría a otro pasado por parámetro en caso de combate.

#### Universos implementados
Para esta práctica hemos desarrollado **3 universos**: un `universo Pokemon`, un `universo Marvel` y un `universo Naruto`. Para cada uno de estos 3 contamos con **4 clases**, cada una de las cuales son hijas de cada una de las clases mencionadas en el apartado anterior. Esto se llevo a cabo de esta manera nuevamente para respetar los principios SOLID a la hora de extender funcionalidades dentro de una clase.

#### Otras clases
Por otro lado, contamos con las clases `Combat` y `Pokedex` que se especifican en el enunciado y que permiten iniciar un combate o guardar contendientes de todos nuestros universos respectivamente.

#### Interfaces implementadas
Se han creado a su vez 2 interfaces: una interfaz `Printable` que cuenta con un método de impresión por pantalla y una interfaz `CatchingPhrase` que cuenta con un método que devuelve una cadena con una supuesta catching phrase. Estan han sido implementadas en las clases abstractas mencionadas más arriba y se han creado únicamente con el objetivo de seguir estructurando código.

### Clase `Fighter`
La clase abstracta presenta los **mismos atributos que los que fueron desarrollados en la práctica 5 para la clase Pokemon**. Estos son: un nombre, un peso, una estatura, un tipo y unas estadisticas. Podemos ver los mismos en el constructor:
```typescript
constructor(private readonly name: string, private readonly weight: number,
    private readonly height: number, private readonly type: string,
    private readonly statistics: Statistics) {}
```
Cabe destacar que el **atributo estadísticas** tiene un tipo especial. Este tipo es un objeto con las estadísticas definidas, como se muestra a continuación.
```typescript
export type Statistics = {
  attack: number;
  defense: number;
  speed: number;
  hp: number;
}
```
El resto de métodos que posee son **getters**, puesto que todos sus atributos son de lectura. Dado a que la funcionalidad principal de dicha clase es definir un luchador, no vimos necesario incluir más datos.

### Derivadas de la clase `Fighter`
Como ya hemos mencionado, para aplicar los principios SOLID hemos extendido la clase `Fighter` con **nuevas funcionalidades a través de subclases**. Dichas clases tienen en común su constructor, que básicamente reciben un objeto del tipo luchador.
```typescript
  constructor(private fighter: Fighter) {}
```
Así pues cada una de estas implementa una funcionalidad diferente que puede verse reflejada en su nombre.
- La clase `FighterPrinter` implementa un metodo de impresión por pantalla.
```typescript
public print(): void {
    console.log(`${this.fighter.getName()}: weight = ${this.fighter.getWeight()},` +
    ` height = ${this.fighter.getHeight()}, type = ${this.fighter.getType()},` +
    ` attack = ${this.fighter.getAttack()},` +
    ` defense = ${this.fighter.getDefense()},` +
    ` speed = ${this.fighter.getDefense()}, hp = ${this.fighter.getHP()}`);
  }
```
Este básicamente imprime cada uno de los atributos de la clase.
- La clase `FighterCatchingPhrase` implementa un método de obtener una 'catching phrase'.
- La clase `FighterFight` implementa un método para obtener el daño que el luchador invocante causaría a otro en caso de un ataque.
Todos estos métodos (salvo el de impresión por pantalla) son **abstractos**, pues la idea es que se definan en sus clases hijos de distinta manera.

### Hijas de la clase `Fighter` y de sus derivadas.
Como hemos dicho anteriormente, **cada una de las clases abstractas anteriores tiene su propia implementación para cada uno de nuestros 3 universos**. Como los 3 casos son relativamente muy parecidos tomaremos de ejemplo el universo de Marvel.
#### Hijas de la clase `Fighter`
- Su __constructor__ llama a los elementos que se requieren en el padre y agrega 2 atributos más: uno que comprueba si un personaje lleva máscara y otro que almacena su nombre real.
```typescript
constructor(name: string, weight: number, height: number, type: MarvelType,
      statistics: Statistics, private hasMask: boolean, private realName?: string) {
    super(name, weight, height, type, statistics);
    if (!realName) this.setRealName(this.getName());
  }
```
Como podemos ver su tipo está restrigido a una variable de tipo `MarvelType`. Esto se debe a que para cada universo se han definido sus propios tipos como lo hicimos en su día para la clase pokémon.
```typescript
export type MarvelType = "avenger" | "thanosSupporter" | "guardianOfTheGalaxy";
```
- El resto de métodos son simplemente **getters** y __setters__ de los nuevos atributos.

#### Hijas de las clases `FighterPrinter`, `FighterFight` y `FighterCatchingPhrase`
- Sus **constructores** son idénticos, ambas reciben un objeto cuyo tipo es el universo que están representando.
```typescript
constructor(private marvelPJ: Marvel) {
    super(marvelPJ);
  }
```
- Para la clase `FighterPrinter` se implementan las clases `MarvelPrinter`, `PokemonPrinter` y `NarutoPrinter`. Estas emplean el método print de su padre y a su vez imprimen los atributos nuevos de cada universo.
```typescript
public print(): void {
  console.log(`Universe: Marvel`);
  super.print();
  const mask: string = this.marvelPJ.getHasMask()? 'yes' : 'no';
  console.log(`Other information: real name = ${this.marvelPJ.getRealName()}, have mask? ${mask}`);
}
```
- Para la clase `FighterCatchingPhrase` se implementan las clases `MarvelCatchingPhrase`, `PokemonCatchingPhrase` y `NarutoCatchingPhrase`. Estas sencillamente devuelven una cadena temática dependiente del universo.
```typescript
public catchingPhrase(): string {
    return `I am ${this.marvelPJ.getName()}`;
}
```
- Para la clase `FighterFight` se implementan las clases `MarvelFight`, `PokemonFight` y `NarutoFight`. Estas devuelven el daño que el contendiente invocante haria  otro de su mismo universo en caso de ataque.
```typescript
public fight(otherMarvelPJ: Marvel): number {
    switch (this.marvelPJ.getType()) {
      case 'avenger':
        return 50 * (this.marvelPJ.getAttack() / otherMarvelPJ.getDefense()) * avenger[otherMarvelPJ.getType() as MarvelType];
      case 'thanosSupporter':
        return 50 * (this.marvelPJ.getAttack() / otherMarvelPJ.getDefense()) * thanosSupporter[otherMarvelPJ.getType() as MarvelType];
      case 'guardianOfTheGalaxy':
        return 50 * (this.marvelPJ.getAttack() / otherMarvelPJ.getDefense()) * guardianOfTheGalaxy[otherMarvelPJ.getType() as MarvelType];
    }
    return -1;
}
```
Como podemos observar en el ejemplo de MarvelFight, **sólo podemos ejecutar este método con contendientes del mismo universo para la que está diseñada la clase**. Asi mismo, cabe destacar que para calcular la efectividad se ha hecho uso de `enumerables`, como ocurrió en la práctica anterior. Estos enumerables tienen el mismo nombre que los tipos de cada universo y se crean de la siguiente manera:
```typescript
enum avenger {avenger = 0.5, thanosSupporter = 2, guardianOfTheGalaxy = 0.5};
```

### Clase `Combat`
Como se comenta en el enunciado de la práctica la clase `Combat` puede hacer luchar a contendientes de **distintos universos**. Por lo tanto trabajaremos con la clase `Fighter` dentro de ella.
- El **constructor** inicializas 2 atributos de tipo `Figher` que representan a nuestros luchadores.
```typescript
constructor(private fighter1: Fighter, private fighter2: Fighter) {}
```
- Asimismo, definimos los **setters** y __getters__ respectivos.
- Para el caso de la **efectividad**, recordemos que nos falta definir el daño causado entre oponentes de distintos universos. Para ello desarrollamos una función `fight` dentro de esta misma clase que nos lo calcule. A esta se le pasa por parámetro un 1 o un 2 dependiendo de si se quiere calcular el daño del oponente 1 o del oponente 2.
```typescript
private fight(fighter: (1 | 2)): number {
    if (fighter == 1) {
      switch (this.fighter1.constructor.name) {
        case 'Pokemon':
          if (this.fighter2.constructor.name == 'Marvel') return (this.fighter1.getAttack() / this.fighter2.getDefense()) * 0.5;
          if (this.fighter2.constructor.name == 'Naruto') return (this.fighter1.getAttack() / this.fighter2.getDefense()) * 2;
        case 'Marvel':
          if (this.fighter2.constructor.name == 'Pokemon') return (this.fighter1.getAttack() / this.fighter2.getDefense()) * 2;
          if (this.fighter2.constructor.name == 'Naruto') return (this.fighter1.getAttack() / this.fighter2.getDefense()) * 1;
        case 'Naruto':
          if (this.fighter2.constructor.name == 'Marvel') return (this.fighter1.getAttack() / this.fighter2.getDefense()) * 2;
          if (this.fighter2.constructor.name == 'Pokemon') return (this.fighter1.getAttack() / this.fighter2.getDefense()) * 1;
      }
    } else {
      switch (this.fighter2.constructor.name) {
        case 'Pokemon':
          if (this.fighter1.constructor.name == 'Marvel') return (this.fighter2.getAttack() / this.fighter1.getDefense()) * 0.5;
          if (this.fighter1.constructor.name == 'Naruto') return (this.fighter2.getAttack() / this.fighter1.getDefense()) * 2;
        case 'Marvel':
          if (this.fighter1.constructor.name == 'Pokemon') return (this.fighter2.getAttack() / this.fighter1.getDefense()) * 2;
          if (this.fighter1.constructor.name == 'Naruto') return (this.fighter2.getAttack() / this.fighter1.getDefense()) * 1;
        case 'Naruto':
          if (this.fighter1.constructor.name == 'Marvel') return (this.fighter2.getAttack() / this.fighter1.getDefense()) * 2;
          if (this.fighter1.constructor.name == 'Pokemon') return (this.fighter2.getAttack() / this.fighter1.getDefense()) * 1;
      }
    }
    return -1;
  }
```
Esta es **privada** para que solo pueda ser llamada dentro del método que simula el combate. Como se puede observar se utiliza la misma fórmula para calcular el daño y utilizamos una serie de efectividades ya definidas.
- Para la **simulación del combate** se implementa el método `start`, al cual le podemos pasar una variable booleana que indique si queremos imprmir el desarrollo del combate por pantalla. Este devuelve el contendiente ganador.
```typescript
ublic start(printable: boolean = true): Fighter {
    let round: number = 1;
    let isfighter1turn: boolean = true;
    let fighter1hp = this.fighter1.getHP();
    let fighter2hp = this.fighter2.getHP();

    let fighter1Damage: number = 1;
    let fighter2Damage: number = 1;
    let fighter1Phrase: string = '';
    let fighter2Phrase: string = '';
    if (this.fighter1 instanceof Pokemon) {
      fighter1Phrase = new PokemonCatchingPhrase(this.fighter1).catchingPhrase();
      if (this.fighter2 instanceof Pokemon) {
        fighter1Damage = new PokemonFight(this.fighter1).fight(this.fighter2);
        fighter2Damage = new PokemonFight(this.fighter2).fight(this.fighter1);
      } else {
        fighter1Damage = this.fight(1);
        fighter2Damage = this.fight(2);
      }
    } else if (this.fighter1 instanceof Marvel) {
      fighter1Phrase = new MarvelCatchingPhrase(this.fighter1).catchingPhrase();
      if (this.fighter2 instanceof Marvel) {
        fighter1Damage = new MarvelFight(this.fighter1).fight(this.fighter2);
        fighter2Damage = new MarvelFight(this.fighter2).fight(this.fighter1);
      } else {
        fighter1Damage = this.fight(1);
        fighter2Damage = this.fight(2);
      }
    } else if (this.fighter1 instanceof Naruto) {
      fighter1Phrase = new NarutoCatchingPhrase(this.fighter1).catchingPhrase();
      if (this.fighter2 instanceof Naruto) {
        fighter1Damage = new NarutoFight(this.fighter1).fight(this.fighter2);
        fighter2Damage = new NarutoFight(this.fighter2).fight(this.fighter1);
      } else {
        fighter1Damage = this.fight(1);
        fighter2Damage = this.fight(2);
      }
    }

    if (this.fighter2 instanceof Pokemon) fighter2Phrase = new PokemonCatchingPhrase(this.fighter2).catchingPhrase();
    else if (this.fighter2 instanceof Marvel) fighter2Phrase = new MarvelCatchingPhrase(this.fighter2).catchingPhrase();
    else if (this.fighter2 instanceof Naruto) fighter2Phrase = new NarutoCatchingPhrase(this.fighter2).catchingPhrase();

    if (this.fighter2.getSpeed() > this.fighter1.getSpeed()) isfighter1turn = false;

    while (fighter1hp > 0 && fighter2hp > 0) {
      if (printable) {
        console.log(`\nRound ${round}:`);
        console.log(` > [ ${this.fighter1.getName()} ] = ${fighter1hp} (hp)`);
        console.log(` > [ ${this.fighter2.getName()} ] = ${fighter2hp} (hp)`);
      }
      if (isfighter1turn) {
        fighter2hp -= fighter1Damage;
        isfighter1turn = false;
        if (printable) {
          console.log(`\n --> ${this.fighter1.getName()} hits ${this.fighter2.getName()} with ` +
            `${fighter1Damage} of damage.`);
          console.log(fighter1Phrase);
        }
      } else {
        fighter1hp -= fighter2Damage;
        isfighter1turn = true;
        if (printable) {
          console.log(`\n --> ${this.fighter2.getName()} hits ${this.fighter1.getName()} with ` +
            `${fighter2Damage} of damage.`);
          console.log(fighter2Phrase);
        }
      }
      round++;
    }

    let winner: Fighter = this.fighter1;
    if (fighter1hp < 0) {
      fighter1hp = 0;
      winner = this.fighter2;
    } else fighter2hp = 0;

    if (printable) {
      console.log(`\nRound ${round}: ` + `${winner.getName()} wins!!`);
      console.log(` > [ ${this.fighter1.getName()} ]  = ${fighter1hp} (hp)`);
      console.log(` > [ ${this.fighter2.getName()} ]  = ${fighter2hp} (hp)`);
    }
    return winner;
  }
```
1. Como podemos observar **inicializamos las variables** donde mostrar las **catching phrases** y los **daños** de cada uno de los contricantes al principio del método.
2. Seguidamente, a través de `if` comprobamos mediante `instance of` la pertenencia de cada atributo a cada una de las subclases. Asi pues, si son del mismo universo utilizamos el daño correspondiente entre contendientes de la misma clase. En cambio si son de diferente universo calculamos el daño con la función anterior a esta.
3. El resto del bucle se basa en ir restandose vida consecutivamente por turnos hasta que esta llegue a un valor menor que cero.
4. Por último se selecciona el ganador y se imprime, si es que se eligió el ganador. Nótese que para no imprimir vida con valores negativos esta se iguala a cero.

### Clase `Pokedex`
La clase `Pokédex` no tiene variación ninguna que la de la práctica anterior, quitando el hecho de que ahora se almacenan `Fighter`'s  y no Pokemons.
- El **constructor** permite introducir por parámetro un conjunto indeterminado de contendientes a través de un parámetro rest. Este emplea la función add para añadir, la cual comprueba que no se pasen contendientes repetidos.
```typescript
constructor(...fighters: Fighter[]) {
    fighters.forEach((fighter) => {
      this.addFighter(fighter);
    });
  }
```
- El único atributo que posee la clase es un vector de `Fighter` que sirve como contenedor de los distintos contendientes.
```typescript
  private fighters: Fighter[] = [];
```
- Cuenta con una función para ver si un contendiente ya habia sido __registrado__. 
```typescript
public isRegistered(fighter: Fighter): boolean {
    return this.fighters.includes(fighter);
  }
```
- Cuenta con un método para __añadir contendientes que no habian sido añadidos__. Para ello hace uso de la función anterior.
```typescript
 public addFighter(fighter: Fighter): void {
    if (!this.isRegistered(fighter)) this.fighters.push(fighter);
  }
```
- Por último, cuenta con un método que __calcula el número de contendientes almacenado__. Esto es básicament retornar el tamaño del vector.
```typescript
public numberOfRegisteredFighters(): number {
    return this.fighters.length;
  }
```

# Ejercicio 2 - DSIflix
# Ejercicio 3 - El cifrado indescifrable