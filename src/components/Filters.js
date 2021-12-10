import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { getFilter, selectFilter } from '../reducers/filters'

const filterOptions = ['all', 'active', 'completed']

const Filters = () => {
  const activeFilter = useSelector(selectFilter)
  const dispatch = useDispatch()

  const handleFilterClicked = filter => {
    dispatch(getFilter(filter))
  }

  const isActiveFilter = filter => {
    return filter === activeFilter
  }

  return (
    <Container>
      {filterOptions.map(filter => (
        <Filter isActive={isActiveFilter(filter)}>
          <a href={`#${filter}`} onClick={() => handleFilterClicked(filter)}>
            {filter}
          </a>
        </Filter>
      ))}
    </Container>
  )
}

const Container = styled.ul`
  display: flex;
  list-style: none;
  justify-content: center;
  margin: 0;
`

const Filter = styled.li`
  border: ${props => (props.isActive ? '1px solid #EAAEAA' : 'none')};
  margin-right: 20px;
  padding: 2px 5px;
  a {
    color: inherit;
    text-decoration: none;
    text-transform: capitalize;
  }
  a:visited {
    color: inherit;
  }
`

export default Filters
