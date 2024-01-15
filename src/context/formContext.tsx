'use client'

import { initialState, reducer } from '@/reducer/form-reducer';
import { initialStateError, reducerError } from '@/reducer/form-reducer-error';
import { ContextFormTypes } from '@/types/context-types';
import { PropsWithChildren, createContext, useContext, useReducer } from 'react'


const FormContext = createContext<ContextFormTypes | null>(null)

export function useDataFormContext() {
  const context = useContext(FormContext);
  if (!context) throw new Error("useDataFormContext precisa estar em FormContextProvider");
  return context;

}

export function FormContextProvider({ children }: PropsWithChildren) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const [error, dispatchError] = useReducer(reducerError, initialStateError);

   
  return (
    <FormContext.Provider value={{state, dispatch, error, dispatchError}}>
      {children}
    </FormContext.Provider>
  )
}