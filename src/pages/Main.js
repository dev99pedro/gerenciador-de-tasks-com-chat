import Cards from "../components/cards/Cards"
import CardFilterTag from '../components/cardFilterTag/CardFilterTag'
import { useState } from "react"
import BarraTopo from "../components/barraTopo/barraTopo"
import { Context } from "../components/context/Context"
import { useContext } from "react"
import './Main.css'



const Main = () => {

    const { clickConsoleLog } = useContext(Context)



    return (
        <div className="main-container">
            <CardFilterTag clickConsoleLog={clickConsoleLog} ></CardFilterTag>
            <div style={{ flexDirection: 'column' ,  }}>
                <BarraTopo></BarraTopo>
                <Cards></Cards>
            </div>
        </div>
    )
}

export default Main