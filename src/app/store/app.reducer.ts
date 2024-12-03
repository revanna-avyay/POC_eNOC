import { Action, createReducer, on } from "@ngrx/store";
import { quickLinks } from './app.actions'

export interface QuickLinksInterface {
  quickLinks:{ id: number, isDefaultNOC: boolean, text: string, isSelected: boolean, icon?: string}[]
}

export const initialState : QuickLinksInterface = {
  quickLinks : []
}

export const quickLinksReducer = createReducer(
    initialState, 
    on( quickLinks.updateQuickLinks, (state, { linksList } ) : QuickLinksInterface => {
      return { ...state, quickLinks: [...linksList] }
    } ),
)

export function quickLinksreducer(state:QuickLinksInterface | undefined, action:Action ):any {
    return quickLinksReducer(state, action)
}