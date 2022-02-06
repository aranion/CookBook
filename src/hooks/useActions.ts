import { bindActionCreators, Dispatch } from 'redux'
import { useDispatch } from 'react-redux'
import { ActionCreators } from 'store'

export function useActions() {             
    const dispatch: Dispatch = useDispatch() 
    return bindActionCreators(ActionCreators, dispatch)
}