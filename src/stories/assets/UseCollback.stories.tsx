import React, {useCallback, useMemo, useState} from 'react';


export default {
    title: 'useCollback demo'
}



export const LickeUseCallback = () => {
    console.log('LickeUseCallback')
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(['js', 'react', 'html', 'css'])

    /*const memoizedAddBook = useMemo(()=> {
        return () => {
            console.log(books)
            const newBook = [...books, 'Angular' + new Date().getTime()]
            setBooks(newBook)
        }
    },[books])*/

    const memoizedAddBook = useCallback(()=> {
            console.log(books)
            const newBook = [...books, 'Angular' + new Date().getTime()]
            setBooks(newBook)
    },[books])


    return <>
        <button onClick={() => {setCounter(counter + 1)}}>+</button>

        {counter}
        <Book  addBook={memoizedAddBook}/>
    </>
}

type BooksSecret ={
    addBook:()=>void
}

const BooksSecret = (props: BooksSecret) => {
    console.log('BOOKS SECRET')
    return <div>
        <button onClick={()=>props.addBook()}>add book</button>
    </div>
}
const Book = React.memo(BooksSecret)

