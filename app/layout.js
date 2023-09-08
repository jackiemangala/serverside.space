import './globals.css'


export const metadata = {
  title: 'serverside.space',
  description: '#1 Best Serverside',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
