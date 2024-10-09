
import WeatherCard from './components/WeatherCard.jsx';
import SearchBar from './components/SearchBar.jsx';
import {useState} from 'react';


function App() {
	
	const [search, setSearch] = useState("")	

  return (
    <div className="gap-4 flex flex-col justify-center place-items-center bg-gradient-to-br from-indigo-400 to-purple-400 w-[100%] h-[100dvh]">
    	<SearchBar setter={setSearch} value={search}/>
    	<WeatherCard query={search}/>
   	</div>
  )
}

export default App
