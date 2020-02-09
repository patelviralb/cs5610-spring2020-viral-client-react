import React from "react"
import { connect } from "react-redux"
import { deleteModule } from "../../../actions/ModuleActions"
import ModuleService from "../../../service/ModuleService"
import ModuleActions from "../../../actions/ModuleActions"

class CourseModuleItem extends React.Component {
  render() {
    return (
      <div className="d-flex justify-content-center mt-4">
        <div className="row w-100 vp-cs5610-each-module">
          <button
            className="btn btn-dark col-10 vp-cs5610-module-title">
            <i className="fas fa-book mr-2"></i>
            <span
              className="wbdv-module-item-title">{this.props.module.moduleName}
            </span>
          </button>
          <button
            className="btn btn-dark col-2"
            onClick={() => this.props.deleteModule(this.props.module._id)}
          >
            <i className="fas fa-trash-alt vp-cs5610-trash-icon"></i>
          </button>
        </div>
      </div>
    )
  }
}

const stateToPropertyMapper = (state) => {
  return {
    moduleList: state.modules
  }
}

const dispatcherToPropertyMapper = (dispatch) => {
  return {
    deleteModule: (moduleID) => {
      console.log(moduleID)
      ModuleService.deleteModule(moduleID)
        .then(status => dispatch(deleteModule(moduleID)))
    }
  }
}

export default connect(
  stateToPropertyMapper,
  dispatcherToPropertyMapper
)
  (CourseModuleItem)