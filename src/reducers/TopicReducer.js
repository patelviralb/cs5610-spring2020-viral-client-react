import TopicActions from "../actions/TopicActions"

const initialState = {
    topics: [],
    selectedTopicID: null
}

const TopicReducer = (state = initialState, action) => {
    switch (action.type) {
        case TopicActions.FIND_TOPICS_FOR_LESSON:
            return {
                topics: action.allFoundTopics
            }
        case TopicActions.CREATE_NEW_TOPIC:
            return {
                topics: [
                    ...state.topics,
                    action.newAddedTopic
                ],
                selectedTopicID: state.selectedTopicID
            }
        case TopicActions.DELETE_TOPIC:
            return {
                topics: state.topics.filter(topic => topic._id !== action.topicID),
                selectedTopicID: state.selectedTopicID
            }
        case TopicActions.UPDATE_TOPIC:
            const index = state.topics.findIndex((topic) => topic._id === action.topicID)
            return {
                topics: [
                    ...state.topics.slice(0, index),
                    action.updatedTopic,
                    ...state.topics.slice(index + 1)
                ],
                selectedTopicID: state.selectedTopicID
            }
        case TopicActions.SELECT_TOPIC:
            return {
                topics: [
                    ...state.topics
                ],
                selectedTopicID: action.selectedTopicID
            }
        case TopicActions.REMOVE_ALL_TOPICS:
            return {
                topics: []
            }
        default:
            return state
    }
}

export default TopicReducer