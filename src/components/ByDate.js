import Switch from './Switch'

const ByDate = ({ onToggle }) => {
    return (
        <div>
            <Switch 
                bhead= 'By Date'
                check= {onToggle}
            />
            <hr/>           
            <br/>
        </div>
    )
}

export default ByDate;
