import styled from 'styled-components';

export const Paragrafo = styled.p`
    font-family: 'Monteserrat', sans-serif;
    font-size: ${(props) => props.size};
    font-weight: ${(props) => props.weight};
    text-align: ${(props) => props.align};
    margin: ${(props) => props.margin};
    padding: ${(props) => props.padding};
    color: ${(props) => props.color};
`;