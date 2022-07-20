import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { isEmpty, size } from "lodash"
import BootstrapTable from "react-bootstrap-table-next"
import paginationFactory, {
  PaginationProvider,
  PaginationListStandalone,
} from "react-bootstrap-table2-paginator"
import ToolkitProvider from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit';

import { Link } from "react-router-dom"
//Date Picker
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

import {
  Container,
  Row,
  Col,
  Button,
  Card,
  Badge,
  Form,
  CardBody,
  FormGroup,
  CardTitle,
  Label,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Table,
  Input,
} from "reactstrap";

import {
  getOrders,
  addNewOrder,
  updateOrder,
  deleteOrder
} from "store/actions"

import EcommerceOrdersModal from "../Ecommerce/EcommerceOrders/EcommerceOrdersModal"

const LatestTranaction = () => {
  
    return (
      <React.Fragment>
        
        <Card>
          <CardBody>
            <div className="mb-4 h4 card-title">Filter Exam Data</div>

            <Form>
                          <Row>
                          <Col sm="6" className="col-xl">
                              <FormGroup className="mt-3 mb-0">
                                <Label>Select Exam</Label>
                                <select className="form-control select2-search-disable">
                                  <option value="BTC" defaultValue>
                                    Bitcoin
                                  </option>
                                  <option value="ETH">Ethereum</option>
                                  <option value="LTC">litecoin</option>
                                </select>
                              </FormGroup>
                            </Col>

                            <Col sm="6" className="col-xl">
                              <FormGroup className="mt-3 mb-0">
                                <Label>Exam Date</Label>
                                <select className="form-control select2-search-disable">
                                  <option value="BTC" defaultValue>
                                    Bitcoin
                                  </option>
                                  <option value="ETH">Ethereum</option>
                                  <option value="LTC">litecoin</option>
                                </select>
                              </FormGroup>
                            </Col>

                            <Col sm="6" className="col-xl">
                              <FormGroup className="mt-3 mb-0">
                                <Label>Exam Shift</Label>
                                <select className="form-control select2-search-disable">
                                  <option value="BU" defaultValue>
                                    Buy
                                  </option>
                                  <option value="SE">Sell</option>
                                </select>
                              </FormGroup>
                            </Col>

                            <Col sm="6" className="col-xl">
                              <FormGroup className="mt-3 mb-0">
                                <Label>Exam Center</Label>
                                <select className="form-control select2-search-disable">
                                  <option value="CO" defaultValue>
                                    Completed
                                  </option>
                                  <option value="PE">Pending</option>
                                </select>
                              </FormGroup>
                            </Col>

                            <Col sm="6" className="col-xl align-self-end">
                              <div className="mb-3">
                                <Button
                                  type="button"
                                  color="primary filter-btn"
                                  className="w-md">
                                  Filter
                                </Button>
                              </div>
                            </Col>
                          </Row>
                        </Form>
            
          </CardBody>
        </Card>
      </React.Fragment>
    )
  
}

LatestTranaction.propTypes = {
  orders: PropTypes.array,
  onGetOrders: PropTypes.func,
  onAddNewOrder: PropTypes.func,
  onDeleteOrder: PropTypes.func,
  onUpdateOrder: PropTypes.func
}

const mapStateToProps = state => ({
  orders: state.ecommerce.orders,
})

const mapDispatchToProps = dispatch => ({
  onGetOrders: () => dispatch(getOrders()),
  onAddNewOrder: order => dispatch(addNewOrder(order)),
  onUpdateOrder: order => dispatch(updateOrder(order)),
  onDeleteOrder: order => dispatch(deleteOrder(order)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(LatestTranaction))