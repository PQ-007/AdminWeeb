import { Button } from "antd";
import { FaSort, FaSortDown, FaSortUp } from "react-icons/fa";
import { DeleteOutlined, EditOutlined, EyeOutlined, MinusCircleOutlined } from "@ant-design/icons";
import IBadge from "components/badge";
import { Edit04 } from "untitledui-js-base";

export type ColumnKeys =
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

export interface Worker {
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

export const getColumns = (
  sortOrders: Record<ColumnKeys, string>,
  handleSort: (columnKey: ColumnKeys) => void,
  onView: (key: string) => void,
  onFix: (key: string) => void,
  onDelete: (key: string) => void
) => [
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
    render: (_: any, record: any) => (
      <div className="flex justify-center items-center h-[36px]">
        <IBadge
          title={record.role}
          color={
            record.role === "Тээврийн менежер"
              ? "blue"
              : record.role === "Кассир"
              ? "orange"
              : "pink"
          }
        />
      </div>
    ),
  },
  {
    title: (
      <>
        Регистр
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
    className: 'email-column',
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
          style={{ border: 'none' }}
          
          
        />
        <Button
          icon={<Edit04 size="15" />}
          type="default"
          style={{ marginLeft: 8, border: 'none'}}
          onClick={() => onFix(record.key)}
          
        />
        <Button
          icon={<MinusCircleOutlined/>}
          danger
          style={{ marginLeft: 8, border: 'none' }}
          onClick={() => onDelete(record.key)}
        />
      </div>
    ),
  },
];
