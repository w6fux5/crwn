import { takeLatest, all, call, put } from 'redux-saga/effects';

import { categoryTypes } from './categoryTypes';

import { fetchCategorySuccess, fetchCategoryFailed } from './categoryAction';

import { getCategoriesAndDocuments } from '../../utils';

export function* fetchCategoriesAsync() {
  try {
    const categoryArray = yield call(getCategoriesAndDocuments);
    yield put(fetchCategorySuccess(categoryArray));
  } catch (error) {
    yield put(fetchCategoryFailed(error));
  }
}

export function* onFetchCategories() {
  yield takeLatest(categoryTypes.FETCH_CATEGORIES_START, fetchCategoriesAsync);
}

export function* categoriesSaga() {
  yield all([call(onFetchCategories)]);
}
