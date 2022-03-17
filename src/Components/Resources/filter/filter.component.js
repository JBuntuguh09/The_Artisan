import React from "react"
import './filter.styles.scss'
import 'bootstrap/dist/css/bootstrap.min.css';

export const JobsFilter = ({ handleFilterChange }) => {
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
    }]

    const locations = [{
        id: 100,
        city: 'accra',
        value: 'Gwenborough'
    }, {
        id: 200,
        city: 'tema',
        value: 'Wisokyburgh'
    }, {
        id: 300,
        city: 'kumasi',
        value: 'McKenziehaven'
    }, {
        id: 400,
        city: 'sunyani',
        value: 'South Elvis"'
    }, {
        id: 500,
        city: 'takoradi',
        value: 'Roscoeview'
    }, {
        id: 600,
        city: 'tamale',
        value: 'South Christy'
    }, {
        id: 701,
        city: 'cape coast',
        value: 'Howemouth'
    }, {
        id: 801,
        city: 'bolga',
        value: 'Aliyaview'
    }]

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