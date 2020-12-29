import React from 'react'
import './InputBox.css'
import { connect } from 'react-redux'
import { getUserInput } from '../../redux/actions'

const InputBox = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault()
    let input = e.target.userInput.value
    input = input.toLowerCase()
    if (!input) {
      alert('must enter a value')
    } else {
      props.dispatch(getUserInput(input))
    }

    e.target.userInput.value = ''
  }
  return (
    <div>
      <form className='form mt-4' onSubmit={handleSubmit}>
        <div className='form-group group'>
          <input
            className='form-control'
            type='text'
            name='userInput'
            placeholder='type the city of your choice...'
          />
          <button className='btn btn-success'>Search</button>
        </div>
      </form>
    </div>
  )
}
export default connect()(InputBox)
