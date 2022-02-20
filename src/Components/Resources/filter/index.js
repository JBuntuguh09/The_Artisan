import React from "react"
import './index.scss'
import 'bootstrap/dist/css/bootstrap.min.css';

export const JobsFilter = ({placeholder, handleChange, users}) => {
    return (
        <div>
            <div className="py-3">
                <h5 className="font-weight-bold">Categories</h5>
                <ul className="list-group">
                    <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center category">Plumbers <span className="badge badge-primary badge-pill">328</span> </li>
                    <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center category">Carpenters <span className="badge badge-primary badge-pill">112</span> </li>
                    <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center category">Masons <span className="badge badge-primary badge-pill">32</span> </li>
                    <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center category">Labourers <span className="badge badge-primary badge-pill">48</span> </li>
                </ul>
            </div>
            <div className="py-3">
                <h5 className="font-weight-bold">Filters</h5>
                <form className="brand">
                    <div placeholder={placeholder} onChange={handleChange()} className="form-inline list-group-item d-flex align-items-center py-2"> <label className="tick">Plumbers <input value="chel" type="checkbox" /> <span className="check"></span> </label> </div>
                    <div placeholder={placeholder} onChange={handleChange()} className="form-inline list-group-item d-flex align-items-center py-2"> <label className="tick">Masons <input value="pat" type="checkbox" /> <span className="check"></span> </label> </div>
                    <div placeholder={placeholder} onChange={handleChange()} className="form-inline list-group-item d-flex align-items-center py-2"> <label className="tick">Carpenter <input value="kur" type="checkbox" /> <span className="check"></span> </label> </div>
                    <div placeholder={placeholder} onChange={handleChange()} className="form-inline list-group-item d-flex align-items-center py-2"> <label className="tick">Labourers <input value="nic" type="checkbox" /> <span className="check"></span> </label> </div>
                </form>
            </div>
        </div>
    );
}