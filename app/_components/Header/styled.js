import styled, { css } from 'styled-components'

export const LogoButton = styled.div`
color: whitesmoke;
border: 1px solid gray;
background-color: #3E3E3E;
border-radius: 3px;
cursor: pointer;


${props =>
    props.$active &&
    css`
    background-color: white;
      color: black;
      z-index: 2;
      scale: 1.03;
    `};

`


export const DropItem = styled.div`

position: absolute;
top: calc(100%);
left: 50%;
transform: translateX(-50%);
border-radius: 10px;
padding: 12px;
width: fit-content;
min-width: 235px;
background-color: #f2f2f2;
visibility: hidden;
opacity: 0;


.__xt--pp {
  &::before {
  content: "•";
  color: black;
  margin-right: 10px;
}
}

.__xt {
   width: -webkit-max-content;
    width: -moz-max-content;
    width: max-content;
}

${props =>
    [0, 1, 2, 3, 4].includes(props.$idx) &&
    css`
    left: 0;
    transform: translateX(0);

    `};

${props =>
    [6].includes(props.$idx) &&
    css`
      padding: 0;
    `};

    


`