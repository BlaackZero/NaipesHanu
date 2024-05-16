import { TypeFigure } from "../TypeFigure/TypeFigure"
import { CardStyles } from "./style"

export const Card = ({color,figura, valor}) => {
  return (
    <CardStyles>
      <div className="upSection">
        <TypeFigure type={figura} color={color} valor={valor}/>
      </div>
      <div className="midSection">
        <TypeFigure type={figura} color={color} size="big"/>
      </div>
      <div className="downSection">
        <TypeFigure type={figura} color={color} valor={valor} reverse="true"/>
      </div>
    </CardStyles>
  )
}
