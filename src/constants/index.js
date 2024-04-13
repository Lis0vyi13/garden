// Categories
import fertilizer from "/categories/fertilizer.png";
import Protective_products from "/categories/Protective_products.png";
import Planting_material from "/categories/Planting_material.png";
import Tools_equipment from "/categories/Tools_equipment.png";
import pots_and_planters from "/categories/pots_and_planters.png";
import decor from "/categories/decor.webp";
// Products
import secateurs from "/products/secateurs.png";
import aquarium_lock from "/products/Aquarium_lock.png";
import barbell from "/products/barbell.png";
import bayonet_shovel from "/products/bayonet-shovel.png";
import berries_collection from "/products/berries-collection.png";
import Decorative_bridge from "/products/Decorative_bridge.png";
import Flower_basket from "/products/Flower_basket.png";
import gargen_pitchfork from "/products/gargen-pitchfork.png";
import gloves from "/products/gloves.png";
import hacksaw from "/products/hacksaw.png";
import souvenir_thermometer from "/products/souvenir-thermometer.png";
import organic_fertilizer from "/products/organic_fertilizer.jpg";
import liquid_fertilizer_for_flowers from "/products/liquid_fertilizer_for_flowers.jpg";
import granular_fertilizer from "/products/granular_fertilizer.webp";
import insect_repellent from "/products/insect_repellent.jpg";
import hand_sanitizer from "/products/hand_sanitizer.jpg";
import septic_tank_tablets from "/products/septic_tank_tablets.webp";
import hydrogel from "/products/hydrogel.jpg";
import perlite from "/products/perlite.webp";
import seed_trays from "/products/seed_trays.webp";
import potting_soil from "/products/potting_soil.webp";
import window_planter from "/products/window_planter.webp";
import decorative_planter from "/products/decorative_planter.webp";
import hanging_basket from "/products/hanging_basket.webp";
import ceramic_pot from "/products/ceramic_pot.webp";

import telegram from "/telegram.svg";

export const navLinks = [
  { name: "Main Page", href: "/" },
  { name: "Categories", href: "categories" },
  {
    name: "All products",
    href: "all-products?from=&to=&discount=&sortBy=default&category=All+products",
  },
];

export const categoriesList = [
  {
    name: "Fertilizer",
    href: fertilizer,
    url: "/all-products?from=&to=&discount=&sortBy=default&category=Fertilizer",
    value: "Fertilizer",
  },
  {
    name: "Protective products and septic tanks",
    href: Protective_products,
    url: "/all-products?from=&to=&discount=&sortBy=default&category=Protective+products+and+septic+tanks",
    value: "Protective products and septic tanks",
  },
  {
    name: "Planting material",
    href: Planting_material,
    url: "/all-products?from=&to=&discount=&sortBy=default&category=Planting+material",
    value: "Planting material",
  },
  {
    name: "Tools and equipment",
    href: Tools_equipment,
    url: "/all-products?from=&to=&discount=&sortBy=default&category=Tools+and+equipment",
    value: "Tools and equipment",
  },
  {
    name: "Pots and planters",
    href: pots_and_planters,
    url: "/all-products?from=&to=&discount=&sortBy=default&category=Pots+and+planters",
    value: "Pots and planters",
  },
  {
    name: "Decor",
    href: decor,
    url: "/all-products?from=&to=&discount=&sortBy=default&category=Decor",
    value: "Decor",
  },
];

export const discountFormInputs = [
  {
    name: "name",
    placeholder: "Name",
  },
  { name: "phone", placeholder: "Phone number", type: "number" },
  { name: "email", placeholder: "Email", type: "email" },
];

