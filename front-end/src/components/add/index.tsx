import React, { useState } from "react";
import { Modal, Form, Input, Select, Button, message } from "antd";
import dayjs from "dayjs";

const { Option } = Select;

interface AddUserProps {
  open: boolean;
  onSave: (values: any) => void;
  on1Cancel: () => void;
}

const AddUser: React.FC<AddUserProps> = ({ open, onSave, on1Cancel }) => {
  const [form] = Form.useForm();
  const [email, setEmail] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
  };
  const onFinish = (values: any) => {
    const newUser = {
      ...values,
      regDate: dayjs().format("YYYY/MM/DD"),
      regBy: "Админ",
    };
    onSave(newUser);
    form.resetFields();
  };
  const onCancel = () => {
    form.resetFields();
    on1Cancel();
  };
  const checkEmail = (mail: string) => {
    return mail.indexOf("@") !== -1 || mail == "" ? true : false;
  };
  return (
    <Modal
      title="Системд нэвтрэх бүртгэл үүсгэх"
      open={open}
      onCancel={onCancel}
      footer={null}
    >
      <Form form={form} layout="vertical" onFinish={onFinish}>
        <div style={{ display: "flex", gap: "10px" }}>
          <Form.Item
            name="lastName"
            label="Овог"
            rules={[{ required: true, message: "Овог оруулна уу" }]}
            style={{ flex: 1 }}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="firstName"
            label="Нэр"
            rules={[{ required: true, message: "Нэр оруулна уу" }]}
            style={{ flex: 1 }}
          >
            <Input />
          </Form.Item>
        </div>

        <div style={{ display: "flex", gap: "10px" }}>
          <Form.Item
            name="role"
            label="Үүрэг"
            rules={[{ required: true, message: "Үүрэг сонгоно уу" }]}
            style={{ flex: 1 }}
          >
            <Select>
              <Option value="Тээврийн менежер">Тээврийн менежер</Option>
              <Option value="Кассир">Кассир</Option>
              <Option value="Санхүү">Санхүү</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="regNumber"
            label="Регистрийн дугаар"
            rules={[
              { required: true, message: "Регистрийн дугаар оруулна уу" },
            ]}
            style={{ flex: 1 }}
          >
            <Input />
          </Form.Item>
        </div>

        <div style={{ display: "flex", gap: "10px" }}>
          <Form.Item
            name="age"
            label="Нас"
            rules={[{ required: true, message: "Нас оруулна уу" }]}
            style={{ flex: 1 }}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="gender"
            label="Хүйс"
            rules={[{ required: true, message: "Хүйс сонгоно уу" }]}
            style={{ flex: 1 }}
          >
            <Select>
              <Option value="Эр">Эр</Option>
              <Option value="Эм">Эм</Option>
            </Select>
          </Form.Item>
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          <Form.Item
            name="email"
            label="Имэйл"
            rules={[
              {
                required: true,
                type: "email",
                message: checkEmail(email)
                  ? "Имэйл оруулна уу"
                  : "Зөв имэйл оруулна уу",
              },
            ]}
            style={{ flex: 1 }}
          >
            <Input
              value={email} // Bind input value to state
              onChange={handleEmailChange} // Handle change and validate
            />
          </Form.Item>
          <Form.Item
            name="phone"
            label="Утас"
            rules={[{ required: true, message: "Утасны дугаар оруулна уу" }]}
            style={{ flex: 1 }}
          >
            <Input />
          </Form.Item>
        </div>
        <Form.Item
          name="password"
          label="Системд нэвтрэх нууц үг"
          style={{ width: "230px" }}
          rules={[{ required: true, message: "Нууц үгээ оруулна уу" }]}
        >
          <Input.Password />
        </Form.Item>

        <div
          style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}
        >
          <Button onClick={onCancel}>Болих</Button>
          <Button
            
            type="default"
            htmlType="submit"
            className="bg-[#1890FF] text-white border-[1px]"
          >
            Хадгалах
          </Button>
        </div>
      </Form>
    </Modal>
  );
};

export default AddUser;
