import { ActionReducerMap } from "@ngrx/store";
import * as quicklinksReduce from './app.reducer';

export interface AppState {
    quickLinks: quicklinksReduce.QuickLinksInterface;
}

export const appReducer: ActionReducerMap<AppState>={
    quickLinks: quicklinksReduce.quickLinksreducer,
}