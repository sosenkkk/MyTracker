// utils/localStorage.js
export const saveProducts = (products, key = "products") =>
  localStorage.setItem(key, JSON.stringify(products));

export const getProducts = (key = "products") =>
  JSON.parse(localStorage.getItem(key)) || [];
