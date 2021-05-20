import { Paragrafo } from './styles';

export default function Text({ children, color = "", size = "", weight = "", align = "", margin = "", padding = "" }) {
    return (
        <Paragrafo
            size={size}
            weight={weight}
            align={align}
            margin={margin}
            padding={padding}
            color={color}
        >
            {children}
        </Paragrafo>
    )
}