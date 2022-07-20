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
      columns_auth : [{
        dataField: 'idno',
        text: 'OP Name'
      },{
        dataField: 'Centre Code',
        text: 'Centre ID'
      }, {
        dataField: 'type',
        text: 'Unique ID'
      }, {
        dataField: 'coin',
        text: 'Mobile'
      },{
        dataField: 'amount',
        text: 'Address'
      },{
        dataField: 'valueInUsd',
        text: 'State'
      },
      {
        dataField: 'valueInUsd',
        text: 'City'
      },
      {
        dataField: 'valueInUsd',
        text: 'Status'
      },
      {
        dataField: 'valueInUsd',
        text: 'Vendor Name'
      },
      {
        dataField: 'valueInUsd',
        text: 'Vendor Code'
      },
      {
        dataField: 'valueInUsd',
        text: 'Exam date'
      },
      {
        dataField: 'valueInUsd',
        text: 'Exam Name'
      },
      {
        dataField: 'valueInUsd',
        text: 'Centre Name'
      },
      {
        dataField: 'valueInUsd',
        text: 'Previous Exam Date'
      },
      {
        dataField: 'valueInUsd',
        text: 'Previous Exam Name'
      },
      {
        dataField: 'valueInUsd',
        text: 'Previous Centre Name'
      },
      {
        dataField: 'valueInUsd',
        text: 'Centre City'
      },
      {
        dataField: 'valueInUsd',
        text: 'CSR Remark'
      },
      {
        dataField: 'valueInUsd',
        text: 'Created At'
      },
    ],
    columns_changed_centre : [{
      dataField: 'idno',
      text: 'OP Name'
    },{
      dataField: 'Centre Code',
      text: 'Centre ID'
    }, {
      dataField: 'type',
      text: 'Unique ID'
    }, {
      dataField: 'coin',
      text: 'Mobile'
    },{
      dataField: 'amount',
      text: 'Address'
    },{
      dataField: 'valueInUsd',
      text: 'State'
    },
    {
      dataField: 'valueInUsd',
      text: 'City'
    },
    {
      dataField: 'valueInUsd',
      text: 'Status'
    },
    {
      dataField: 'valueInUsd',
      text: 'Vendor Name'
    },
    {
      dataField: 'valueInUsd',
      text: 'Vendor Code'
    },
    {
      dataField: 'valueInUsd',
      text: 'Exam date'
    },
    {
      dataField: 'valueInUsd',
      text: 'Exam Name'
    },
    {
      dataField: 'valueInUsd',
      text: 'Centre Name'
    },
    {
      dataField: 'valueInUsd',
      text: 'Previous Exam Date'
    },
    {
      dataField: 'valueInUsd',
      text: 'Previous Exam Name'
    },
    {
      dataField: 'valueInUsd',
      text: 'Previous Centre Name'
    },
    {
      dataField: 'valueInUsd',
      text: 'Centre City'
    },
    {
      dataField: 'valueInUsd',
      text: 'CSR Remark'
    },
    {
      dataField: 'valueInUsd',
      text: 'Created At'
    },
  ],
      columns_csr : [{
        dataField: 'idno',
        text: 'Centre Name'
      },{
        dataField: 'Centre Code',
        text: 'Centre ID'
      }, {
        dataField: 'type',
        text: 'Shift ID'
      }, {
        dataField: 'coin',
        text: 'Shift Status'
      },{
        dataField: 'amount',
        text: 'Shift Time'
      },{
        dataField: 'valueInUsd',
        text: 'Shift NO.'
      },
      {
        dataField: 'valueInUsd',
        text: 'Supervisor NO.'
      },
      {
        dataField: 'valueInUsd',
        text: 'Supervisor Name'
      },
      {
        dataField: 'valueInUsd',
        text: 'Supervisor System ID'
      },
      {
        dataField: 'valueInUsd',
        text: 'Ticket ID'
      },
      {
        dataField: 'valueInUsd',
        text: 'Manual List Answered By Supervisor'
      },
      {
        dataField: 'valueInUsd',
        text: 'Manual Present Count'
      },
      {
        dataField: 'valueInUsd',
        text: 'Request Type'
      },
      {
        dataField: 'valueInUsd',
        text: 'Monitoring Admin Status'
      },
      {
        dataField: 'valueInUsd',
        text: 'Action'
      },
      {
        dataField: 'valueInUsd',
        text: 'Centre State'
      },
      {
        dataField: 'valueInUsd',
        text: 'Centre City'
      },
      {
        dataField: 'valueInUsd',
        text: 'CSR Remark'
      },
      {
        dataField: 'valueInUsd',
        text: 'Created At'
      },
    ],
      columns_device : [{
        dataField: 'idno',
        text: '#'
      },{
        dataField: 'Name',
        text: 'Device ID'
      }, {
        dataField: 'type',
        text: 'Device Model'
      }, {
        dataField: 'coin',
        text: 'OP ID'
      },{
        dataField: 'amount',
        text: 'IMEI NO'
      },{
        dataField: 'valueInUsd',
        text: 'Location'
      },
      {
        dataField: 'valueInUsd',
        text: 'Latitude'
      },
      {
        dataField: 'valueInUsd',
        text: 'Longitude'
      },
      {
        dataField: 'valueInUsd',
        text: 'Date Created'
      }
    ],
      columns_student : [{
        dataField: 'idno',
        text: '#'
      },{
        dataField: 'Name',
        text: 'Enrolment ID'
      }, {
        dataField: 'type',
        text: 'Student Name'
      }, {
        dataField: 'coin',
        text: 'Attendance'
      },{
        dataField: 'amount',
        text: 'Photo'
      },{
        dataField: 'valueInUsd',
        text: 'Biometric'
      },
      {
        dataField: 'valueInUsd',
        text: 'Centre ID'
      },
      {
        dataField: 'valueInUsd',
        text: 'Shift ID'
      },
      {
        dataField: 'valueInUsd',
        text: 'Date Created'
      }
    ],
      columns_supervisor : [{
        dataField: 'idno',
        text: 'SV ID'
      },{
        dataField: 'Name',
        text: '	Name'
      }, {
        dataField: 'type',
        text: 'Phone Number'
      }, {
        dataField: 'coin',
        text: 'Role'
      },{
        dataField: 'amount',
        text: 'Vendor Name'
      },{
        dataField: 'valueInUsd',
        text: 'Centre ID'
      },
      {
        dataField: 'valueInUsd',
        text: 'User Status'
      },
      {
        dataField: 'valueInUsd',
        text: 'Battery'
      },
      {
        dataField: 'valueInUsd',
        text: 'IMEI NO.'
      },
      {
        dataField: 'valueInUsd',
        text: 'Device ID'
      },
      {
        dataField: 'valueInUsd',
        text: 'Device Model'
      },
      {
        dataField: 'valueInUsd',
        text: 'Session Status'
      },
      {
        dataField: 'valueInUsd',
        text: 'Date Created'
      }
    ],
      columns_operator : [{
        dataField: 'idno',
        text: 'OP ID'
      },{
        dataField: 'Centre Code',
        text: '	Name'
      }, {
        dataField: 'type',
        text: 'Phone Number'
      }, {
        dataField: 'coin',
        text: 'Role'
      },{
        dataField: 'amount',
        text: 'Vendor Name'
      },{
        dataField: 'valueInUsd',
        text: 'Centre ID'
      },
      {
        dataField: 'valueInUsd',
        text: 'User Status'
      },
      {
        dataField: 'valueInUsd',
        text: 'Battery'
      },
      {
        dataField: 'valueInUsd',
        text: 'IMEI NO.'
      },
      {
        dataField: 'valueInUsd',
        text: 'Device ID'
      },
      {
        dataField: 'valueInUsd',
        text: 'Device Model'
      },
      {
        dataField: 'valueInUsd',
        text: 'Session Status'
      },
      {
        dataField: 'valueInUsd',
        text: 'Date Created'
      }
    ],
      columns : [{
        dataField: 'idno',
        text: 'Centre Name'
      },{
        dataField: 'Centre Code',
        text: 'Centre Code'
      }, {
        dataField: 'type',
        text: 'Shift Number'
      }, {
        dataField: 'coin',
        text: 'Shift ID'
      },{
        dataField: 'amount',
        text: 'Shift Time'
      },{
        dataField: 'valueInUsd',
        text: 'Shift Status'
      },
      {
        dataField: 'valueInUsd',
        text: 'Total Student'
      },
      {
        dataField: 'valueInUsd',
        text: 'Present'
      },
      {
        dataField: 'valueInUsd',
        text: 'Absent'
      },
      {
        dataField: 'valueInUsd',
        text: 'Duplicate'
      },
      {
        dataField: 'valueInUsd',
        text: 'Operator Count'
      },
      {
        dataField: 'valueInUsd',
        text: 'Supervisor Count'
      },
      {
        dataField: 'valueInUsd',
        text: 'Device Count'
      }
    ],
      productData : [
        { id: 1, idno:"", pdate : "",type:"",coin:"",amount:"",valueInUsd:""},
        { id: 2, idno:"", pdate : "",type:"",coin:"",amount:"",valueInUsd:""},
        
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
                            Centre
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
                        <BootstrapTable keyField='id' data={ this.state.productData } columns={ this.state.columns_operator} pagination={ paginationFactory() } />
                        </TabPane>

                        <TabPane tabId="3">
                        <BootstrapTable keyField='id' data={ this.state.productData } columns={ this.state.columns_supervisor } pagination={ paginationFactory() } />
                        </TabPane>

                        <TabPane tabId="4">
                        <BootstrapTable keyField='id' data={ this.state.productData } columns={ this.state.columns_device } pagination={ paginationFactory() } />
                        </TabPane>

                        <TabPane tabId="5">
                        <BootstrapTable keyField='id' data={ this.state.productData } columns={ this.state.columns_student} pagination={ paginationFactory() } />
                        </TabPane>

                        <TabPane tabId="6">
                        <BootstrapTable keyField='id' data={ this.state.productData } columns={ this.state.columns } pagination={ paginationFactory() } />
                        </TabPane>

                        <TabPane tabId="7">
                        <BootstrapTable keyField='id' data={ this.state.productData } columns={ this.state.columns_csr} pagination={ paginationFactory() } />
                        </TabPane>

                        <TabPane tabId="8">
                        <BootstrapTable keyField='id' data={ this.state.productData } columns={ this.state.columns_auth} pagination={ paginationFactory() } />
                        </TabPane>

                        <TabPane tabId="9">
                        <BootstrapTable keyField='id' data={ this.state.productData } columns={ this.state.columns_changed_centre } pagination={ paginationFactory() } />
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
