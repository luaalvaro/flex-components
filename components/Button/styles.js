import styled from 'styled-components';

export const LinkButton = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;

    width: ${(props) => props.width};
    padding: ${(props) => props.padding};
    background-color: ${(props) => props.background};
    border-radius: ${(props) => props.radius};

    color: ${(props) => props.color};

    /* transition: all 0.2s ease-in-out; */

    &:hover {
        cursor: pointer;
        color: ${(props) => props.hvr};
    }
`;