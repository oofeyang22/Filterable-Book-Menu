// menuItems.tsx
//import React from 'react';

export interface MenuItem {
  id: number;
  title: string;
  category: string;
  price: number;
  img: string;
  desc: string;
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    title: "The buried Giant",
    category: "fantasy",
    price: 15.99,
    img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1451444392i/22522805.jpg",
    desc: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed"
  },
  {
    id: 2,
    title: "Gone Girl",
    category: "thriller",
    price: 13.99,
    img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1554086139l/19288043.jpg",
    desc: "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats"
  },
  {
    id: 3,
    title: "Dune",
    category: "science fiction",
    price: 13.99,
    img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1555447414i/44767458.jpg",
    desc: "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats"
  },
  {
    id: 4,
    title: "Dracula",
    category: "horror",
    price: 15.99,
    img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1680029689i/123878454.jpg",
    desc: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed"
  },
  {
    id: 5,
    title: "A Wizard of Earthsea",
    category: "fantasy",
    price: 15.99,
    img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1353424536i/13642.jpg",
    desc: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed"
  },
  {
    id: 6,
    title: "The Silent Patient",
    category: "thriller",
    price: 15.99,
    img: "https://uncagedfhs.org/wp-content/uploads/2021/01/silent-patient-cover.jpg",
    desc: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed"
  },
  {
    id: 7,
    title: "The Martian",
    category: "science fiction",
    price: 15.99,
    img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1413706054i/18007564.jpg",
    desc: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed"
  },
  {
    id: 8,
    title: "Frankenstein",
    category: "horror",
    price: 15.99,
    img: "https://theforeword.org/wp-content/uploads/2022/11/unnamed.png",
    desc: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed"
  }
];

export default menuItems;
