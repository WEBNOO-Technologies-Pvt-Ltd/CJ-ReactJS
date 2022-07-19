import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Row, Col, Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

//actions
import { getEarningChartsData } from "../../store/actions";

import ReactApexChart from "react-apexcharts";

class Earning extends Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [
        {
          name: "series1",
          data: [31, 40, 36, 51, 49, 72, 69, 56, 68, 82, 68, 76],
        },
      ],
      options: {
        chart: {
          toolbar: "false",
          dropShadow: {
            enabled: !0,
            color: "#000",
            top: 18,
            left: 7,
            blur: 8,
            opacity: 0.2,
          },
        },
        dataLabels: {
          enabled: !1,
        },
        colors: ["#556ee6"],
        stroke: {
          curve: "smooth",
          width: 3,
        },
      },
      earningChartData: [],
      seletedMonth: "jan"
    };
  }

  componentDidMount() {
    const { onGetEarningChartsData } = this.props;
    onGetEarningChartsData("jan");
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.setState({ ...this.state, earningChartData: this.props.earningChartData });
    }
  }

  render() {
    const { earningChartData, seletedMonth } = this.state;

    const series = [
      {
        name: "Series 1",
        data: [...earningChartData]
      }
    ];
    return (
      <React.Fragment>
        <Col xl="8">
        <Row>
            <Col lg={4}>
              <Card className="mini-stats-wid">
                <CardBody>
                  <div className="d-flex flex-wrap">
                    <div className="me-3">
                      <p className="text-muted mb-2">Total Students</p>
                      <h5 className="mb-0">120</h5>
                    </div>

                    <div className="avatar-sm ms-auto">
                      <div className="avatar-title bg-light rounded-circle text-primary font-size-20">
                        <i className="bx bxs-user"></i>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col lg={4}>
              <Card className="blog-stats-wid">
                <CardBody>
                  <div className="d-flex flex-wrap">
                    <div className="me-3">
                      <p className="text-muted mb-2">Total Operator</p>
                      <h5 className="mb-0">86</h5>
                    </div>

                    <div className="avatar-sm ms-auto">
                      <div className="avatar-title bg-light rounded-circle text-primary font-size-20">
                        <i className="bx bxs-group"></i>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg={4}>
              <Card className="blog-stats-wid">
                <CardBody>
                  <div className="d-flex flex-wrap">
                    <div className="me-3">
                      <p className="text-muted mb-2">Total Supervisor</p>
                      <h5 className="mb-0">4,235</h5>
                    </div>

                    <div className="avatar-sm ms-auto">
                      <div className="avatar-title bg-light rounded-circle text-primary font-size-20">
                        <i className="bx bxs-user-plus"></i>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col lg={4}>
              <Card className="mini-stats-wid">
                <CardBody>
                  <div className="d-flex flex-wrap">
                    <div className="me-3">
                      <p className="text-muted mb-2">Total centers</p>
                      <h5 className="mb-0">120</h5>
                    </div>

                    <div className="avatar-sm ms-auto">
                      <div className="avatar-title bg-light rounded-circle text-primary font-size-20">
                        <i className="bx bxs-building-house"></i>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col lg={4}>
              <Card className="blog-stats-wid">
                <CardBody>
                  <div className="d-flex flex-wrap">
                    <div className="me-3">
                      <p className="text-muted mb-2">Open CSR Request</p>
                      <h5 className="mb-0">86</h5>
                    </div>

                    <div className="avatar-sm ms-auto">
                      <div className="avatar-title bg-light rounded-circle text-primary font-size-20">
                        <i className="bx bx-book-content"></i>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg={4}>
              <Card className="blog-stats-wid">
                <CardBody>
                  <div className="d-flex flex-wrap">
                    <div className="me-3">
                      <p className="text-muted mb-2">Open Request CC</p>
                      <h5 className="mb-0">4,235</h5>
                    </div>

                    <div className="avatar-sm ms-auto">
                      <div className="avatar-title bg-light rounded-circle text-primary font-size-20">
                        <i className="bx bx-folder-open"></i>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col lg={4}>
              <Card className="mini-stats-wid">
                <CardBody>
                  <div className="d-flex flex-wrap">
                    <div className="me-3">
                      <p className="text-muted mb-2">Active Device</p>
                      <h5 className="mb-0">120</h5>
                    </div>

                    <div className="avatar-sm ms-auto">
                      <div className="avatar-title bg-light rounded-circle text-primary font-size-20">
                        <i className="bx bxs-mobile"></i>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col lg={4}>
              <Card className="blog-stats-wid">
                <CardBody>
                  <div className="d-flex flex-wrap">
                    <div className="">
                      <p className="text-muted mb-2">Closed CSR Request</p>
                      <h5 className="mb-0">86</h5>
                    </div>

                    <div className="avatar-sm ms-auto">
                      <div className="avatar-title bg-light rounded-circle text-primary font-size-20">
                        <i className="bx bx-book"></i>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg={4}>
              <Card className="blog-stats-wid">
                <CardBody>
                  <div className="d-flex flex-wrap">
                    <div className="">
                      <p className="text-muted mb-2">Closed Request CC</p>
                      <h5 className="mb-0">4,235</h5>
                    </div>

                    <div className="avatar-sm ms-auto">
                      <div className="avatar-title bg-light rounded-circle text-primary font-size-20">
                        <i className="bx bx-hdd"></i>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Col>
      </React.Fragment>
    );
  }
}


Earning.propTypes = {
  earningChartData: PropTypes.any,
  onGetEarningChartsData: PropTypes.func
};

const mapStateToProps = ({ DashboardSaas }) => ({
  earningChartData: DashboardSaas.earningChartData,
});

const mapDispatchToProps = dispatch => ({
  onGetEarningChartsData: (month) => dispatch(getEarningChartsData(month)),
});

export default connect(
  mapStateToProps, mapDispatchToProps
)(Earning);