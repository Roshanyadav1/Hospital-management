// import React from 'react'
'use client'
import { useEffect, useState } from 'react';
import { Grid } from "@mui/material"
import {
    ComposedChart,
    Line,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Area
} from "recharts";
import '@/components/App.css'

const data = [
    {
        name: "Sun",
        Pat: 29,
        App: 15,
        Doc: 4,
    },
    {
        name: "Mon",
        Pat: 32,
        App: 32,
        Doc: 5,
    },
    {
        name: "Tues",
        Pat: 38,
        App: 33,
        Doc: 4,
    },
    {
        name: "Wed",
        Pat: 32,
        App: 15,
        Doc: 7,
    },
    
    {
        name: "Thurs",
        Pat: 22,
        App: 19,
        Doc: 3,
    },
    {
        name: "Fri",
        Pat: 26,
        App: 9,
        Doc: 5,
    },
    {
        name: "Sat",
        Pat: 22,
        App: 15,
        Doc: 5,
    },
 
];

function Chart() {

    const [count, setCount] = useState(0);
    console.log(count)
    // Effect to start the counter when the component is mounted
    useEffect(() => {
        function counter(id, start, end, duration) {
            let obj = document.getElementById(id),
                current = start,
                range = end - start,
                increment = end > start ? 1 : -1,
                step = Math.abs(Math.floor(duration / range)),
                timer = setInterval(() => {
                    current += increment;
                    obj.textContent = current;
                    if (current === end) {
                        clearInterval(timer);
                    }
                }, step);
        }

        // Start the counter with the specified parameters
        counter("count1", 0, 1999, 1200);
        counter("count2", 0, 2999, 2000);


        // Set the count state to the end value
        setCount(1999);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); // Empty dependency array ensures the effect runs only once on mount


    return (
        <Grid container style={{ position: 'relative' }}>

            <Grid item xs={8} style={{ flexWrap: 'wrap' }}>
                <Grid container item p={2} mt={1} xs={12}  >
                    <Grid item xs={6} style={{ transition: 'box-shadow 0.3s' }}>
                        <div className="hov">
                        <div style={{position:'relative', height: '12rem', border: '1px solid black', marginRight: '1rem', borderRadius: '10px' }}>
                            <h4 style={{ textAlign:'center',fontSize:'2rem',fontFamily:'mainlux' }}>Patients</h4>
                            <div style={{position:'absolute', fontSize: '2rem', textAlign:'center',transform:'translate(-50%,-50%)' }} id="count1">99<span>+</span></div>
                        </div>
                        </div> 
                    </Grid>

                    <Grid className="hov" item xs={6} >
                        <div style={{ height: '12rem', border: '1px solid black', borderRadius: '10px' }}>
                            <h4 style={{ textAlign:'center',fontSize:'2rem',fontFamily:'mainlux' }}>Doctors</h4>
                            <div style={{ fontSize: '2rem', textAlign:'center' }} id="count2">99<span>+</span></div>
                        </div>
                    </Grid>
                </Grid>

                <Grid item xs={12} style={{ display: 'flex' }}>
                    <Grid item xs={12} p={1} >
                        <ComposedChart
                            width={680}
                            height={400}
                            data={data}
                        margin={{
                          top: 20,
                          right: 80,
                          bottom: 20,
                          left: 20
                        }}
                        >
                            <CartesianGrid stroke="#f5f5f5" />
                            <XAxis
                                dataKey="name"
                                label={{ value: "Days", position: "insideBottomRight", offset: -10 }}
                                // scale="band"
                            />
                            <YAxis label={{ value: "Quantity", angle: -90, position: "insideLeft" }} />
                            <Tooltip />
                            <Legend />
                            <Area type="monotone" dataKey="App" fill="#8884d8" stroke="#8884d8" />
                            <Bar dataKey="Pat" barSize={20} fill="#413ea0" />
                            <Line type="monotone" dataKey="Doc" stroke="#ff7300" />
                        </ComposedChart>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item xs={4} p={1} pl={3} >
                <div style={{ backgroundColor: '#13293D', height: '100%' }}>

                </div>
            </Grid>
        </Grid>


    )
}

export default Chart



