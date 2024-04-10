import fertilizer from "/fertilizer.png";
import Protective_products from "/Protective_products.png";
import Planting_material from "/Planting_material.png";
import Tools_equipment from "/Tools_equipment.png";
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

export const navLinks = [
  { name: "Main Page", href: "/" },
  { name: "Categories", href: "/categories" },
  { name: "All products", href: "/products" },
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
  },
  {
    name: "Collection for berries (plastic)",
    price: 35,
    img: berries_collection,
    discount: 0.26,
    url: "/cat",
  },
  {
    name: "Gloves (black)",
    price: 14,
    img: gloves,
    discount: 0.36,
    url: "/cat",
  },
  {
    name: "Sickle-shaped hacksaw",
    price: 155,
    img: hacksaw,
    url: "/cat",
  },
  {
    name: "Bayonet shovel",
    price: 180,
    img: bayonet_shovel,
    url: "/cat",
  },
  {
    name: "Garden pitchfork",
    price: 179,
    img: gargen_pitchfork,
    url: "/cat",
  },
  {
    name: "Barbell",
    price: 12,
    img: barbell,
    url: "/cat",
  },
  {
    name: "Souvenir thermometer",
    price: 120,
    img: souvenir_thermometer,
    discount: 0.18,
    url: "/cat",
  },
  {
    name: "Decorative forged bridge",
    price: 1000,
    img: Decorative_bridge,
    discount: 0.5,
    url: "/cat",
  },
  {
    name: "Flower basket",
    price: 150,
    img: Flower_basket,
    discount: 0.34,
    url: "/cat",
  },
  {
    name: "Aquarium lock",
    price: 200,
    img: aquarium_lock,
    discount: 0.25,
    url: "/cat",
  },
];
