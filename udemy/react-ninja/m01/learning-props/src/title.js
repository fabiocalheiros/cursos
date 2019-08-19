'use stricit';

import React from 'react';

const Title = ({name, lastname}) => (
    <h1>Olá {`${name} ${lastname}`}</h1>
);

// export default class Title extends Component{
//     render(){
//         return (
//             <h1>Olá {this.props.name + ' ' + this.props.lastname }</h1> 
//         );
//     }
// }

Title.defaultProps = {
    name: 'Desconhecido',
    lastname: 'Sem Sobrenome'
};

export default Title;