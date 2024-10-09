
function SearchBar({setter, value}) {

	function handleSearch(fromData){
		fromData.preventDefault()
		const query = fromData.target[0].value	
		setter(query)
	}

	return (
		<form onSubmit={handleSearch} className="gap-2 w-[70%] flex justify-center place-items-center mx-10 h-[15vh]">
			<input type='text' name="query" className="duration-500 text-lg font-semibold p-4 shadow-2xl rounded-3xl border h-16 md:h-20 w-[75%]" id="" placeholder="Enter a city name"/>
			<button type="submit" className="duration-500 text-2xl shadow-2xl font-semibold rounded-3xl bg-white h-16 md:h-20 w-[25%]">Go</button>
		</form>
	)
}

export default SearchBar

