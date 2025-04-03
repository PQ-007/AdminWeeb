import { Dayjs } from "dayjs";
import React, { useState } from "react";
import { Plus, RefreshCW01, SearchLG } from "untitledui-js-base";
import { Input, Button, DatePicker, Space } from "antd";
import AddUser from "components/add";
import { SearchOutlined } from "@ant-design/icons";
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
interface TableHeaderProps {
  data : Worker[];
  handleDataChange : (data: any) => void;
  handleSaveUser: (values: any) => void;
  handleRefresh: () => void;
}


const { RangePicker } = DatePicker;
const TableHeader: React.FC<TableHeaderProps> = ({ handleDataChange, handleSaveUser, data, handleRefresh }) => {
  const [dates, setDates] = useState<[Dayjs, Dayjs] | null>(null);
  const [createModalOpen, setCreateModalOpen] = useState(false);

  
  const handleCreate = () => {
    setCreateModalOpen(true);
  };
  
  const handleCancelUser = () => {
    setCreateModalOpen(false); // Close modal on cancel
  };
  const handleSave1User = (value : any) => {
    handleSaveUser(value)
    setCreateModalOpen(false);
  }

  return (
    <div className="bg-inherit py-[20px] px-[24px] gap-[10px] rounded-[10px] h-[80px] flex justify-between items-center">
      {/* Left Section */}
      <div className="flex gap-[10px] items-center">
        <span className="font-semibold font-inter text-lg h-[28px]">Нийт</span>
        <span className="font-semibold font-inter text-lg h-[28px]">
          ({data.length})
        </span>
        <Space direction="vertical" size={12}>
         
          <RangePicker
            
            className=" border-dis"
            format="YYYY/MM/DD"
            picker="date"
            allowClear={false}
            style={{ width: "230px", height: "40px"}}
            id={{
              start: 'startInput',
              end: 'endInput',
            }}
            onFocus={(_, info) => {
              console.log('Focus:', info.range);
            }}
            onBlur={(_, info) => {
              console.log('Blur:', info.range);
            }}
          />
        </Space>
      </div>

      {/* Right Section */}
      <div className="flex gap-[10px] items-center ">
        <Space.Compact style={{ width: "300px", height: "40px" }}>
          <Input
            placeholder="Хайх"
            prefix={<SearchLG size="15" color="#667085" />}
            className="border-dis"
          />
        </Space.Compact>
        <Button
          icon={<RefreshCW01 size="18" />}
          onClick={handleRefresh}
          className="border border-gray-300 rounded-md hover:border-gray-300 focus:border-gray-300"
          style={{ color: "inherit", height: "40px", width: "40px" }}
        ></Button>
        <Button
          icon={<Plus size="20" />}
          onClick={handleCreate}
          className="border border-gray-300 rounded-md hover:border-gray-300 focus:border-gray-300"
          style={{
            color: "inherit",
            fontSize: "14px",
            height: "40px",
            width: "108px",
            fontWeight: 600, 
            fontFamily: "Inter, sans-serif", 
          }}
        >
          Үүсгэх
        </Button>
      </div>

      {/* Modal for Adding User */}
      <AddUser
        onSave={handleSave1User}
        open={createModalOpen}
        on1Cancel={handleCancelUser}
      />
    </div>
  );
};

export default TableHeader;
