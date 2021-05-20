import { CaixaAlpha, CaixaBeta } from './styles';

export default function Modal({ children, status = 'hidden', onClick = {} }) {
    return (
        <CaixaAlpha status={status} onClick={onClick}>
            {children}
        </CaixaAlpha>
    )
}