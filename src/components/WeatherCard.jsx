
import {useEffect, useState} from 'react';
import ShowData from "./ShowData.jsx"
import Loading from './Loading.jsx';

const API_KEY = import.meta.env.VITE_WEATHER_APIKEY

function WeatherCard({query}) {

	const [weatherData, setWeatherData] = useState({})
	const [iconPath, setIconPath] = useState("")
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		if (!query) {
			setLoading(false)
			return
		}
		
		setLoading(true)
		const apiUrl = "http://api.weatherapi.com/v1/current.json?key="+API_KEY+"&q="+query

		fetch(apiUrl)
			.then((response) => {return response.json()})
			.then((data) => {
				setWeatherData(data); 
				setLoading(false)
			})
			.catch(err => console.error(err))

	}, [query])

	useEffect(() => {
		if (!weatherData.current) {
			return
		}
		
		let ipath = weatherData.current.condition.icon
		ipath = ipath.replace("64x64", "128x128")

		setIconPath(ipath)

	}, [weatherData])

	return (
		<div className="gap-2 grid w-[100vw] h-[65vh]">
			{loading ? // IF
				<Loading />
					: //Else
				weatherData.current ?
					<ShowData data={weatherData} icon={iconPath}/>
						:
					<h1 className="drop-shadow-lg text-2xl text-white font-semibold m-auto">No City Found</h1>
			}
			
		</div>
	)
}

export default WeatherCard
