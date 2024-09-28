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
    desc: "A knight and his wife embark on a dangerous journey to find their son, encountering mythical creatures."
  },
  {
    id: 2,
    title: "Gone Girl",
    category: "thriller",
    price: 13.99,
    img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1554086139l/19288043.jpg",
    desc: "Amy Dunne mysteriously disappears on her fifth wedding anniversary, leaving behind clues that suggest she may have been murdered by her husband, Nick."

  },
  {
    id: 3,
    title: "Dune",
    category: "science fiction",
    price: 13.99,
    img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1555447414i/44767458.jpg",
    desc: "Set on the desert planet Arrakis, the story follows Paul Atreides, a young man destined to become the Messiah of the Fremen people."
  },
  {
    id: 4,
    title: "Dracula",
    category: "horror",
    price: 15.99,
    img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1680029689i/123878454.jpg",
    desc: "The story centers around Count Dracula, a centuries-old vampire who travels to England to spread his influence."
  },
  {
    id: 5,
    title: "A Wizard of Earthsea",
    category: "fantasy",
    price: 15.99,
    img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1353424536i/13642.jpg",
    desc: " It follows the journey of Ged, a powerful young wizard who accidentally summons a dangerous spirit"
  },
  {
    id: 6,
    title: "The Silent Patient",
    category: "thriller",
    price: 15.99,
    img: "https://uncagedfhs.org/wp-content/uploads/2021/01/silent-patient-cover.jpg",
    desc: "Alicia Berenson, a renowned painter, shoots her husband five times in the face and then refuses to speak a word."
  },
  {
    id: 7,
    title: "The Martian",
    category: "science fiction",
    price: 15.99,
    img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1413706054i/18007564.jpg",
    desc: "Astronaut Mark Watney is stranded on Mars after a severe storm forces his crew to evacuate."
  },
  {
    id: 8,
    title: "Frankenstein",
    category: "horror",
    price: 15.99,
    img: "https://theforeword.org/wp-content/uploads/2022/11/unnamed.png",
    desc: " It tells the story of Victor Frankenstein, a young scientist obsessed with creating life."
  }
];

export default menuItems;
