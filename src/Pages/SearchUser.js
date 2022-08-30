import React, { useEffect, useState } from 'react'
import Loading from '../Component/Loading/Loading'
import Navigation from '../Component/navigation/Navigation'
import UsersDisplay from './UsersDisplay'
import { userApi } from '../lib/Unsplashapi'
import { useDispatch } from 'react-redux'
import { fetchUserRequest } from '../redux/users/userAction'
import { useLocation, useSearchParams } from 'react-router-dom'


function SearchUser(props) {

    const [query, setQuery] = useState('')
    const [userData, setUserData] = useState([])
    const [pages, setPages] = useState(2)
    const [isLoading, setIsLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const dispatch = useDispatch()
    const location = useLocation();
    const historyData = location.state
    let [searchParams] = useSearchParams();
    const [userHistorydata, setuserHistorydata] = useState([])
    
    useEffect(()=>{
        UserHistoryData();
    },[])
    
    const UserHistoryData = () => {
        // console.log("the query is ", searchParams.get('query'));
        // console.log("The Data is", historyData);
        if(historyData) {
            let index = historyData.findIndex((index)=> index.title === searchParams.get('query'));
            // console.log(index);
            let userHistoryData = historyData[index].user
            // console.log("user history", userHistoryData);
            setuserHistorydata(userHistoryData)
            let userHistoryTitle = historyData[index].title
            setQuery(userHistoryTitle)
    
        }
      }
   
    const apiCall = (page_count) => {
        setIsLoading(true)
        return userApi(query, page_count)
        .then((res) => {
            // console.log(res)
            dispatch(fetchUserRequest(res, query))
            return res     
        })
        .catch((error) => {
            setErrorMessage(error)
        })
        .finally(()=>{
            setIsLoading(false)
        })
    }
    
    const handelSearch = async (e,page_count = 1) => {
        e.preventDefault()
        // console.log(page_count)
        const result = await apiCall(page_count)
        if (result){
            // console.log(result)
            setUserData(result)
        }
        else {
            
            return "Error"
        }  
    }

    const pageIncrement = async () => {
        setPages((prev) => {
          return  prev + 1
        })
        const newData = await apiCall(pages)
        setUserData([...userData, ...newData])
        setuserHistorydata([...userHistorydata, ...newData])
    }

    return (
        <>
        <Navigation/>
        <div className="container">
            <div className="search-box">
                <h2>Search Users</h2>
                <div className="search">
                    <div className="search-field">
                        <form onSubmit={(e)=> handelSearch (e)}>
                            <input 
                            type="text" 
                            name='user'
                            placeholder="Search User here ..."
                            value={query}
                            onChange={e => setQuery(e.target.value)}
                            // onKeyPress={e => e.key === 'Enter' && handleSearch()}
                            />   
                        </form>
                    </div>
                </div>
                {/* <div>
                    <button type="text" onClick={()=> {pageIncrement()}}>Load More</button>
                </div> */}
            </div>
            {
                isLoading ? <Loading/> : <UsersDisplay users={userData} load={pageIncrement} userHistoryData={userHistorydata}/>
            }
            {
                errorMessage && <div className='error'>{errorMessage}</div>
            }
        </div>
        </>
    )
}

export default SearchUser