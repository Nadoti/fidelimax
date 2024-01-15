import type { Metadata } from 'next'
import { Poppins  } from 'next/font/google'
import './globals.css'
import 'sweetalert2/src/sweetalert2.scss'
import { FormContextProvider } from '@/context/formContext';

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});


export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <FormContextProvider>
          {children}
        </FormContextProvider>
      </body>
    </html>
  )
}
