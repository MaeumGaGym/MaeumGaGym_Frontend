import { combineReducers } from 'redux'
import toastReducer from './toast'
import pickleUploadReducer from './pickleUpload'

const rootReducer = combineReducers({
  // 정의한 리듀서 모듈들을 결합
  // 만약 자신이 userReducer라는 리듀서를 만들었다면 이 파일에 import 하여 아래와 같이 쓰면 된다.
  // user: userReducer,
  toast: toastReducer,
  pickle: pickleUploadReducer,
})

export default rootReducer
