import styled from 'styled-components';

export const CaixaAlpha = styled.div`
    visibility: ${(props) => props.status};
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: rgba(0,0,0,0.8);
    z-index: 20;
`

export const CaixaBeta = styled.div`
    z-index: 30;
`