import { createActionGroup, props } from "@ngrx/store";

export const quickLinks = createActionGroup({
  source: 'quickLinks',
  events: {
      'UpdateQuickLinks':  props<{ linksList : { id: number; isDefaultNOC: boolean, text: string, isSelected: boolean, icon?: string  } [] }>()
  }
})