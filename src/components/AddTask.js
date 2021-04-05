import { useState } from 'react'

const AddTask = ({ onAdd, editTask }) => {
  const isEdit = editTask[0].text ? true:false

  const [text, setText] = useState(editTask[0].text ? editTask[0].text : '')
  const [day, setDay] =  useState(editTask[0].day ? editTask[0].day : '')
  const [reminder, setReminder] =  useState(editTask[0].reminder ? editTask[0].reminder : false)
  const [taskId, setTaskId] =  useState(editTask[0].id ? editTask[0].id : '')
  
  // if(editTask[0].text){
  //   setText(editTask[0].text)
  //   setDay(editTask[0].day)
  //   setReminder(editTask[0].reminder)
  // }

  const onSubmit = (e) => {
    e.preventDefault()

    if (!text) {
      alert('Please add a task')
      return
    }

    onAdd({ text, day, reminder}, taskId)

    setText('')
    setDay('')
    setReminder(false)
    setTaskId('')
  }

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Task</label>
        <input
          type='text'
          placeholder='Add Task'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Day & Time</label>
        <input
          type='text'
          placeholder='Add Day & Time'
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className='form-control form-control-check'>
        <label>Set Reminder</label>
        <input
          type='checkbox'
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>

      <input type='submit' value={isEdit? 'Update Task': 'Save Task'} className='btn btn-block' />
    </form>
  )
}

export default AddTask
