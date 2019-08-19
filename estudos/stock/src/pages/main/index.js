import React, { Component } from 'react';

import { Menu, Dropdown, Icon } from 'antd';
import { MdMoreVert } from 'react-icons/md';
import 'antd/dist/antd.css';

import './styles.css';

import Card from './card';
import Like from './Like';

import { MdClose } from 'react-icons/md';

export default class Main extends Component {
    

    state = {
        lista: [
            {
                id: 111,
                usuario: {
                    id: 1,
                    nome: "Fábio Calheiros",
                    avatar: "https://i.pravatar.cc/300"
                },
                estado: false,
                titulo: "Título 1",
                categoria: "comida",
                url: "https://images.unsplash.com/photo-1542141372-98a047557466?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80",
                visibleInfo: false
            },
            {
                id: 222,
                usuario: {
                    id: 2,
                    nome: "Simone Assis Costa",
                    avatar: "https://i.pravatar.cc/300"
                },
                estado: false,
                titulo: "Título 2",
                categoria: "bebida",
                url: "https://images.unsplash.com/photo-1522057306606-8d84daa75e87?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80",
                visibleInfo: false
            },
            {
                id: 333,
                usuario: {
                    id: 2,
                    nome: "Simone Assis Costa",
                    avatar: "https://i.pravatar.cc/300"
                },
                estado: false,
                titulo: "Título 3",
                categoria: "bebida",
                url: "https://images.unsplash.com/photo-1513618827672-0d7c5ad591b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
                visibleInfo: false
            },
        ]
    };

    handleRemove(id) {
        const listaAtual = this.state.lista;
        const listaFiltrada = listaAtual.filter((photo) => photo.id != id);

        this.setState({
            lista: listaFiltrada
        });
    }

    handleLikeClick = (id) => {
        const listateste = this.state.lista;

        listateste.forEach((item) => {
            if(item.id === id) {
                item.estado = !item.estado;
            } 
        })

        this.setState({
            lista: listateste
        });
      }

      handleViewMoreInfo = (id) => {
        const listatAtual = this.state.lista;

        listatAtual.forEach((item) => {
            if(item.id === id) {
                //console.log("achou o cara", item.id);
                item.visibleInfo = !item.visibleInfo;
            } 
        })

        this.setState({
            lista: listatAtual
        });

        console.log(listatAtual);
      }

      handleDropClick = (event, id) => {
        if (event.key === '0') {
          this.handleLikeClick(id);
        }else if (event.key === '1'){
            this.handleRemove(id);
        }else if (event.key === '2'){
            this.handleViewMoreInfo(id);
        }
      }

      render(){

        const { lista } = this.state;

        return (
            <div className="lista-fotos">
                { lista && lista.length > 0 ? (
                <ul>
                    { lista.map(photo => (
                    <li key={ photo.id }>

                        <div className="bt-more">
                            <Dropdown overlay={
                                <Menu onClick={(e) => this.handleDropClick(e, photo.id)}>
                                <Menu.Item key="0">{ !photo.estado ? ("Marcar como favorito") : ("Desmarcar como favorito") }</Menu.Item>
                                <Menu.Item key="1">Excluir imagem</Menu.Item>
                                <Menu.Divider />
                                <Menu.Item key="2">Ver mais informações</Menu.Item>
                              </Menu>
                            } trigger={['click']}>
                                <a className="ant-dropdown-link" href="#">
                                    <MdMoreVert size={24} color="#000" />
                                </a>
                            </Dropdown>
                        </div>
                        
                        <button className="bt-favorito" onClick={ () => this.handleLikeClick(photo.id) }>
                            <Like estado={photo.estado} />
                        </button>
    
                        <button className="bt-close" onClick={ () => { this.handleRemove(photo.id); } }>
                            <MdClose size={24} color="#fff" />
                        </button>  
    
                        <Card
                            id={ photo.id }
                            title={ photo.titulo }
                            categoria={ photo.categoria }
                            img={ photo.url }
                            usuario={ photo.usuario }
                            visibleInfo={ photo.visibleInfo }
                        />
    
                    </li>
                    ))}
                </ul>
                ) : (
                    <div className="empty">
                        Acabou :(
                    </div>
                ) }
            </div>
        )
      }
    
}
