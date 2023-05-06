import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DynamicServiceService {

  constructor() { }

  private services = [
    {
      icon: 'fa-solid fa-mountain-city',
      title: 'Nesciunt Mete',
      description: 'Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.',
      link: 'service-details.html'
    },
    {
      icon: 'fa-solid fa-arrow-up-from-ground-water',
      title: 'Eosle Commodi',
      description: 'Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem.',
      link: 'service-details.html'
    },
    {
      icon: 'fa-solid fa-compass-drafting',
      title: 'Ledo Markt',
      description: 'Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti.',
      link: 'service-details.html'
    },
    {
      icon: 'fa-solid fa-trowel-bricks',
      title: 'Asperiores Commodit',
      description: 'Non et temporibus minus omnis sed dolor esse consequatur. Cupiditate sed error ea fuga sit provident adipisci neque.',
      link: 'service-details.html'
    },
    {
      icon: 'fa-solid fa-helmet-safety',
      title: 'Velit Doloremque',
      description: 'Cumque et suscipit saepe. Est maiores autem enim facilis ut aut ipsam corporis aut. Sed animi at autem alias eius labore.',
      link: 'service-details.html'
    },
    {
      icon: 'fa-solid fa-arrow-up-from-ground-water',
      title: 'Dolori Architecto',
      description: 'Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque non et debitis iure. Corrupti recusandae ducimus enim.',
      link: 'service-details.html'
    }
  ];

  public getServices() {
    return this.services;
  }
}
