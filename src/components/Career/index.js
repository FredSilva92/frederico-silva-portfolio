import '../../index.scss'
import Board from 'components/elements/Board'
import data from '../../data/career.json'

const Career = () => {
    return (
        <Board data={data}/>
    )
}

export default Career