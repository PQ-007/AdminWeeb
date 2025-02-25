import React, { useState } from "react";
import { message} from "antd";
import TableHeader from "components/table-header";
import TableBody from "components/table-body";
import {data0} from "./worker-data";
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
    <div className="bg-white rounded-[10px] border-gray-100 h-[600px]">
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
