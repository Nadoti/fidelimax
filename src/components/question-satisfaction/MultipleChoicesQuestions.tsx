'use client'
import { CheckboxHorizontal } from "./CheckboxHorizontal";
import { CheckboxVertical } from "./CheckboxVertical";
import { MultipleChoicesQuestionsProps } from "@/types/data-type-form-section-types";


export function MultipleChoicesQuestions({ options, horizontal, title}: MultipleChoicesQuestionsProps) {

  if(horizontal) {
    return <CheckboxHorizontal options={options} title={title}/>
  }

  return <CheckboxVertical options={options} title={title}/>
}