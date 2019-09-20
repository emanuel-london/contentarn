import {combineReducers} from 'redux';
import { onboardingReducer } from './onboarding';
import { dashboardReducer } from './dashboard';

export default combineReducers({
    Onboarding: onboardingReducer,
    Dashboard: dashboardReducer
})