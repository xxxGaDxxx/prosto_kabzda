import React, {useCallback, useMemo, useState} from 'react';


export default {
    title: 'useMemo demo'
}


export const DifficultCountingExample = () => {
    const [a, setA] = useState<number>(5)
    const [b, setB] = useState<number>(5)

    let resultA = 1
    let resultB = 1
    console.log(111)

    resultA = useMemo(() => {
        console.log('memo')
        let tempResultA = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0

            while (fake < 10000000) {
                fake++
                const fakkeValue = Math.random()
            }
            tempResultA = tempResultA * i //resultA *= i
        }
        return tempResultA
    }, [a])


    for (let i = 1; i <= b; i++) {
        resultB = resultB * i //resultA *= i
    }

    return <>
        <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
        <input value={b} onChange={(e) => setB(Number(e.currentTarget.value))}/>

        <hr/>
        <div>
            Result for a:{resultA}
        </div>
        <div>
            Result for b:{resultB}
        </div>

    </>


}


const UsersSecret = (props: { users: Array<string> }) => {
    console.log('USERS SECRET')
    return <div>{
        props.users.map((u, i) => <div key={i}>{u}</div>)

    }</div>
}
const Users = React.memo(UsersSecret)


export const HelpsToReactMemoExample = () => {
    console.log('HelpsToReactMemoExample')
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['wlad', 'margo', 'pascha', 'nady'])

    const newArray = useMemo(() => {
        const newArray = users.filter(u => u.toLocaleLowerCase().indexOf('a') > -1)
        return newArray
    }, [users])

    const addUser = () => {
        const newUsers = [...users, 'wwwa' + new Date().getTime()]
        setUsers(newUsers)
    }

    return <>
        <button onClick={() => {
            setCounter(counter + 1)
        }}>+
        </button>
        <button onClick={() => addUser()}>add user</button>
        {counter}
        <Users users={newArray}/>
    </>
}


const BooksSecret = (props: { books: Array<string>, addBook: () => void }) => {
    console.log('BooksSecret')
    return <div>
        <button onClick={() => props.addBook()}>add user</button>
        {
            props.books.map((book, i) => <div key={i}>{book}</div>)
        }
    </div>
}
const Books = React.memo(BooksSecret)

export const LikeUseCallback = () => {
    console.log('LikeUseCallback')
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(['reactее', 'jsa', 'cssa', 'html'])

    const newArray = useMemo(() => {
        const newArray = books.filter(books => books.toLocaleLowerCase().indexOf('a') > -1)
        return newArray
    }, [books])

    const addBook = useCallback(() => {
        const newUsers = [...books, 'angular' + new Date().getTime()]
        setBooks(newUsers)
    },[books])

    return <>
        <button onClick={() => {
            setCounter(counter + 1)
        }}>+
        </button>
        {counter}
        <Books books={newArray} addBook={addBook}/>
    </>
}


