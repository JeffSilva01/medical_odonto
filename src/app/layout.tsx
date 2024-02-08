import { PT_Sans_Caption as PTSansCaption, Poppins } from 'next/font/google'
import { GoogleAnalytics } from '@next/third-parties/google'
import './globals.css'

const poppins = Poppins({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
})

const ptSansCaption = PTSansCaption({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-ptSansCaption',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      className={`${poppins.variable} ${ptSansCaption.variable}`}
      lang="pt-BR"
    >
      <body>{children}</body>
      <GoogleAnalytics gaId="GTM-NL2SQWS9" />
    </html>
  )
}
