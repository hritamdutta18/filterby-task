const DateContent = () => {
    return (
        <div className= "datecontent">
            <div className= "d-elem">
                <label>Descending Order</label>
                <input type= 'checkbox'/>
            </div>            
            <br/>
            <div className= "d-elem">
                <label>Include Past Posts</label>
                <input type= 'checkbox'/>
            </div>
            <br/>
        </div>
    )
}

export default DateContent;
