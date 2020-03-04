import React, { Component } from "react";
import "./index.css";
import { Layout } from "antd";
import Sidebar from "../Sidebar";
import CustumHeader from "../CostumHeader";

class App extends Component {
  render() {
    const { Content } = Layout;

    return (
      <Layout style={{ height: "100vh" }}>
        <Sidebar />
        <Layout className="site-layout">
          <CustumHeader />
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280
            }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default App;
