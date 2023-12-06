import { useContext } from 'react'
import './CardsItem.css'
import { Link } from 'react-router-dom'
import { Context } from '../../context/Context'

const CardsItem = ({ number, name, comment, tag, chat }) => {

    const {getCardName} = useContext(Context)

    return (

        <div className='card-item'>
            <div className='card-item-box'>
                <div className='card-item-box-content-left'>
                    <div className="card-item-box-left">
                        {/* <span>seta</span> */}
                        <span>{number}</span>
                    </div>
                    <div className="card-item-box-center" >
                        <Link to="/cardsession">
                            <h2 onClick={() => getCardName(name)}>{name}</h2>
                        </Link>

                        <p>{comment}</p>
                        <span className='card-item-box-center-span-box'>{tag}</span>
                    </div>
                </div>
                <div className="card-item-box-right">
                    {/* <p>Chat</p> */}
                    <span>{chat}</span>
                </div>
            </div>
        </div>

    )
}


export default CardsItem