import WidgetActions from "../actions/WidgetActions"

const initialState = {
  widgets: []
};

const WidgetReducer = (state = initialState, action) => {
  let widgetIndex = action.widgetIndex;
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
        widgets: state.widgets.filter(widget => widget.id !== action.widgetID)
      };

    case WidgetActions.UPDATE_WIDGET:
      const index = state.widgets.findIndex(
          (widget) => widget.id === action.widgetID);
      return {
        widgets: [
          ...state.widgets.slice(0, index),
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

    case WidgetActions.UPDATE_WIDGET_TEXT:
      let widgetIndexForText = action.widgetIndex;
      let updatedWidgetText = {
        ...state.widgets[widgetIndexForText],
        "text": action.widgetText
      };
      return {
        widgets: [
          ...state.widgets.slice(0, widgetIndexForText),
          updatedWidgetText,
          ...state.widgets.slice(widgetIndexForText + 1)
        ]
      };

    case WidgetActions.UPDATE_WIDGET_NAME:
      let widgetIndexForName = action.widgetIndex;
      let updatedWidgetName = {
        ...state.widgets[widgetIndexForName],
        "name": action.widgetName
      };
      return {
        widgets: [
          ...state.widgets.slice(0, widgetIndexForName),
          updatedWidgetName,
          ...state.widgets.slice(widgetIndexForName + 1)
        ]
      };

    case WidgetActions.UPDATE_WIDGET_TEXT_SIZE:
      let widgetIndexForTextSize = action.widgetIndex;
      let updatedWidgetTextSize = {
        ...state.widgets[widgetIndexForTextSize],
        "size": action.widgetTextSize
      };
      return {
        widgets: [
          ...state.widgets.slice(0, widgetIndexForTextSize),
          updatedWidgetTextSize,
          ...state.widgets.slice(widgetIndexForTextSize + 1)
        ]
      };

    case WidgetActions.UPDATE_WIDGET_TYPE:
      let widgetIndexForType = action.widgetIndex;
      let updatedWidgetType = {
        ...state.widgets[widgetIndexForType],
        "type": action.widgetType
      };
      return {
        widgets: [
          ...state.widgets.slice(0, widgetIndexForType),
          updatedWidgetType,
          ...state.widgets.slice(widgetIndexForType + 1)
        ]
      };

    default:
      return state
  }
};

export default WidgetReducer