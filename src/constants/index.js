import fertilizer from "/fertilizer.png";
import Protective_products from "/Protective_products.png";
import Planting_material from "/Planting_material.png";
import Tools_equipment from "/Tools_equipment.png";

export const navLinks = [
  { name: "Main Page", href: "/" },
  { name: "Categories", href: "/categories" },
  { name: "All products", href: "/all-products" },
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
