import Title from "antd/lib/typography/Title";
import React from "react";
import "./index.css";
// import { Container } from './styles';

function Home() {
  return (
    <div className="container-home">
      <Title level={4}>
        Bem-Vindx ao Radar <span style={{ fontSize: 14 }}>😄</span>
      </Title>
    </div>
  );
}

export default Home;
