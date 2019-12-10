import React, { Component } from "react";
import { InputNumber } from "antd";
import { Card, Col, Row } from "antd";
import "antd/dist/antd.css";
import Apple from "../image/apple.jpeg";
import Orange from "../image/orange.jpg";
import Banana from "../image/banana.jpg";
import "../App.css";
export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      applePrice: 0,
      orangePrice: 0,
      bananaPrice: 0,
      userValue: 0,
      totalPrice: 0
    };
  }
  totalbill = () => {
    const { applePrice, orangePrice, bananaPrice } = this.state;
    this.setState({
      totalPrice: applePrice + orangePrice + bananaPrice
    });
  };

  appleAdd = value => {
    if (value >= 0) {
      let applePrice = value * 10;

      const { userValue, orangePrice, bananaPrice } = this.state;
      let total = orangePrice + applePrice + bananaPrice;

      if (userValue >= total) {
        this.setState({
          applePrice: applePrice,
          totalPrice: total
        });
      } else {
        alert("insuficiant balance");
      }
    }
  };
  orangeAdd = value => {
    if (value >= 0) {
      let orangePrice = value * 20;

      const { userValue, applePrice, bananaPrice } = this.state;
      let total = orangePrice + applePrice + bananaPrice;

      if (userValue >= total) {
        this.setState({
          orangePrice: orangePrice,
          totalPrice: total
        });
      } else {
        alert("insuficiant balance");
      }
    }
  };
  bananaAdd = value => {
    if (value >= 0) {
      let bananaPrice = value * 15;

      const { userValue, applePrice, orangePrice } = this.state;
      let total = bananaPrice + applePrice + orangePrice;

      if (userValue >= total) {
        this.setState({
          bananaPrice: bananaPrice,
          totalPrice: total
        });
      } else {
        alert("insuficiant balance");
      }
    }
  };
  render() {
    return (
      <div>
        <h2>
          I have Rs.
          <input
            onChange={e =>
              this.setState({ userValue: parseInt(e.target.value) })
            }
          />
        </h2>
        <h3>Your Total is Rs. {this.state.totalPrice}</h3>
        <div className="back">
          <Row gutter={16}>
            <Col span={8}>
              <Card title="Rs.10" bordered={true} className="card">
                <img src={Apple} alt="apple pic" />
                <h1>Apple</h1>
                <InputNumber
                  min={0}
                  max={10}
                  defaultValue={0}
                  onChange={this.appleAdd}
                />
              </Card>
            </Col>
            <Col span={8}>
              <Card title="Rs.20" bordered={false} className="card">
                <img src={Orange} alt="apple pic" />
                <h1>Orange</h1>
                <InputNumber
                  min={0}
                  max={10}
                  defaultValue={0}
                  onChange={this.orangeAdd}
                />
              </Card>
            </Col>
            <Col span={8}>
              <Card title="Rs.15" bordered={false} className="card">
                <img src={Banana} alt="apple pic" />
                <h1>banana</h1>
                <InputNumber
                  min={0}
                  max={10}
                  defaultValue={0}
                  onChange={this.bananaAdd}
                />
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Main;
