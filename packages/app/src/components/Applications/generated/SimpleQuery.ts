/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SimpleQuery
// ====================================================

export interface SimpleQuery_applications {
  id: string
}

export interface SimpleQuery_complexLocalState {
  someData: string
}

export interface SimpleQuery {
  applications: (SimpleQuery_applications | null)[]
  localState: string
  complexLocalState: SimpleQuery_complexLocalState
}
