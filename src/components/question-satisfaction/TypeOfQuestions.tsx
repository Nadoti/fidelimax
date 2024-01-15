import { QuestionsItensProps, TypeOfQuestionsProps } from "@/types/data-questions-types"
import { ReactNode } from "react"
import { StarRating } from "./StarRating"
import { RadiosQuestionsSatisfaction } from "./RadiosQuestionsSatisfaction"
import { Textarea } from "./Textarea"
import { Select } from "./Select"
import { RadiosQuestionsChoices } from "./RadiosQuestionsChoices"
import { MultipleChoicesQuestions } from "./MultipleChoicesQuestions"

interface TypesQuestionsProps  {
  [id: number]: ReactNode
}


export function TypeOfQuestions(typeQuestion: TypeOfQuestionsProps) {
  
  const types:TypesQuestionsProps = {
    1: <StarRating answerValue={typeQuestion.item.answerValue} title={typeQuestion.item.content}/>,
    2: <RadiosQuestionsSatisfaction answerValue={typeQuestion.item.answerValue} title={typeQuestion.item.content}/>,
    3: <Textarea answerValue={typeQuestion.item.answerValue} title={typeQuestion.item.content}/>,
    4: <Select options={typeQuestion.item.itens} title={typeQuestion.item.content}/>,
    5: <RadiosQuestionsChoices answerValue={typeQuestion.item.answerValue}  options={typeQuestion.item.itens} title={typeQuestion.item.content}/>,
    6: <MultipleChoicesQuestions options={typeQuestion.item.itens}  horizontal={typeQuestion.item.horizontal} title={typeQuestion.item.content}/>,
  }
  
  return types[typeQuestion.item.typeQuestion]
}