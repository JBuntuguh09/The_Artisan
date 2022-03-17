import React from "react"
import './filter.styles.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import { categories } from "../data";
import { locations } from "../data";

export const JobsFilter = ({ handleFilterChange }) => {
   
    const toCamelCase = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    };

    return (
        <div>
            <div className="py-3">
                <details open>
                    <summary><h5 className="font-weight-bold">Category</h5></summary>
                    <form className="brand">
                        {categories.map(cat => {
                            return <div key={cat.id} className="form-inline list-group-item d-flex align-items-between py-2"> <label className="tick">{toCamelCase(cat.type)} <input onChange={handleFilterChange} value={cat.value} type="checkbox" /> <span className="badge badge-primary badge-pill text-dark justify-content-between">{cat.count}</span>  </label> </div>
                        })}
                    </form>
                </details>
            </div>
            <div className="py-3">
                <details>
                    <summary>
                        <h5 className="font-weight-bold">Location</h5>
                    </summary>
                    <form className="brand">
                        {locations.map(location => {
                            return <div key={location.id}  className="form-inline list-group-item d-flex align-items-center py-2"> <label className="tick">{toCamelCase(location.city)} <input onChange={handleFilterChange} value={location.value} type="checkbox" /> <span className="check"></span> </label> </div>
                        })}
                    </form>
                </details>
            </div>
        </div>
    );
}