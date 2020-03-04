import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import "./index.css";
import { Layout } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";

import { toggleSidebar } from "../../actions/app";

class CustumHeader extends Component {
  render() {
    const { Header } = Layout;
    console.log("props ", this.props);
    const { sidebarCollapsed } = this.props.app;
    return (
      <Header className="site-layout-background" style={{ padding: 0 }}>
        {React.createElement(
          sidebarCollapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
          {
            className: "trigger",
            onClick: this.props.toggleSidebar
          }
        )}
      </Header>
    );
  }
}

const mapStateToProps = state => {
  return {
    app: state.app
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      toggleSidebar
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(CustumHeader);
