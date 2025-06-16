import Cityitem from "./CityItem"
import styles from  "./CityList.module.css"
import Message from "./Message"
import Spinner from "./Spinner"

export default function CityList({ cities, isLoading }) {
    if(isLoading) return <Spinner />

    if(cities.length) 
      return (<Message message='Add your first city by clicking on a city on the Map'/>)

  return (
    <ul className={styles.cityList}>
        {cities.map((city) => (
            <Cityitem city={city} key={city.id} />
        ))}
    </ul>
  )
}
