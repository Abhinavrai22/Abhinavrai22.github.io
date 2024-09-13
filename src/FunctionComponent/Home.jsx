import React, { useEffect, useState } from 'react';
import NewsArticle from './NewsArticle';
import InfiniteScroll from 'react-infinite-scroll-component';

export default function Home(props) {
  let [articles, setArticles] = useState([]);
  let [totalResults, setTotalResults] = useState(0);
  let [page, setPage] = useState(1);

  async function getAPIdata() {
    setPage(1); 
    let response;
    try {
      const query = props.search || props.q || '';
      response = await fetch(
        `https://gnews.io/api/v4/top-headlines?q=${query}&lang=${props.lang}&pageSize=12&page=1&apikey=2184b98d9ff3c2c72d8e7f8c5697f2b4`
      );
      const data = await response.json();
      setArticles(data.articles || []);
      setTotalResults(data.totalResults || 0);
    } catch (error) {
      console.error('Error fetching the data:', error);
      setArticles([]);
    }
  }

  const fetchData = async () => {
    try {
      const query = props.search || props.q || '';
      let newPage = page + 1; 
      setPage(newPage);
      let response = await fetch(
        `https://gnews.io/api/v4/top-headlines?q=${query}&lang=${props.lang}&pageSize=12&page=${newPage}&apikey=2184b98d9ff3c2c72d8e7f8c5697f2b4`
      );
      const data = await response.json();
      if (data.articles) {
        setArticles(prevArticles => prevArticles.concat(data.articles));
      }
    } catch (error) {
      console.error('Error fetching the data:', error);
    }
  };

  useEffect(() => {
    getAPIdata();
  }, [props.search, props.q, props.lang]);

  return (
    <>
      <h5 className='backcolor text-center text-light p-1 my-1'>
        {props.search ? props.search : props.q} News Articles
      </h5>
      <div className='container-fluid'>
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchData} 
          hasMore={articles.length < totalResults}
          loader={
            <div className='w-100 text-center'>
              <div className="spinner-border text-danger" style={{ height: "100px" }} role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          }
        >
          <div className='row'>
            {articles && articles.length > 0 && articles.map((item, index) => (
              <NewsArticle
                key={index}
                image={item.image}
                title={item.title}
                description={item.description}
                date={item.publishedAt}
                source={item.source.name}
                url={item.url}
              />
            ))}
          </div>
        </InfiniteScroll>
      </div>
    </>
  );
}
