import React, { useState } from "react";
import type { RadioChangeEvent } from "antd";
import { Radio } from "antd";
import CargoApp from "./cargoApp";
import Balance from "./balance";
import ByReadyAtField from "./byReadyAtField";

const AreaReg = () => {
  const onChange = (e: RadioChangeEvent) => {
    console.log(e.target.value);
    setTab(e.target.value);
  };

  const [tab, setTab] = useState("cargoApp");

  return (
    <div className="flex flex-col gap-y-[28px]">
      <div className="w-[1872px] h-[40px] rounded-[10px] ">
        <Radio.Group onChange={onChange} style={{ marginBottom: 16 }}>
          <Radio.Button value="cargoApp">Ачаа дөхөлт</Radio.Button>
          <Radio.Button value="balance">Үлдэгдэл</Radio.Button>
          <Radio.Button value="byReadyAtField">Талбайд ирсэнээр</Radio.Button>
        </Radio.Group>
      </div>
      <div className="w-[1872px] h-[590px] bg-white rounded-[10px] border-gray-100 py-[24px]" > 
        {tab === "cargoApp" ? (
          <CargoApp />
        ) : tab === "balance" ? (
          <Balance />
        ) : (
          <ByReadyAtField />
        )}
      </div>
    </div>
  );
};

export default AreaReg;
