import { TypeFigureContainer } from "./style"


export const TypeFigure = ({ type, color,valor, reverse="false", size="normal" }) => {
    return (
        <TypeFigureContainer className={reverse == 'true' ? 'reversed' : ''} color={color}>
            {type === "Diamante" && <><span className={size == 'normal' ? '' : 'big'}>♦</span><p>{valor}</p></>}
            {type === "Pica" && <><span className={size == 'normal' ? '' : 'big'}>♠</span><p>{valor}</p></>}
            {type === "Corazon" && <><span className={size == 'normal' ? '' : 'big'}>♥</span><p>{valor}</p></>}
            {type === "Trebol" && <><span className={size == 'normal' ? '' : 'big'}>♣</span><p>{valor}</p></>}
        </TypeFigureContainer>
    )
}
