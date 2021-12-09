import React from 'react'
import styled from 'styled-components'

const TaskItem = ({
  id,
  description,
  completed,
  onToggleCompleted,
  onDelete,
}) => {
  const deleteTask = () => onDelete(id)

  const toggleCompleted = () => {
    onToggleCompleted(id)
  }

  return (
    <Item>
      <InputCheck
        type="checkbox"
        checked={completed}
        onChange={toggleCompleted}
      />
      <Description completed={completed}>{description}</Description>
      <DeleteButton onClick={deleteTask}>x</DeleteButton>
    </Item>
  )
}

const Item = styled.li`
  align-items: center;
  border-bottom: 1px solid #ededed;
  display: flex;
  font-size: 1.4rem;
  font-weight: 300;
  padding: 5px;
  position: relative;
  width: 100%;
  &:hover button {
    display: block;
  }
`

const InputCheck = styled.input`
  appearance: none;
  border: none; /* Mobile Safari */
  bottom: 0;
  /* auto, since non-WebKit browsers doesn't support input styling */
  height: 40px;
  margin: auto 0;
  opacity: 0;
  position: absolute;
  top: 0;
  text-align: center;
  width: 40px;
  -webkit-appearance: none;

  & + label {
    background-image: url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23ededed%22%20stroke-width%3D%223%22/%3E%3C/svg%3E');
    background-position: center left;
    background-repeat: no-repeat;
  }

  &:checked + label {
    background-image: url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23bddad5%22%20stroke-width%3D%223%22/%3E%3Cpath%20fill%3D%22%235dc2af%22%20d%3D%22M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z%22/%3E%3C/svg%3E');
  }
`

const Description = styled.label`
  padding: 15px 15px 15px 60px;
  text-decoration: ${props => (props.completed ? 'line-through' : 'none')};
  word-break: break-all;
`

const DeleteButton = styled.button`
  background: none;
  border: none;
  color: red;
  cursor: pointer;
  display: none;
  font-size: 1.4rem;
  position: absolute;
  right: 20px;
`

export default TaskItem
