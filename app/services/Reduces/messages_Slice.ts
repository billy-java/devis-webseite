import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { I_Message } from '@/app/lib/Interfaces/I_Message';
import { messagesList } from '@/app/lib/Arrays/MessagesList';

const messages: I_Message[] = [...messagesList];

const messages_Slice = createSlice({
  name: 'message',
  initialState: messages || ([] as I_Message[]),

  reducers: {
    // Reducer zum Hinzufügen eines neuen Messages zum Message

    addMessage: (state, action: PayloadAction<{ newMessage: I_Message }>) => {
      const { newMessage } = action.payload;

      return [...state, newMessage];
    },

    // Reducer zum Aktualisieren eines vorhandenen Messages im Message
    updateMessage: (
      state,
      action: PayloadAction<{ updated_Message: I_Message }>
    ) => {
      const { updated_Message } = action.payload;
      const index = state.findIndex(
        (element) => element.id === updated_Message.id
      );
      if (index !== -1) {
        state[index] = updated_Message;
      }
    },

    deleteMessage: (
      state,
      action: PayloadAction<{
        id: string;
      }>
    ) => {
      const { id } = action.payload;
      //beispiel : {type: 'todo/deleteMessage', payload:20}
      state = state.filter((message) => message.id !== id);

      return state;
    },

    updateAllMessage: (
      state,
      action: PayloadAction<{ all_Message: I_Message[] }>
    ) => {
      const { all_Message } = action.payload;

      state = all_Message;
    },
  },
});

export const addMessage__Hilfe = (newMessage: I_Message) => {
  /*  await handle_createData(newMessage); */

  return {
    type: 'message/addMessage',
    payload: {
      newMessage: newMessage,
    },
  };
};

export const updateMessage__Hilfe = (updated_Message: I_Message) => {
  /*  await handle_updateData(updated_Message); */

  return {
    type: 'message/updateMessage',
    payload: {
      updated_Message,
    },
  };
};

export const deleteMessage__Hilfe = (id: string) => {
  /*  await handle_deleteData(id); */

  return {
    type: 'message/deleteMessage',
    payload: {
      id,
    },
  };
};

export const updateAllMessage__Hilfe = (all: I_Message[]) => {
  /*  await handle_deleteData(id); */

  return {
    type: 'message/updateAllMessage',
    payload: {
      all,
    },
  };
};
export default messages_Slice.reducer;
