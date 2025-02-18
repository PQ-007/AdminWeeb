import React, { useState } from "react";
import { message} from "antd";
import TableHeader from "components/table-header";
import TableBody from "components/table-body";

interface Worker {
  key: string;
  lastName: string;
  firstName: string;
  role: string;
  regNumber: string;
  age: number;
  gender: string;
  phone: string;
  email: string;
  regDate: string;
  regWorker: string;
}

const WorkerRegPage = () => {
  const getCurrentDate = (): string => {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}/${month}/${day}`;
  };
  let data0: Worker[] = [
    {
      key: "",
      lastName: "Бат-Эрдэнэ",
      firstName: "Цэцэг",
      role: "Тээврийн менежер",
      regNumber: "AB123456",
      age: 24,
      gender: "Эм",
      phone: "99012345",
      email: "tsetseg.bat@example.com",
      regDate: "2023/10/01",
      regWorker: "Админ",
    },
    {
      key: "",
      lastName: "Мөнхбат",
      firstName: "Ганболд",
      role: "Кассир",
      regNumber: "CD654321",
      age: 29,
      gender: "Эр",
      phone: "99023456",
      email: "ganbold.munkhbat@example.com",
      regDate: "2022/02/14",
      regWorker: "Админ",
    },
    {
      key: "",
      lastName: "Жонхор",
      firstName: "Алиса",
      role: "Санхүү",
      regNumber: "EF123456",
      age: 32,
      gender: "Эм",
      phone: "99034567",
      email: "alice.jonhor@example.com",
      regDate: "2020/12/03",
      regWorker: "Админ",
    },
    {
      key: "",
      lastName: "Батсуурь",
      firstName: "Нарантуяа",
      role: "Тээврийн менежер",
      regNumber: "GH234567",
      age: 28,
      gender: "Эм",
      phone: "99045678",
      email: "narantuyaa.batsuur@example.com",
      regDate: "2021/06/18",
      regWorker: "Админ",
    },
    {
      key: "",
      lastName: "Амарсайхан",
      firstName: "Сарантуяа",
      role: "Кассир",
      regNumber: "IJ345678",
      age: 26,
      gender: "Эм",
      phone: "99056789",
      email: "sarantuya.amar@example.com",
      regDate: "2021/08/25",
      regWorker: "Админ",
    },
    {
      key: "",
      lastName: "Сүхбаатар",
      firstName: "Ганзориг",
      role: "Тээврийн менежер",
      regNumber: "KL123456",
      age: 31,
      gender: "Эр",
      phone: "99067890",
      email: "ganzorig.sukhbaatar@example.com",
      regDate: "2019/11/12",
      regWorker: "Админ",
    },
    {
      key: "",
      lastName: "Жавзандулам",
      firstName: "Солонго",
      role: "Кассир",
      regNumber: "MN234567",
      age: 23,
      gender: "Эм",
      phone: "99078901",
      email: "solongo.javzandulam@example.com",
      regDate: "2022/01/22",
      regWorker: "Админ",
    },
    {
      key: "",
      lastName: "Төмөрхүү",
      firstName: "Амартүвшин",
      role: "Санхүү",
      regNumber: "OP345678",
      age: 33,
      gender: "Эр",
      phone: "99089012",
      email: "amartuvshin.tumurkhuu@example.com",
      regDate: "2018/10/15",
      regWorker: "Админ",
    },
    {
      key: "",
      lastName: "Мягмарсүрэн",
      firstName: "Жаргал",
      role: "Кассир",
      regNumber: "QR123456",
      age: 27,
      gender: "Эр",
      phone: "99090123",
      email: "jargal.myagmarsuren@example.com",
      regDate: "2020/09/08",
      regWorker: "Админ",
    },
    {
      key: "",
      lastName: "Даваасүрэн",
      firstName: "Болороо",
      role: "Тээврийн менежер",
      regNumber: "ST456789",
      age: 25,
      gender: "Эм",
      phone: "99001234",
      email: "boloroo.davaasuren@example.com",
      regDate: "2021/04/11",
      regWorker: "Админ",
    },
    {
      key: "",
      lastName: "Жамбалдорж",
      firstName: "Батболд",
      role: "Санхүү",
      regNumber: "UV567890",
      age: 34,
      gender: "Эр",
      phone: "99012300",
      email: "batbold.jambaldorj@example.com",
      regDate: "2022/05/10",
      regWorker: "Админ",
    },
    {
      key: "",
      lastName: "Баярсайхан",
      firstName: "Гантулга",
      role: "Тээврийн менежер",
      regNumber: "WX678901",
      age: 30,
      gender: "Эр",
      phone: "99023456",
      email: "gantulga.bayarsaihan@example.com",
      regDate: "2017/07/06",
      regWorker: "Админ",
    },
    {
      key: "",
      lastName: "Сандаг",
      firstName: "Баярмаа",
      role: "Кассир",
      regNumber: "YZ789012",
      age: 25,
      gender: "Эм",
      phone: "99034567",
      email: "bayarmaa.sandag@example.com",
      regDate: "2021/02/17",
      regWorker: "Админ",
    },
    {
      key: "",
      lastName: "Төмөр",
      firstName: "Баяржаргал",
      role: "Санхүү",
      regNumber: "AB890123",
      age: 32,
      gender: "Эр",
      phone: "99045678",
      email: "bayarjargal.tomor@example.com",
      regDate: "2019/03/21",
      regWorker: "Админ",
    },
    {
      key: "",
      lastName: "Чимэд",
      firstName: "Ням-Очир",
      role: "Кассир",
      regNumber: "CD901234",
      age: 23,
      gender: "Эр",
      phone: "99056789",
      email: "nyamochir.chimed@example.com",
      regDate: "2022/06/14",
      regWorker: "Админ",
    },
  ];

  data0 = data0.map((worker, index) => ({
    ...worker,
    key: `${worker.regNumber}-${index}`,
  }));
  const [data, setData] = useState<Worker[]>(data0);
  const handleRefresh = () => {
    console.log("Refreshing...");
    setData(data0);
    message.info("Data refreshed!");
  };

  const handleSaveUser = (newUser: Worker) => {
    setData((prevData) => [
      ...prevData,
      {
        ...newUser,
        regDate: getCurrentDate(),
        regWorker: "Админ",
        key: `${newUser.regNumber}-${prevData.length + 1}`,
      },
    ]);
  };

  return (
    <div className="bg-white rounded-[10px] border-gray-100 h-full">
      <TableHeader
        data={data}
        handleRefresh={handleRefresh}
        handleSaveUser={handleSaveUser}
        handleDataChange={setData}
      />
      <TableBody data={data} handleDataChange={setData} />
    </div>
  );
};

export default WorkerRegPage;
