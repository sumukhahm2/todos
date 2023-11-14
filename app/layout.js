'use client'

import HeaderNav from "@/components/HeaderNav"
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { useEffect } from "react";
import { Provider } from "react-redux";
import store from "@/components/reduxstore/reduxstore";
import Head from "next/head";

export default function RootLayout({ children }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap');  
}, []);
  return (
    <html lang="en">
      <Head>
      <script src="https://kit.fontawesome.com/95fa7cbfe5.js" crossorigin="anonymous"></script>
   </Head>
      <body >
        <header>
           <HeaderNav/>  
          
        </header>
        <main>
          <Provider store={store}>
          {children}
          </Provider>
        </main>
      </body>
    </html> 
  )
}
