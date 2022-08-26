import React from "react";
import movies from '../data.js/data';

class Main extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            expandInfo: true,
            active: "",
        }
    }
    render(){
            let movieInfo = movies.map((elm) => elm);
        return(
            <>
                <main>
                <ul className="cards">
                {
                    movieInfo.map((elm, i) => (
                        <li className="card" onMouseEnter={() => {
                            this.setState({
                                active: i
                            })
                        }} onMouseLeave={() => {
                            this.setState({
                                active: !i
                            })
                        }}>
                            <h2>{elm.Title}</h2>
                            <img src={elm.Poster} alt=""/>
                            <p>Released Date: {elm.Released}</p>
                            <div className ={this.state.active ? "active" : ""}>
                                {this.state.expandInfo ? <span className="btn" onClick={() => {
                                    this.setState({active: i})
                                }}>More Info</span> : <span>X</span>}
                            </div>
                            {
                                i === this.state.active ? 
                                <div>
                                    <p>{elm.Director}</p>
                                    <p>{elm.Country}</p>
                                    <p>{elm.Genre}</p>
                                </div> : ""
                            }
                        </li>
                    ))
                }
                </ul>
                </main>
            </>
        )
    }
}

export default Main;