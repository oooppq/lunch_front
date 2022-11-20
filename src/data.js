export const users = [
  {
    id: "test1",
    password: "1234",
    user_name: "test1",
    zzim_list: [1, 3],
  },
  {
    id: "test2",
    password: "1234",
    user_name: "test2",
    zzim_list: [1],
  },
  {
    id: "test3",
    password: "1234",
    user_name: "test3",
    zzim_list: [2],
  },
];

export const restaurants = [
  {
    id: 1,
    r_name: "치킨짱",
    latitude: 0,
    longitude: 0,
    location: "정문",
    category: "한식",
    image: "../img/recom/1.png",
    info: "전통의 서강 맛집!",
  },
  {
    id: 2,
    r_name: "후루룩국수",
    latitude: 0,
    longitude: 0,
    location: "남문",
    category: "일식",
    image: "../img/recom/2.png",
    info: "국수가 진짜 맛없는 집!",
  },
  {
    id: 3,
    r_name: "미스터왕의 짜장면",
    latitude: 0,
    longitude: 0,
    location: "후문",
    category: "중식",
    image: "../img/recom/3.png",
    info: "칭따오!",
  },
];

export const menus = [
  {
    id: 1,
    r_id: 1,
    m_name: "공룡치킨",
    image: undefined,
    price: 1920000,
  },
  {
    id: 2,
    r_id: 1,
    m_name: "이잉치킨",
    image: undefined,
    price: 120,
  },
  {
    id: 3,
    r_id: 2,
    m_name: "치킨국수",
    image: undefined,
    price: 123054,
  },
  {
    id: 4,
    r_id: 2,
    m_name: "김종국수",
    image: undefined,
    price: 1834,
  },
  {
    id: 5,
    r_id: 3,
    m_name: "짜빠게티",
    image: undefined,
    price: 945,
  },
  {
    id: 3,
    r_id: 1,
    m_name: "탕수육",
    image: undefined,
    price: 41832,
  },
];

export const sales = [
  {
    id: 1,
    r_id: 1,
    m_id: 2,
    price: 999,
    sale_start: Date(),
    sale_end: Date(),
  },
  {
    id: 1,
    r_id: 1,
    m_id: 2,
    price: 999,
    sale_start: Date(),
    sale_end: Date(),
  },
  {
    id: 1,
    r_id: 1,
    m_id: 2,
    price: 999,
    sale_start: Date(),
    sale_end: Date(),
  },
];
