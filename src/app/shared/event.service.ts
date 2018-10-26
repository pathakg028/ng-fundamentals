import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  constructor() {}

  getEvents() {
    return EVENTS;
  }
}

const EVENTS = [
  {
    id: 1,
    name: 'Angular Connect',
    date: '9/26/2020',
    time: '8:00 am',
    price: 599.99,
    imageUrl: '/assets/images/angualrconnect-shield.png',
    location: {
      address: '1057 DT',
      city: 'London',
      country: 'England'
    }
  },
  {
    id: 2,
    name: 'Angular Netherlands',
    date: '10/10/2021',
    time: '10:00 am',
    price: 60,
    imageUrl: '/assets/images/ng-nl.png',
    location: {
      address: 'A very long address just to make this two lines!',
      city: 'Amsterdam',
      country: 'Netherlands'
    }
  },
  {
    id: 3,
    name: 'Angular Vegas',
    date: '10/10/2022',
    time: '9:00 am',
    price: 60,
    imageUrl: '/assets/images/ng-vegas.png',
    location: {
      address: '',
      city: 'Las Vegas',
      country: 'USA'
    }
  },
  {
    id: 3,
    name: 'Angular Conf!',
    date: '10/10/2022',
    time: '12:00 am',
    price: 60,
    imageUrl: '/assets/images/ng-conf.png',
    onlineURL: 'https://ng-conf.com'
  }
];
