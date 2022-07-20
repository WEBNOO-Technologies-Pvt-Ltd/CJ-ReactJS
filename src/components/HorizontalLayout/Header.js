import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactDrawer from "react-drawer";
import "react-drawer/lib/react-drawer.css";

import { connect } from "react-redux";

import { Link } from "react-router-dom";

// reactstrap
import { Row, Col, Dropdown, DropdownToggle, DropdownMenu } from "reactstrap";

// Import menuDropdown
import LanguageDropdown from "../CommonForBoth/TopbarDropdown/LanguageDropdown";
import NotificationDropdown from "../CommonForBoth/TopbarDropdown/NotificationDropdown";
import ProfileMenu from "../CommonForBoth/TopbarDropdown/ProfileMenu";
import RightSidebar from "../CommonForBoth/RightSidebar";

import megamenuImg from "../../assets/images/megamenu-img.png";
import logo from "../../assets/images/logo.svg";
import logoLight from "../../assets/images/logo-light.png";
import logoLightSvg from "../../assets/images/logo-light.svg";
import b58adb124ec55ada04130fa5d2518ab0 from "../../assets/images/b58adb124ec55ada04130fa5d2518ab0.png"
import logoDark from "../../assets/images/logo-dark.png";

// import images
import exam from "../../assets/images/brands/exam.svg";
import city from "../../assets/images/brands/city.svg";
import student from "../../assets/images/brands/student.svg";
import vendors from "../../assets/images/brands/vendors.svg";
import operator from "../../assets/images/brands/operator.svg";
import report from "../../assets/images/brands/report.svg";

//config url
import configData from "./../../config.js";

// Redux Store
import { toggleRightSidebar } from "../../store/actions";