export const products = [
  {
    name: "Flower basket",
    price: 150,
    img: Flower_basket,
    discount: 0.34,
    url: "/cat",
    type: "decor",
    id: 1,
  },
  {
    name: "Aquarium lock",
    price: 200,
    img: aquarium_lock,
    discount: 0.25,
    url: "/cat",
    type: "decor",
    id: 2,
  },
  {
    name: "Organic fertilizer",
    price: 20,
    img: organic_fertilizer,
    discount: null,
    url: "/cat",
    type: "fertilizer",
    id: 3,
  },
  {
    name: "Secateurs",
    price: 240,
    img: secateurs,
    discount: 0.17,
    url: "/cat",
    type: "tools-and-equipment",
    id: 4,
  },
  {
    name: "Collection for berries (plastic)",
    price: 35,
    img: berries_collection,
    discount: 0.26,
    url: "/cat",
    type: "tools-and-equipment",
    id: 5,
  },
  {
    name: "Gloves (black)",
    price: 14,
    img: gloves,
    discount: 0.36,
    url: "/cat",
    type: "tools-and-equipment",
    id: 6,
  },
  {
    name: "Sickle-shaped hacksaw",
    price: 155,
    img: hacksaw,
    discount: null,
    url: "/cat",
    type: "tools-and-equipment",
    id: 7,
  },
  {
    name: "Bayonet shovel",
    price: 180,
    img: bayonet_shovel,
    discount: null,
    url: "/cat",
    type: "tools-and-equipment",
    id: 8,
  },
  {
    name: "Liquid fertilizer for flowers",
    price: 15,
    img: liquid_fertilizer_for_flowers,
    discount: 0.1,
    url: "/cat",
    type: "fertilizer",
    id: 9,
  },
  {
    name: "Granular fertilizer for vegetables",
    price: 25,
    img: granular_fertilizer,
    discount: null,
    url: "/cat",
    type: "fertilizer",
    id: 10,
  },
  {
    name: "Insect repellent spray",
    price: 10,
    img: insect_repellent,
    discount: null,
    url: "/cat",
    type: "protective-products-and-septic-tanks",
    id: 11,
  },
  {
    name: "Garden pitchfork",
    price: 179,
    img: gargen_pitchfork,
    discount: null,
    url: "/cat",
    type: "tools-and-equipment",
    id: 12,
  },
  {
    name: "Barbell",
    price: 12,
    img: barbell,
    discount: null,
    url: "/cat",
    type: "tools-and-equipment",
    id: 13,
  },
  {
    name: "Souvenir thermometer",
    price: 120,
    img: souvenir_thermometer,
    discount: 0.18,
    url: "/cat",
    type: "tools-and-equipment",
    id: 14,
  },
  {
    name: "Decorative forged bridge",
    price: 1000,
    img: Decorative_bridge,
    discount: 0.5,
    url: "/cat",
    type: "decor",
    id: 15,
  },
  {
    name: "Antibacterial hand sanitizer",
    price: 8,
    img: hand_sanitizer,
    discount: 0.15,
    url: "/cat",
    type: "protective-products-and-septic-tanks",
    id: 16,
  },
  {
    name: "Septic tank treatment tablets",
    price: 30,
    img: septic_tank_tablets,
    discount: null,
    url: "/cat",
    type: "protective-products-and-septic-tanks",
    id: 17,
  },
  {
    name: "Hydrogel for plants",
    price: 8,
    img: hydrogel,
    discount: null,
    url: "/cat",
    type: "planting-material",
    id: 18,
  },
  {
    name: "Potting soil mix",
    price: 12,
    img: potting_soil,
    discount: 0.1,
    url: "/cat",
    type: "planting-material",
    id: 19,
  },
  {
    name: "Seeds starter trays",
    price: 5,
    img: seed_trays,
    discount: null,
    url: "/cat",
    type: "planting-material",
    id: 20,
  },
  {
    name: "Perlite",
    price: 6,
    img: perlite,
    discount: 0.15,
    url: "/cat",
    type: "planting-material",
    id: 21,
  },
  {
    name: "Ceramic flower pot",
    price: 30,
    img: ceramic_pot,
    discount: null,
    url: "/cat",
    type: "pots-and-planters",
    id: 22,
  },
  {
    name: "Hanging planter basket",
    price: 25,
    img: hanging_basket,
    discount: 0.15,
    url: "/cat",
    type: "pots-and-planters",
    id: 23,
  },
  {
    name: "Decorative garden planter",
    price: 40,
    img: decorative_planter,
    discount: null,
    url: "/cat",
    type: "pots-and-planters",
    id: 24,
  },
  {
    name: "Window box planter",
    price: 20,
    img: window_planter,
    discount: 0.2,
    url: "/cat",
    type: "pots-and-planters",
    id: 25,
  },
];
export const contacts = [
  {
    title: "Phone",
    text: "+38 (068) 752-62-41",
    link: "tel:+380687526241",
  },
  {
    title: "Socials",
    img: telegram,
    link: "https://web.telegram.org/k/#@lisovyi13",
  },
  {
    title: "Address",
    text: "Sobornosti street, 42, Poltava, Poltava region, 36000",
    link: "https://www.google.com/maps/place/Sobornosti+street,+42,+Poltava,+Poltava+region,+36000",
  },
  {
    title: "Working Hours",
    text: "24 hours a day",
    link: null,
  },
];

export const sortOptions = [
  { value: "default", label: "By default" },
  { value: "low-high", label: "Price: Low to High" },
  { value: "high-low", label: "Price: High to Low" },
];
