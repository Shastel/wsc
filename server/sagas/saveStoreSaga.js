import { takeEvery } from 'redux-saga';
import { call } from 'redux-saga/effects';

export default function*() {
    yield* takeEvery('*', saveStore);
}

function* saveStore() {

}
