import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { useEffect, useState } from "react";
import axios from "axios";
import Earning from "./../Dashboard-saas/earning";
import SalesAnalytics from "./../Dashboard-saas/sales-analytics";
//import Charts
//import StackedColumnChart from "./StackedColumnChart";
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
  const [counters, setCounters] = useState([]);
  //selcted value
  const [selectedExam,setSelectedExam] = useState("");
  const [selectedExamDate,setSelectedExamDate] = useState("");
  const [selectedExamShift,setSelectedExamShift] = useState("");
  const [selectedCentre,setSelectedCentre] = useState("");
//Fetch examination data
   useEffect(() => {
    async function fetchExams() {
     try {
      let item = await axios.get(`https://cjpl.webnoo.com/api/Leaderboard/examdata`)
      setExamination(item.data.data);
      console.log(item.data.data);
     } catch (error) {
      console.log(error);
     }
    }
    fetchExams();
}, []);

async function handleSelectChange(event) {
    setSelectedExam(event.target.value);
    //alert(event.target.value)
    try {
      let item = await axios.get(`https://cjpl.webnoo.com/api/Leaderboard/examdetail?examid=${selectedExam}`)
      setExamDate(item.data.data.date);
      setExamShift(item.data.data.shifts);
      setExamCentre(item.data.data.centers);
      //console.log(item.data.data);
     } catch (error) {
      console.log(error);
     }
}
                                                                                            
async function handleCounters(event) {
  event.preventDefault();
  try {
    let item = await axios.get(`https://cjpl.webnoo.com/api/Leaderboard/counter?examid=${selectedExam}&dateid=${selectedExamDate}&shiftid=${selectedExamShift}&centerid=${selectedCentre}`)
    setCounters(item.data.data);
    console.log(item.data);
    console.log(selectedExam);
    console.log(selectedExamDate);
    console.log(selectedExamShift);
    console.log(selectedCentre);
   } catch (error) {
    console.log(error);
   }
}

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
                                <select value={selectedExam} onChange={handleSelectChange} className="form-control" >
                                {examination.map((item, index) => (
                                   <option  key={index} value={item.id}> {item.exam_code}</option>
                                   ))}
                              
                                </select>
                                
                              </FormGroup>  
                            </Col>

                            <Col sm="6" className="col-xl">
                              <FormGroup className="mt-3 mb-0">
                                <Label>Exam Date</Label>
                                <select onChange={(e)=>{setSelectedExamDate(e.target.value)}} className="form-control" >
                                {examDate.map((item, index) => (
                                   <option  key={index} value={item.id}> {item.exam_date}</option>
                                   ))}
                              
                                </select>
                              </FormGroup>
                            </Col>

                            <Col sm="6" className="col-xl">
                              <FormGroup className="mt-3 mb-0">
                                <Label>Exam Shift</Label>
                                <select onChange={(e)=>{setSelectedExamShift(e.target.value)}} className="form-control" >
                                {examShift.map((item, index) => (
                                   <option  key={index} value={item.id}> {item.shift_code}</option>
                                   ))}
                              
                                </select>
                              </FormGroup>
                            </Col>

                            <Col sm="6" className="col-xl">
                              <FormGroup className="mt-3 mb-0">
                                <Label>Exam Center</Label>
                                <select onChange={(e)=>{setSelectedCentre(e.target.value)}} className="form-control" >
                                {examCentre.map((item, index) => (
                                   <option  key={index} value={item.id}> {item.center_name}</option>
                                   ))}
                              
                                </select>
                              </FormGroup>
                            </Col>

                            <Col sm="6" className="col-xl align-self-end">
                              <div className="mb-3">
                                <Button
                                  onClick={handleCounters}
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
        <Row>
              {/* earning */}
              <Earning counters={counters} />

              {/* sales anytics */}
              <SalesAnalytics />
            </Row>
       
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