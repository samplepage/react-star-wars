import React from 'react'
import { Link } from 'react-router-dom'


class StarshipList extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            loadComplete: false,
            starships: []
        }
    }
    render(){
        const {loadComplete,starships} = this.state //will get loadComplete and starships variable in the state
        if (!loadComplete) {
            return <div>Loading...</div>
        } else {
            return(
            <div>{starships.map((starship)=>(
                <Link className='starship' key={starship.name}
                to={{
                    pathname:'/starship',
                    state:starship
                }}>{starship.name}</Link> 
            ))}</div>
            )
        }
        
    }
    componentDidMount(){
        fetch('https://swapi.dev/api/starships/')
        .then((res) => res.json())
        .then(
            (result) => {
                this.setState({
                    loadComplete: true,
                    starships: result.results
                })
            }, 
            (error) => {
                this.setState({
                    loadComplete:false,
                    starships: []
                })
            }
        )
    }
}








export default StarshipList