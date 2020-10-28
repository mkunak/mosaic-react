import React, {Component} from "react";
import {BrowserRouter} from "react-router-dom";
import {connect} from "react-redux";

import Table from "../../components/Table";
import Loader from "../../components/Loader";
import {withServices} from "../../components/Hoc";

import {compose} from "../../utils/compose";
import {fetchToGetAllPersonnel} from "../../actions";

import "materialize-css";
import s from "./AppContainer.module.scss";

class AppContainer extends Component {
  componentDidMount() {
    this.props.fetchToGetAllPersonnel();
  }
  
  render() {
    const {loading, allPersonnel} = this.props;
    
    console.log(allPersonnel);
    
    return (
      <BrowserRouter>
        <div className="container">
          <h1 className={`${s.header} red lighten-3`}>
            <span>Employees</span>
          </h1>
          {loading || !allPersonnel || !allPersonnel.length ? (
            <Loader/>
          ) : (
            <Table {...this.props} />
          )}
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = ({allPersonnel, loading}) => {
  return {
    loading,
    allPersonnel
  };
};

const mapDispatchToProps = (dispatch, {Services}) => {
  return {
    fetchToGetAllPersonnel: fetchToGetAllPersonnel(Services, dispatch)
  };
};

export default compose(
  withServices(),
  connect(mapStateToProps, mapDispatchToProps)
)(AppContainer);
