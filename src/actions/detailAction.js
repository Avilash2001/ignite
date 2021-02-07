import axios from 'axios';
import {gameDetailsUrl,gameScreenShotUrl} from '../api';


export const loadDetail = (id) => async (dispatch) => {
    dispatch({
        type: "LOADING_DETAIL"
    })
    //Fetch Detail
    const detailData = await axios.get(gameDetailsUrl(id));
    const screenShotsData =await axios.get(gameScreenShotUrl(id));
    dispatch({
        type: "GET_DETAIL",
        payload: {
            game: detailData.data,
            screen: screenShotsData.data,
        }
    });
    // console.log(detailData.data)
}