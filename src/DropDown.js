function DropDown() {
    return (
        <div className="dropdown">
            <form >

                <select name="firstBox">
                    <option value="value"><strong>To</strong></option>
                    <option value="value">Valencia</option>
                    <option value="value">Barcelona</option>
                    <option value="value">Madrid</option>
                    <option value="value">Milano</option>
                    <option value="value">Athens</option>
                </select>

                <select name="secondBox">
                    <option value="value"><strong>From</strong></option>
                    <option value="value">Prague</option>
                    <option value="value">Berlin</option>
                    <option value="value">Warsaw</option>
                    <option value="value">Pardubice</option>
                </select>

                <input type="checkbox" id="checkbox" name="direct-flights" />
                <label for="checkbox"> Direct Flights Only</label>

            </form>
        </div>
    )
}

export default DropDown;