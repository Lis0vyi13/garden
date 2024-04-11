import fertilizer from "/categories/fertilizer.png";
import Protective_products from "/categories/Protective_products.png";
import Planting_material from "/categories/Planting_material.png";
import Tools_equipment from "/categories/Tools_equipment.png";
import pots_and_planters from "/categories/pots_and_planters.png";
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
import telegram from "/telegram.svg";

export const navLinks = [
  { name: "Main Page", href: "/" },
  { name: "Categories", href: "categories" },
  {
    name: "All products",
    href: "all-products?from=&to=&discount=&sortBy=default",
  },
];

export const categoriesList = [
  { name: "Fertilizer", href: fertilizer, url: "/" },
  {
    name: "Protective products and septic tanks",
    href: Protective_products,
    url: "/",
  },
  { name: "Planting material", href: Planting_material, url: "/" },
  { name: "Tools and equipment", href: Tools_equipment, url: "/" },
  { name: "Pots and planters", href: pots_and_planters, url: "/" },
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
    name: "Secateurs",
    price: 240,
    img: secateurs,
    discount: 0.17,
    url: "/cat",
    type: "tools-and-equipment",
  },
  {
    name: "Collection for berries (plastic)",
    price: 35,
    img: berries_collection,
    discount: 0.26,
    url: "/cat",
    type: "tools-and-equipment",
  },
  {
    name: "Gloves (black)",
    price: 14,
    img: gloves,
    discount: 0.36,
    url: "/cat",
    type: "tools-and-equipment",
  },
  {
    name: "Sickle-shaped hacksaw",
    price: 155,
    img: hacksaw,
    discount: null,
    url: "/cat",
    type: "tools-and-equipment",
  },
  {
    name: "Bayonet shovel",
    price: 180,
    img: bayonet_shovel,
    discount: null,
    url: "/cat",
    type: "tools-and-equipment",
  },
  {
    name: "Garden pitchfork",
    price: 179,
    img: gargen_pitchfork,
    discount: null,
    url: "/cat",
    type: "tools-and-equipment",
  },
  {
    name: "Barbell",
    price: 12,
    img: barbell,
    discount: null,
    url: "/cat",
    type: "tools-and-equipment",
  },
  {
    name: "Souvenir thermometer",
    price: 120,
    img: souvenir_thermometer,
    discount: 0.18,
    url: "/cat",
    type: "tools-and-equipment",
  },
  {
    name: "Decorative forged bridge",
    price: 1000,
    img: Decorative_bridge,
    discount: 0.5,
    url: "/cat",
    type: "",
  },
  {
    name: "Flower basket",
    price: 150,
    img: Flower_basket,
    discount: 0.34,
    url: "/cat",
    type: "",
  },
  {
    name: "Aquarium lock",
    price: 200,
    img: aquarium_lock,
    discount: 0.25,
    url: "/cat",
    type: "",
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
  { value: "tools-and-equipment", label: "Tools and equipment" },
];
