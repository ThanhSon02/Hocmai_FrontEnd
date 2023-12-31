import {
    combineReducers,
    configureStore,
    createReducer,
} from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: "hocmai",
    storage,
    version: 1,
};

// const rootReducer = createReducer({}); // create or combine reducer

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//     reducer: persistedReducer,
// });

// export let persistor = persistStore(store);
