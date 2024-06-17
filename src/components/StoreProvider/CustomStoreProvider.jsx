"use client";
import React from 'react'
import { Provider } from 'react-redux'
import store from '@/libs/store/store'

export default function CustomStoreProvider({children}) {
  return (
    <Provider store={store}>
        {children}
        </Provider>
  )
}
