import { useEffect } from "react"
import { useDataFormContext } from "@/context/formContext"
import { ActionTypes } from "@/reducer/form-reducer"
import { DataAnswerValueTitleProps } from "@/types/data-type-form-section-types";


export const StarRating = ({ answerValue, title }: DataAnswerValueTitleProps) => {

  const handleChange = (selectedRating: number) => {
    dispatch({ type: ActionTypes.STAR_RATING, payload: selectedRating})
  };

  const { state, dispatch } = useDataFormContext()

  useEffect(() => {
    return dispatch({ type: ActionTypes.STAR_RATING, payload: answerValue})
  }, [answerValue, dispatch])

  return (
    <div className="flex flex-col">
      <h2 className="mb-4 text-sm text-gray-lightmode-500">{title}</h2>
      <div className="flex gap-4">
        {[...Array(5)].map((_, index) => (
          <label key={index + 1} className="flex items-center cursor-pointer">
            <input
              type="radio"
              name="rating"
              value={state.startRating}
              checked={index + 1 === state.startRating}
              onChange={() => handleChange(index + 1)}
              className="sr-only"
            />
            <span
              className={`text-5xl ${
                index + 1 <= state.startRating ? "text-yellow-500" : "text-gray-300"
              }`}
            >
              ★
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};



