
const Filter = (props) => {
    const {filter, changeFilter} = props
    return (
        <>
        <h3>Find contact by name</h3>
          <input
            type="text"
            name="filter"
            value={filter}
            onChange={changeFilter}
            />
         </>
    )
}
export default Filter