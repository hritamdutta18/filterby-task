import Switch from './Switch'

const ByLocation = ({ onToggle }) => {
    return (
        <div>
            <Switch 
                bhead= 'By Location'
                check= {onToggle}/>
            <hr/>           
            <br/>
        </div>
    )
}

export default ByLocation;
