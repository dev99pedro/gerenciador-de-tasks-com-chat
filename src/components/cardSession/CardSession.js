import { Context } from '../context/Context'
import { useContext, useState, useEffect } from 'react'
import CardsItem from '../cards/cardsItem/CardsItem'
import { Images } from '../../imagesExport/imagesExport'
import './CardSession.css'



const CardSession = () => {
    const { inputValue, nameCard, filterCards, setFilterCards } = useContext(Context)

    const dataUserComments = [
        {
            avatar: Images.Avatar2, nome: 'Pedro', user: '@pedro.ascari', reply: false, comment: 'This would be awesome! It would be so helpful to see an oveweview of my code in a way that majes it easy to spot where things could be improved.',

        },

    ]
    const [dataUser, setDataUser] = useState(dataUserComments)



    //faz o map dos objetos
    const dataComments = [

        {
            comentario: '', id: 0, avatar: Images.Avatar1, nome: 'Jaqueline Vaz', user: '@kaj_vaz', reply: false, comment: 'Isso seria incrível! Seria muito útil ter uma visão geral do meu código de uma forma que facilitasse a identificação de onde as coisas poderiam ser melhoradas.',

        },
        {
            comentario: '', id: 1, avatar: Images.Avatar3, nome: 'Nelson da Rosa', user: '@nelsino', reply: false, comment: 'Sim, isso seria ótimo! Adoraria ver insights mais profundos do meu código.',

        },
        {
            comentario: '', id: 3, avatar: Images.Avatar5, nome: 'Robson Silva', user: '@rb_hd', reply: false, comment: 'Acho que seria muito útil para pessoas com muita sensibilidade nos olhos. Eu mesmo uso bastante o dark mode na minha máquina para navegar em sites.',

        },
        {
            comentario: '', id: 4, avatar: Images.Avatar6, nome: 'Geisa Rodrigues', user: '@geisa_rod', reply: false, comment: 'Gostaria de sujerir que possamos fazer as filtraçãos das tags por cores também, assim ficaria mais visual e bem mais atrativo de fazer as filtragens!',

        },
        {
            comentario: '', id: 5, avatar: Images.Avatar7, nome: 'Caroline Rocha', user: '@carol_97', reply: false, comment: 'Concordo com a geisa, acho que a questão das cores faria ficar muito legal para quem estiver pesquisando e precisa filtrar de maneira mais rápida.',

        },
        {
            comentario: '', id: 6, avatar: Images.Avatar3, nome: 'Nelson da Rosa', user: '@nelsino', reply: false, comment: 'Já reportei o problema para o squad de desenvolvimento, estou no aguardo da previsão que do ajuste!',

        },
        {
            comentario: '', id: 7, avatar: Images.Avatar1, nome: 'Jaqueline Vaz', user: '@kaj_vaz', reply: false, comment: 'Poderiam ver a questão do filtro, não está sendo aplicado nas imagens. Obrigada!',

        },
        {
            comentario: '', id: 8, avatar: Images.Avatar5, nome: 'Robson Silva', user: '@rb_hd', reply: false, comment: 'Seria muito legal se conseguíssemos ver o que as outras pessoas estão postando, como comentários, resoluções ou até duvidas, acho que isso iria melhoraria a comunicação entre os times.',

        },
        {
            comentario: '', id: 9, avatar: Images.Avatar6, nome: 'Geisa Rodrigues', user: '@geisa_rod', reply: false, comment: 'Será que é possível adiconarmos ítens nas tags?',

        },
        {
            comentario: '', id: 10, avatar: Images.Avatar2, nome: 'Pedro', user: '@pedro.ascari', reply: false, comment: 'Aqui acho que seria legal trazer essa opção para as explicações ficarem mais ilustrativas nos comentários.',

        },

      




    ]
    //adiciona esse array de objetos ai de cima, dentro desse estado
    //essa const com esse slice, está trazendo apenas os dois primeiros objetos do array ali de cima, não achei um jeito melhor de fazer isso,
    //mas é pra cada card clicado na pagina inicial ter trazer apenas algum dos comentarios dos usuarios, e nao todos
    // const arrayFiltradoDoisPrimeiros = dataComments.slice(0, 3)
    const [userComment, setUserComment] = useState(dataComments)







    //pega o valor que é digitado no input do usuario
    const [valor, setValor] = useState()
    const handleChange = (e) => {
        setValor(e.target.value)

    }




    //quando o usuario clica no Post Comments, no caso o handleClick, ele seta o estado [valor], que é o estado que pega o valor que o usuario digitou no input
    //dentro do setAdd. Então o {add} recebe o valor que é digitado no input
    //faz a mesma coisa na versao do Usuario
    const [add, setAdd] = useState()

    const [addUser, setAddUser] = useState()
    const handleClick = (e) => {
        setAdd(valor)
        setAddUser(valor)





    }




    //Esse usseEffect, ta trazendo somente o card selecionado da página anterior, ele ta fazendo um filter
    //que filtra apenas o card com o mesmo nome clicado, ou seja, para o estado fazer um map
    //apenas do card que tem o nome igual ao nameCard. O nameCard simplesmente é o nome do titulo do card

    const [hiddenMap, setHiddenMap] = useState(true)
    useEffect(() => {
        const filter = filterCards.filter(element => element.name === nameCard)
        filter.map((element) => {
            if (element.name === 'Relatórios mais abrangentes') {

                const comentariosFiltrados = dataComments.slice(0, 2)
                setUserComment(comentariosFiltrados)
            }
            if (element.name === 'Adicionar opção de dark  mode') {

                const comentariosFiltrados = dataComments.slice(2, 3)
                setUserComment(comentariosFiltrados)
            }
            if (element.name === 'Adicionar tag para solução') {

                const comentariosFiltrados = dataComments.slice(3, 5)
                setUserComment(comentariosFiltrados)
            }
            if (element.name === 'Botão de contato não está funcionando') {

                const comentariosFiltrados = dataComments.slice(5, 6)
                setUserComment(comentariosFiltrados)
            }
            if (element.name === 'Preview de imagem não está carregando') {

                const comentariosFiltrados = dataComments.slice(6, 7)
                setUserComment(comentariosFiltrados)
            }
            if (element.name === 'Conseguir seguir as outras pessoas') {

                const comentariosFiltrados = dataComments.slice(7, 8)
                setUserComment(comentariosFiltrados)
            }
            if (element.name === 'Adicionar ícone as tags') {

                const comentariosFiltrados = dataComments.slice(8, 9)
                setUserComment(comentariosFiltrados)
            }
            if (element.name === 'Adicionar imagem na página de feedback') {

                const comentariosFiltrados = dataComments.slice(9, 10)
                setUserComment(comentariosFiltrados)
            }


            if (element.name === inputValue.title) {

                const comentariosFiltrados = dataComments.slice(10, 11)
                setUserComment(comentariosFiltrados)
            }


        })
        setFilterCards(filter)
    }, [])





    //aqui é a funçao que faz o usuario responder a algum comnetario, quando ele clica no texto Reply
    //primerio ele faz um map do userComment que no caso é aquele array de objetos la de cima.
    //depois ele checa se o index do reply é igual index do elemento clicado
    //se for igual ele retorna todo o objeto com o {...element}, e verifica se reply esta como false
    //se estiver como false, ele retorna todo o objeto de novo com o {...element}, mas agora faz o reply ser true
    //se o reply for true, ele mostra a tela de responder comnetarios, se nao for, ele esconde
    //!element.reply faz quando o usuario clicar no reply, ficar true e depois ficar false
    //depois retorna todo essa variavel dentro do SetUserComment, que no caso é o estado que armaneza o array de objetos la de cima
    const handleReply = (index) => {


        const newData = userComment.map((element, i) => {
            if (i === index) {
                if ({ ...element, reply: false }) {
                    return { ...element, reply: !element.reply };
                }
            }
            return element
        });
        setUserComment(newData);
    }


    //Mesma coisa que o de cima, mostra o botao de postar comentario e escrever o comentario, mas na versao do usuario
    const handleReplyUser = (index) => {
        const newDataUser = dataUser.map((element, i) => {
            if (i === 0) {
                return { ...element, reply: !element.reply }
            }
            return element
        })
        setDataUser(newDataUser)
    }








    const handleClickReply = (index) => {
        const newMap = userComment.map((element, i) => {
            if (index === i) {
                return { ...element, comentario: valor, reply: false }
            }
            return element
        })
        setUserComment(newMap)
    };





    const deleterCommentReply = (index) => {

        const nova = userComment.map((element, i) => {

            if (index === i) {

                return { ...element, comentario: '' }
            }

            return element


        })

        setUserComment(nova)
    }





    return (
        <div>
            {filterCards.map((element, index) => {
                return (
                    <CardsItem
                        key={index}
                        number={element.number}
                        name={element.name}
                        comment={element.comment}
                        tag={element.tag}
                        chat={element.chat}
                    ></CardsItem>
                )
            })}

            <div className='container-card-coment-session'>
                <div className='card-coments-session' >

                    <div>
                        {userComment.map((element, index) => {
                            return (
                                <div key={index}>
                                    <div className='card-coments-session-infos'>
                                        <div className='card-coments-session-infos-left'>
                                            <div className='card-coments-session-infos-img'>
                                                <img src={element.avatar} width={'30px'} height={'auto'} />
                                            </div>
                                            <div className='card-coments-session-infos-text'>
                                                <h3>{element.nome}</h3>
                                                <span>{element.user}</span>
                                            </div>
                                        </div>

                                        <div className='card-coments-session-infos-reply'>
                                            <p onClick={() => handleReply(index)} >Reply</p>
                                        </div>
                                    </div>


                                    <div className='text-card-session'>
                                        <p>{element.comment}</p>
                                    </div>





                                    <div className='comment-add-container'>

                                        {element.comentario.length > 0 ? <div style={{ paddingTop: '40px', marginTop: '20px', borderTop: '2px solid gray', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                            <div style={{ display: 'flex', flexDirection: 'column' }}>

                                                <div className='card-coments-session-infos'>
                                                    <div className='card-coments-session-infos-left'>
                                                        <div className='card-coments-session-infos-img'>
                                                            <img src={Images.Avatar2} width={'30px'} height={'auto'} />
                                                        </div>
                                                        <div className='card-coments-session-infos-text'>
                                                            <h3>Pedro</h3>
                                                            <span>@pedro.ascari</span>
                                                        </div>
                                                    </div>
                                                </div>


                                                <div className='text-card-session'>
                                                    <p>{element.comentario}</p>
                                                </div>
                                            </div>
                                            <div>
                                                <img className='img-trash' src={Images.Trash} width={'16px'} height={'auto'} onClick={() => deleterCommentReply(index)} />
                                            </div>
                                        </div> : ''}
                                    </div>











                                    {element.reply && <div className='reply-content'>
                                        <div className='add-coment-input'>
                                            <input onChange={handleChange} placeholder='Digite seu comentário aqui' type='text'></input>
                                        </div>
                                        <div className='btn-add-coment'>
                                            <button className='btn-add reply' onClick={() => handleClickReply(index)} >
                                                Post comment
                                            </button>
                                        </div>
                                    </div>}

                                    <hr></hr>
                                </div>
                            )
                        })}

                    </div>




                    {add && dataUser.map((element, index) => {

                        return (
                            <div key={index}>
                                <div className='card-coments-session-infos'>
                                    <div className='card-coments-session-infos-left'>
                                        <div className='card-coments-session-infos-img'>
                                            <img src={element.avatar} width={'30px'} height={'auto'} />
                                        </div>
                                        <div className='card-coments-session-infos-text'>
                                            <h3>{element.nome}</h3>
                                            <span>{element.user}</span>
                                        </div>
                                    </div>

                                    <div className='card-coments-session-infos-reply'>
                                        <p onClick={() => handleReplyUser(index)} >Reply</p>
                                    </div>
                                </div>


                                <div className='comment-add-container'>
                                    <img className='img-trash' onClick={() => setAdd(false)} width={'16px'} src={Images.Trash} height={'auto'} />
                                    <div className='text-add'>
                                        {addUser}
                                    </div>
                                </div>


                                {element.reply && <div className='reply-content'>
                                    <div className='add-coment-input'>
                                        <input onChange={handleChange} placeholder='Digite seu comentário aqui' type='text'></input>
                                    </div>
                                    <div className='btn-add-coment'>
                                        <button className='btn-add'>
                                            Post comment
                                        </button>
                                    </div>
                                </div>}
                            </div>
                        )
                    })}



                </div>

            </div>


            <div className='container-add-coments'>
                <div className='card-coments-session' >
                    <div className='add-coments-text'>
                        <h2>Add Comment</h2>
                    </div>

                    <div className='add-coment-input'>
                        <input onChange={handleChange} placeholder='Digite seu comentário aqui' type='text'></input>
                    </div>
                    <div className='btn-add-coment'>
                        <button className='btn-add' onClick={handleClick}>
                            Post comment
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardSession