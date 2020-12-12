import React from 'react'

class StarshipPage extends React.Component{
    render(){
        const starship = this.props.location.state;
        return(
            <div>{starship.name}<br/>{starship.model}</div>
        )

    }
}

export default StarshipPage