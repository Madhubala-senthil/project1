import { takeEvery , put , call } from 'redux-saga/effects';
 import* as actions from './Action';


const fetchDatafromAPI = async() => {
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        return data;
        // console.log(response);
    }
    catch(error){
        throw error;
    }
}

function* fetchData(){
    try{
        const data = yield call(fetchDatafromAPI);
        yield put(actions.fetchDataSuccess(data));
    }
    catch(error){
        yield put(actions.fetchDataFailure(error.message));
    }
}

export function* watchFetchData(){
    yield takeEvery("FETCH_DATA_REQUEST",fetchData);
}