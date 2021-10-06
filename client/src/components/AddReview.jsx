import React, { useState } from 'react'

const AddReview = () => {
    const [name,setName]=useState()
    const [reviewText,setReviewText]=useState()
    const [Rating,setRating]=useState()
    return (
        <div className="mb-2">
            <form action="">
             <div className="form-row">
                 <div className="form-group col-8">
                     <label htmlFor="name">Name</label>
                     <input 
                     value={name}
                     onChange={e=>setName(e.target.value)}
                     id="name" placeholder="name" className="form-control" type="text" />
                 </div>
                 <div className="form-control col-4">
                     <label htmlFor="rating">Rating</label>

                     <select 
                      value={Rating}
                      onChange={e=>setRating(e.target.value)}
                     id="rating" className="custom select">
                     <option disabled>Rating</option>
                     <option value="1">1</option>
                     <option value="2">2</option>
                     <option value="3">3</option>
                     <option value="4">4</option>
                     <option value="5">5</option>

                     </select>


                 </div>
             </div>
                <label htmlFor="Review">Review</label>
                <textarea 
                 value={reviewText}
                 onChange={e=>setReviewText(e.target.value)}
                id="Review" className="form-control"></textarea>
        
            <button className="btn btn-primary">
                Submit
            </button>
            </form>
        </div>
    )
}

export default AddReview