//i18n
import { withTranslation } from "react-i18next";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSearch: false,
      open: false,
      position: "right",
    };
    this.toggleMenu = this.toggleMenu.bind(this);
    this.toggleFullscreen = this.toggleFullscreen.bind(this);
    this.toggleSearch = this.toggleSearch.bind(this);
  }

  toggleSearch = () => {
    this.setState({ isSearch: !this.state.isSearch });
  };
  /**
   * Toggle sidebar
   */
  toggleMenu() {
    this.props.openLeftMenuCallBack();
  }

  /**
   * Toggles the sidebar
   */
  toggleRightbar() {
    this.props.toggleRightSidebar();
  }

  toggleFullscreen() {
    if (
      !document.fullscreenElement &&
      /* alternative standard method */ !document.mozFullScreenElement &&
      !document.webkitFullscreenElement
    ) {
      // current working methods
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen(
          Element.ALLOW_KEYBOARD_INPUT
        );
      }
    } else {
      if (document.cancelFullScreen) {
        document.cancelFullScreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      }
    }
  }

  render() {
    return (
      <React.Fragment>
        <header id="page-topbar">
          <div className="navbar-header container">
            <div className="d-flex">
              <div className="navbar-brand-box">
                <Link to={"/" + configData.CJPL_URL} className="logo logo-dark">
                  <span className="logo-sm">
                    <img src={b58adb124ec55ada04130fa5d2518ab0} alt="" height="22" />
                  </span>
                  <span className="logo-lg">
                    <img src={b58adb124ec55ada04130fa5d2518ab0} alt="" className="cjpl-logo" />
                  </span>
                </Link>

                <Link to="/" className="logo logo-light">
                  <span className="logo-sm">
                    <img src={b58adb124ec55ada04130fa5d2518ab0} alt="" height="22" />
                  </span>
                  <span className="logo-lg">
                    <img src={b58adb124ec55ada04130fa5d2518ab0} alt="" height="19" />
                  </span>
                </Link>
              </div>

              <button
                type="button"
                className="btn btn-sm px-3 font-size-16 d-lg-none header-item"
                data-toggle="collapse"
                onClick={this.toggleMenu}
                data-target="#topnav-menu-content"
              >
                <i className="fa fa-fw fa-bars" />
              </button>

              <form className="app-search d-none d-none">
                <div className="position-relative">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search..."
                  />
                  <span className="bx bx-search-alt" />
                </div>
              </form>
              <Dropdown
                className="dropdown-mega d-none  ms-2 d-none"
                isOpen={this.state.megaMenuDrp}
                toggle={() => {
                  this.setState({ megaMenuDrp: !this.state.megaMenuDrp });
                }}
              >
                <DropdownToggle className="btn header-item" caret tag="button">
                  {this.props.t("Mega Menu")}{" "}
                  <i className="mdi mdi-chevron-down" />
                </DropdownToggle>
                <DropdownMenu className="dropdown-menu dropdown-megamenu">
                  <Row>
                    <Col sm={8}>
                      <Row>
                        <Col md={4}>
                          <h5 className="font-size-14 mt-0">
                            {this.props.t("UI Components")}
                          </h5>
                          <ul className="list-unstyled megamenu-list">
                            <li>
                              <Link to="#">{this.props.t("Lightbox")}</Link>
                            </li>
                            <li>
                              <Link to="#">{this.props.t("Range Slider")}</Link>
                            </li>
                            <li>
                              <Link to="#">{this.props.t("Sweet Alert")}</Link>
                            </li>
                            <li>
                              <Link to="#">{this.props.t("Rating")}</Link>
                            </li>
                            <li>
                              <Link to="#">{this.props.t("Forms")}</Link>
                            </li>
                            <li>
                              <Link to="#">{this.props.t("Tables")}</Link>
                            </li>
                            <li>
                              <Link to="#">{this.props.t("Charts")}</Link>
                            </li>
                          </ul>
                        </Col>

                        <Col md={4}>
                          <h5 className="font-size-14 mt-0">
                            {this.props.t("Applications")}
                          </h5>
                          <ul className="list-unstyled megamenu-list">
                            <li>
                              <Link to="#">{this.props.t("Ecommerce")}</Link>
                            </li>
                            <li>
                              <Link to="#">{this.props.t("Calendar")}</Link>
                            </li>
                            <li>
                              <Link to="#">{this.props.t("Email")}</Link>
                            </li>
                            <li>
                              <Link to="#">{this.props.t("Projects")}</Link>
                            </li>
                            <li>
                              <Link to="#">{this.props.t("Tasks")}</Link>
                            </li>
                            <li>
                              <Link to="#">{this.props.t("Contacts")}</Link>
                            </li>
                          </ul>
                        </Col>

                        <Col md={4}>
                          <h5 className="font-size-14 mt-0">
                            {this.props.t("Extra Pages")}
                          </h5>
                          <ul className="list-unstyled megamenu-list">
                            <li>
                              <Link to="#">
                                {this.props.t("Light Sidebar")}
                              </Link>
                            </li>
                            <li>
                              <Link to="#">
                                {this.props.t("Compact Sidebar")}
                              </Link>
                            </li>
                            <li>
                              <Link to="#">
                                {this.props.t("Horizontal layout")}
                              </Link>
                            </li>
                            <li>
                              <Link to="#"> {this.props.t("Maintenance")}</Link>
                            </li>
                            <li>
                              <Link to="#">{this.props.t("Coming Soon")}</Link>
                            </li>
                            <li>
                              <Link to="#">{this.props.t("Timeline")}</Link>
                            </li>
                            <li>
                              <Link to="#">{this.props.t("FAQs")}</Link>
                            </li>
                          </ul>
                        </Col>
                      </Row>
                    </Col>
                    <Col sm={4}>
                      <Row>
                        <Col sm={6}>
                          <h5 className="font-size-14 mt-0">
                            {this.props.t("UI Components")}
                          </h5>
                          <ul className="list-unstyled megamenu-list">
                            <li>
                              <Link to="#">{this.props.t("Lightbox")}</Link>
                            </li>
                            <li>
                              <Link to="#">{this.props.t("Range Slider")}</Link>
                            </li>
                            <li>
                              <Link to="#">{this.props.t("Sweet Alert")}</Link>
                            </li>
                            <li>
                              <Link to="#">{this.props.t("Rating")}</Link>
                            </li>
                            <li>
                              <Link to="#">{this.props.t("Forms")}</Link>
                            </li>
                            <li>
                              <Link to="#">{this.props.t("Tables")}</Link>
                            </li>
                            <li>
                              <Link to="#">{this.props.t("Charts")}</Link>
                            </li>
                          </ul>
                        </Col>

                        <Col sm={5}>
                          <div>
                            <img
                              src={megamenuImg}
                              alt=""
                              className="img-fluid mx-auto d-block"
                            />
                          </div>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </DropdownMenu>
              </Dropdown>
            </div>

            <div className="d-flex">
              <div className="dropdown  d-lg-none ms-2">
                <button
                  type="button"
                  className="btn header-item noti-icon"
                  id="page-header-search-dropdown"
                  onClick={() => {
                    this.setState({ isSearch: !this.state.isSearch });
                  }}
                >
                  <i className="mdi mdi-magnify" />
                </button>
                <div
                  className={
                    this.state.isSearch
                      ? "dropdown-menu dropdown-menu-lg dropdown-menu-end p-0 show"
                      : "dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                  }
                  aria-labelledby="page-header-search-dropdown"
                >
                  <form className="p-3">
                    <div className="form-group m-0">
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder={this.props.t("Search") + "..."}
                          aria-label="Recipient's username"
                        />
                        <div className="input-group-append">
                          <button className="btn btn-primary" type="submit">
                            <i className="mdi mdi-magnify" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              

              <Dropdown
                className="d-none d-lg-inline-block ms-1"
                isOpen={this.state.socialDrp}
                toggle={() => {
                  this.setState({ socialDrp: !this.state.socialDrp });
                }}
              >
                <DropdownToggle
                  className="btn header-item noti-icon"
                  caret
                  tag="button"
                >
                  <i className="bx bx-customize" />
                </DropdownToggle>
                <DropdownMenu className="dropdown-menu-lg dropdown-menu-end">
                  <div className="px-lg-2">
                    <Row className="no-gutters">
                      <Col>
                        <Link className="dropdown-icon-item" to={"/" + configData.CJPL_URL + "admin/exams"}>
                          <img src={exam} alt="exam" />
                          <span>Examination</span>
                        </Link>
                      </Col>
                      <Col>
                        <Link className="dropdown-icon-item" to={"/" + configData.CJPL_URL + "admin/centres"}>
                          <img src={city} alt="Centres" />
                          <span>Centres</span>
                        </Link>
                      </Col>
                      <Col>
                        <Link className="dropdown-icon-item" to={"/" + configData.CJPL_URL + "admin/students"}>
                          <img src={student} alt="dribbble" />
                          <span>Students</span>
                        </Link>
                      </Col>
                    </Row>
                    <Row className="no-gutters">
                      <Col>
                        <Link className="dropdown-icon-item" to={"/" + configData.CJPL_URL + "admin/vendors"}>
                          <img src={vendors} alt="vendors" />
                          <span>Vendors</span>
                        </Link>
                      </Col>
                      <Col>
                        <Link className="dropdown-icon-item" to={"/" + configData.CJPL_URL + "admin/operators"}>
                          <img src={operator} alt="operator" />
                          <span>Operators</span>
                        </Link>
                      </Col>
                      <Col>
                        <Link className="dropdown-icon-item" to={"/" + configData.CJPL_URL + "admin/exams"}>
                          <img src={report} alt="report" />
                          <span>Reports</span>
                        </Link>
                      </Col>
                    </Row>
                  </div>
                </DropdownMenu>
              </Dropdown>

              <div className="dropdown d-none d-lg-inline-block ms-1">
                <button
                  type="button"
                  className="btn header-item noti-icon"
                  onClick={this.toggleFullscreen}
                  data-toggle="fullscreen"
                >
                  <i className="bx bx-fullscreen" />
                </button>
              </div>

            

              <div className="dropdown d-none">
                <button
                  onClick={() => {
                    this.toggleRightbar();
                  }}
                  type="button"
                  className="btn header-item noti-icon right-bar-toggle"
                >
                  <i className="bx bx-cog bx-spin" />
                </button>
              </div>
            </div>
          </div>
        </header>
      </React.Fragment>
    );
  }
}

Header.propTypes = {
  openLeftMenuCallBack: PropTypes.func,
  t: PropTypes.any,
  toggleRightSidebar: PropTypes.func,
};

const mapStatetoProps = state => {
  const { layoutType } = state.Layout;
  return { layoutType };
};

export default connect(mapStatetoProps, { toggleRightSidebar })(
  withTranslation()(Header)
);
