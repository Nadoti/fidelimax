import { useDataFormContext } from "@/context/formContext";
import { ActionTypes } from "@/reducer/form-reducer";
import { DataRadiosQuestionChoicesProps } from "@/types/data-type-form-section-types";
import { useEffect } from "react";


export function RadiosQuestionsChoices({ answerValue, options, title }: DataRadiosQuestionChoicesProps) {
  const { state, dispatch } = useDataFormContext()
  
  useEffect(() => {
    return dispatch({ type: ActionTypes.UNIQUE_CHOICE, payload: answerValue})
  }, [answerValue, dispatch])
  
  return (
    <div>
      <h2 className="mb-4 text-sm text-gray-lightmode-500">{title}</h2>
      <div className="flex items-center gap-4 ">
        {options.map((item) => (
          <span key={item.description} className="flex items-center gap-2">
            <input 
              type="radio" 
              value={state.uniqueChoice}
              checked={state.uniqueChoice === item.value}
              className="border-2 border-gray-lightmode-500 rounded-full"
            />
            <p className="text-sm text-gray-lightmode-500">{item.description}</p>
          </span>
        ))}

      </div>
    </div>
  )
}