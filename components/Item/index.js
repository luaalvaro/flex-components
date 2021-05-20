import { Li } from './styles';

export default function Item({ children, hvr = '', padding = '', hvrSize = '' }) {
    return (
        <Li hvr={hvr} padding={padding} hvrSize={hvrSize}>{children}</Li>
    )
}