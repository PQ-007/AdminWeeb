import { useState } from "react";
import ProTable from "@ant-design/pro-table";
import { getColumns, Worker, ColumnKeys } from "./column-data";

interface TableBodyProps {
  data: Worker[];
  handleDataChange: (data: Worker[]) => void;
}

const TableBody: React.FC<TableBodyProps> = ({ data, handleDataChange }) => {
  const [sortOrders, setSortOrders] = useState<Record<ColumnKeys, string>>({
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
      const newSortOrder = currentSortOrder === "default" ? "asc" : currentSortOrder === "asc" ? "desc" : "default";
      return { ...prevSortOrders, [columnKey]: newSortOrder };
    });
  };

  const handleSort = (columnKey: ColumnKeys) => {
    switchSort(columnKey);
    const newSortOrder = sortOrders[columnKey] === "default" ? "asc" : sortOrders[columnKey] === "asc" ? "desc" : "default";

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

  const onDelete = (key: string) => {
    handleDataChange(data.filter((worker) => worker.key !== key));
  };

  const onFix = (key: string) => {};
  const onView = (key: string) => {};

  return (
    <ProTable
      dataSource={data}
      columns={getColumns(sortOrders, handleSort, onView, onFix, onDelete)}

      pagination={{ 
        pageSize: 10,
        showSizeChanger: true,  // Allow users to change the page size
        pageSizeOptions: ['5', '10', '20'],
        showQuickJumper: true,  // Allows users to jump to a specific page
      }}
      options={false}
      search={false}
      rowKey="key"
      className="rounded-md h-[396px] px-[24px] whitespace-normal break-words"
    />
  );
};

export default TableBody;
