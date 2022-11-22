import { type, location_type } from "../data";

export const getRestaurantById = (restaurants, id) => {
  for (let rest of restaurants) {
    if (rest.id === id) return rest;
  }
  return null;
};

export const getMenuById = (menu, id) => {
  for (let m of menu) {
    if (m.id === id) return m;
  }
  return null;
};

export const getSaleById = (sale, id) => {
  for (let s of sale) {
    if (s.id === id) return s;
  }
  return null;
};

// export const findLocById = (id) => {
//   for (let loc of location_type) {
//     if (loc.id === id) return loc.loc_type;
//   }
//   return null;
// };

// export const findCategoryById = (id) => {
//   for (let t of type) {
//     if (t.id === id) return t.type;
//   }
// };
