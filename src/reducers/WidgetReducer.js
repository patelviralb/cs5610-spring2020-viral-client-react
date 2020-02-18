import WidgetActions from "../actions/WidgetActions"

const initialState = {
  widgets: []
};

const WidgetReducer = (state = initialState, action) => {
  switch (action.type) {
    case WidgetActions.CREATE_WIDGET:
      return {
        widgets: [
          ...state.widgets,
          action.newAddedWidget
        ]
      };
    case WidgetActions.DELETE_WIDGET:
      return {
        widgets: state.widgets.filter(widget => widget._id !== action.widgetID)
      };

    case WidgetActions.UPDATE_WIDGET:
      const index = state.widgets.findIndex(
          (widget) => widget._id === action.widgetID)
      return {
        widgets: [
          ...state.widget.slice(0, index),
          action.updatedWidget,
          ...state.widgets.slice(index + 1)
        ]
      };

    case WidgetActions.FIND_ALL_WIDGETS_FOR_TOPIC:
    case WidgetActions.FIND_ALL_WIDGETS:
      return {
        widgets: action.allFoundWidgets
      };

    case WidgetActions.FIND_WIDGET:
      return {
        widgets: state.widgets.filter(widget => widget._id === action.widgetID)
      };

    case WidgetActions.REMOVE_ALL_WIDGETS:
      return {
        widgets: []
      };

    default:
      return state
  }
};

export default WidgetReducer