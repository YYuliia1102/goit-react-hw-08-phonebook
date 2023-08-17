import { createAsyncThunk, createSlice, createSelector } from '@reduxjs/toolkit';
import { $instance } from './operations';

export const requestContactsThunk = createAsyncThunk(
    'contacts/getAll',
    async (_, thunkApi) => {
        try {
            const { data } = await $instance.get('/contacts');

            return data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
);

export const addContactThunk = createAsyncThunk(
    'contacts/addContact',
    async (contactData, thunkApi) => {
        try {
            const { data } = await $instance.post('/contacts', contactData);

            return data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
);

export const deleteContactThunk = createAsyncThunk(
    'contacts/deleteContact',
    async (contactId, thunkApi) => {
        try {
            const { data } = await $instance.delete(`/contacts/${contactId}`);

            return data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
);

const initialState = {
    contacts: [],
    isLoading: false,
    error: null,
    filter: '',
};

export const selectContacts = (state) => state.contacts.contacts;
export const selectFilter = (state) => state.contacts.filter;


export const selectFilteredContacts = createSelector(
    [selectFilter, selectContacts],
    (filterValue, contacts) => {
        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(filterValue.toLowerCase())
        );
    }
);

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        setFilter: (state, action) => {
            state.filter = action.payload;
        },
    },
    extraReducers: builder =>
        builder
            .addCase(requestContactsThunk.pending, state => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(requestContactsThunk.fulfilled, (state, action) => {
                state.isLoading = false;
                state.contacts = action.payload;
            })
            .addCase(requestContactsThunk.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            // ------- ADD NEW CONTACT -------
            .addCase(addContactThunk.pending, state => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(addContactThunk.fulfilled, (state, action) => {
                state.isLoading = false;
                // state.contacts = [...state.contacts, action.payload];
                state.contacts.push(action.payload);
            })
            .addCase(addContactThunk.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            // ------- DELETE CONTACT -------
            .addCase(deleteContactThunk.pending, state => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(deleteContactThunk.fulfilled, (state, action) => {
                state.isLoading = false;
                const indexDeletedContact = state.contacts.findIndex(
                    contact => contact.id === action.payload.id
                );
                state.contacts.splice(indexDeletedContact, 1);
            })
            .addCase(deleteContactThunk.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            }),
});

export const selectUserContacts = state => state.contacts.contacts;
export const selectContactsIsLoading = state => state.contacts.isLoading;
export const selectContactsError = state => state.contacts.error;

export const contactsReducer = contactsSlice.reducer;
export const { setFilter } = contactsSlice.actions;