import { createSelector, createFeatureSelector } from "@ngrx/store";
import { QuickLinksInterface } from "./app.reducer";
import * as counter from './app.reducer';

export const selectFeature = createFeatureSelector<counter.QuickLinksInterface>('quickLinks');

export const quickLinksData = createSelector( selectFeature, (state: QuickLinksInterface) => state.quickLinks )