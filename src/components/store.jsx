import { createStore } from "redux";

import rootReducer from "./reducer/index.jsx";

const store = createStore(rootReducer);
export default store;
