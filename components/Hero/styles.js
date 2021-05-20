import styled from 'styled-components';

export const Div = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    max-width: 1024px;
    height: 600px;
    background: red url(${(props) => props.img}) center center / cover no-repeat;
    border-radius: 0;

    color: #fff;
    padding: 0 80px;
    justify-content: center;
`;