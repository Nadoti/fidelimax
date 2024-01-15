import { Header } from "@/components/Header"
import { FormSatisfactionSurvey } from "@/components/question-satisfaction/FormSatisfactionSurvey"
import { QuestionsProps } from "@/types/data-questions-types"

async function getQuestions() {
  const response = await fetch('https://fdlmx-backgrounds.sfo3.digitaloceanspaces.com/front-test/survey.json ')
  return response.json()
}

export default async function QuestionSatisfaction() {
  
  const dataQuestions:QuestionsProps = await getQuestions()
  
  return (
    <main className='min-h-screen bg-gray-lightmode-200'>
      <Header />
      <div className='h-[244px] pl-4 sm:pl-24 bg-gray-lightmode-800'>
        <p className='pt-4 text-xs text-gray-400'>Pesquisa de Satisfação</p>
      </div>
      <FormSatisfactionSurvey dataQuestions={dataQuestions}/>
    </main>
  )
}