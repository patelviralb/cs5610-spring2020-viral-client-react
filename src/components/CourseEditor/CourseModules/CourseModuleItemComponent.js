import React from "react";
import { connect } from "react-redux";
import ModuleService from "../../../service/ModuleService";
import { deleteModule, updateModule, updateModuleSelection } from "../../../actions/ModuleActions";
import LessonService from "../../../service/LessonService";
import { findModuleLessons } from "../../../actions/LessonActions";
import {removeTopicsAfterModuleDelete} from "../../../actions/LessonActions"

class CourseModuleItem extends React.Component {
  state = {
    isEdit: false,
    module: this.props.module
  }

  editModuleTitle = () => {
    this.setState((previousState) => {
      if (this.state.isEdit) {
        return {
          isEdit: false
        }
      } else {
        return {
          isEdit: true
        }
      }
    });
  };

  updateModuleTitle = (event) => {
    this.setState({
      module: {
        ...this.state.module,
        moduleName: event.target.value
      }
    });
  };

  updateModule = (event) => {
    this.editModuleTitle();
    this.props.updateModule(this.state.module._id, this.state.module)
  };

  editModuleSelection = () => {
    this.props.updateModuleSelection(this.state.module._id)
  };

  render() {
    return (
      <div className="d-flex justify-content-center mt-4">
        <div className="row w-100 vp-cs5610-each-module">
          {
            !this.state.isEdit
            &&
            <button
              className={`${this.props.selectedModuleID === this.state.module._id ? "btn col-10 vp-cs5610-module-title btn-primary" : "btn col-10 vp-cs5610-module-title btn-dark"}`}
              onClick={this.editModuleSelection}
            >
              <i className="fas fa-book mr-2"></i>
              <span
                className="wbdv-module-item-title">{this.state.module.moduleName}
              </span>
            </button>
          }
          {
            this.state.isEdit
            &&
            <input
              className="btn-warning col-8 vp-cs5610-module-title"
              value={this.state.module.moduleName}
              onChange={this.updateModuleTitle}
            />
          }
          {
            this.state.isEdit
            &&
            <button
              className="btn btn-danger col-2"
              onClick={() => this.props.deleteModule(this.state.module._id)}
            >
              <i className="fas fa-trash-alt"></i>
            </button>
          }
          {
            this.state.isEdit
            &&
            <button
              className="btn btn-success col-2"
              onClick={this.updateModule}
            >
              <i className="fas fa-check"></i>
            </button>
          }
          {
            !this.state.isEdit
            &&
            <button
              className="btn btn-warning col-2"
              onClick={this.editModuleTitle}
            >
              <i className="fas fa-edit"></i>
            </button>
          }
        </div>
      </div >
    )
  }
}

const stateToPropertyMapper = (state) => {
  return {
    selectedModuleID: state.moduleReducer.selectedModuleID
  }
}

const dispatcherToPropertyMapper = (dispatch) => {
  return {
    deleteModule: (moduleID) => {
      ModuleService.deleteModule(moduleID)
        .then(status =>
          dispatch(deleteModule(moduleID))
        )
      dispatch(removeTopicsAfterModuleDelete())
    },

    updateModule: (moduleID, updatedModule) => {
      ModuleService.updateModule(moduleID, updatedModule)
        .then(status =>
          dispatch(updateModule(moduleID, updatedModule))
        )
    },

    updateModuleSelection: (moduleID) => {
      dispatch(updateModuleSelection(moduleID))
      LessonService.findLessonsForModule(moduleID)
        .then(allFoundLessons => dispatch(findModuleLessons(allFoundLessons)))
    }
  }
}

export default connect(
  stateToPropertyMapper,
  dispatcherToPropertyMapper
)(CourseModuleItem)