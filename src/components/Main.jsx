import React, { Component } from 'react';
import { InputNumber } from 'antd';
import { Card, Col, Row } from 'antd';
import 'antd/dist/antd.css';
import Apple from '../image/apple.jpeg'
import Orange from '../image/orange.jpg'
import Banana from '../image/banana.jpg'
import '../App.css'
export class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            applePrice: '',
            orangePrice: "",
            bananaPrice: "",
            userValue: "",
            totalPrice: ""

        }
    }
    totalbill = () => {
        const { applePrice, orangePrice, bananaPrice } = this.state;
        this.setState({
            totalPrice: applePrice + orangePrice + bananaPrice,
        })
    }
    inputNumber = (e) => {
        this.setState({
            userValue: e.target.value,
        });


    }
    appleAdd = (value) => {
        const { userValue, applePrice } = this.state;
        if (userValue > applePrice) {
            this.setState({
                applePrice: value * 10,
            })
        } else alert("insuficiant balance")
        this.totalbill()



    }
    orangeAdd = (value) => {
        const { userValue, orangePrice } = this.state;
        if (userValue < orangePrice || userValue === 0) {
            alert("Insuficiant balance");
        }
        this.setState({
            orangePrice: value * 20,
        })
        this.totalbill()
    }
    bananaAdd = (value) => {
        const { userValue, bananaPrice } = this.state;
        if (userValue < bananaPrice || userValue === 0) {
            alert("Insuficiant balance");
        }
        this.setState({
            bananaPrice: value * 15,
        })
        this.totalbill()
    }
    render() {
        console.log(this.state.userValue)
        console.log(this.state.applePrice)
        console.log(this.state.orangePrice)
        console.log(this.state.bananaPrice)
        console.log(this.state.totalPrice)
        return (
            <div>
                <h2>I have Rs.
                    <input
                        onChange={this.inputNumber} />
                </h2>
                <h3>Your Total is Rs. {this.state.totalPrice}</h3>
                <div className="back">
                    <Row gutter={16} >
                        <Col span={8} >
                            <Card title="Rs.10" bordered={true} className="card">
                                <img src={Apple} alt="apple pic" />
                                <h1>Apple</h1>
                                <InputNumber min={0} max={10} defaultValue={0} onChange={this.appleAdd} />
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card title="Rs.20" bordered={false} className="card">
                                <img src={Orange} alt="apple pic" />
                                <h1>Orange</h1>
                                <InputNumber min={0} max={10} defaultValue={0} onChange={this.orangeAdd} />
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card title="Rs.15" bordered={false} className="card">
                                <img src={Banana} alt="apple pic" />
                                <h1>banana</h1>
                                <InputNumber min={0} max={10} defaultValue={0} onChange={this.bananaAdd} />
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default Main;
