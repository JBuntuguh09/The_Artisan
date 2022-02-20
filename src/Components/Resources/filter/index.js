import React from "react"
import './index.scss'
import 'bootstrap/dist/css/bootstrap.min.css';

export const JobsFilter = ({ handleChange }) => {
    const categories = [{
        id: 1,
        type: 'plumbers',
        count: 328,
        value: 'chel'
    }, {
        id: 2,
        type: 'carpenters',
        count: 112,
        value: 'pat'
    }, {
        id: 3,
        type: 'masons',
        count: 32,
        value: 'kur'
    }, {
        id: 4,
        type: 'labourers',
        count: 48,
        value: 'nic'
    },]
    const toCamelCase = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    };

    return (
        <div>
            <div className="py-3">
                <h5 className="font-weight-bold">Categories</h5>
                <ul className="list-group">
                    {categories.map(cat => {
                        return <li key={cat.id} className="list-group-item list-group-item-action d-flex justify-content-between align-items-center category">{toCamelCase(cat.type)} <span className="badge badge-primary badge-pill text-dark">{cat.count}</span> </li>
                    })}
                </ul>
            </div>
            <div className="py-3">
                <h5 className="font-weight-bold">Filters</h5>
                <form className="brand">
                    {categories.map(cat => {
                        return <div key={cat.id} onChange={handleChange()} className="form-inline list-group-item d-flex align-items-center py-2"> <label className="tick">{toCamelCase(cat.type)} <input value={cat.value} type="checkbox" /> <span className="check"></span> </label> </div>
                    })}
                </form>
            </div>
        </div>
    );
}