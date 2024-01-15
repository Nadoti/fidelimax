import { useDataFormContext } from "@/context/formContext";
import { ActionTypes } from "@/reducer/form-reducer";
import { ActionTypesError } from "@/reducer/form-reducer-error";
import { DataSelectProps } from "@/types/data-type-form-section-types";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useEffect, useRef, useState } from "react";


export const Select = ({ options, title }: DataSelectProps) => {
  const { dispatch, error, dispatchError } = useDataFormContext()
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const selectRef = useRef(null);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  
  const handleDocumentClick = (event: MouseEvent) => {
    if (selectRef.current && !(selectRef.current as any).contains(event.target)) {
      handleDropdownToggle();
    }
  }; 

  function handleSelectOptions(option: number) {
    dispatch({type: ActionTypes.STORE, payload: option})
    dispatchError({type: ActionTypesError.STORE_SUCCESS})
  }
  

  useEffect(() => { 
    document.addEventListener("click", handleDocumentClick);
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  return (
    <div className="relative inline-block w-full">
      <select
        ref={selectRef}
        onClick={handleDropdownToggle}
        onChange={(e) => handleSelectOptions(Number(e.target.value))}
        className={`appearance-none w-full py-5 px-4 text-base text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-yellow-lightmode-600 ${error.storeError ? 'border-red-500 text-red-500' : ''}`}
        
      >
        <option value={0} disabled selected  hidden>
          {title}
        </option>
        {options.map((option) => (
          <option key={option.description} value={option.value}>
            {option.description}
          </option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
        {isDropdownOpen ? (<ChevronUp width={20} height={20} />) : (<ChevronDown width={20} height={20} />)}
      </div>
    </div>
  );
};
