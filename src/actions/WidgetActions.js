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

export const findAllWidgetsForTopic = (topicID) => ({
  type: FIND_ALL_WIDGETS_FOR_TOPIC,
  topicID: topicID
});

export const findAllWidgets = () => ({
  type: FIND_ALL_WIDGETS
});

export const findSpecificWidgets = (widgetID) => ({
  type: FIND_WIDGET
});

export default {
  FIND_ALL_WIDGETS_FOR_TOPIC,
  CREATE_WIDGET,
  DELETE_WIDGET,
  UPDATE_WIDGET,
  FIND_ALL_WIDGETS,
  FIND_WIDGET
}