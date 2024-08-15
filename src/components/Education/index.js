import Board from 'components/elements/Board'
import courses from '../../data/education.json'
import './index.scss'

const Education = () => {
    return (
        <Board data={courses}/>
    )
}

export default Education