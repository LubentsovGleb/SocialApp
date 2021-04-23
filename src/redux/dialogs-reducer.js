const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
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
      ]
};


const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let body = action.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, { id: 6, message: body }]
      };
    default:
      return state;
  }
};

export const sendMessageCreator = (newMessageBody) => (
  {
    type: SEND_MESSAGE, newMessageBody
  }
)

export default dialogsReducer;
