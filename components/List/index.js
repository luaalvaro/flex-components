import { Ul } from './styles';

export default function List({ children, size = '18' }) {
    return (
        <Ul size={size}>
            {children}
        </Ul>
    )
}