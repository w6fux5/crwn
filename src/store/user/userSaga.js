import { takeLatest, call, put, all } from 'redux-saga/effects';
import { userActionTypes } from './userTypes';
import { getCurrentUser } from '../../utils';
import {
  signInSuccess,
  signInFailed,
  signOutFailed,
  signOutSuccess,
  signUpSuccess,
  signUpFailed,
} from './userActions';

import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signAuthUserWithEmailAndPassword,
  signOutUser,
  createAuthUserWithEmailAndPassword,
} from '../../utils';

function* getSnapShotFormUserAuth(userAuth, additionDetails) {
  try {
    const userSnapShot = yield call(
      createUserDocumentFromAuth,
      userAuth,
      additionDetails,
    );
    yield put(signInSuccess({ id: userSnapShot.id, ...userSnapShot.data() }));
  } catch (error) {
    yield put(signInFailed(error));
  }
}

function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield call(
      signAuthUserWithEmailAndPassword,
      email,
      password,
    );
    yield call(getSnapShotFormUserAuth, user);
  } catch (error) {
    yield put(signInFailed(error));
  }
}

function* signInWithGoogle() {
  try {
    const { user } = yield call(signInWithGooglePopup);
    yield call(getSnapShotFormUserAuth, user);
  } catch (error) {
    yield put(signInFailed(error));
  }
}

function* isUserAuth() {
  try {
    const userAuth = yield call(getCurrentUser);
    if (!userAuth) return;
    yield call(getSnapShotFormUserAuth, userAuth);
  } catch (error) {
    yield put(signInFailed(error));
  }
}

function* signOut() {
  try {
    yield call(signOutUser);
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailed(error));
  }
}

function* signUp({ payload: { email, password, displayName } }) {
  console.log(email, password, displayName);
  try {
    const { user } = yield call(
      createAuthUserWithEmailAndPassword,
      email,
      password,
    );

    yield put(signUpSuccess(user, { displayName }));
  } catch (error) {
    yield put(signUpFailed(error));
  }
}

function* signInAfterSignUp({ payload: { user, additionDetails } }) {
  console.log(user, additionDetails);
  yield call(getSnapShotFormUserAuth, user, additionDetails);
}

//===== Listener ====//

function* onEmailSignInStart() {
  yield takeLatest(userActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

function* onGoogleSignInStart() {
  yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

function* onCheckUserSession() {
  yield takeLatest(userActionTypes.CHECK_USER_SESSION, isUserAuth);
}

function* onSignOutStart() {
  yield takeLatest(userActionTypes.SIGN_OUT_START, signOut);
}

function* onUserSignUpStart() {
  yield takeLatest(userActionTypes.SIGN_UP_START, signUp);
}

function* onSignUpSuccess() {
  yield takeLatest(userActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp);
}

//==  root  ==//
export function* userSaga() {
  yield all([
    call(onCheckUserSession),
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onSignOutStart),
    call(onUserSignUpStart),
    call(onSignUpSuccess),
  ]);
}
