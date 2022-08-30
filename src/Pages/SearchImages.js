import React, { useEffect, useState } from "react";
import { imageApi } from "../lib/Unsplashapi";
import Navigation from "../Component/navigation/Navigation";
import ImageGallary from "../Component/ImageGallary";
import Loading from "../Component/Loading/Loading";
import { useDispatch } from "react-redux";
import { fetchImageRequest } from "../redux/images/ImageAction";
import { useLocation, useSearchParams } from "react-router-dom";

function SearchBar(props){
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch()
  const [historyImages, setHistoryImages] = useState([])

  const location = useLocation();
  const [searchParams] = useSearchParams();
  const imageData = location.state
  // console.log('data', imageData)

  useEffect(()=>{
   imageHistory();
  },[])

  const imageHistory = () => {

    if (imageData){
      let index = imageData.findIndex((index) => index.title ===  searchParams.get('query'));
      const images = imageData[index].images
      setHistoryImages(images);
      const title = imageData[index].title
      setQuery(title)
    }
  }

  const handelSearch = (e) => {
    // debugger
    e.preventDefault();
    setIsLoading(true);
    imageApi(query)
      .then((responce) => {
        setImages(responce);
        dispatch(fetchImageRequest(responce, query))  
      })
      .catch((error) => {
        setErrorMessage(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }
  return (
    <>
      <Navigation />
      <div className="container">
        <div className="search-box">
          <h2>Search Images</h2>
          <div className="search">
            <div className="search-field">
              <form onSubmit={(e) => handelSearch(e)}>
                <input
                  type="text"
                  placeholder="Search Images here ..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  // onKeyPress={e => e.key === 'Enter' && handelSearch()}
                />
              </form>
            </div>
          </div>
        </div>
        {isLoading ? <Loading /> : <ImageGallary gallaryImage={images} imagedisplay={historyImages}/>}
        {errorMessage && <div className="error">{errorMessage}</div>}
       
      </div>
    </>
  );
}

export default SearchBar;
