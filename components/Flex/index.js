import { Div } from './styles';

export default function Flex({ children,
    width = '',
    height = '',
    bg = '',
    color = '',
    maxWidth = '',
    minHeight = '',
    m = '',
    direction = '',
    p = '',
    items = '',
    content = '',
    border = '',
    radius = '',
    flex = '',
}) {
    return (
        <Div
            width={width}
            maxWidth={maxWidth}
            minHeight={minHeight}
            height={height}
            bg={bg}
            color={color}
            m={m}
            direction={direction}
            p={p}
            items={items}
            content={content}
            border={border}
            radius={radius}
            flex={flex}
        >
            {children}
        </Div>
    );
}