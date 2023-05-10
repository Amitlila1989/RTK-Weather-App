import { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getAutoComplName, getCityName, getLocationKey
 } from "../../state/city.slice";
import { getDataAsync, getFutureDataAsync } from "../../state/forecast.slice";

const City = () => {
  const [cityName, setCityName] = useState("");
  const [showSugg, setShowSugg] = useState(false);
  const listOfCities = useSelector((state) => state.city.listCity);
  const dispatch = useDispatch();
    
  const handleSubmit = (e, item, city) => {
    e.preventDefault();
    dispatch(getCityName(cityName));
    console.log('handle submit', item)
    dispatch(getLocationKey(item.Key))
    dispatch(getDataAsync(item.Key));
    dispatch(getFutureDataAsync(item.Key));
    setShowSugg(false);
  };
    return (
      <Main>
      <Title>
      <form onSubmit={handleSubmit}>
      <input
        className="city-input"
        type="text"
        placeholder="Search a location..."
        value={cityName}
        onChange={(e) => {
          setShowSugg(true);
          setCityName(e.target.value);
          dispatch(getAutoComplName(e.target.value));
        }}
      />
      <CityList>
      {listOfCities && showSugg && (
        <ul className="suggestions">
          {listOfCities.slice(0, 5).map((item) => (
            <li
              className="sugg-item"
              key={item.id}
              onClick={(e) => {
                handleSubmit(e, item);
                setShowSugg(false);
              }}
            >
              {item.LocalizedName}, {item.Country.LocalizedName}
            </li>
          ))}
        </ul>
      )}
      </CityList>
    </form>
    </Title>
    </Main>
  );
};


export default City;

const Main = styled.main`
// background-color: #28aeff;
  // min-height: 180px;
  min-width: 180px;
  // padding: 5rem 0;
  // margin-top: 90px;
  // flex: 1;
  // display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px deeppink dashed;
`;

const Title = styled.form`
  margin-bottom: 1rem;
  line-height: 1.15;
  font-size: 4rem;
  text-align: center;
  // background-color: white;
  padding: 2.2rem 4.4rem;
  border-radius: 0.4rem;
  box-shadow: 0.2rem 0.2rem 2rem rgba(184, 187, 200, 0.3);

  label {
    display: block;
    margin-bottom: 0.5rem;
    font-size: 2.5rem;
    font-weight: bold;
  }

  input[type="text"] {
    padding: 0.5rem 1rem;
    font-size: 2.5rem;
    border-radius: 0.4rem;
    border: none;
    box-shadow: 0.2rem 0.2rem 2rem rgba(184, 187, 200, 0.3);
  }
`;

const CityList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const CityItem = styled.li`
  padding: 0.5rem;
  font-size: 1.5rem;
`;
