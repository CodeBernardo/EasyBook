import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Easy Booking",
  description:
    "Agendamento simples e eficiente para pequenas empresas, como barbearias, salões e outros serviços.",
  keywords:
    "agendamento, fácil, serviços, pequenas empresas, barbearias, salões, gerenciamento, mei",
  themeColor: "#ffffff",
  openGraph: {
    title: "Easy Booking",
    description: "Agendamento simples e eficiente para pequenas empresas",
    url: "https://www.seusite.com",
    siteName: "Easy Booking",
    images: [
      {
        url: "/path/to/your/image.jpg",
        width: 800,
        height: 600,
        alt: "Imagem do serviço de agendamento"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Easy Booking",
    description: "Agendamento simples e eficiente para pequenas empresas"
  }
}

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
      </head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
