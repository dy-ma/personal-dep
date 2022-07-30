import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import ContentBox from "./components/ContentBox"
import Name from "./components/Name"
import './App.css'



function App() {
    return (
        <div className="App">
            <Name name="< Dylan M Ang />"/>
            <ContentBox/>
        </div>
    )
}

export default App
