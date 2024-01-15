

export interface ReducerActionTypes {
  type: string;
  payload: string | number | number[]
}

export interface ReducerActionTypesError {
  type: string;
}

export interface StateReducerTypesError {
  storeError: boolean;
  multipleChoiceOptionsError: boolean;
  multipleChoiceOptionsThreeError: boolean;
}