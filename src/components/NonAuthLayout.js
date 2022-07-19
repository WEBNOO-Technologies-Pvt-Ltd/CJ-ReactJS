import React, { Component } from "react"
import PropTypes from 'prop-types'
import { withRouter } from "react-router-dom"
import { I18nextProvider } from "react-i18next"
import i18n from "../i18n"


// Other Layout related Component
import Navbar from "./HorizontalLayout/Navbar";
import Header from "./HorizontalLayout/Header";
import Footer from "./HorizontalLayout/Footer";
import RightSidebar from './CommonForBoth/RightSidebar';

class NonAuthLayout extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.capitalizeFirstLetter.bind(this)
  }

  capitalizeFirstLetter = string => {
    return string.charAt(1).toUpperCase() + string.slice(2)
  }
  
  render() {
    return  <React.Fragment>
    <I18nextProvider i18n={i18n}>
     
      <div id="layout-wrapper"> 
        <Header
          theme={this.props.topbarTheme}
          isMenuOpened={this.state.isMenuOpened}
          toggleRightSidebar={this.toggleRightSidebar}
          openLeftMenuCallBack={this.openMenu}
        />
        <Navbar menuOpen={this.state.isMenuOpened} />
        <div className="main-content">{this.props.children}</div>
        <Footer />
      </div>
      {this.props.showRightSidebar ? <RightSidebar /> : null}
    </I18nextProvider>
  </React.Fragment>
  }
}

NonAuthLayout.propTypes = {
  children: PropTypes.object,
  location: PropTypes.object
}

export default withRouter(NonAuthLayout)
