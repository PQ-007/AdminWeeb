import { Button } from "antd";
import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";
import ProTable from "@ant-design/pro-table";
import { FaSort, FaSortDown, FaSortUp } from "react-icons/fa";
import { useState } from "react";
type SortOrder = "asc" | "desc" | "default";

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
  regWorker: string
}
type ColumnKeys =
  | "lastName"
  | "firstName"
  | "role"
  | "regNumber"
  | "age"
  | "gender"
  | "phone"
  | "email"
  | "regDate"
  | "regWorker"; 
interface TableBodyProps {
  data: Worker[];
  handleDataChange: (data: Worker[]) => void;
}

const TableBody: React.FC<TableBodyProps> = ({ data, handleDataChange }) => {
  const onDelete = (key: string) => {
    const newData = data.filter((worker) => worker.key !== key);
    handleDataChange(newData);
  };
  const onFix = (key: string) => {};
  const onView = (key: string) => {};
  const [sortOrders, setSortOrders] = useState({
    key: "default",
    lastName: "default",
    firstName: "default",
    role: "default",
    regNumber: "default",
    age: "default",
    gender: "default",
    phone: "default",
    email: "default",
    regDate: "default",
    regWorker: "default",
  });
  
  const switchSort = (columnKey: ColumnKeys) => {
    setSortOrders((prevSortOrders) => {
      const currentSortOrder = prevSortOrders[columnKey];

      const newSortOrder =
        currentSortOrder === "default"
          ? "asc"
          : currentSortOrder === "asc"
          ? "desc"
          : "default";

      return {
        ...prevSortOrders,
        [columnKey]: newSortOrder,
      };
    });
  };
  const handleSort = (columnKey: ColumnKeys) => {
    switchSort(columnKey);

    const newSortOrder =
      sortOrders[columnKey] === "default"
        ? "asc"
        : sortOrders[columnKey] === "asc"
        ? "desc"
        : "default";

    if (newSortOrder === "default") {
      handleDataChange(data);
      return;
    }

    const sortedData = [...data].sort((a, b) => {
      if (newSortOrder === "asc") {
        return a[columnKey] > b[columnKey] ? 1 : -1;
      } else if (newSortOrder === "desc") {
        return a[columnKey] < b[columnKey] ? 1 : -1;
      }
      return 0;
    });

    handleDataChange(sortedData);
  };

  const columns = [
    {
      title: (
        <>
          Овог
          <Button
            type="text"
            style={{
              border: "none",
              backgroundColor: "inherit",
            }}
            icon={
              sortOrders.lastName === "asc" ? (
                <FaSortUp />
              ) : sortOrders.lastName === "desc" ? (
                <FaSortDown />
              ) : (
                <FaSort />
              )
            }
            onClick={() => handleSort("lastName")}
          />
        </>
      ),
      dataIndex: "lastName",
      
    },
    {
      title: (
        <>
          Нэр
          <Button
            type="text"
            style={{
              border: "none",
              backgroundColor: "inherit",
            }}
            icon={
              sortOrders.firstName === "asc" ? (
                <FaSortUp />
              ) : sortOrders.firstName === "desc" ? (
                <FaSortDown />
              ) : (
                <FaSort />
              )
            }
            onClick={() => handleSort("firstName")}
          />
        </>
      ),
      dataIndex: "firstName",
    
    },
    {
      title: (
        <>
          Үүрэг
          <Button
            type="text"
            style={{
              border: "none",
              backgroundColor: "inherit",
            }}
            icon={
              sortOrders.role === "asc" ? (
                <FaSortUp />
              ) : sortOrders.role === "desc" ? (
                <FaSortDown />
              ) : (
                <FaSort />
              )
            }
            onClick={() => handleSort("role")}
          />
        </>
      ),
      dataIndex: "role",
      
    },
    {
      title: (
        <>
          Регистрийн дугаар
          <Button
            type="text"
            style={{
              border: "none",
              backgroundColor: "inherit",
            }}
            icon={
              sortOrders.regNumber === "asc" ? (
                <FaSortUp />
              ) : sortOrders.regNumber === "desc" ? (
                <FaSortDown />
              ) : (
                <FaSort />
              )
            }
            onClick={() => handleSort("regNumber")}
          />
        </>
      ),
      dataIndex: "regNumber",
     
    },
    {
      title: (
        <>
          Нас
          <Button
            type="text"
            style={{
              border: "none",
              backgroundColor: "inherit",
            }}
            icon={
              sortOrders.age === "asc" ? (
                <FaSortUp />
              ) : sortOrders.age === "desc" ? (
                <FaSortDown />
              ) : (
                <FaSort />
              )
            }
            onClick={() => handleSort("age")}
          />
        </>
      ),
      dataIndex: "age",
   
    },
    {
      title: (
        <>
          Хүйс
          <Button
            type="text"
            style={{
              border: "none",
              backgroundColor: "inherit",
            }}
            icon={
              sortOrders.gender === "asc" ? (
                <FaSortUp />
              ) : sortOrders.gender === "desc" ? (
                <FaSortDown />
              ) : (
                <FaSort />
              )
            }
            onClick={() => handleSort("gender")}
          />
        </>
      ),
      dataIndex: "gender",
      
    },
    {
      title: (
        <>
          Утас
          <Button
            type="text"
            style={{
              border: "none",
              backgroundColor: "inherit",
            }}
            icon={
              sortOrders.phone === "asc" ? (
                <FaSortUp />
              ) : sortOrders.phone === "desc" ? (
                <FaSortDown />
              ) : (
                <FaSort />
              )
            }
            onClick={() => handleSort("phone")}
          />
        </>
      ),
      dataIndex: "phone",
     
    },
    {
      title: (
        <>
          Имэйл
          <Button
            type="text"
            style={{
              border: "none",
              backgroundColor: "inherit",
            }}
            icon={
              sortOrders.email === "asc" ? (
                <FaSortUp />
              ) : sortOrders.email === "desc" ? (
                <FaSortDown />
              ) : (
                <FaSort />
              )
            }
            onClick={() => handleSort("email")}
          />
        </>
      ),
      dataIndex: "email",
      
    },
    {
      title: (
        <>
          Бүртгэсэн огноо
          <Button
            type="text"
            style={{
              border: "none",
              backgroundColor: "inherit",
            }}
            icon={
              sortOrders.regDate === "asc" ? (
                <FaSortUp />
              ) : sortOrders.regDate === "desc" ? (
                <FaSortDown />
              ) : (
                <FaSort />
              )
            }
            onClick={() => handleSort("regDate")}
          />
        </>
      ),
      dataIndex: "regDate",
      
    },
    {
      title: (
        <>
          Бүртгэсэн ажилтан
          <Button
            type="text"
            style={{
              border: "none",
              backgroundColor: "inherit",
            }}
            icon={
              sortOrders.regWorker === "asc" ? (
                <FaSortUp />
              ) : sortOrders.regWorker === "desc" ? (
                <FaSortDown />
              ) : (
                <FaSort />
              )
            }
            onClick={() => handleSort("regWorker")}
          />
        </>
      ),
      dataIndex: "regWorker",
      
    },
    {
      title: "Үйлдэл",
      
      render: (_: any, record: any) => (
        <div className="flex justify-center items-center h-[36px]">
          <Button
            icon={<EyeOutlined />}
            type="default"
            onClick={() => onView(record.key)}
          />
          <Button
            icon={<EditOutlined />}
            type="default"
            style={{ marginLeft: 8 }}
            onClick={() => onFix(record.key)}
          />
          <Button
            icon={<DeleteOutlined />}
            danger
            style={{ marginLeft: 8 }}
            onClick={() => onDelete(record.key)}
          />
        </div>
      ),
    },
  ];

  return (
    <ProTable
      dataSource={data}
      columns={columns}
      pagination={{ pageSize: 10 }}
      options={false}
      search={false}
      rowKey="key"
      className="rounded-md h-[396px] px-[24px]"
    />
  );
};

export default TableBody;
