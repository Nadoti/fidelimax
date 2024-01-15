'use client'
import { useDataFormContext } from "@/context/formContext";
import { ActionTypes } from "@/reducer/form-reducer";
import { ActionTypesError } from "@/reducer/form-reducer-error";
import { CheckboxHorizontalProps } from "@/types/data-type-form-section-types";


export function CheckboxHorizontal({ options, title }: CheckboxHorizontalProps) {
  const { state, dispatch, error, dispatchError } = useDataFormContext()

  const handleCheckboxToggle = (value: number) => {
    if (state.multipleChoiceOptions.includes(value)) {
      dispatch({type: ActionTypes.MULTIPLE_CHOICE_OPTIONS, payload: state.multipleChoiceOptions.filter((item) => item !== value)});
      return;
    }
    dispatch({type: ActionTypes.MULTIPLE_CHOICE_OPTIONS, payload: [...state.multipleChoiceOptions, value]});
    dispatchError({ type: ActionTypesError.MULTIPLE_CHOICE_OPTIONS_SUCCESS})
  };
  
  return (
    <div>
      <h2 className="mb-4 text-sm text-gray-lightmode-500">{title}</h2>
      <div className="flex items-center gap-2">
        {options.map((item) => (
          <span
            key={item.value}
            onClick={() => handleCheckboxToggle(item.value)}
            className={`flex flex-col items-center gap-2 py-2 px-4 border border-gray-lightmode-300 rounded-full cursor-pointer ${
              state.multipleChoiceOptions.includes(item.value) ? "bg-yellow-lightmode-700 " : ""
            } ${error.multipleChoiceOptionsError ? 'border-red-500': ''}`}
          >
            <p className={`text-sm font-medium ${
              state.multipleChoiceOptions.includes(item.value) ? "text-white " : "text-gray-lightmode-500"
            } ${error.multipleChoiceOptionsError ? 'text-red-500': ''}`}>{item.description}</p>
          </span>
        ))}

      </div>
    </div>
  );
}