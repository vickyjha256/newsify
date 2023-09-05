import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

const News = (props) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);

    const updatePage = async () => {
        props.setProgress(25);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true);
        let data = await fetch(url);
        props.setProgress(45);
        let parsedData = await data.json();
        props.setProgress(75);
        // console.log(parsedData); // This is for testing only.
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setLoading(false);
        props.setProgress(100); 
    };

    useEffect(() => {
        document.title = `${props.category.charAt(0).toUpperCase() + props.category.slice(1)} - Newsify`;
        updatePage();
        // eslint-disable-next-line
    }, [])

    // const prevClick = async () => {
    //     // this.setState({ page: this.state.page - 1 });
    //     this.state.page = this.state.page - 1; // We update page like this.
    //     this.updatePage();
    // }

    // const nextClick = async () => {
    //     // this.setState({ page: this.state.page + 1 }); // This will work but takes 2 times click on next then it changes page.
    //     this.state.page = this.state.page + 1; // We update page like this.
    //     this.updatePage();
    // }

    const fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
        setPage(page + 1);
        let data = await fetch(url);
        let parsedData = await data.json()
        setArticles(articles.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults);
    };

    return (
        <>
            <h1 style={{ marginTop: '75px' }} align="center">Newsify - {props.category.charAt(0).toUpperCase() + props.category.slice(1)} News</h1>
            {loading && <Spinner />}
            {/* <InfiniteScroll style={{ height: "calc(100vh - 100px)", overflow: "auto"}} dataLength={articles.length} next={fetchMoreData} hasMore={articles.length !== totalResults} loader={<Spinner />}> */}
            <InfiniteScroll dataLength={articles.length} next={fetchMoreData} hasMore={articles.length !== totalResults} loader={<Spinner />}>

                <div className="container">
                    <div className="row">
                        {articles.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 80) : ""} author={element.author ? element.author : "Unknown"} date={element.publishedAt} imageUrl={element.urlToImage} newsUrl={element.url} />
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>
            {articles.length === totalResults && !loading ? <h2 align="center">You're all caught up.</h2> : ""}
        </>
    )
}

News.defaultProps = {
    country: 'in',
    pageSize: 9,
    category: 'general',
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}
export default News;