import { FaTimes, FaUserEdit } from 'react-icons/fa'

const Task = ({ task, onDelete, onToggle, onUpdate }) => {
  return (
    <div
      className={`task ${task.reminder ? 'reminder' : ''}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3>
        <span style={{width: '85%' }}>{task.text}{' '}</span>
        <span><FaUserEdit
          style={{ color: 'blue', cursor: 'pointer' }}
          onClick={() => onUpdate(task)}
        /></span>
        <span>
        <FaTimes
          style={{ color: 'red', cursor: 'pointer' }}
          onClick={() => onDelete(task.id)}
        />
        </span>
      </h3>
      <p>{task.day}</p>
    </div>
  )
}

export default Task
