import './cardFilterTag.css'
import CardFilterTagItem from './CardFilterTagItem/CardFilterTagItem'
import { Context } from '../context/Context'
import { useContext, useState } from 'react'



const CardFilterTag = () => {

    const estadosContext = ["Todos", "Aprimoramento", "Recurso", "Bug", "UX"];





    return (
        <div >
            <div className='card-filter-tag'>
                <div className='card-filter-tag-container'>
                    {estadosContext.map((element => {
                        //Aqui eu to só montando o board com as tags, estou fazendo um map no array ali de cima
                        //e passando o element(que é o map feito no array) pro componente cardFilterTagItem
                        //para renderizar ele. propsTag aqui ta recebendo o map ''feito'' ali de cima.
                        return (
                            <CardFilterTagItem key={element} estadosContext={element}></CardFilterTagItem>
                        )

                    }))}

                </div>




            </div>

        </div>
    )
}

export default CardFilterTag