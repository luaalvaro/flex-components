import styled from 'styled-components';

export const Li = styled.li`
    padding: ${(props) => props.padding};
    
    transition: all 0.2s ease-in-out;

    &:hover {
        cursor: pointer;
        color: ${(props) => props.hvr};
        font-size: ${(props) => props.hvrSize}
    }
`;