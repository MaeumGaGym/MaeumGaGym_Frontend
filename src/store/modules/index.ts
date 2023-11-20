import { combineReducers } from "redux";
import { HYDRATE } from "next-redux-wrapper";

const reducer = (state: any, action: any) => {
  if (action.type === HYDRATE) {
    return {
      ...state,
      ...action.payload
    }
  }
  return combineReducers({ // 정의한 리듀서 모듈들을 결합
    // 만약 자신이 user라는 리듀서를 만들었다면 이 파일에 import 하여 아래와 같이 쓰면 된다.
    // user,
  })(state, action);
}

export default reducer;