import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { useEffect, useState } from "react";
import axios from "axios";
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

const LatestTranaction = () => {

  const [examination, setExamination] = useState([]);
  const [examDate, setExamDate] = useState([]);
  const [examShift, setExamShift] = useState([]);
  const [examCentre, setExamCentre] = useState([]);

  //Fetch examination data
    useEffect(() => {
      async function fetchExam() {
        let axiosConfig = {
          headers: {
              //'Content-Type': 'application/json',
              'authtoken' : 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoiQXNoaXNoIiwibmFtZSI6IkFzaGlzaCIsInBhc3N3b3JkIjpudWxsLCJBUElfVElNRSI6MTY1ODE1MDYzMn0.7LjpIhZbO-jNkchF3lRqEe8ZQECx_Hp7YERPrQ9gOqE'
              
          }
        };
        
        axios.get('https://cjpl.webnoo.com/api/Leaderboard/examdata', axiosConfig)
        .then((res) => {
          console.log("RESPONSE RECEIVED: ", res);
          setExamination(res);
        })
        .catch((err) => {
          console.log("AXIOS ERROR: ", err);
        })
     /**  try {
        let item = await axios.get(`https://naksheadmin.webnoo.in.net/api/blogs`)
        setExamination(item);
        console.log(item);
      } catch (error) {
        console.log(error);
      } **/
      }
      fetchExam();
  }, []);
  
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
                                <option value="Select Exam" disabled defaultValue>Select Exam</option>
                                  {examination.map(item => (
                                   <option key={item.id} value={item.id}> {item.exam_code}</option>
                                   ))}
                                </select>
                              </FormGroup>
                            </Col>

                            <Col sm="6" className="col-xl">
                              <FormGroup className="mt-3 mb-0">
                                <Label>Exam Date</Label>
                                <select className="form-control select2-search-disable">
                                  <option value="" defaultValue>
                                    
                                  </option>
                                  
                                </select>
                              </FormGroup>
                            </Col>

                            <Col sm="6" className="col-xl">
                              <FormGroup className="mt-3 mb-0">
                                <Label>Exam Shift</Label>
                                <select className="form-control select2-search-disable">
                                  <option value="" defaultValue>
                                    
                                  </option>
                                  
                                </select>
                              </FormGroup>
                            </Col>

                            <Col sm="6" className="col-xl">
                              <FormGroup className="mt-3 mb-0">
                                <Label>Exam Center</Label>
                                <select className="form-control select2-search-disable">
                                  <option value="" defaultValue>
                                    
                                  </option>
                               
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