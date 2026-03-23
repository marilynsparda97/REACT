import { configureStore, createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Middleware che logga l'azione
const loggingMiddleware = store => next => action => {
  console.log('Dispatching:', action);
  const result = next(action);
  console.log('Next State:', store.getState());
  return result;
};

// Middleware che ritarda l'azione di 1 secondo
const delayMiddleware = store => next => action => {
  if (action.type === 'INCREMENT') {
    setTimeout(() => next(action), 1000);
    return;
  }
  return next(action);
};


const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: state => { state.value += 1 },
    decrement: state => { state.value -= 1 },
    reset: state => { state.value = 0 },
  }
});

const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => { state.push(action.payload) },
    removeTodo: (state, action) => state.filter(t => t.id !== action.payload)
  }
});

// THUNK per GitHub Users
export const fetchUser = createAsyncThunk(
  'users/fetchUser',
  async (username, { rejectWithValue }) => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) throw new Error('User not found');
      return await response.json();
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const usersSlice = createSlice({
  name: 'users',
  initialState: { list: [], loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => { state.loading = true; state.error = null; })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = false;
        state.list.push({ id: action.payload.id, name: action.payload.name, login: action.payload.login });
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    todos: todosSlice.reducer,
    users: usersSlice.reducer
  },
  middleware: (getDefault) => getDefault().concat(loggingMiddleware, delayMiddleware)
});

export const { increment, decrement, reset } = counterSlice.actions;