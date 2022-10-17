import "../../App.css";
import { DesktopOutlined } from "@ant-design/icons";
import { Breadcrumb, Layout, Menu } from "antd";
import { useState } from "react";
import { Line } from "@ant-design/plots";
import { Column } from "@ant-design/plots";

// layout
const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem("Data Analisis", "1", <DesktopOutlined />),
  getItem("Accions", "2", <DesktopOutlined />),
];

// component

function DashBoard() {
  const [collapsed, setCollapsed] = useState(false);

  // chart
  const data = [
    { hood: "Les Corts", over65: 40000 },
    { hood: "El Raval", over65: 70000 },
    { hood: "Nou Barris", over65: 10000 },
    { hood: "Gracia", over65: 22000 },
    { hood: "El clot", over65: 30000 },
    { hood: "Sant Martí", over65: 1000 },
    { hood: "Poblenou", over65: 350000 },
    { hood: "Sarria", over65: 123 },
  ];

  //   const [data, setData] = useState([]);

  //   useEffect(() => {
  //     asyncFetch();
  //   }, []);

  //   const asyncFetch = () => {
  //     fetch("https://gw.alipayobjects.com/os/bmw-prod/e00d52f4-2fa6-47ee-a0d7-105dd95bde20.json")
  //       .then((response) => response.json())
  //       .then((json) => setData(json))
  //       .catch((error) => {
  //         console.log("fetch data failed", error);
  //       });
  //   };

  // config columnas
  const config = {
    data,
    xField: "hood",
    yField: "over65",
    conversionTag: {},
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
  };

  // config linea
  const configColumns = {
    data,
    animation: {
      // Configuration of the first animation
      appear: {
        animation: "wave-in", // Effects of the first animation
        duration: 5000, // Duration of the first animation
      },
    },
    autoFit: true,
    xField: "hood",
    yField: "over65",
    point: {
      size: 5,
      shape: "diamond",
    },
    label: {
      style: {
        fill: "#aaa",
      },
    },
  };

  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline" items={items} />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        />
        <Content
          style={{
            margin: "0 16px",
          }}
        >
          <Breadcrumb
            style={{
              margin: "16px 0",
            }}
          >
            <Breadcrumb.Item>Data Analisis</Breadcrumb.Item>
            <Breadcrumb.Item>Barrios amb gent + 65 anys</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Column {...configColumns} />
          </div>
        </Content>

        <Content
          style={{
            margin: "0 16px",
          }}
        >
          <Breadcrumb
            style={{
              margin: "16px 0",
            }}
          >
            <Breadcrumb.Item>Data Analisis</Breadcrumb.Item>
            <Breadcrumb.Item>Barris amb rentes + baixes</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Line {...config} />
          </div>
        </Content>

        <Content
          style={{
            margin: "0 16px",
          }}
        >
          <Breadcrumb
            style={{
              margin: "16px 0",
            }}
          >
            <Breadcrumb.Item>Data analisis</Breadcrumb.Item>
            <Breadcrumb.Item>Barris amb persones + 65 i rentes + baixes</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Line {...config} />
          </div>
        </Content>

        <Footer
          style={{
            textAlign: "center",
          }}
        >
          - Sols ©2022 Created by Equip 1
        </Footer>
      </Layout>
    </Layout>
  );
}

export default DashBoard;
