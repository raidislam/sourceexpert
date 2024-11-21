import Header from "@/components/header"
import "./globals.css"
import Footer from "@/components/footer"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <title>SourceExpert</title>
        <link rel="icon" href="favicon.png" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </head>
      <body>
        {/* <Header /> */}
        <main>{children}</main> {/* Main content goes here */}
        <Footer />
      </body>
    </html>
  )
}
