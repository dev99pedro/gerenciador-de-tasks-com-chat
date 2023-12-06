import { createContext, useState } from "react";
import { estadosContext } from "../cardFilterTag/CardFilterTag";
import { useEffect } from "react";

export const Context = createContext({})






export const ContextProvider = ({ children }) => {




    //Array de objetos com as propriedades dos Cards
    const cardsItemsConst = [
        { number: "23", name: "Relatórios mais abrangentes", comment: "Seria ótimo ver detalhes das soluções.", tag: "Recurso", chat: 2 },
        { number: "12", name: "Adicionar opção de dark  mode", comment: "Ajudaria pessoas com sensibilidade à luz e que preferem o dark mode.", tag: "UX", chat: 1 },
        { number: "5", name: "Adicionar tag para solução", comment: "Mais fácil de procurar soluções com base em uma tag específica.", tag: "Aprimoramento", chat: 2 },
        { number: "12", name: "Botão de contato não está funcionando", comment: "Quando clica no botão de contato, ele não deleta o contato da página.", tag: "Bug", chat: 1 },
        { number: "17", name: "Preview de imagem não está carregando", comment: "Quando você aplica o filtro , não é possível ver as imagens.", tag: "Bug", chat: 1 },
        { number: "11", name: "Conseguir seguir as outras pessoas", comment: "Fique atualizado sobre comentários e soluções postadas por outras pessoas.", tag: "Recurso", chat: 1 },
        { number: "13", name: "Adicionar ícone as tags", comment: "Isso faria uma experiência do usuário melhor.", tag: "UX", chat: 1 },
        { number: "3", name: "Adicionar imagem na página de feedback", comment: "Imagens possam aparecer nos comentários dos feedbacks e nas soluções.", tag: "Aprimoramento", chat: 1 },







    ];
    //Estado principal que está sendo mapeado os Cards do inicio
    const [estado, setEstado] = useState(cardsItemsConst);

    //Estado principal que está sendo mapeado os Cards do inicio
    const [cards, setCards] = useState(cardsItemsConst)



    //Aqui eu estou atribuindo o estado principal cards, que é o estado que possui o array de objetos aquele do Context,
    //a um novo estado chamado filterCards
    const [filterCards, setFilterCards] = useState(cards)












    //Funcao que pega o card que tem o menor valor no chat dos cards
    const reduceItemLeast = cardsItemsConst.reduce((accumulator, item) => {
        return item.chat < accumulator ? item.chat : accumulator
    }, Infinity)

    const reduceItemMost = cardsItemsConst.reduce((accumulator, item) => {
        return item.chat > accumulator ? item.chat : accumulator
    }, 0)





    //Estado que seta o true ou false para aparecer o icone no componente BarraDoTopo, o V
    const [icon, setIcon] = useState()

    //Apenas um estado para setar true/false quando ele é clicado, que está sendo chamado na mesma função do estado de cima ^
    const [estadoUseEffect, setEstadoUseEffect] = useState(false)

    //Funcao que ao clicar nos textos do SortUpvates do componente BarraDoTopo pega o index do texto clicado
    //E o index está sendo trazido pela própria função de clique, pelo parametro dentro () dela
    //O SetIcon está recebendo o index do elemento que esta sendo clicado lá, no caso 1, ou 2, e está comparando com o index do elemento clicao
    // trazido pela função de clique
    const handleClickSort = (index) => {

        setIcon(index)
        setEstadoUseEffect(!estadoUseEffect)
    }






    const [nameCard, setNameCard] = useState()
    //Essa função getCardName está sendo chamado no componente CardsItem, que é o componente que monta os Cards
    //Ela esta sendo chamada como um onclick, para quando o usuario clicar no nome, ser recebido o nome de volta
    //Então o index dela, está sendo passada lá como o nome do card clicado, então esse index é o nome do card que foi clicado
    //Dai estou apenas atribuindo o estado ali de cima nameCard, com o nome do card que está sendo recebido nesse index
    const getCardName = (index) => {
        setNameCard(index)
    }






    const [clicked, setClicked] = useState(null)
    //Funçao que pega o nome da tag clicada, que esta sendo passada
    //para o componente: CardFilterTagItem
    //esse value é o nome da tag que esta sendo passada como
    //parametro para a função que esta sendo chamada la. Quando a pessoa clica na tag, um onclick dessa função é chamada, e passada a tag
    //como parametro
    const getTagName = (value) => {
        setClicked(value)
    }









    //Esse aqui é o estado que lida com as informações que o usuário vai digitar para adicionar um novo Card na tela inicial,
    //no botão AddFeedback
    const [inputValue, setInputValue] = useState({
        title: '',
        category: 'UX',
        details: ''
    })

    //Está sendo chamada no AddFeedBack num Onchange, ou seja está sendo chamado quando o usuário digita nos 2 inputs que tem lá.
    const getInputValue = (e) => {
        const { name, value } = e.target //Aquele método de desconstrução para ficar menos linha de código
        //Basicamente é a mesma coisa que fazer ''e.target.value'' e ''e.target.name'' só que de um jeito mais abreviado

        setInputValue((prev) => {

            const newPrev = { ...prev, [name]: value }  //Aqui está pegando todo o valor anterior do estado inputValue ali de cima
            //No caso está pegando ''title,category,details'' sem nenhum valor, igual ta ali no estado de cima
            //E está atribuindo um valor novo a essas propriedades do estado, o valor digitado no input no caso
            //O [name] aqui é um jeito mais fácil de escrever ''e.target.name'' daria na mesma coisa, e ele é simplesmente o input 
            //Feedback Title e Feedback Detal do componente AddFeedback, que são os inputs onde o usuário vai digitar as informações que ele quer
            //adicionar no card novo. E o value é simplesmente como se fosse um ''e.target.value''. Então o que o const newPrev está fazendo
            //é pegando o valor  do estado inputValue e suas propriedades vazias, e adicionando nelas  o valor(Value) digitado em seu próprio Input[name]

            return newPrev
        })

    }





    //aqui é o objeto que vai ser adicionado no Array de objetos ali de cima
    //Isso equivale ao card novo  que vai ser adicionado na tela principal quando o usuário clicar em AddFeedBack
    let novoObj = { number: "17", name: inputValue.title, comment: inputValue.details, tag: inputValue.category, chat: 0 }

    //Função que está sendo chamada com um onclick no componente AddFeedBack. Quando o usuário clica para adicionar o feedback com 
    //os valores do input já digitados

    const [error, setError] = useState(false)

    

    const AddFeedBack = () => {
        if (inputValue.title.length < 3 || inputValue.details.length < 5) {
            setError(true)
    
        } else {
            setError(false)
            setCards((prev) => [...prev, novoObj])
           
        }
        //Aqui está simplesmente pegando o valor já existente de cards, que no caso é o cardsItemsConst, que equivale a todos 
        //aqueles objetos ali de cima
        //E está adicionando a variavel novoObj, que é o objeto que vai ser adicionado ali no array 
        
    }





    return (
        <Context.Provider value={{  error, setFilterCards, filterCards, setCards, cards, setInputValue, AddFeedBack, inputValue, getInputValue, setNameCard, nameCard, getCardName, icon, setIcon, handleClickSort, reduceItemMost, reduceItemLeast, estado, setEstado, cardsItemsConst, getTagName, clicked, setClicked, estadoUseEffect }}>
            {children}
        </Context.Provider>
    )
}