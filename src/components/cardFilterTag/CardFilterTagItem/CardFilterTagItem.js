import { Context } from "../../context/Context"
import { useContext } from "react"




const CardFilterTagItem = ({ estadosContext }) => {//o propsTag aqui é todos os elementos do array
    //do componente anterior que é o CardFilterTag, no caso esta retornando todo o array com os valores:
    //"ALL", "UX", "Enhacement", "Bug", "Feature"


    //aqui estou trazendo a função do UseContext e estou
    //atribuindo ao Onclick ali de baixo, que serve para quando clicar
    //passar o propTag(que no caso é algum dos elementos do array ali de cima), como parametro
    const { getTagName } = useContext(Context)










    return (
        <div>
            <div className="card-filter-tag-container">
                <div className="card-filter-tag-box" onClick={() => getTagName(estadosContext)}>
                    <h2 >{estadosContext}</h2>
                </div>
            </div>
        </div>
    )
}

export default CardFilterTagItem