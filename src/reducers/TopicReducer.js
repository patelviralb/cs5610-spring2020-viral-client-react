import TopicActions from "../actions/TopicActions"

const initialState = {
    topics: [],
    selectedTopicID: null
};

const TopicReducer = (state = initialState, action) => {
    switch (action.type) {
        case TopicActions.FIND_TOPIC_FOR_LESSON:
            return {
                topics: action.allFoundTopics
            };
        case TopicActions.CREATE_TOPIC:
            return {
                topics: [
                    ...state.topics,
                    action.newAddedTopic
                ],
                selectedTopicID: action.selectedTopicID
            };
        case TopicActions.DELETE_TOPIC:
            return {
                topics: state.topics.filter(topic => topic.id !== action.topicID),
                selectedTopicID: action.selectedTopicID
            };
        case TopicActions.UPDATE_TOPIC:
            const index = state.topics.findIndex((topic) => topic.id === action.topicID)
            return {
                topics: [
                    ...state.topics.slice(0, index),
                    action.updatedTopic,
                    ...state.topics.slice(index + 1)
                ],
                selectedTopicID: action.selectedTopicID
            };
        case TopicActions.SELECT_TOPIC:
            return {
                ...state,
                selectedTopicID: action.selectedTopicID
            };
        case TopicActions.REMOVE_ALL_TOPICS:
            return {
                topics: []
            };
        default:
            return state
    }
};

export default TopicReducer