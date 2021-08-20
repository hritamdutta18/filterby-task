import PropTypes from 'prop-types'

const Switch = ({ bhead, check }) => {
    
    return (
        <div className= "section">            
            <h4>{bhead}</h4>
            <label className="switch">
                <input type="checkbox" onChange= {check}/>
                <span className="slider round"></span>
            </label>            
        </div>
    )
}

Switch.propTypes = {
    bhead: PropTypes.string
} 

export default Switch;
