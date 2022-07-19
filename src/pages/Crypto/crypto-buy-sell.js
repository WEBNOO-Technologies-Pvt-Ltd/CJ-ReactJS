import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Form,
  Input,
  Label,
  Button,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  InputGroup,
} from "reactstrap";
import classnames from "classnames";
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';


class CryptoWallet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "1",
      isMenu: false,
      columns : [{
        dataField: 'idno',
        text: 'Id No'
      },{
        dataField: 'pdate',
        text: 'Date'
      }, {
        dataField: 'type',
        text: 'Type'
      }, {
        dataField: 'coin',
        text: 'Currency'
      },{
        dataField: 'amount',
        text: 'Amount'
      },{
        dataField: 'valueInUsd',
        text: 'value in USD'
      }],
      productData : [
        { id: 1, idno:"#SK3226", pdate : "03 Mar, 2020",type:"Buy",coin:"Litecoin",amount:"0.00413 LTC",valueInUsd:"$ 1773.01"},
        { id: 2, idno:"#SK3336", pdate : "03 Mar, 2020",type:"Sell",coin:"Ethereum",amount:"0.00413 ETH",valueInUsd:"$ 1773.01"},
        { id: 3, idno:"#SK3226", pdate : "13 Jun, 2020",type:"Sell",coin:"Litecoin",amount:"0.00413 LTC",valueInUsd:"$ 1773.01"},
        { id: 4, idno:"#SK3226", pdate : "03 Mar, 2020",type:"Buy",coin:"Ethereum",amount:"0.00413 ETH",valueInUsd:"$ 1773.01"},
        { id: 5, idno:"#SK3226", pdate : "23 Mar, 2020",type:"Buy",coin:"Litecoin",amount:"0.00413 ETH",valueInUsd:"$ 1773.01"},
        { id: 6, idno:"#SK3116", pdate : "03 Mar, 2020",type:"Sell",coin:"Ethereum",amount:"0.00413 LTC",valueInUsd:"$ 1773.01"},
        { id: 7, idno:"#SK3336", pdate : "13 Mar, 2020",type:"Buy",coin:"Ethereum",amount:"0.00413 ETH",valueInUsd:"$ 1773.01"},
        { id: 8, idno:"#SK3226", pdate : "03 Mar, 2020",type:"Buy",coin:"Litecoin",amount:"0.00413 ETH",valueInUsd:"$ 1773.01"},
        { id: 9, idno:"#SK3226", pdate : "23 Mar, 2020",type:"Buy",coin:"Litecoin",amount:"0.00413 ETH",valueInUsd:"$ 1773.01"},
        { id: 10, idno:"#SK3226", pdate : "03 Mar, 2020",type:"Sell",coin:"Litecoin",amount:"0.00413 ETH",valueInUsd:"$ 1773.01"},
        { id: 11, idno:"#SK3226", pdate : "08 Mar, 2020",type:"Sell",coin:"Litecoin",amount:"0.00413 ETH",valueInUsd:"$ 1773.01"},
        { id: 12, idno:"#SK3226", pdate : "03 Mar, 2020",type:"Buy",coin:"Litecoin",amount:"0.00413 ETH",valueInUsd:"$ 1773.01"},
        { id: 13, idno:"#SK3336", pdate : "03 Mar, 2020",type:"Buy",coin:"Ethereum",amount:"0.00413 LTC",valueInUsd:"$ 1773.01"},
        { id: 14, idno:"#SK3336", pdate : "07 Mar, 2020",type:"Sell",coin:"Litecoin",amount:"0.00413 ETH",valueInUsd:"$ 1773.01"},
        { id: 15, idno:"#SK3226", pdate : "13 Mar, 2020",type:"Buy",coin:"Litecoin",amount:"0.00413 ETH",valueInUsd:"$ 1773.01"},
        { id: 16, idno:"#SK3226", pdate : "03 Mar, 2020",type:"Buy",coin:"Ethereum",amount:"0.00413 ETH",valueInUsd:"$ 1773.01"},
        { id: 17, idno:"#SK3336", pdate : "03 Mar, 2020",type:"Buy",coin:"Litecoin",amount:"0.00413 LTC",valueInUsd:"$ 1773.01"},
        ]
    };
    
   
   

      this.toggleTab = this.toggleTab.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);

  }

  toggleTab(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }

  toggleMenu() {
    this.setState(prevState => ({
      isMenu: !prevState.isMenu,
    }));
  }

  render() {

    //meta title
    //document.title = "Buy/Sell | Skote - React Admin & Dashboard Template";

    return (
      <React.Fragment>
        <div className="">
          
            {/* Render Breadcrumb */}
            
            <Row>
              <Col lg="12">
                <Card>
                  <CardBody>
                    
                    <h4 className="card-title mb-4">Detail View</h4>
                    <div className="crypto-buy-sell-nav">
                      <Nav tabs className="nav-tabs-custom" role="tablist">
                        <NavItem>
                          <NavLink
                            className={classnames({
                              active: this.state.activeTab === "1",
                            })}
                            onClick={() => {
                              this.toggleTab("1");
                            }}
                          >
                            center
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            className={classnames({
                              active: this.state.activeTab === "2",
                            })}
                            onClick={() => {
                              this.toggleTab("2");
                            }}
                          >
                            Operator
                          </NavLink>
                        </NavItem>

                        <NavItem>
                          <NavLink
                            className={classnames({
                              active: this.state.activeTab === "3",
                            })}
                            onClick={() => {
                              this.toggleTab("3");
                            }}
                          >
                            Supervisor
                          </NavLink>
                        </NavItem>

                        <NavItem>
                          <NavLink
                            className={classnames({
                              active: this.state.activeTab === "4",
                            })}
                            onClick={() => {
                              this.toggleTab("4");
                            }}
                          >
                            Devices
                          </NavLink>
                        </NavItem>

                        <NavItem>
                          <NavLink
                            className={classnames({
                              active: this.state.activeTab === "5",
                            })}
                            onClick={() => {
                              this.toggleTab("5");
                            }}
                          >
                            Students
                          </NavLink>
                        </NavItem>

                        <NavItem>
                          <NavLink
                            className={classnames({
                              active: this.state.activeTab === "6",
                            })}
                            onClick={() => {
                              this.toggleTab("6");
                            }}
                          >
                            Live Attendance
                          </NavLink>
                        </NavItem>

                        <NavItem>
                          <NavLink
                            className={classnames({
                              active: this.state.activeTab === "7",
                            })}
                            onClick={() => {
                              this.toggleTab("7");
                            }}
                          >
                            Shift Closing Request
                          </NavLink>
                        </NavItem>

                        <NavItem>
                          <NavLink
                            className={classnames({
                              active: this.state.activeTab === "8",
                            })}
                            onClick={() => {
                              this.toggleTab("8");
                            }}
                          >
                            Operator Auth Request
                          </NavLink>
                        </NavItem>

                        <NavItem>
                          <NavLink
                            className={classnames({
                              active: this.state.activeTab === "9",
                            })}
                            onClick={() => {
                              this.toggleTab("9");
                            }}
                          >
                            Change Centre Request
                          </NavLink>
                        </NavItem>

                      </Nav>

                      <TabContent
                        activeTab={this.state.activeTab}
                        className="crypto-buy-sell-nav-content p-4"
                      >
                        <TabPane tabId="1" id="buy">
                        <BootstrapTable keyField='id' data={ this.state.productData } columns={ this.state.columns } pagination={ paginationFactory() } />
                        </TabPane>

                        <TabPane tabId="2">
                        <BootstrapTable keyField='id' data={ this.state.productData } columns={ this.state.columns } pagination={ paginationFactory() } />
                        </TabPane>

                        <TabPane tabId="3">
                        <BootstrapTable keyField='id' data={ this.state.productData } columns={ this.state.columns } pagination={ paginationFactory() } />
                        </TabPane>

                        <TabPane tabId="4">
                        <BootstrapTable keyField='id' data={ this.state.productData } columns={ this.state.columns } pagination={ paginationFactory() } />
                        </TabPane>

                        <TabPane tabId="5">
                        <BootstrapTable keyField='id' data={ this.state.productData } columns={ this.state.columns } pagination={ paginationFactory() } />
                        </TabPane>

                        <TabPane tabId="6">
                        <BootstrapTable keyField='id' data={ this.state.productData } columns={ this.state.columns } pagination={ paginationFactory() } />
                        </TabPane>

                        <TabPane tabId="7">
                        <BootstrapTable keyField='id' data={ this.state.productData } columns={ this.state.columns } pagination={ paginationFactory() } />
                        </TabPane>

                        <TabPane tabId="8">
                        <BootstrapTable keyField='id' data={ this.state.productData } columns={ this.state.columns } pagination={ paginationFactory() } />
                        </TabPane>

                        <TabPane tabId="9">
                        <BootstrapTable keyField='id' data={ this.state.productData } columns={ this.state.columns } pagination={ paginationFactory() } />
                        </TabPane>


                      </TabContent>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
         
        </div>
      </React.Fragment>
    );
  }
}

export default CryptoWallet;
