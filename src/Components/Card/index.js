import React from 'react';
import './style.css';

class Card extends React.Component {
    state = {
        showViewAll: false,
    }
    refCallBack = (element) => {
        if(element) {
            console.log(element.getBoundingClientRect().height)
            if(element.getBoundingClientRect().height > 80) {
                this.setState({showViewAll: true})
            }
        }
    }
    render() {
        let offers = [10,20,30,40,50];
        let { showViewAll } = this.state; 
        return(
            <div className="blocks-wrapper">
                <div className="blocks" ref={this.refCallBack}>
                    {
                        offers.map((offer, index) => {
                            return(
                                <button className={`btn block`} key={`btn-${index}`}>{offer}</button>
                            );
                        })
                    }
                </div>
                {
                    showViewAll && 
                    <button className={`btn view-all`}>View all</button>
                }
            </div>
            
        );
    }
    
}

export default Card;