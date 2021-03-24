import React, { useState } from "react";
import { useHistory } from "react-router-dom";

// // Components
import { Drawer, Divider } from "antd";
import { MenuOutlined } from "@ant-design/icons";
// // CSS
import "./index.css";
import { MenuList } from "../../../services/constants";

function Header() {
  const history = useHistory();

  const [display, changeDisplay] = useState(false);
  const [activeRoute, setActiveRoute] = useState("/");

  const showDrawer = () => {
    changeDisplay(!display);
  };

  const navigateTo = ({ id, route }) => {
    history.push(route);
    setActiveRoute(route);
    console.log(activeRoute);
    showDrawer();
  };

  React.useEffect(() => {
    const header = document.getElementById("header");
    const sticky = header.offsetTop;
    const scrollCallBack = window.addEventListener("scroll", () => {
      console.log(window.pageYOffset, sticky);
      if (window.pageYOffset > 80) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    });
    return () => {
      window.removeEventListener("scroll", scrollCallBack);
    };
  }, []);

  return (
    <React.Fragment>
      {/* Menu Drawer */}
      <Drawer
        title="Menu"
        placement="left"
        onClose={() => showDrawer()}
        closable={true}
        visible={display}
      >
        <ul>
          {MenuList.map((route, index) => {
            return (
              <li className="menu-item">
                <span
                  className={activeRoute === route.route ? "active" : ""}
                  key={route.id}
                  onClick={() => navigateTo(route)}
                >
                  {route.title}
                </span>
                <Divider />
              </li>
            );
          })}
        </ul>
      </Drawer>

      {/* Conteudo */}
      <div className="header-container" id="header">
        <div className="menu-icon-container">
          <span className="menu-icon " onClick={() => showDrawer()}>
            <div className="icon">
              <MenuOutlined />
            </div>
            <span
              className="page-title"
              style={{ fontSize: 15, fontWeight: 600 }}
            >
              &nbsp;Radar de Oficinas
            </span>
          </span>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Header;
