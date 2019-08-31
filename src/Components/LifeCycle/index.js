import React, { Component } from 'react';
import './style.css';
// import BlogPost from './../BlogPost';
import Articles from '../Articles';

class LifeCycle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            articlesCopy: [],
            inputText: '',
        }
        this.updateValue = this.updateValue.bind(this)
        // this.filterBlogs = this.filterBlogs.bind(this);
    }


    componentDidMount() {
        let apiKey = `212b3ff89c2f46dba79a92bd866e1658`;
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    articles: data.articles,
                })
            })
    }

    updateValue(e) {
        this.setState({
            inputText: e.target.value,
        })
    }


    render() {
        let { articles, inputText, } = this.state;
        console.log(articles)
        return(
            <div>
                <div className="search-block">
                    <input 
                        type="text"
                        value={inputText}
                        onChange={this.updateValue}
                        className="searchbar1"
                        placeholder="Enter text here"
                        />
                </div>

                <Articles 
                    articles={articles}
                    inputText={inputText}
                />
            </div>
        );
    }

}

export default LifeCycle;