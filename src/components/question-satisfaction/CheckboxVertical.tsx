import { useDataFormContext } from "@/context/formContext";
import { ActionTypes } from "@/reducer/form-reducer";
import { ActionTypesError } from "@/reducer/form-reducer-error";
import { CheckboxHorizontalProps } from "@/types/data-type-form-section-types";


export function CheckboxVertical({ options, title }: CheckboxHorizontalProps) {
  const { state, dispatch, error, dispatchError } = useDataFormContext()

  const handleCheckboxToggle = (value: number) => {
    if (state.multipleChoiceOptionsThree.includes(value)) {
      dispatch({type: ActionTypes.MULTIPLE_CHOICE_OPTIONS_THREE, payload: state.multipleChoiceOptionsThree.filter((item) => item !== value)});
      return;
    }
    dispatch({type: ActionTypes.MULTIPLE_CHOICE_OPTIONS_THREE, payload: [...state.multipleChoiceOptionsThree, value]});
    dispatchError({ type: ActionTypesError.MULTIPLE_CHOICE_OPTIONS_THREE_SUCCESS})
  };  

  return (
    <div>
      <h2 className="mb-4 text-sm text-gray-lightmode-500">{title}</h2>
      <div className="flex flex-col gap-2">
        {options.map((item) => (
          <span key={item.value} className="flex items-center gap-3">
            <input 
              value={item.value}
              onChange={(e) => handleCheckboxToggle(Number(e.target.value))}
              type="checkbox" className={`block relatuve w-4 h-4  appearance-none border-2 border-gray-lightmode-500 rounded-sm ${error.multipleChoiceOptionsThreeError ? 'border-red-500' : ''}`}/>
            <p className={`text-sm font-medium ${error.multipleChoiceOptionsThreeError ? 'text-red-500' : ''}`}>{item.description}</p>
          </span>
        ))}
      </div>
    </div>
  )
}