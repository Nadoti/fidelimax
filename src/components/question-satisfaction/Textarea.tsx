import { DataAnswerValueTitleProps } from "@/types/data-type-form-section-types";


export function Textarea({ answerValue, title }: DataAnswerValueTitleProps) {
  
  return (
    <label htmlFor="" className="flex flex-col gap-4 text-sm text-gray-lightmode-500">
      {title}
      <textarea 
        className="w-full p-4 border border-gray-lightmode-400 rounded-2xl resize-none outline-none" 
        cols={30} 
        rows={3} 
        placeholder="Digite aqui..."
        value={answerValue}
      />

    </label>
  )
}