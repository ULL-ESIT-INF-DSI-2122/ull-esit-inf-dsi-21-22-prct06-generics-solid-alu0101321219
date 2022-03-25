import 'mocha';
import {expect} from 'chai';
import {BasicStreamableCollection} from './../src/ejercicio-2/basicstreamablecollection';
import {DocumentaryCollection} from './../src/ejercicio-2/documentarycollection';
import {FilmCollection} from './../src/ejercicio-2/filmcollection';
import {SeriesCollection} from './../src/ejercicio-2/seriescollection';
import {Series} from '../src/ejercicio-2/interfaces/series';
import {Film} from '../src/ejercicio-2/interfaces/film';
import {Documentary} from '../src/ejercicio-2/interfaces/documentary';

const docCollect = new DocumentaryCollection();
const seriesCollect = new SeriesCollection();
const filmCollect = new FilmCollection();

const billGatesDocumentary: Documentary = {
  name: 'Inside Bill s Brain: Decoding Bill Gates',
  director: 'Davis Guggenheim',
  categories: ['mistery'],
  year: 2019,
  topic: 'Life of Bill Gates',
  castNames: ['Bill Gates'],
  numberOfSeasons: 1,
  seasonNumberOfChapters(season: number): number {
    if (season == 1) return 1;
    return -1;
  },
};

const avatar: Film = {
  name: 'Avatar',
  director: 'James Cameron',
  categories: ['science fiction', 'action', 'animation', 'adventure'],
  year: 2009,
  durationInMinutes: 162,
  characterNames: ['Jake Sully', 'Neytiri'],
  actorNames: ['Sam Worthington', 'Zoe Saldaña'],
};

const laCasaDePapel: Series = {
  name: 'La Casa de Papel',
  director: 'Alex Pina',
  categories: ['action', 'crime', 'drama'],
  year: 2017,
  characterNames: ['Tokio', 'Berlin', 'Denver'],
  actorNames: ['Ursula Corbelo', 'Pedro Alonso', 'Jaime Lorente'],
  numberOfSeasons: 5,
  seasonNumberOfChapters(season: number): number {
    switch (season) {
      case 1: return 9;
      case 2: return 6;
      case 3: return 8;
      case 4: return 8;
      case 5: return 5;
      default: return -1;
    }
  },
};

