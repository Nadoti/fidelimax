export interface ItensArray {
  value: number;
  description: string
}

export interface QuestionsItensProps {
  answerValue: number | string;
  content: string;
  mandatory: boolean;
  typeQuestion: number;
  itens: ItensArray[]
  horizontal: boolean;
}

export interface QuestionsProps {
  error: string;
  itens: QuestionsItensProps[];
  warning: string;
}

export interface TypeOfQuestionsProps {
  item: QuestionsItensProps
  
}