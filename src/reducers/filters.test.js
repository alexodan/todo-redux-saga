import { GET_FILTER } from './filters'

const initialState = {
  filter: 'all',
}

describe('filters reducer', () => {
    // beforeEach()
    it('should selects all filter', () => {
        
    })
});

export const selectFilter = state => state.filters.filter

export const getFilter = filter => {
  return {
    type: GET_FILTER,
    filter,
  }
}

const filters = (state = initialState, payload) => {
  const { type } = payload
  switch (type) {
    case GET_FILTER:
      return {
        filter: payload.filter,
      }
    default:
      return state
  }
}

export default filters
