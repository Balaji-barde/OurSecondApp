import { Component, Input, OnInit } from '@angular/core';
import {
  IPerson,
  IStudent,
  IProduct,
  IMovie,
  ITraveler,
  ICricketer,
  IBook,
  IShop,
  ITrainer,
  IRestaurant,
  IConcert,
  ICar,
  ITeacher,
  IEmployee,
  IYoutuber,
  IGamer,
  IDeveloper,
  IPhotographer,
  IChef,
  IArtist,
  IDoctor,
  IPilot,
  IInfluencer,
  IUniversityStudent,
  IEntrepreneur,
} from '../../models/person';
  
@Component({
  selector: 'app-comp-b',
  templateUrl: './comp-b.component.html',
  styleUrls: ['./comp-b.component.scss'],
})
export class CompBComponent implements OnInit {
  @Input() person!: IPerson;
  @Input() student!: IStudent;
  @Input() product!: IProduct;
  @Input() movie!: IMovie;
  @Input() traveler!: ITraveler;
  @Input() cricketer!: ICricketer;
  @Input() book!: IBook;
  @Input() shop!: IShop;
  @Input() trainer!: ITrainer;
  @Input() restaurant!: IRestaurant;
  @Input() concert!: IConcert;
  @Input() car!: ICar;
  @Input() teacher!: ITeacher;
  @Input() employee!: IEmployee;
  @Input() youtuber!: IYoutuber;
  @Input() gamer!: IGamer;
  @Input() developer!: IDeveloper;
  @Input() photographer!: IPhotographer;
  @Input() chef!: IChef;
  @Input() artist!: IArtist;
  @Input() doctor!: IDoctor;
  @Input() pilot!: IPilot;
  @Input() influencer!: IInfluencer;
  @Input() uniStudent!: IUniversityStudent;
  @Input() entrepreneur!: IEntrepreneur;

  constructor() {}

  ngOnInit(): void {}
}
