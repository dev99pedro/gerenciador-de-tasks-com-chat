import { useContext } from 'react'
import { Images } from '../../imagesExport/imagesExport'
import { Link } from 'react-router-dom'
import './barraTopo.css'
import { useState } from 'react'
import { Context } from '../context/Context'


//Fazer um select na barra que mostra os com mais comentarios e os com menos comentarios


const BarraTopo = () => {
    const [show, setShow] = useState(false)
    const { icon, handleClickSort } = useContext(Context)







    return (
        <div className='container-barra-topo'>
            <div className='container-barra-topo-left-center'>
                <div className='barra-topo-left'>
                    <img src={Images.Lamp} className='icone-lamp' alt='lampada'></img>
                </div>
                <div className='barra-topo-center'>
                    <div className='barra-topo-center-texto' onClick={() => setShow(!show)}>
                        <span className='span-barra-topo'>Sort by : </span>
                        <p className='texto-barra-topo'> Most Upvates </p>
                        <span className='span-barra-topo' style={{ fontSize: '20px' }}> &#129063;</span>
                    </div>

                    {show ? <div className='barra-topo-center-show' >
                        <div className='barra-topo-center-show-texto'>
                            <p onClick={() => handleClickSort(1)}>Most Comments</p>
                            <img style={{ display: icon === 1 ? 'flex' : 'none' }} className='check' src={Images.Check}></img>
                        </div>

                        <span className='traço'></span>
                        <div className='barra-topo-center-show-texto'>
                            <p onClick={() => handleClickSort(2)}>Least Comments</p>
                            <img style={{ display: icon === 2 ? 'flex' : 'none' }} className='check' src={Images.Check}></img>
                        </div>


                    </div> : ''}

                </div>
            </div>
            <div className="container-barra-topo-right">
                <Link to="/addfeed">
                    <button className='btn-barra-topo'>+ Add a feedback</button>
                </Link>
            </div>

        </div>
    )
}

export default BarraTopo