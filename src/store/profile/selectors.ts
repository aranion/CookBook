import {RootState} from 'store'

export const getIsAuth = (state: RootState) => state.profile.isAuth

export const getUser = (state: RootState) => state.profile.user

export const getError = (state: RootState) => state.profile.error
