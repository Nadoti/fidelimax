'use client'
import { useDataFormContext } from "@/context/formContext";
import { ActionTypes } from "@/reducer/form-reducer";
import { DataAnswerValueTitleProps } from "@/types/data-type-form-section-types";
import { useEffect } from "react";




export function RadiosQuestionsSatisfaction({ answerValue, title }: DataAnswerValueTitleProps) {
  const { state, dispatch } = useDataFormContext()

  const handleChange = (selectedRating: number) => {
    dispatch({ type: ActionTypes.CHOOSE_FROM_TEN, payload: selectedRating})
  };

  useEffect(() => {
    return dispatch({ type: ActionTypes.CHOOSE_FROM_TEN, payload: answerValue})
  }, [answerValue, dispatch])
  return (
    <div className="flex flex-col">
      <h2 className="mb-4 text-sm text-gray-lightmode-500">{title}</h2>
      <div className="flex items-center justify-between">
        {[...Array(10)].map((_,index) => (
          <span key={index} className="flex flex-col items-center gap-2">
            <input 
              type="radio" 
              value={state.chooseFromTen}
              checked={state.chooseFromTen === index+1}
              className="border-2 border-gray-lightmode-500 rounded-full"
              onChange={() => handleChange(index + 1)}
            />
            <p className="text-sm text-gray-lightmode-500">{index+1}</p>
          </span>
        ))}
      </div>
    </div>
  )
}