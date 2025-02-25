import React, { useContext, useEffect, useState } from "react";
import ProLayout from "@ant-design/pro-layout";
import { Avatar, Button } from "antd";
import auth from "api/auth";
import file from "api/file";
import { AuthContext } from "context/AuthContext";
import { AuthActionTypes } from "context/AuthContext/type";
import { Link, Outlet, useLocation } from "react-router-dom";
import { ArrowDown, ChevronDown, UserDown01} from "untitledui-js-base";
import {menuData, AdminMenu }from "./menu";

const DashboardLayout: React.FC = () => {
  const [user, dispatch] = useContext(AuthContext);
  const location = useLocation();
  const [currentTime, setCurrentTime] = useState<string>("");

  // Update time every second with the desired format
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const formattedTime = `${now.getFullYear()}/${(now.getMonth() + 1)
        .toString()
        .padStart(2, "0")}/${now.getDate().toString().padStart(2, "0")} ${now
        .getHours()
        .toString()
        .padStart(2, "0")}:${now.getMinutes().toString().padStart(2, "0")}:${now
        .getSeconds()
        .toString()
        .padStart(2, "0")}`;
      setCurrentTime(formattedTime);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <ProLayout
      style={{
        borderRadius: "10px",
      }}
      layout="top"
      menuItemRender={(item, dom) => (
        <Link to={item.path as string} key={item.path}>
          {dom}
        </Link>
      )}
      contentStyle={{
        margin: 0,
        paddingLeft: 24,
        paddingBottom: 48,
        paddingRight:24,
        paddingTop:32,
        background: "#E7EDEE",
        minHeight: "1080px",
        fontFamily: "Inter, sans-serif",
      }}
      menu={{
        request: async () => {
          return menuData;
        },
      }}
      location={{
        pathname: location.pathname,
      }}
      token={{
        header: {
          colorBgHeader: "#0077f4",
          colorTextMenuSelected: "#fff",
          colorTextMenu: "#B3B3B3",
          heightLayoutHeader: 72,
        },
        sider: {
          colorMenuBackground: "#fff",
        },
      }}
      rightContentRender={() => (
        <div className="flex items-center gap-6 pr-5">
          {/* Time Display */}
          <div style={{ color: "#fff" }}>{currentTime}</div>

          {/* User Info / Login Button */}
          {user?.authorized ? (
            <div className="flex items-center gap-4">
              <Avatar
                size={40}
                src={file.fileToUrl(user?.user?.profile?.physical_path)}
                className="uppercase"
              >
                {user?.user?.username?.substring(0, 2)}
              </Avatar>
              <ChevronDown
                color="#fff"
                className="cursor-pointer"
                onClick={() => {
                  dispatch({ type: AuthActionTypes.LOGOUT });
                  auth.removeToken();
                }}
              />
            </div>
          ) : (
            <Link to="/auth/login">
              <Button type="primary">Login</Button>
            </Link>
          )}
        </div>
      )}
      className="custom-prolayout"
    >
      <Outlet />
    </ProLayout>
  );
};

export default DashboardLayout;
