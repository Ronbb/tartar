import React, { useState } from "react";
import "./App.less";
import { Layout, Menu, Button } from "antd";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";
import Markdown from "./component/markdown";

const { Header, Content, Footer, Sider } = Layout;

function App() {
  const [collapsed, setCollapsed] = useState(true);
  const [broken, setBroken] = useState(true);
  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        breakpoint="lg"
        collapsedWidth={broken ? 0 : undefined}
        collapsed={collapsed}
        width="256"
        onBreakpoint={(broken) => {
          setBroken(broken);
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          setCollapsed(collapsed);
          console.log(collapsed, type);
        }}
        theme="light"
        trigger={null}
        style={{ zIndex: 2 }}
      >
        <div className="logo" />
        <Menu theme="light" mode="inline" defaultSelectedKeys={["4"]}>
          <Menu.Item key="0" disabled icon={<UserOutlined />}>
            nav 0
          </Menu.Item>
          <Menu.Item key="1" icon={<UserOutlined />}>
            nav 1
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            nav 2
          </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            nav 3
          </Menu.Item>
          <Menu.Item key="4" icon={<UserOutlined />}>
            nav 4
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header
          style={{
            position: "fixed",
            zIndex: 1,
            width: "100%",
            boxShadow: "2px 2px 8px 4px #AAA",
            paddingLeft: "2rem",
          }}
        >
          {/* {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: toggle,
              color: "#FFF"
            }
          )} */}
          {
            <Button className="trigger" onClick={toggle} type="primary">
              {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </Button>
          }
        </Header>
        <Content style={{ padding: "64px 16px 0" }}>
          <div style={{ padding: 24, minHeight: "70vh" }}>
            <Markdown />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>tartar 2020 by ronbb</Footer>
      </Layout>
    </Layout>
  );
}

export default App;
