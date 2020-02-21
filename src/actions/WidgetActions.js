const FIND_ALL_WIDGETS_FOR_TOPIC = "FIND_ALL_WIDGETS_FOR_TOPIC";
const CREATE_WIDGET = "CREATE_WIDGET";
const DELETE_WIDGET = "DELETE_WIDGET";
const UPDATE_WIDGET = "UPDATE_WIDGET";
const FIND_ALL_WIDGETS = "FIND_ALL_WIDGETS";
const FIND_WIDGET = "FIND_WIDGET";
const REMOVE_ALL_WIDGETS = "REMOVE_ALL_WIDGETS";

const UPDATE_WIDGET_TEXT = "UPDATE_WIDGET_TEXT";
const UPDATE_WIDGET_NAME = "UPDATE_WIDGET_NAME";
const UPDATE_WIDGET_TEXT_SIZE = "UPDATE_WIDGET_TEXT_SIZE";
const UPDATE_WIDGET_TYPE = "UPDATE_WIDGET_TYPE";
const ACTIVATE_PREVIEW = "ACTIVATE_PREVIEW";
const DEACTIVATE_PREVIEW = "DEACTIVATE_PREVIEW";

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

export const removeAllWidgetsAfterTopicDelete = () => ({
  type: REMOVE_ALL_WIDGETS
});


export const updateWidgetText = (widgetText, widgetIndex) => ({
  type: UPDATE_WIDGET_TEXT,
  widgetText: widgetText,
  widgetIndex: widgetIndex
});

export const updateWidgetName = (widgetName, widgetIndex) => ({
  type: UPDATE_WIDGET_NAME,
  widgetName: widgetName,
  widgetIndex: widgetIndex
});

export const updateWidgetTextSize = (widgetTextSize, widgetIndex) => ({
  type: UPDATE_WIDGET_TEXT_SIZE,
  widgetTextSize: widgetTextSize,
  widgetIndex: widgetIndex
});

export const updateWidgetType = (widgetType, widgetIndex) => ({
  type: UPDATE_WIDGET_TYPE,
  widgetType: widgetType,
  widgetIndex: widgetIndex
});

export const activatePreview = () => ({
  type: ACTIVATE_PREVIEW
});

export const deactivatePreview = () => ({
  type: DEACTIVATE_PREVIEW
});

export default {
  FIND_ALL_WIDGETS_FOR_TOPIC,
  CREATE_WIDGET,
  DELETE_WIDGET,
  UPDATE_WIDGET,
  FIND_ALL_WIDGETS,
  FIND_WIDGET,
  REMOVE_ALL_WIDGETS,

  UPDATE_WIDGET_TEXT,
  UPDATE_WIDGET_NAME,
  UPDATE_WIDGET_TEXT_SIZE,
  UPDATE_WIDGET_TYPE,
  ACTIVATE_PREVIEW,
  DEACTIVATE_PREVIEW
}