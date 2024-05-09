import { useDispatch } from 'react-redux'
import Result from './Result'
import SearchInput from './SearchInput'
import { createToast } from '@/utils/store/modules/toast'

const Search = () => {
  return (
    <div className="flex flex-col">
      <SearchInput />
      <Result />
    </div>
  )
}

export default Search
