import { ReducerActionTypes, ReducerActionTypesError } from "./reducer-form-types";


export interface FormDataTypes {
  startRating: number;
  chooseFromTen: number;
  reasonForEvaluation: string;
  store: number;
  uniqueChoice: number;
  multipleChoiceOptions: number[];
  multipleChoiceOptionsThree: number[];
  questionText: string;
}

export interface FormDataTypesError {
  storeError: boolean;
  multipleChoiceOptionsError: boolean;
  multipleChoiceOptionsThreeError: boolean;
}



export interface ContextFormTypes {
  state: FormDataTypes;
  dispatch: React.Dispatch<ReducerActionTypes>;
  error: FormDataTypesError;
  dispatchError: React.Dispatch<ReducerActionTypesError>;
}