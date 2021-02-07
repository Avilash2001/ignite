import React from 'react';
import { Link } from "react-router-dom";
//Styling and Animation
import styled from 'styled-components';
import {motion} from 'framer-motion';
//Redux
import {useDispatch,useSelector}from 'react-redux';
import { loadDetail } from "../actions/detailAction";
//Image Resizer
import { smallImage } from "../util";

const Game = ({name, released, image, id}) =>{

    //LoadDetails
    const dispatch = useDispatch();

    const loadDetailHandler =()=>{
        document.body.style.overflow = 'hidden';
        dispatch(loadDetail(id));
        // console.log(id)
    }

    return (
        <StyledGame onClick={loadDetailHandler}>
            <Link to={`/game/${id}`}>
                <h3>{name}</h3>
                <p>{released}</p>
                <img src={smallImage(image,640)} alt={name}/>
            </Link>
        </StyledGame>
    )
};

const StyledGame = styled(motion.div)`
    min-height: 30vh;
    box-shadow: 0px 5px 20px rgba(0,0,0,0.2);
    text-align: center;
    border-radius: 1rem;
    overflow: hidden;
    img{
        width: 100%;
        height:40vh;
        object-fit: cover;
    }
    cursor: pointer;
`;

export default Game;