import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { noteAction } from "../Action/NoteAction";
import thumbnails from "../Data/Thunbnail";
import "../Mycss/AllCategory.css";



export default function Category() {
  const dispatch = useDispatch();

  const Notes = useSelector((state) => state.note);
  const { loading, allNotes } = Notes;
  console.log(`Notes`, allNotes)

  useEffect(() => {
    dispatch(noteAction());
  }, []);

  // console.log(`category page theke : `, noteInfo);
  // console.log(`category page theke : `, noteData);
  // filter section
  const key = "category";
  const arrayUniqueByKey = [
    ...new Map(allNotes.map((item) => [item[key], item])).values(),
  ];
  var rndval;

  return (
    <div className="category-main">
      <div className="row">
      {loading && <h1>loading</h1>}
        { arrayUniqueByKey.map(
          (Notecat) => (
            (rndval =
              thumbnails[Math.floor(Math.random() * thumbnails.length)]),
            (
              <div className="col-md-4 mt-2 px-2">
                <Link className="Link" to={`/all_notes/${Notecat.category}`}>
                  <div className="container-cat">
                    <div className="img">
                      <span className="px-3  py-1 customeBadge badge badge-pill badge-info">
                        {Notecat.category}
                      </span>
                      <img
                        style={{
                          objectFit: "cover",
                          width: "100%",
                          height: "30vh",
                        }}
                        className="img-fluid"
                        src={rndval}
                        alt=""
                      />
                    </div>
                    <div className="userInfo d-flex justify-content-between bg-danger text-white p-2">
                      <b>Dihan Abir</b>
                      <b>21/06/2021</b>
                    </div>
                    <div className="overlay">
                      <div className="text">
                        <h4> Read More..</h4>
                        <small>{Notecat.category}</small>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            )
          )
        )}
      </div>
    </div>
  );
}
