import "../../App.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { DesktopOutlined } from "@ant-design/icons";
import { Breadcrumb, Layout, Menu } from "antd";
import { useState } from "react";
import { Line } from "@ant-design/plots";
import { Column } from "@ant-design/plots";
import Map from "./map/Map";
import Button from "react-bootstrap/esm/Button";
import { getData } from "../../utils/API";
import { useEffect } from "react";

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
  const [apiData, setApìData] = useState([]);

  useEffect(() => {
    async function getNewData() {
      const data = await getData();
      console.log(data);
    }
    getNewData();
  }, []);

  // chart
  const data = [
    { hood: "Les Corts", over65: 40000 },
    { hood: "El Raval", over65: 60000 },
    { hood: "Nou Barris", over65: 10000 },
    { hood: "Gracia", over65: 22000 },
    { hood: "El clot", over65: 30000 },
    { hood: "Sant Martí", over65: 10000 },
    { hood: "Poblenou", over65: 35000 },
    { hood: "Sarria", over65: 23000 },
  ];

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

  // config mapa

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

        <Row>
          <Col xs={12} sm={6}>
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
          </Col>
          <Col xs={12} sm={6}>
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
          </Col>
          <Col xs={12}>
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
                {/* Aqui mapa */}

                <div className="leaflet-container">
                  <Map />
                </div>
              </div>
            </Content>
          </Col>

          <Col xs={12}>
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
                <Breadcrumb.Item className="fw-bold">Accions recomendades</Breadcrumb.Item>
              </Breadcrumb>
              <div
                className="site-layout-background "
                style={{
                  padding: 24,
                  minHeight: 360,
                }}
              >
                <Row className="border border-danger rounded justify-content-evenly align-items-baseline  p-2 bg-warning my-3">
                  <Col className="fw-bold">El Raval</Col>
                  <Col>Població > 65: 26.6907</Col>
                  <Col>Renta per cap > 65: 453€</Col>
                  <Col className="d-flex justify-content-end">
                    <Button variant="danger">Veure</Button>
                  </Col>
                </Row>

                <Row className="border border-danger rounded justify-content-evenly align-items-baseline  p-2 bg-warning my-3">
                  <Col className="fw-bold">Sant Martí</Col>
                  <Col>Població > 65: 26.6907</Col>
                  <Col>Renta per cap > 65: 600€</Col>
                  <Col className="d-flex justify-content-end">
                    <Button variant="danger">Veure</Button>
                  </Col>
                </Row>

                <Row className="border border-danger rounded justify-content-evenly align-items-baseline  p-2 bg-warning my-3">
                  <Col className="fw-bold">Barceloneta</Col>
                  <Col>Població > 65: 50.6907</Col>
                  <Col>Renta per cap > 65: 400€</Col>
                  <Col className="d-flex justify-content-end">
                    <Button variant="danger">Veure</Button>
                  </Col>
                </Row>
              </div>
            </Content>
          </Col>
        </Row>

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
