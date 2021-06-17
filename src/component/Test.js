import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { noteAction } from "../Action/NoteAction";
import "../Mycss/AllCategory.css";


export default function Test() {
  const dispatch = useDispatch();

  const Notes = useSelector((state) => state.note);
    // console.log(`Notes`, Notes)
    const { loading, allNotes } = Notes;
    console.log(`Notes`, allNotes)

    if(Array.isArray(allNotes)) {
        //Its an array
        console.log('it is an array')
    }
    
  useEffect(() => {
    dispatch(noteAction());
  }, []);

  console.log(`category page theke : `, allNotes);  

  return (
    <div className="category-main">
       {loading && <h1>loading</h1>}
       
       {allNotes.map(note=>(
         <div className='border'>

           <p>{note.title}</p>
           <p>{note.category}</p>
           
         </div>
       )) }

    </div>
  );
}
