const FIND_ALL_WIDGETS_FOR_TOPIC = "FIND_ALL_WIDGETS_FOR_TOPIC";
const CREATE_WIDGET = "CREATE_WIDGET";
const DELETE_WIDGET = "DELETE_WIDGET";
const UPDATE_WIDGET = "UPDATE_WIDGET";
const FIND_ALL_WIDGETS = "FIND_ALL_WIDGETS";
const FIND_WIDGET = "FIND_WIDGET";

export const createNewWidget = (newAddedWidget) => ({
  type: CREATE_WIDGET,
  newAddedWidget: newAddedWidget
});

export const deleteWidget = (widgetID) => ({
  type: DELETE_WIDGET,
  widgetID: widgetID
});

export const updateWidget = (widgetID, updatedWidget) => ({
  type: UPDATE_WIDGET,
  widgetID: widgetID,
  updatedWidget: updatedWidget
});

export const findAllWidgetsForTopic = (allFoundWidgets) => ({
  type: FIND_ALL_WIDGETS_FOR_TOPIC,
  allFoundWidgets: allFoundWidgets
});

export const findAllWidgets = (allFoundWidgets) => ({
  type: FIND_ALL_WIDGETS,
  allFoundWidgets: allFoundWidgets
});

export const findSpecificWidgets = (widgetID) => ({
  type: FIND_WIDGET,
  widgetID: widgetID
});

export default {
  FIND_ALL_WIDGETS_FOR_TOPIC,
  CREATE_WIDGET,
  DELETE_WIDGET,
  UPDATE_WIDGET,
  FIND_ALL_WIDGETS,
  FIND_WIDGET
}