import { bindActionCreators, Dispatch } from 'redux'
import { useDispatch } from 'react-redux'
import { ActionCreators } from 'store'

export function useActions() {              // Для чего конкретно этот код? Чтобы не писать Dispatch в комопонентах?
    const dispatch: Dispatch = useDispatch() // Почему не appUseDispatch?
    return bindActionCreators(ActionCreators, dispatch)
}