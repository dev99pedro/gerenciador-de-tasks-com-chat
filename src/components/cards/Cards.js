
import CardsItem from "./cardsItem/CardsItem"
import { Context } from '../context/Context'
import { useContext, useState, useEffect } from 'react'




const Cards = () => {

    const { cards, icon, reduceItemMost, reduceItemLeast, clicked, estadoUseEffect,filterCards,setFilterCards } = useContext(Context)

    //Aqui está trazendo os dois Reduce do Context, o que traz o que tem o menor valor no ''chat'',  e o que tras o com maior valor no ''chat''
    //E esta fazendo um filter nos cards, que é aquele array de objetos principal, e está checando se o valor do chat
    //do card é igual aos Reduces. No caso está checando qual dos card tem o menor e o maior valor no chat e está filtrando eles
    const redeuceFilterLeast = cards.filter((element) => element.chat === reduceItemLeast)
    const redeuceFilterMost = cards.filter((element) => element.chat === reduceItemMost)

    //Aqui está mudando o valor do estado que está fazendo o map em no componente principal(que é o cards supostamente, mas ele esta sendo atribuido
    //a outro estado, que é o filterCards ali de baixo), e checando se o index do texto do SortUpvates for igual 2, se sim, traz o card com menor valor
    //no chat, e se for igual a 1 traz o card com maior valor do chat,e se não for nenhum, retorna o valor inicial do
    //filterCards que é simplesmente o estado cards 
    useEffect(() => {
        setFilterCards(icon === 2 ? redeuceFilterLeast : icon === 1 ? redeuceFilterMost : cards)
    }, [estadoUseEffect])





    //Aqui retorna todos os cards que possui o mesmo nome da tag clicada.
    //Aqui estou fazendo um filter no estado cards e vendo se o nome da tag do card , é igual ao clicked. O clicked é simplesmente o nome da tag
    //clicada , que está sendo passada como props para a função getTagName do Context e está sendo executada quando clicada
    //na tag do componente CardFilterTagItem. Quando o usuário clica numa tag do CardFilterTagItem, ela compara se o nome dessa tag
    //é igual ao nome da tag do card;

    const filter = cards.filter(element => element.tag === clicked)
    useEffect(() => {
        setFilterCards(filter.length > 0 ? filter : cards)
    }, [clicked])










    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            {filterCards.map((element, index) => (
                <div>
                    <CardsItem
                        key={index}
                        number={element.number}
                        name={element.name}
                        comment={element.comment}
                        tag={element.tag}
                        chat={element.chat}
                    ></CardsItem>
                </div>
            ))}

        </div>
    )
}


export default Cards