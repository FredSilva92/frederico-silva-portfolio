import '../../../index.scss'
import './index.scss'
import { Grid } from "@mui/material";
import PtCard from '../PtCard';
import  Projects  from '../../../enums/projects.ts';

const PtGrid = ({portfolioData, propsGrid}) => {
    const projectList = Object.values(Projects);

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