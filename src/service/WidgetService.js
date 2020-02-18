import { WIDGET_API_URL_FOR_TOPIC } from "../common/constants"
import { WIDGET_API_URL } from "../common/constants"

const createWidget = (topicID, widget) => {
  return fetch(`${WIDGET_API_URL_FOR_TOPIC}/${topicID}/widgets`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(widget)
  }).then(response => response.json())
};

const findWidgetsForTopic = (topicID) => {
  return fetch(`${WIDGET_API_URL_FOR_TOPIC}/${topicID}/widgets`)
  .then(response => response.json())
};

const findAllWidgets = () => {
  return fetch(`${WIDGET_API_URL}`)
  .then(response => response.json())
};

const findWidgetById = (widgetID) => {
  return fetch(`${WIDGET_API_URL}/${widgetID}`)
  .then(response => response.json())
};

/*const updateWidget = (widgetID, widget) => {
  return fetch(`${WIDGET_API_URL}/${widgetID}`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(widget)
  }).then(response => response.json())
};*/

const deleteTopic = (widgetID) => {
  return fetch(`${WIDGET_API_URL}/${widgetID}`, {
    method: 'DELETE'
  }).then(response => response.json())
};

export default {
  createWidget,
  findWidgetsForTopic,
  findAllWidgets,
  findWidgetById,
  deleteTopic
}