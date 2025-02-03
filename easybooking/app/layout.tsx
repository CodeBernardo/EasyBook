"use client"

import "../styles/global.css"

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Dev Bernardo Stein" />
        <link rel="icon" href="/eb_favicon.png" />
      </head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
