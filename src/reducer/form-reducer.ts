import { FormDataTypes } from "@/types/context-types";
import { ReducerActionTypes } from "@/types/reducer-form-types";


export const ActionTypes = {
  STAR_RATING: 'STAR_RATING',
  CHOOSE_FROM_TEN: 'CHOOSE_FROM_TEN',
  REASON_FOR_EVALUATION: 'REASON_FOR_EVALUATION',
  STORE: 'STORE',
  UNIQUE_CHOICE: 'UNIQUE_CHOICE',
  MULTIPLE_CHOICE_OPTIONS: 'MULTIPLE_CHOICE_OPTIONS',
  MULTIPLE_CHOICE_OPTIONS_THREE: 'MULTIPLE_CHOICE_OPTIONS_THREE',
  QUESTION_TEXT: 'QUESTION_TEXT',
};



export const initialState = {
  startRating: 0,
  chooseFromTen: 0,
  reasonForEvaluation: '',
  store: 0,
  uniqueChoice: 0,
  multipleChoiceOptions: [],
  multipleChoiceOptionsThree: [],
  questionText: '',
};

export function reducer(state: FormDataTypes, action: ReducerActionTypes) {
  switch (action.type) {
    case ActionTypes.STAR_RATING:
      return { ...state, startRating: action.payload as number };
    case ActionTypes.CHOOSE_FROM_TEN:
      return { ...state, chooseFromTen: action.payload as number };
    case ActionTypes.REASON_FOR_EVALUATION:
      return { ...state, reasonForEvaluation: action.payload as string };
    case ActionTypes.STORE:
      return { ...state, store: action.payload as number };
    case ActionTypes.UNIQUE_CHOICE:
      return { ...state, uniqueChoice: action.payload as number };
    case ActionTypes.MULTIPLE_CHOICE_OPTIONS:
      return { ...state, multipleChoiceOptions: action.payload as number[] };
    case ActionTypes.MULTIPLE_CHOICE_OPTIONS_THREE:
      return { ...state, multipleChoiceOptionsThree: action.payload as number[] };
    case ActionTypes.QUESTION_TEXT:
      return { ...state, questionText: action.payload as string };
    default:
      return state;
  }
}
