// Categories
import fertilizer from "/categories/fertilizer.webp";
import Protective_products from "/categories/Protective_products.webp";
import Planting_material from "/categories/Planting_material.webp";
import Tools_equipment from "/categories/Tools_equipment.webp";
import pots_and_planters from "/categories/pots_and_planters.webp";
import decor from "/categories/decor.webp";
// Products
import secateurs from "/products/secateurs.webp";
import aquarium_lock from "/products/Aquarium_lock.webp";
import bayonet_shovel from "/products/bayonet-shovel.webp";
import berries_collection from "/products/berries-collection.webp";
import Decorative_bridge from "/products/Decorative_bridge.webp";
import Flower_basket from "/products/Flower_basket.webp";
import garden_pitchfork from "/products/garden-pitchfork.webp";
import gloves from "/products/gloves.webp";
import hacksaw from "/products/hacksaw.webp";
import souvenir_thermometer from "/products/souvenir-thermometer.webp";
import organic_fertilizer from "/products/organic_fertilizer.webp";
import liquid_fertilizer_for_flowers from "/products/liquid_fertilizer_for_flowers.webp";
import granular_fertilizer from "/products/granular_fertilizer.webp";
import insect_repellent from "/products/insect_repellent.webp";
import hand_sanitizer from "/products/hand_sanitizer.webp";
import septic_tank_tablets from "/products/septic_tank_tablets.webp";
import hydrogel from "/products/hydrogel.webp";
import perlite from "/products/perlite.webp";
import seed_trays from "/products/seed_trays.webp";
import potting_soil from "/products/potting_soil.webp";
import window_planter from "/products/window_planter.webp";
import decorative_planter from "/products/decorative_planter.webp";
import hanging_basket from "/products/hanging_basket.webp";
import ceramic_pot from "/products/ceramic_pot.webp";

import telegram from "/icons/telegram.svg";

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
    api_key: "price_1P7LxvDgyJmtJe68ZwwmtLtk",
  },
  {
    id: 2,
    name: "Aquarium lock",
    price: 200,
    img: aquarium_lock,
    discount: 0.25,
    type: "decor",
    description: "Keep your aquarium secure with this reliable lock.",
    api_key: "price_1P7M0yDgyJmtJe68SsNx31Gj",
  },
  {
    id: 3,
    name: "Organic fertilizer",
    price: 20,
    img: organic_fertilizer,
    discount: null,
    type: "fertilizer",
    description: "Nourish your plants naturally with our organic fertilizer.",
    api_key: "price_1P7M2fDgyJmtJe68wRWre5Vb",
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
    api_key: "price_1P7M3QDgyJmtJe68eKqVHuBM",
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
    api_key: "price_1P7M4bDgyJmtJe68rXbJ9UjI",
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
    api_key: "price_1P7M5DDgyJmtJe68TLF7uhJ6",
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
    api_key: "price_1P7M62DgyJmtJe68RKecI6yD",
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
    api_key: "price_1P7LlnDgyJmtJe68av6WpMD2",
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
    api_key: "price_1P7M6oDgyJmtJe68Ykw2OfSY",
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
    api_key: "price_1P7M7iDgyJmtJe68xxSCfdN6",
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
    api_key: "price_1P7M8RDgyJmtJe689cqsMRy3",
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
    api_key: "price_1P7M9ADgyJmtJe68wBs76y7p",
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
    api_key: "price_1P7M9tDgyJmtJe68f2Ex0Y4o",
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
    api_key: "price_1P7MAXDgyJmtJe68VlFggk6Y",
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
    api_key: "price_1P7MBbDgyJmtJe68cp4Ip13C",
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
    api_key: "price_1P7MDIDgyJmtJe68X05AIKYU",
  },
  {
    id: 17,
    name: "Hydrogel for plants",
    price: 8,
    img: hydrogel,
    discount: null,
    type: "planting-material",
    description: "Keep your plants hydrated for longer with our hydrogel.",
    api_key: "price_1P7MESDgyJmtJe68u2E5t2Vr",
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
    api_key: "price_1P7MFGDgyJmtJe68lGlnTVIF",
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
    api_key: "price_1P7MFyDgyJmtJe68c2qRzIdU",
  },
  {
    id: 20,
    name: "Perlite",
    price: 6,
    img: perlite,
    discount: 0.15,
    type: "planting-material",
    description: "Improve soil aeration and drainage with our premium perlite.",
    api_key: "price_1P7MGmDgyJmtJe68uC4GXXOt",
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
    api_key: "price_1P7MHVDgyJmtJe68fen3kryo",
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
    api_key: "price_1P7MIKDgyJmtJe68DJOOysCL",
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
    api_key: "price_1P7MJADgyJmtJe68PApw1GdF",
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
    api_key: "price_1P7MJXDgyJmtJe68KYzZb0w5",
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
