import React, { Component } from 'react';

import { MdFavoriteBorder , MdFavorite } from 'react-icons/md';

export default class Like extends Component {

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                
                { this.props.estado ? (
                    <MdFavorite size={24} color="#fff" />
                ) : (
                    <MdFavoriteBorder size={24} color="#fff" />
                ) }
                
            </div>
          );
    }
}
