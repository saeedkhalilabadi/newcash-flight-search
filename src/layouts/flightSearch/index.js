import React, { useEffect, useState } from 'react';
import { searchCity } from '../../api/api';
import SelectBox from '../../components/selectBox';
import Button from '../../components/button';
import './index.css';
import DateInput from '../../components/dateInput';
import NumberOfPeopleInput from '../../components/numberOfPeopleInput';
import flightSearchDataVaidate from '../../helpers/flightSearchDataVaidate';


export default function FlightSearch() {
    const [fromText, setFromText] = useState(''); //search text for the origin city
    const [toText, setToText] = useState('');  //search text for the ami city
    const [cities, setCities] = useState([]);  //list of citis after search
    const [from, setFrom] = useState(null);    //selected the origin city
    const [to, setTo] = useState(null);      //selected the aim city
    const [count, setCount] = useState(null);   //set count of the traveler
    const [date, setDate] = useState(null);      //set the date 
    const [error, setError] = useState(null);    //Errors object

    useEffect(() => {
        getData(toText);
    }, [toText]);

    useEffect(() => {
        getData(fromText);
    }, [fromText]);


    //get list of city by search   
    async function getData(name) {
        let data = await searchCity(name);
        if (data?.status)
            setCities(data?.data)
    }

    //handel set informaion the origin city
    const handelChangeFrom = (text) => {
        setFromText(text);
        setFrom(null);

    }
    //handel set informaion the aim city
    const handelChangeTo = (text) => {
        setToText(text);
        setTo(null)

    }
    //validate date 
    const CheckValidate = (params) => {
        setError(flightSearchDataVaidate(params));

    }
    // validate & send data to server 
    const handelSubmit = () => {
        CheckValidate({ from, to, date, count })

        if (error?.from === null && error?.to === null && error?.date === null && error?.count === null) {
            //hear can send data to server and get flights
            console.log('data:', { from, to, date, count })
        }
    }

    //filter cities for the orijin selectBox
    function getCitiesFrom(cities) {
        return cities?.filter(city => city.id !== to?.id)
    }
    //filter cities for the aim selectBox
    function getCitiesTo(cities) {
        return cities?.filter(city => city.id !== from?.id)
    }


    return <div className='fightSearch'>
        <SelectBox
            data={getCitiesFrom(cities?.city)}
            error={error?.from}
            value={from?.name ?? fromText}
            onChange={(e) => handelChangeFrom(e.target.value)}
            lable='from'
            onSelect={setFrom}
        />
        <SelectBox
            data={getCitiesTo(cities?.city)}
            error={error?.to}
            value={to?.name ?? toText}
            onChange={(e) => handelChangeTo(e.target.value)}
            onSelect={setTo}
            lable='to'
        />
        <DateInput onChange={(e) => setDate(e.target.value)} value={date} error={error?.date} lable={'date'} />
        <NumberOfPeopleInput value={count} error={error?.count} label='number' onChange={(e) => setCount(e.target.value)} />
        <Button onClick={handelSubmit} >submit</Button>
    </div>
        ;
}