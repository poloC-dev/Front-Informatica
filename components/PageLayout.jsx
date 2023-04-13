import Head from 'next/head'
import Link from "next/link";
import React from 'react'
import { Container } from '@mui/material';

export default function PageLayout ({children,title}){
  return (
    <>
        <Head>
            <title>{title}</title>
            <meta name="descripcion" content='pagina oficial '/>
            <link rel='icon' href='/favicon.ico'/>
        </Head>
        <Container>
            <header>
                    <Link href="/">Pagina principal</Link>
                    <Link href="/toners">Tabla de toners</Link> 
            </header>
            <main>
                {children}
            </main>
            <footer>
                @Informatica Hospital San Roque.
            </footer>
        </Container>
    </>
  )
}

