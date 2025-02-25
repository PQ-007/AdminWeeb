import React from "react";
import type { RadioChangeEvent, TabsProps } from "antd";
import { Radio, Tabs } from "antd";
const RefInfo = () => {
  const onChange = (e: RadioChangeEvent) => {};
  return (
    <div className="w-[1872px] h-[40px] ">
      <Radio.Group onChange={onChange} style={{ marginBottom: 16 }}>
        <Radio.Button value="partnerCompany">Харилцагч компани</Radio.Button>
        <Radio.Button value="addFeeSet">Нэмэлт хураамж тохиргоо</Radio.Button>
        <Radio.Button value="CusAccountCalc">
          Харилцагчдын дансны тооцоо
        </Radio.Button>
        <Radio.Button value="ticketCancel">
          Э/Х тасалбар хүчингүй болгох
        </Radio.Button>
      </Radio.Group>
    </div>
  );
};

export default RefInfo;
