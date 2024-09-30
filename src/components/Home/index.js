import React from 'react'; // Import the useState and useEffect hooks
import './index.scss'
import Board from 'components/elements/Board'
import myData from '../../data/aboutme.json'
import dataSkills from '../../data/skills.json'
import FileDownloader from 'components/elements/FileDownloader';

const Home = () => {
    return (
        <div>
            <Board data={myData}/>
            <FileDownloader></FileDownloader>
            <SkillsBoard></SkillsBoard>
        </div>
    )
}

const SkillsBoard = () => { 
    return(
        <div className='skills-board'>
            <div className='skills-titles'>
                <div className='skills-column'>
                    <h3 className='border-right'>Programming skills</h3>
                    {dataSkills.programming.map((skill) => {
                        return(
                            <SkillRow data={skill} customClasses={'border-right'}/>)
                        }
                    )}
                </div>
                <div className='skills-column'>
                    <h3>Other skills</h3>
                    {dataSkills.other.map((skill) => {
                        return(
                            <SkillRow data={skill}/>)
                        }
                    )}
                </div>
            </div>
        </div>
    )
}

const SkillRow = ({data, customClasses=''}) => {

    return(
        <div className={`skill-row ${customClasses}`}>
            {data.image && 
                <div className='skill-image' style={{ backgroundImage: `url(${require(`../../images/${data.image}`)})` }}></div>
            }
            <div className='skill-text'>{data.name}</div>
        </div>
    )
}

export default Home