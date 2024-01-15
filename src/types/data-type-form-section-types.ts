import { ItensArray } from "./data-questions-types";



export interface DataTypeFormsSectionProps {
  answerValue: number | string;
  title: string;
  options: ItensArray[];
  horizontal: boolean
} 

export interface DataAnswerValueTitleProps extends Omit<DataTypeFormsSectionProps, 'options' | 'horizontal'>{}
export interface DataSelectProps extends Omit<DataTypeFormsSectionProps, 'answerValue' | 'horizontal'>{}
export interface DataRadiosQuestionChoicesProps extends Omit<DataTypeFormsSectionProps, 'horizontal'>{}
export interface MultipleChoicesQuestionsProps extends Omit<DataTypeFormsSectionProps, 'answerValue'>{}

export interface CheckboxHorizontalProps extends Omit<DataTypeFormsSectionProps, 'answerValue' | 'horizontal'>{}