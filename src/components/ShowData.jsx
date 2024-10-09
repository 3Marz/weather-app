

export default function ShowData({data, icon}) {

	return (
		<div className="transition-all *:drop-shadow-lg text-white space-y-6 flex flex-col justify-center place-items-center">
			<img className="w-[128px] h-[128px]" src={icon} alt="" />
			<div className="relative bottom-10 flex flex-col justify-center place-items-center space-y-3">
				<div className="flex">
					<h1 className="duration-500 flex text-5xl md:text-8xl font-semibold">{data.current.temp_c}</h1>		
					<p>o</p>
				</div>
				<h1 className="duration-500 text-3xl md:text-5xl text-center">{data.location.name}</h1>
				<h3 className="">{data.location.country}</h3>
			</div>

			<div className="duration-500 space-x-3 md:space-x-6 flex text-center items-center">

				<div className="flex flex-col justify-center items-center">
					<div className="flex">
						<h1 className="duration-500 text-3xl md:text-5xl">{data.current.feelslike_c}</h1>
						<h1>o</h1>
						<h1 className="relative top-5 duration-500 text-sm md:text-lg font-bold"> C</h1>
					</div>
					<h1>Feels like</h1>
				</div>

				<div className="border h-20 border-gray-300"></div>
				
				<div className="flex flex-col justify-center items-center">
					<img className="w-14 md:w-24 filter invert-[100%] duration-500" src="/wi-strong-wind.svg" alt="" />
					<h1>{data.current.wind_dir+" "+data.current.wind_kph+"kp/h"}</h1>
				</div>	

				<div className="border h-20 border-gray-300"></div>

				<div className="flex flex-col justify-center items-center">
					<img className="scale-100 md:scale-150 filter invert-[100%] duration-500" src="/wi-humidity.svg" alt="" />
					<h1>Humidity</h1>
					<h1>{data.current.humidity+"%"}</h1>
				</div>	
			</div>
		</div>
	)
}
