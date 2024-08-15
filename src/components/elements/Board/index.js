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
    return(<><div >
            {data.footer}
        </div>
        <div>
            {data.description}
        </div>
        </>);
}

export default Board;