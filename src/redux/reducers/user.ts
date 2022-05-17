import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface UserState {
  username: string,
  password: string,
  email: string,
  locale: string,
  loading: boolean,
  loggedIn: boolean,
}
type User = {
  username: string,
  password: string,
  email: string,
  locale: string,
}

const initialState: UserState = {
  username: "",
  password: "",
  email: "",
  locale: "tur",
  loading: true,
  loggedIn: false,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    start: (state) => {
      const u = localStorage.getItem("user")
      return { ...state, ...(u ? JSON.parse(u) : {}), loggedIn: u ? true : false, loading: false }
    },
    login: (state, action: PayloadAction<User>) => {
      localStorage.setItem("user", JSON.stringify(action.payload))
      return { ...state, ...action.payload, loggedIn: true, loading: false }
    },
    logout: (state) => {
      localStorage.removeItem("user")
      return { ...state, loggedIn: false, loading: false, username: "", password: "", email: "", locale: "tur" }
    },
    changeLocale: (state, action: PayloadAction<string>) => {
      localStorage.setItem("user", JSON.stringify({ ...state, locale: action.payload }))
      state.locale = action.payload
    },
  },
})

export const { start, login, logout, changeLocale } = userSlice.actions

export default userSlice.reducer