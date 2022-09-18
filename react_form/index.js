import { useState } from "react";

import "./styles.css";

export default function App() {
    const [feildsData, setFeildsData] = useState({ vehicle: [] });
    const getValue = (e) => {
        const { name, value } = e.target;
        let newVehicles = [];
        if (name === "vehicle") {
            if (feildsData?.vehicle.includes(value)) {
                newVehicles = feildsData?.vehicle.filter((val) => val !== value);
            } else {
                newVehicles = [...feildsData?.vehicle, value];
            }
            [...feildsData?.vehicle, value];
        }
        setFeildsData({
            ...feildsData,
            [name]: name === "vehicle" ? newVehicles : value
        });
    };
    const onFormSubmit = (e) => {
        e.preventDefault();
        // new way to get the values of form without using state
        const myForm = new FormData(e.target);
        console.log("First Name", myForm.get("firstName"));
        console.log("Last Name", myForm.get("lastName"));
        console.log("Gender", myForm.get("gender"));
        console.log("Nationality", myForm.get("nationality"));

        // submit into API

        fetch('/uri', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.Stingify(data)
        }).then(res => res.json()).then(result => console.log(result))

    };

    console.log("FIELDS DATA::", feildsData);
    return (
        <div className="App" name="myform">
            <form onSubmit={onFormSubmit}>
                <div>
                    <label for="firstName">First Name:</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        onChange={getValue}
                    />
                </div>
                <div>
                    <label for="lastName">Last Name:</label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        onChange={getValue}
                    />
                </div>
                <div>
                    <label>Gender: </label>
                    <span>
                        <label for="male">Male</label>
                        <input
                            onChange={getValue}
                            type="radio"
                            id="male"
                            name="gender"
                            value="male"
                        />
                        <label for="female">Female</label>
                        <input
                            onChange={getValue}
                            type="radio"
                            id="female"
                            name="gender"
                            value="female"
                        />
                    </span>
                </div>
                <div>
                    <label for="nationality">Nationality</label>
                    <select id="nationality" name="nationality" onChange={getValue}>
                        <option value="indian">Indian</option>
                        <option value="american">American</option>
                    </select>
                </div>
                <div>
                    <input
                        type="checkbox"
                        onChange={getValue}
                        id="vehicle1"
                        name="vehicle"
                        value="Bike"
                    />
                    <label for="vehicle1"> I have a bike</label>
                    <input
                        type="checkbox"
                        onChange={getValue}
                        id="vehicle2"
                        name="vehicle"
                        value="Car"
                    />
                    <label for="vehicle2"> I have a car</label>
                    <input
                        type="checkbox"
                        onChange={getValue}
                        id="vehicle3"
                        name="vehicle"
                        value="Boat"
                    />
                    <label for="vehicle3"> I have a boat</label>
                </div>
                <div>
                    <input type="submit" value="submit" />
                </div>
            </form>
        </div>
    );
}
