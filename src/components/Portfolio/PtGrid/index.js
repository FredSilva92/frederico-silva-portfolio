import '../../../index.scss'
import './index.scss'
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PtCard from '../PtCard';
import  Projects  from '../../../enums/projects.ts';


const useStyles = makeStyles({
  root: {
    minWidth: 200
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

const PtGrid = ({portfolioData, propsGrid}) => {
    const projectList = Object.values(Projects);
    console.log('Grid');
    console.log(projectList);

    return (
      <div className='container-pt-grid'>
        <Grid className='pt-grid' 
          spacing={4} 
          container  
          direction="row"
          justifyContent="center"
          alignItems="center">

          {
            projectList.map((name) => {

              let projProps = {
                name: name,
                data: portfolioData[name],
                cardClick: propsGrid.cardClick
              };

              return (
                <Grid item  xs={7} sm={6} lg={4}>
                  <PtCard props={projProps} />
                </Grid>
              )
            }

            )
          }
          
        </Grid>
      </div>
    );
}

export default PtGrid;