import WidgetActions from "../actions/WidgetActions"

const initialState = {
  widgets: [],
  isPreviewActive: false
};

const WidgetReducer = (state = initialState, action) => {
  let temporaryWidgetToMoveDown;
  let temporaryWidgetToMoveUp;

  switch (action.type) {
    case WidgetActions.CREATE_WIDGET:
      return {
        ...state,
        widgets: [
          ...state.widgets,
          action.newAddedWidget
        ]
      };
    case WidgetActions.DELETE_WIDGET:
      return {
        ...state,
        widgets: state.widgets.filter(widget => widget.id !== action.widgetID)
      };

    case WidgetActions.UPDATE_WIDGET:
      const index = state.widgets.findIndex(
          (widget) => widget.id === action.widgetID);
      return {
        ...state,
        widgets: [
          ...state.widgets.slice(0, index),
          action.updatedWidget,
          ...state.widgets.slice(index + 1)
        ]
      };

    case WidgetActions.FIND_ALL_WIDGETS_FOR_TOPIC:
    case WidgetActions.FIND_ALL_WIDGETS:
      return {
        ...state,
        widgets: action.allFoundWidgets
      };

    case WidgetActions.FIND_WIDGET:
      return {
        ...state,
        widgets: state.widgets.filter(widget => widget._id === action.widgetID)
      };

    case WidgetActions.REMOVE_ALL_WIDGETS:
      return {
        ...state,
        widgets: []
      };

    case WidgetActions.UPDATE_WIDGET_TEXT:
      let widgetIndexForText = action.widgetIndex;
      let updatedWidgetText = {
        ...state.widgets[widgetIndexForText],
        "text": action.widgetText
      };
      return {
        ...state,
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
        ...state,
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
        ...state,
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
        ...state,
        widgets: [
          ...state.widgets.slice(0, widgetIndexForType),
          updatedWidgetType,
          ...state.widgets.slice(widgetIndexForType + 1)
        ]
      };

    case WidgetActions.ACTIVATE_PREVIEW:
      return {
        ...state,
        isPreviewActive: true
      };

    case WidgetActions.DEACTIVATE_PREVIEW:
      return {
        ...state,
        isPreviewActive: false
      };

    case WidgetActions.MOVE_WIDGET_UP:
      let currentIndexForMoveUp = action.widgetIndex;
      let previousIndexForMoveDown = action.widgetIndex - 1;
      temporaryWidgetToMoveUp = {
        ...state.widgets[currentIndexForMoveUp],
        "order": state.widgets[previousIndexForMoveDown].order
      };
      temporaryWidgetToMoveDown = {
        ...state.widgets[previousIndexForMoveDown],
        "order": state.widgets[currentIndexForMoveUp].order
      };

      if (previousIndexForMoveDown === 0) {
        return {
          ...state,
          widgets: [
            temporaryWidgetToMoveUp,
            temporaryWidgetToMoveDown,
            ...state.widgets.slice(currentIndexForMoveUp + 1)
          ]
        };
      } else if (previousIndexForMoveDown === 1) {
        return {
          ...state,
          widgets: [
            ...state.widgets.slice(0, 1),
            temporaryWidgetToMoveUp,
            temporaryWidgetToMoveDown,
            ...state.widgets.slice(currentIndexForMoveUp + 1)
          ]
        };
      } else {
        return {
          ...state,
          widgets: [
            ...state.widgets.slice(0, previousIndexForMoveDown - 1),
            temporaryWidgetToMoveUp,
            temporaryWidgetToMoveDown,
            ...state.widgets.slice(currentIndexForMoveUp + 1)
          ]
        };
      }

    case WidgetActions.MOVE_WIDGET_DOWN:
      let currentIndexForMoveDown = action.widgetIndex;
      let nextIndexForMoveUp = action.widgetIndex + 1;
      temporaryWidgetToMoveDown = {
        ...state.widgets[currentIndexForMoveDown],
        "order": state.widgets[nextIndexForMoveUp].order
      };
      temporaryWidgetToMoveUp = {
        ...state.widgets[nextIndexForMoveUp],
        "order": state.widgets[currentIndexForMoveDown].order
      };
      return {
        ...state,
        widgets: [
          ...state.widgets.slice(0, currentIndexForMoveDown),
          temporaryWidgetToMoveUp,
          temporaryWidgetToMoveDown,
          ...state.widgets.slice(currentIndexForMoveDown + 2)
        ]
      };

    default:
      return state
  }
};

export default WidgetReducer