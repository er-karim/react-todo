import React, { Component } from "react";
import { connect } from "react-redux";
import "./index.css";
import { Layout, Menu } from "antd";
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined
} from "@ant-design/icons";

class Sidebar extends Component {
  render() {
    const { Sider } = Layout;
    const { sidebarCollapsed } = this.props.app;
    return (
      <Sider
        id="sidebar"
        trigger={null}
        collapsible
        collapsed={sidebarCollapsed}
      >
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">
            <UserOutlined />
            <span>nav 1</span>
          </Menu.Item>
          <Menu.Item key="2">
            <VideoCameraOutlined />
            <span>nav 2</span>
          </Menu.Item>
          <Menu.Item key="3">
            <UploadOutlined />
            <span>nav 3</span>
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}

const mapStateToProps = state => {
  return {
    app: state.app
  };
};

export default connect(mapStateToProps)(Sidebar);
