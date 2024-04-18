// Categories
import fertilizer from "/categories/fertilizer.png";
import Protective_products from "/categories/Protective_products.png";
import Planting_material from "/categories/Planting_material.png";
import Tools_equipment from "/categories/Tools_equipment.png";
import pots_and_planters from "/categories/pots_and_planters.png";
import decor from "/categories/decor.webp";
// Products
import secateurs from "/products/secateurs.webp";
import aquarium_lock from "/products/Aquarium_lock.jpg";
import bayonet_shovel from "/products/bayonet-shovel.jpg";
import berries_collection from "/products/berries-collection.webp";
import Decorative_bridge from "/products/Decorative_bridge.jpg";
import Flower_basket from "/products/Flower_basket.webp";
import garden_pitchfork from "/products/garden-pitchfork.jpg";
import gloves from "/products/gloves.webp";
import hacksaw from "/products/hacksaw.jpg";
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
    id: 1,
    name: "Flower basket",
    price: 150,
    img: Flower_basket,
    discount: 0.34,
    type: "decor",
    description: "Decorate your garden with this elegant flower basket.",
  },
  {
    id: 2,
    name: "Aquarium lock",
    price: 200,
    img: aquarium_lock,
    discount: 0.25,
    type: "decor",
    description: "Keep your aquarium secure with this reliable lock.",
  },
  {
    id: 3,
    name: "Organic fertilizer",
    price: 20,
    img: organic_fertilizer,
    discount: null,
    type: "fertilizer",
    description: "Nourish your plants naturally with our organic fertilizer.",
  },
  {
    id: 4,
    name: "Secateurs",
    price: 240,
    img: secateurs,
    discount: 0.17,
    type: "tools-and-equipment",
    description:
      "Trim your plants with precision using these quality secateurs.",
  },
  {
    id: 5,
    name: "Collection for berries (plastic)",
    price: 35,
    img: berries_collection,
    discount: 0.26,
    type: "tools-and-equipment",
    description:
      "Gather your berries efficiently with this durable plastic collection set.",
  },
  {
    id: 6,
    name: "Gloves (black)",
    price: 14,
    img: gloves,
    discount: 0.36,
    type: "tools-and-equipment",
    description:
      "Protect your hands while gardening with these comfortable black gloves.",
  },
  {
    id: 7,
    name: "Sickle-shaped hacksaw",
    price: 155,
    img: hacksaw,
    discount: null,
    type: "tools-and-equipment",
    description:
      "Cut through tough branches effortlessly with this sickle-shaped hacksaw.",
  },
  {
    id: 8,
    name: "Bayonet shovel",
    price: 180,
    img: bayonet_shovel,
    discount: null,
    type: "tools-and-equipment",
    description:
      "Dig deep into the soil with ease using this sturdy bayonet shovel.",
  },
  {
    id: 9,
    name: "Liquid fertilizer for flowers",
    price: 15,
    img: liquid_fertilizer_for_flowers,
    discount: 0.1,
    type: "fertilizer",
    description:
      "Keep your flowers blooming with our specially formulated liquid fertilizer.",
  },
  {
    id: 10,
    name: "Granular fertilizer for vegetables",
    price: 25,
    img: granular_fertilizer,
    discount: null,
    type: "fertilizer",
    description:
      "Promote healthy growth in your vegetables with our granular fertilizer.",
  },
  {
    id: 11,
    name: "Insect repellent spray",
    price: 10,
    img: insect_repellent,
    discount: null,
    type: "protective-products-and-septic-tanks",
    description:
      "Keep pesky insects away from your garden with our effective repellent spray.",
  },
  {
    id: 12,
    name: "Garden pitchfork",
    price: 179,
    img: garden_pitchfork,
    discount: null,
    type: "tools-and-equipment",
    description:
      "Turn and aerate your soil easily with our durable garden pitchfork.",
  },

  {
    id: 13,
    name: "Souvenir thermometer",
    price: 120,
    img: souvenir_thermometer,
    discount: 0.18,
    type: "tools-and-equipment",
    description:
      "Monitor the temperature of your garden in style with our souvenir thermometer.",
  },
  {
    id: 14,
    name: "Decorative forged bridge",
    price: 1000,
    img: Decorative_bridge,
    discount: 0.5,
    type: "decor",
    description:
      "Add a touch of elegance to your garden with this beautifully crafted decorative bridge.",
  },
  {
    id: 15,
    name: "Antibacterial hand sanitizer",
    price: 8,
    img: hand_sanitizer,
    discount: 0.15,
    type: "protective-products-and-septic-tanks",
    description:
      "Keep your hands clean and germ-free while working in your garden with our antibacterial hand sanitizer.",
  },
  {
    id: 16,
    name: "Septic tank treatment tablets",
    price: 30,
    img: septic_tank_tablets,
    discount: null,
    type: "protective-products-and-septic-tanks",
    description:
      "Maintain the health of your septic tank with our convenient treatment tablets.",
  },
  {
    id: 17,
    name: "Hydrogel for plants",
    price: 8,
    img: hydrogel,
    discount: null,
    type: "planting-material",
    description: "Keep your plants hydrated for longer with our hydrogel.",
  },
  {
    id: 18,
    name: "Potting soil mix",
    price: 12,
    img: potting_soil,
    discount: 0.1,
    type: "planting-material",
    description:
      "Provide your plants with the perfect growing medium using our high-quality potting soil mix.",
  },
  {
    id: 19,
    name: "Seeds starter trays",
    price: 5,
    img: seed_trays,
    discount: null,
    type: "planting-material",
    description:
      "Start your seeds off right with our durable and reusable starter trays.",
  },
  {
    id: 20,
    name: "Perlite",
    price: 6,
    img: perlite,
    discount: 0.15,
    type: "planting-material",
    description: "Improve soil aeration and drainage with our premium perlite.",
  },
  {
    id: 21,
    name: "Ceramic flower pot",
    price: 30,
    img: ceramic_pot,
    discount: null,
    type: "pots-and-planters",
    description:
      "Display your favorite flowers in style with our elegant ceramic flower pot.",
  },
  {
    id: 22,
    name: "Hanging planter basket",
    price: 25,
    img: hanging_basket,
    discount: 0.15,
    type: "pots-and-planters",
    description:
      "Add some greenery to your home with our versatile hanging planter basket.",
  },
  {
    id: 23,
    name: "Decorative garden planter",
    price: 40,
    img: decorative_planter,
    discount: null,
    type: "pots-and-planters",
    description:
      "Enhance your outdoor space with our stylish decorative garden planter.",
  },
  {
    id: 24,
    name: "Window box planter",
    price: 20,
    img: window_planter,
    discount: 0.2,
    type: "pots-and-planters",
    description:
      "Brighten up your windows with our charming window box planter.",
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
