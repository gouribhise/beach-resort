import React from 'react';
import {useContext} from  'react';
import {RoomContext} from '../context'
import Title from '../components/Title'
const getUnique=(items,value)=>{
return[...new Set(items.map(item=>item[value]))]
}
export default function RoomsFilter({rooms}){
  const context=useContext(RoomContext);
  const{handleChange,type,capacity,price,minPrice,maxPrice,
  minSize,maxSize,breakfast,pets}=context;
  //get unique room types
  let types=getUnique(rooms,'type');
  types=(['all',...types]);
  //map to jsx
  types=types.map((item,index)=>{
    return <option value={item} key={index}>{item}</option>
  })
  //guest capacity
  let people = getUnique(rooms, "capacity");
 people = people.map((item, index) => (
   <option key={index} value={item}>
     {item}
   </option>
 ));
  return(
  <section className="filter-container">
     <Title title="search rooms"/>
     <form className="filter-form">
     {/*select type*/}
        <div className="form-group">
          <label htmlFor="type" id="">room type</label>
          <select name="type" id="type" value={type} className="form-control"
          onChange={handleChange}>
          {types}
          </select>
        </div>
        {/*end select type*/}
        {/*guest */}
           <div className="form-group">
             <label htmlFor="capacity" id="">Guests</label>
             <select name="capacity" id="capacity" value={capacity}
              className="form-control"
             onChange={handleChange}>
             {people}
             </select>
           </div>
           {/*end guest*/}

     </form>
  </section>
  )
}
