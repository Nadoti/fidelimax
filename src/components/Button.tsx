


export function Button({ children, onClick }: {children: string, onClick: () => void }) {


  return (
    <button 
      className='inline-block w-fit py-3 sm:py-5 px-8 sm:px-16 rounded-full bg-yellow-lightmode-600 text-black font-bold' onClick={onClick}
    >
      {children}
    </button>
  )
}