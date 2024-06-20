import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './index.scss'

const PortfolioDetail = ({data, backClick}) => {
    return (
        <div className='pf-detail-page'>
            <button className='pf-detail-back-btn' onClick={() => backClick()}>
                <ArrowBackIcon fontSize='large' />
            </button>
            <div className='pf-detail-body'>
                <div>
                    sadasdasdasdasxcc
                </div>
                <div>
                    casascsdfdgdfgdfbreve3er
                </div>
                <div>
                    sdfwef34rett54rfdbgghf
                </div>
            </div>
        </div>
    );
}

export default PortfolioDetail;