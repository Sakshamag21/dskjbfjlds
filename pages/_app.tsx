import '../styles/globals.css'
import type { AppProps } from 'next/app'
// import { RecoilRoot } from "recoil";
// import { BrowserRouter, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil'
import Verify from '../pages/verify';
import * as React from 'react'
import { HashRouter as Router, Route, Link, Routes } from 'react-router-dom'
import { render } from 'react-dom';
import Home1 from '.';
import type { NextPage } from 'next'
import {
  redirect as DomRedirect,

} from "react-router-dom";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    
    <RecoilRoot>
      <Component {...pageProps} />
      
    
      
        
    </RecoilRoot>
  
  )
}

export default MyApp
