import React from 'react'
import styled, {css} from 'styled-components'

export default styled.button`
    font-size: 10px;
    border:0
    
    ${props => props.success && css`
    background-color: green;
    color: white;
    `};

    ${props => props.warning && css`
    background-color: red;
    color: white;
    `};

    ${props => props.info && css`
    background-color: yellow;
    color: black;
    `};

`