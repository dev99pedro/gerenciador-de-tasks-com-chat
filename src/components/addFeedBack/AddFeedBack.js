import './AddFeedBack.css'
import { Context } from '../context/Context'
import { useContext, } from 'react'
import { Link } from 'react-router-dom'

const AddFeedBack = () => {

    const { inputValue, AddFeedBack, getInputValue, error } = useContext(Context)


    console.log(error)





    return (
        <div className="container-add-feedback">
            <div className="add-feedback">
                <div className="create-new-feedback">
                    <h2>Crate a new Feedback</h2>
                </div>
                <div className="feedback-title">
                    <p className="feedback-text">
                        Feedback Title
                    </p>
                    <span className="feedback-span">Add a short,descriptve headline</span>
                    <div className="input-feedback-title">
                        <input name="title" value={inputValue.title} type="text" onChange={getInputValue} ></input>
                    </div>

                </div>

                <div className="feedback-category">
                    <p className="feedback-text">
                        Category
                    </p>
                    <span className="feedback-span">Choose a category for your feedback</span>
                    <div className="input-feedback-category">
                        <select name="category" className='input-feedback-details' value={inputValue.category} onChange={getInputValue} >
                            <option>UX</option>
                            <option>Recurso</option>
                            <option>Bug</option>
                            <option>Aprimoramento</option>
                        </select>
                    </div>
                </div>

                <div className="feedback-details">
                    <p className="feedback-text">
                        Feedback Detal
                    </p>
                    <span className="feedback-span">includ any specif lorem lorem lorem lorem lorem</span>
                    <div className="input-feedback-details">
                        <input type="text" name="details" value={inputValue.details} onChange={getInputValue} ></input>
                    </div>
                </div>
                <div className='error'>
                    {error ? <p className='text-error'>
                        Todos os campos devem ser preenchidos.
                    </p> : ''}
                </div>
                <div className="feedback-button">
                    <Link to="/">
                        <button className="btn-add">Cancel</button>
                    </Link>
                    {inputValue.title.length < 3 || inputValue.details.length < 5 ? (
                        <button className="btn-cancel" onClick={AddFeedBack}>Add Feedback</button>
                    ) : (
                        <Link to="/">
                            <button className="btn-cancel" onClick={AddFeedBack}>Add Feedback</button>
                        </Link>
                    )}

                </div>

            </div>
        </div>
    )
}

export default AddFeedBack