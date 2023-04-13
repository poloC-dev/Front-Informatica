import Head from 'next/head'
import React from 'react'
import { Container } from '@mui/material';
import Navbar from "../components/NavBar"
import Footer from "../components/Footer"

export default function PageLayout ({children,title}){
  return (
    <>
        <Head>
            <title>{title}</title>
            <meta name="descripcion" content='pagina oficial '/>
            <link rel='icon' href='/favicon.ico'/>
        </Head>
        <header>
            <nav>
                <Navbar/>
            </nav>
        </header>
        <Container>
            <main>
                {children}
            </main>
        </Container>
        <Footer/>
    </>
  )
}

