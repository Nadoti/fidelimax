'use client'

import { QuestionsProps } from "@/types/data-questions-types"
import { sendFakePostApi } from "@/services/send-fake-post"
import { sendErrorApi } from "@/services/send-error"
import { sendSuccessApi } from "@/services/send-success"
import { useDataFormContext } from "@/context/formContext"
import { TypeOfQuestions } from "./TypeOfQuestions"
import { ActionTypesError } from "@/reducer/form-reducer-error"
import { Button } from "../Button"

export function FormSatisfactionSurvey({ dataQuestions }: { dataQuestions: QuestionsProps }) {
  const { state, dispatchError } = useDataFormContext()

  async function sendFake() {
    const { multipleChoiceOptions, store, multipleChoiceOptionsThree} = state
    
    if(!multipleChoiceOptions.length) {
      dispatchError({ type: ActionTypesError.MULTIPLE_CHOICE_OPTIONS_ERROR})
      return
    }

    if(!store) {
      dispatchError({ type: ActionTypesError.STORE_ERROR})
      return
    }
    
    if(!multipleChoiceOptionsThree.length) {
      dispatchError({ type: ActionTypesError.MULTIPLE_CHOICE_OPTIONS_THREE_ERROR})
      return
    }

    await sendFakePostApi(FormSatisfactionSurvey)
  }
  
  async function sendError() {
    await sendErrorApi()
  }

  async function sendSuccess() {
    await sendSuccessApi()
  }

  return (
    <div className="w-full max-w-[648px] flex flex-col mx-auto relative bottom-48">
      <h1 className="text-2xl sm:text-[40px] mb-3 sm:mb-6 pl-4 sm:pl-0 font-bold text-white">Pesquisa de Satisfação</h1>
      <div className="w-full py-4 px-4 sm:p-8 rounded-2xl bg-white">
        {dataQuestions?.itens.map((item, index) => (
          <section key={index} className="mb-10">
            <TypeOfQuestions item={item}/>
          </section>
        ))}
        <div className="flex items-center flex-wrap gap-4">
          <Button onClick={sendFake}>
            Enviar Fake Post
          </Button>
          <Button onClick={sendError}>
            Enviar Erro
          </Button>
          <Button onClick={sendSuccess}>
            Enviar Sucesso
          </Button>
          
          
        </div>
      </div>
    </div>
  )
}