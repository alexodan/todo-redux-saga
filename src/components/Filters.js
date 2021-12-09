import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { getFilter } from '../reducers/filters'

const Filters = () => {
  const dispatch = useDispatch()

  const handleFilterClicked = filter => {
    dispatch(getFilter(filter))
  }

  return (
    <Container>
      <Filter>
        <a href="#all" onClick={() => handleFilterClicked('all')}>
          All
        </a>
      </Filter>
      <Filter>
        <a href="#active" onClick={() => handleFilterClicked('active')}>
          Active
        </a>
      </Filter>
      <Filter>
        <a href="#completed" onClick={() => handleFilterClicked('completed')}>
          Completed
        </a>
      </Filter>
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
  margin-right: 20px;
  a {
    text-decoration: none;
  }
  a:visited {
    color: inherit;
  }
`

export default Filters