describe('Ejercicio 2 - DSIflix', () => {
  describe('BasicStreamableCollection', () => {
    it('Existe una clase llamada "BasicStreamableCollection', () => {
      expect(BasicStreamableCollection != undefined).to.be.true;
    });

    it('Tiene un atributo "collect" para guardar la colección', () => {
      expect('collection' in docCollect).to.be.true;
    });

    it('Tiene un método "getCollection" para obtener la coleción', () => {
      expect('getCollection' in docCollect).to.be.true;
    });

    it('Tiene un método "isRegistered" para comprobar si una emisión se encuentra en la coleción', () => {
      expect('isRegistered' in docCollect).to.be.true;
    });

    it('Tiene un método "addBroadcast" para añadir una emisión a la coleción', () => {
      expect('addBroadcast' in docCollect).to.be.true;
    });

    it('Tiene un método para eliminar emisiones de la colección', () => {
      expect('removeBroadCast' in docCollect).to.be.true;
    });

    it('Tiene un método abstracto para buscar emisiones por nombre', () => {
      expect('searchByName' in docCollect).to.be.true;
    });

    it('Tiene un método abstracto para buscar emisiones por director', () => {
      expect('searchByDirector' in docCollect).to.be.true;
    });

    it('Tiene un método abstracto para buscar emisiones por categoría', () => {
      expect('searchByCategory' in docCollect).to.be.true;
    });

    it('Tiene un método abstracto para buscar emisiones por año de emisión', () => {
      expect('searchByYear' in docCollect).to.be.true;
    });

    it('Tiene un método abstracto para buscar emisiones por puntuación', () => {
      expect('searchByPuntuation' in docCollect).to.be.true;
    });

    it('Tiene un método abstracto para buscar emisiones por casting o personajes', () => {
      expect('searchByCast' in docCollect).to.be.true;
    });
  });

  describe('DocumentaryCollection', () => {
    it('Existe una clase llamada "DocumentaryCollection', () => {
      expect(DocumentaryCollection != undefined).to.be.true;
    });

    it('Se instancia correctamente un objeto de la clase', () => {
      expect(docCollect instanceof DocumentaryCollection).to.be.true;
    });

    it('docCollect.getCollection() == []', () => {
      expect(docCollect.getCollection()).to.be.deep.equal([]);
    });

    it('docCollect.isRegistered(billGatesDocumentary) == false', () => {
      expect(docCollect.isRegistered(billGatesDocumentary)).to.be.false;
    });

    it('docCollect.addBroadcast(billGatesDocumentary) == true', () => {
      expect(docCollect.addBroadcast(billGatesDocumentary)).to.be.true;
    });

    it('docCollect.addBroadcast(billGatesDocumentary) == false', () => {
      expect(docCollect.addBroadcast(billGatesDocumentary)).to.be.false;
    });

    it('docCollect.removeBroadCast(billGatesDocumentary) == true', () =>{
      expect(docCollect.removeBroadCast(billGatesDocumentary)).to.be.true;
    });

    it('docCollect.removeBroadCast(billGatesDocumentary) == false', () =>{
      expect(docCollect.removeBroadCast(billGatesDocumentary)).to.be.false;
    });

    it('docCollect.searchByName("Inside Bill s Brain: Decoding Bill Gates") == [billGatesDocumentary]', () => {
      docCollect.addBroadcast(billGatesDocumentary);
      expect(docCollect.searchByName('Inside Bill s Brain: Decoding Bill Gates')).to.be.deep.equal([billGatesDocumentary]);
    });

    it('docCollect.searchByDirector("Davis Guggenheim") == [billGatesDocumentary]', () => {
      docCollect.addBroadcast(billGatesDocumentary);
      expect(docCollect.searchByDirector('Davis Guggenheim')).to.be.deep.equal([billGatesDocumentary]);
    });

    it('docCollect.searchByCategory("mistery") == [billGatesDocumentary', () => {
      docCollect.addBroadcast(billGatesDocumentary);
      expect(docCollect.searchByCategory('mistery')).to.be.deep.equal([billGatesDocumentary]);
    });

    it('docCollect.searchByYear(2019) == [billGatesDocumentary]', () => {
      docCollect.addBroadcast(billGatesDocumentary);
      expect(docCollect.searchByYear(2019)).to.be.deep.equal([billGatesDocumentary]);
    });

    it('docCollect.searchByPuntuation(3) == []', () => {
      docCollect.addBroadcast(billGatesDocumentary);
      expect(docCollect.searchByPuntuation(3)).to.be.deep.equal([]);
    });

    it('docCollect.searchByCast("Bill Gates") == []', () => {
      docCollect.addBroadcast(billGatesDocumentary);
      expect(docCollect.searchByCast('Bill Gates')).to.be.deep.equal([billGatesDocumentary]);
    });

    it('ocCollect.searchByTopic("Life of Bill Gates") == [billGatesDocumentary]', () => {
      docCollect.addBroadcast(billGatesDocumentary);
      expect(docCollect.searchByTopic('Life of Bill Gates')).to.be.deep.equal([billGatesDocumentary]);
    });

    it('docCollect.searchByNumberOfSeasons(1) == [billGatesDocumentary]', () => {
      docCollect.addBroadcast(billGatesDocumentary);
      expect(docCollect.searchByNumberOfSeasons(1)).to.be.deep.equal([billGatesDocumentary]);
    });
  });

  describe('FilmCollection', () => {
    it('Existe una clase llamada "FilmCollection', () => {
      expect(FilmCollection != undefined).to.be.true;
    });

    it('Se instancia correctamente un objeto de la clase', () => {
      expect(filmCollect instanceof FilmCollection).to.be.true;
    });

    it('filmCollect.getCollection() == []', () => {
      expect(filmCollect.getCollection()).to.be.deep.equal([]);
    });

    it('filmCollect.isRegistered(avatar) == false', () => {
      expect(filmCollect.isRegistered(avatar)).to.be.false;
    });

    it('filmCollect.addBroadcast(avatar) == true', () => {
      expect(filmCollect.addBroadcast(avatar)).to.be.true;
    });

    it('filmCollect.addBroadcast(avatar) == false', () => {
      expect(filmCollect.addBroadcast(avatar)).to.be.false;
    });

    it('filmCollect.removeBroadCast(avatar) == true', () =>{
      expect(filmCollect.removeBroadCast(avatar)).to.be.true;
    });

    it('filmCollect.removeBroadCast(avatar) == false', () =>{
      expect(filmCollect.removeBroadCast(avatar)).to.be.false;
    });

    it('filmCollect.searchByName("Avatar") == [avatar]', () => {
      filmCollect.addBroadcast(avatar);
      expect(filmCollect.searchByName('Avatar')).to.be.deep.equal([avatar]);
    });

    it('filmCollect.searchByDirector("Davis Guggenheim") == [avatar]', () => {
      filmCollect.addBroadcast(avatar);
      expect(filmCollect.searchByDirector('James Cameron')).to.be.deep.equal([avatar]);
    });

    it('filmCollect.searchByCategory("science fiction") == [avatar]', () => {
      filmCollect.addBroadcast(avatar);
      expect(filmCollect.searchByCategory('science fiction')).to.be.deep.equal([avatar]);
    });

    it('filmCollect.searchByYear(2009) == [avatar]', () => {
      filmCollect.addBroadcast(avatar);
      expect(filmCollect.searchByYear(2009)).to.be.deep.equal([avatar]);
    });

    it('filmCollect.searchByPuntuation(3) == []', () => {
      filmCollect.addBroadcast(avatar);
      expect(filmCollect.searchByPuntuation(3)).to.be.deep.equal([]);
    });

    it('filmCollect.searchByCast("Jake Sully") == [avatar]', () => {
      filmCollect.addBroadcast(avatar);
      expect(filmCollect.searchByCast('Jake Sully')).to.be.deep.equal([avatar]);
    });

    it('filmCollect.searchByDuration(162) == [avatar]', () => {
      filmCollect.addBroadcast(avatar);
      expect(filmCollect.searchByDuration(162)).to.be.deep.equal([avatar]);
    });
  });

  describe('SeriesCollection', () => {
    it('Existe una clase llamada "SeriesCollection', () => {
      expect(SeriesCollection != undefined).to.be.true;
    });

    it('Se instancia correctamente un objeto de la clase', () => {
      expect(seriesCollect instanceof SeriesCollection).to.be.true;
    });

    it('seriesCollect.getCollection() == []', () => {
      expect(seriesCollect.getCollection()).to.be.deep.equal([]);
    });

    it('seriesCollect.isRegistered(laCasaDePapel) == false', () => {
      expect(seriesCollect.isRegistered(laCasaDePapel)).to.be.false;
    });

    it('seriesCollect.addBroadcast(laCasaDePapel) == true', () => {
      expect(seriesCollect.addBroadcast(laCasaDePapel)).to.be.true;
    });

    it('seriesCollect.addBroadcast(laCasaDePapel) == false', () => {
      expect(seriesCollect.addBroadcast(laCasaDePapel)).to.be.false;
    });

    it('seriesCollect.removeBroadCast(laCasaDePapel) == true', () =>{
      expect(seriesCollect.removeBroadCast(laCasaDePapel)).to.be.true;
    });

    it('seriesCollect.removeBroadCast(laCasaDePapel) == false', () =>{
      expect(seriesCollect.removeBroadCast(laCasaDePapel)).to.be.false;
    });

    it('seriesCollect.searchByName("La Casa de Papel") == [laCasaDePapel]', () => {
      seriesCollect.addBroadcast(laCasaDePapel);
      expect(seriesCollect.searchByName('La Casa de Papel')).to.be.deep.equal([laCasaDePapel]);
    });

    it('seriesCollect.searchByDirector("Alex Pina") == [laCasaDePapel]', () => {
      seriesCollect.addBroadcast(laCasaDePapel);
      expect(seriesCollect.searchByDirector('Alex Pina')).to.be.deep.equal([laCasaDePapel]);
    });

    it('seriesCollect.searchByCategory("crime") == [laCasaDePapel]', () => {
      seriesCollect.addBroadcast(laCasaDePapel);
      expect(seriesCollect.searchByCategory('crime')).to.be.deep.equal([laCasaDePapel]);
    });

    it('seriesCollect.searchByYear(2017) == [laCasaDePapel]', () => {
      seriesCollect.addBroadcast(laCasaDePapel);
      expect(seriesCollect.searchByYear(2017)).to.be.deep.equal([laCasaDePapel]);
    });

    it('seriesCollect.searchByPuntuation(3) == []', () => {
      seriesCollect.addBroadcast(laCasaDePapel);
      expect(seriesCollect.searchByPuntuation(3)).to.be.deep.equal([]);
    });

    it('seriesCollect.searchByCast("Tokio") == [laCasaDePapel]', () => {
      seriesCollect.addBroadcast(laCasaDePapel);
      expect(seriesCollect.searchByCast('Tokio')).to.be.deep.equal([laCasaDePapel]);
    });

    it('seriesCollect.searchByNumberOfSeasons(5) == [laCasaDePapel]', () => {
      seriesCollect.addBroadcast(laCasaDePapel);
      expect(seriesCollect.searchByNumberOfSeasons(5)).to.be.deep.equal([laCasaDePapel]);
    });
  });
});