export const getRestaurantById = (restaurants, id) => {
  for (let rest of restaurants) {
    if (rest.id == id) return rest;
  }
  return null;
};

export const getMenuById = (menu, id) => {
  for (let m of menu) {
    if (m.id == id) return m;
  }
  return null;
};
