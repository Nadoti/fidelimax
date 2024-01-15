import { ReducerActionTypesError, StateReducerTypesError } from "@/types/reducer-form-types";



export const ActionTypesError = {
  STORE_ERROR: 'STORE_ERROR',
  STORE_SUCCESS: 'STORE_SUCCESS',
  MULTIPLE_CHOICE_OPTIONS_ERROR: 'MULTIPLE_CHOICE_OPTIONS_ERROR',
  MULTIPLE_CHOICE_OPTIONS_SUCCESS: 'MULTIPLE_CHOICE_OPTIONS_SUCCESS',
  MULTIPLE_CHOICE_OPTIONS_THREE_ERROR: 'MULTIPLE_CHOICE_OPTIONS_THREE_ERROR',
  MULTIPLE_CHOICE_OPTIONS_THREE_SUCCESS: 'MULTIPLE_CHOICE_OPTIONS_THREE_SUCCESS',
};



export const initialStateError = {
  storeError: false,
  multipleChoiceOptionsError: false,
  multipleChoiceOptionsThreeError: false,
};

export function reducerError(state: StateReducerTypesError, action:ReducerActionTypesError) {
  switch (action.type) {
    case ActionTypesError.STORE_ERROR:
      return { ...state, storeError: true };
    case ActionTypesError.STORE_SUCCESS:
      return { ...state, storeError: false };
    case ActionTypesError.MULTIPLE_CHOICE_OPTIONS_ERROR:
      return { ...state, multipleChoiceOptionsError: true };
    case ActionTypesError.MULTIPLE_CHOICE_OPTIONS_SUCCESS:
      return { ...state, multipleChoiceOptionsError: false };
    case ActionTypesError.MULTIPLE_CHOICE_OPTIONS_THREE_ERROR:
      return { ...state, multipleChoiceOptionsThreeError: true };
    case ActionTypesError.MULTIPLE_CHOICE_OPTIONS_THREE_SUCCESS:
      return { ...state, multipleChoiceOptionsThreeError: false };
    default:
      return state;
  }
}