import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import logger from "redux-logger";

import reducer from "./modules";

const makeStore = () => configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
});

const wrapper = createWrapper(makeStore, {
  debug: process.env.NODE_ENV !== 'production',
});

export default wrapper;