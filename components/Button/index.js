import { LinkButton } from './styles';

export default function Button({ children,
    padding = '',
    background = '',
    radius = '',
    hvr = '',
    onClick = '',
    width = 'max-content',
    color = '',
}) {
    return <LinkButton
        padding={padding}
        background={background}
        radius={radius}
        hvr={hvr}
        onClick={onClick}
        width={width}
        color={color}
    >
        {children}
    </LinkButton>
}