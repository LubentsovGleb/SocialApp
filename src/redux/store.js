import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";



let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi hows going", like: 12 },
        { id: 2, message: "Nice", like: 20 },
      ],
      newPostText: "it-kamsutra.com",
    },
    messagesPage: {
      dialogs: [
        { id: 1, name: "Maria" },
        { id: 2, name: "Joe" },
        { id: 3, name: "Bob" },
        { id: 4, name: "Victor" },
        { id: 5, name: "Valera" },
      ],
      messages: [
        { id: 1, message: "Hi" },
        { id: 2, message: "How are you?" },
        { id: 3, message: "im good!" },
      ],
      newMessageBody: ""
    },
    sidebar: {
      friends: [
        { id: 1, name: "Maria" },
        { id: 2, name: "Joe" },
        { id: 3, name: "Bob" },
        { id: 4, name: "Victor" },
        { id: 5, name: "Valera" },
      ],
    },
  },
  _callSubscriber() {
    console.log("State changed");
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },
  getState() {
    return this._state;
  },

 
  dispatch(action) {

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
    
  },
};


window.store = store;
export default store;
