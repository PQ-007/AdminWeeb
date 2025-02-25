import { MenuDataItem } from "@ant-design/pro-layout";

const FinanceMenu: MenuDataItem[] = [
  {
    path: "/dashboard/area-reg",
    name: "Талбайн бүртгэл",
    children: [],
  },
  {
    path: "/dashboard/ref-info",
    name: "Лавлах мэдээлэл",
    children: [],
  },
  {
    path: "/dashboard/report",
    name: "Тайлан",
    children: [],
  },
];
const AdminMenu: MenuDataItem[] = [
  {
    path: "/dashboard/worker-reg",
    name: "Ажилчдын бүртгэл",

    children: [],
  },
]
const menuData: MenuDataItem[] = [
  {
    path: "/dashboard/worker-reg",
    name: "Ажилчдын бүртгэл",

    children: [],
  },
  {
    path: "/dashboard/area-reg",
    name: "Талбайн бүртгэл",
    children: [],
  },
  {
    path: "/dashboard/ref-info",
    name: "Лавлах мэдээлэл",
    children: [],
  },
  {
    path: "/dashboard/report",
    name: "Тайлан",
    children: [],
  },
];

export { menuData, AdminMenu, FinanceMenu};
