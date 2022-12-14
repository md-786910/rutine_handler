import React, { useState, useEffect } from 'react'
import { fetchRutine } from "../../api/index"

function EditFrom(props) {

    const [rutine, setRutine] = useState({
        s1: "-", m1: "-", t1: "-", w1: "-", th1: "-", f1: "-", st1: "-",
        s2: "-", m2: "-", t2: "-", w2: "-", th2: "-", f2: "-", st2: "-",
        s3: "-", m3: "-", t3: "-", w3: "-", th3: "-", f3: "-", st3: "-",
        s4: "-", m4: "-", t4: "-", w4: "-", th4: "-", f4: "-", st4: "-",
    })


    const [date, setDate] = useState("");
    const [load, setLoad] = useState(true)

    const rutineChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setRutine({ ...rutine, [name]: value })
    }

    const setTime = (e) => {
        const value = e.target.value
        setDate([...date, value])

    }
    // console.log(date)


    const fetchData = async () => {

        try {
            const data = await fetchRutine()
            if (data === undefined || data.length === 0) {
                // nothing do
            }
            else {
                setRutine(data[data.length - 1])
                setLoad(false)
            }

        } catch (error) {
            console.log("error from edit Form ", error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])


    // send data to parent from child
    // props.getRutineDetails({ load: load })
    props.getRutineDetails(rutine);


    return (

        // strp 1 
        <>
            <tr >
                <th scope="row">
                    <select name="time" id="" onChange={setTime}>
                        <option value="" disabled select>select one</option>
                        <option value="Morning">Morning</option>

                    </select>
                </th>
                <td>
                    <input type="text" name="s1" id="" placeholder="Add " value={rutine.s1} max-length="20" onChange={rutineChange} />
                </td>
                <td>
                    <input type="text" name="m1" id="" placeholder="Add " value={rutine.m1} max-length="20" onChange={rutineChange} />
                </td>
                <td>
                    <input type="text" name="t1" id="" placeholder="Add " value={rutine.t1} max-length="20" onChange={rutineChange} />

                </td>
                <td>
                    <input type="text" name="w1" id="" placeholder="Add " value={rutine.w1} max-length="20" onChange={rutineChange} />

                </td>
                <td>
                    <input type="text" name="th1" id="" placeholder="Add " value={rutine.th1} max-length="20" onChange={rutineChange} />

                </td>
                <td>
                    <input type="text" name="f1" id="" placeholder="Add " value={rutine.f1} max-length="20" onChange={rutineChange} />

                </td>
                <td>
                    <input type="text" name="st1" id="" placeholder="Add " value={rutine.st1} max-length="20" onChange={rutineChange} />

                </td>
            </tr>

            {/* // step 2 */}

            <tr >
                <th scope="row">
                    <select name="time" id="" onChange={setTime}>
                        <option value="" disabled select>select one</option>
                        <option value="AfterNoon">After Noon</option>
                    </select>
                </th>
                <td>
                    <input type="text" name="s2" id="" placeholder="Add " value={rutine.s2} max-length="20" onChange={rutineChange} />
                </td>
                <td>
                    <input type="text" name="m2" id="" placeholder="Add " value={rutine.m2} max-length="20" onChange={rutineChange} />
                </td>
                <td>
                    <input type="text" name="t2" id="" placeholder="Add " value={rutine.t2} max-length="20" onChange={rutineChange} />

                </td>
                <td>
                    <input type="text" name="w2" id="" placeholder="Add " value={rutine.w2} max-length="20" onChange={rutineChange} />

                </td>
                <td>
                    <input type="text" name="th2" id="" placeholder="Add " value={rutine.th2} max-length="20" onChange={rutineChange} />

                </td>
                <td>
                    <input type="text" name="f2" id="" placeholder="Add " value={rutine.f2} max-length="20" onChange={rutineChange} />

                </td>
                <td>
                    <input type="text" name="st2" id="" placeholder="Add " value={rutine.st2} max-length="20" onChange={rutineChange} />

                </td>
            </tr>


            {/* step 3 */}

            <tr >
                <th scope="row">
                    <select name="time" id="" onChange={setTime}>
                        <option value="" disabled select>select one</option>

                        <option value="Evening">Evening</option>

                    </select>
                </th>
                <td>
                    <input type="text" name="s3" id="" placeholder="Add " value={rutine.s3} max-length="20" onChange={rutineChange} />
                </td>
                <td>
                    <input type="text" name="m3" id="" placeholder="Add " value={rutine.m3} max-length="20" onChange={rutineChange} />
                </td>
                <td>
                    <input type="text" name="t3" id="" placeholder="Add " value={rutine.t3} max-length="20" onChange={rutineChange} />

                </td>
                <td>
                    <input type="text" name="w3" id="" placeholder="Add " value={rutine.w3} max-length="20" onChange={rutineChange} />

                </td>
                <td>
                    <input type="text" name="th3" id="" placeholder="Add " value={rutine.th3} max-length="20" onChange={rutineChange} />

                </td>
                <td>
                    <input type="text" name="f3" id="" placeholder="Add " value={rutine.f3} max-length="20" onChange={rutineChange} />

                </td>
                <td>
                    <input type="text" name="st3" id="" placeholder="Add " value={rutine.st3} max-length="20" onChange={rutineChange} />

                </td>
            </tr>

            {/* step 4 */}

            <tr >
                <th scope="row">
                    <select name="time" id="" onChange={setTime}>
                        <option value="" select disabled>select one</option>
                        <option value="Night">Night</option>
                    </select>
                </th>
                <td>
                    <input type="text" name="s4" id="" placeholder="Add " value={rutine.s4} max-length="20" onChange={rutineChange} />
                </td>
                <td>
                    <input type="text" name="m4" id="" placeholder="Add " value={rutine.m4} max-length="20" onChange={rutineChange} />
                </td>
                <td>
                    <input type="text" name="t4" id="" placeholder="Add " value={rutine.t4} max-length="20" onChange={rutineChange} />

                </td>
                <td>
                    <input type="text" name="w4" id="" placeholder="Add " value={rutine.w4} max-length="20" onChange={rutineChange} />

                </td>
                <td>
                    <input type="text" name="th4" id="" placeholder="Add " value={rutine.th4} max-length="20" onChange={rutineChange} />

                </td>
                <td>
                    <input type="text" name="f4" id="" placeholder="Add " value={rutine.f4} max-length="20" onChange={rutineChange} />

                </td>
                <td>
                    <input type="text" name="st4" id="" placeholder="Add " value={rutine.st4} max-length="20" onChange={rutineChange} />

                </td>
            </tr>



        </>
    )
}

export default EditFrom
