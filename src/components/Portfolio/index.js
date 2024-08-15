import '../../index.scss'
import PtGrid from './PtGrid'
import projects from '../../data/projects.json'
import PortfolioDetail from './PortfolioDetail';
import { useState } from 'react'

const Portfolio = () => {
    const [detailPage, setDetailPage] = useState(false);

    const onCardClick = (name) => {
        setDetailPage(true);
    }

    let properties = {
        cardClick: onCardClick
    }

    console.log(properties);

    return (
        <div>
        {
           <PtGrid portfolioData={projects} propsGrid={properties}/>
        }
        </div>
    )
}

export default Portfolio