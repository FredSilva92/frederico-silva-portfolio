import {useEffect, useLayoutEffect, useRef} from "react";
import CardMedia from "@material-ui/core/CardMedia";
import { readjustImage } from "components/Utils/ResizeImage";
import './index.scss'

const Board = ({data}) => {
    return(
        <div className='board'>
            {
                data.map((line) => {
                    return(
                        <Row data={line}/>
                    )
                })
            }
        </div>
    );
}

const Row = ({data}) => {

    const firstColumnRef = useRef(null);
    const secondColumnRef = useRef(null);

    return(
        <div className='row'>
            <div className='first-column' ref={firstColumnRef}>
                <CardMedia
                    component="img"
                    className="board-image"
                    image={require(`../../../images/${data.image}`)}
                    alt={data.title}
                />
                <p>{data.footer}</p>
            </div>
            <div style={{ height: 'inherit', borderLeft: '1px solid black' }}></div>
            <div className='second-column' ref={secondColumnRef}>
                {data.header && 
                    <div className="header">
                        <div className="header-title">{data.header.title}</div>
                        <div className="period-title">{data.header.period}</div>
                    </div>
                }
                <div className="description">{data.description}</div>
                
            </div>
        </div>
    );
}

export default Board;