import styled from 'styled-components';

export const Div = styled.div`
    display: flex;
    flex-direction: ${(props) => props.direction};
    align-items: ${(props) => props.items};
    justify-content: ${(props) => props.content};
    flex: ${(props) => props.flex};
    
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    max-width: ${(props) => props.maxWidth};
    min-height: ${(props) => props.minHeight};
    
    background: ${(props) => props.bg};
    color: ${(props) => props.color};
    border: ${(props) => props.border};
    border-radius: ${(props) => props.radius};
    
    margin: ${(props) => props.m};
    padding: ${(props) => props.p};
`;