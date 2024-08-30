import React from 'react'
import "./NewBooks.css"
export const BookCard=()=>{
    return(
        <div className='BookCard'>
            <img src="" alt="" />
            <div>
                <h3>book</h3>
                <h3>Author</h3>
                <h3>Year of written</h3>
                <h3>book</h3>
            </div>
            <div>
                <button>Buy Now</button>
                <button>View details</button>
            </div>
        </div>
    )
}
const NewBooks = () => {
  return (
    <div className='NewBookCont'>
     <BookCard/>
     <BookCard/>
     <BookCard/>
     <BookCard/>
     <BookCard/>
     <BookCard/>
     <BookCard/>
     <BookCard/>
    </div>
  )
}

export default NewBooks
