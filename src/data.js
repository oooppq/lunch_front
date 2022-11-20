export const type = [
  {
    id: 1,
    type: "한식",
  },
  {
    id: 2,
    type: "중식",
  },
  {
    id: 3,
    type: "일식",
  },
];

export const location_type = [
  {
    id: 1,
    loc_type: "정문",
  },
  {
    id: 2,
    loc_type: "남문",
  },
  {
    id: 3,
    loc_type: "후문",
  },
  {
    id: 4,
    loc_type: "신촌",
  },
  {
    id: 5,
    loc_type: "대흥",
  },
  {
    id: 6,
    loc_type: "공덕",
  },
];

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

export const product = [
  "떡볶이",
  "돈가스",
  "초밥",
  "피자",
  "냉면",
  "치킨",
  "족발",
  "피자",
  "삼겹살",
];

export const colors = [
  "#dc0936",
  "#e6471d",
  "#f7a416",
  "#efe61f ",
  "#60b236",
  "#209b6c",
  "#169ed8",
  "#3f297e",
  "#87207b",
  "#be107f",
  "#e7167b",
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
