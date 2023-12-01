// import React from 'react'
'use client'
// import * as React from 'react';
import { useEffect, useState } from 'react';
import { Grid } from "@mui/material"
import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import Divider from '@mui/material/Divider';
// import ListItemText from '@mui/material/ListItemText';
// import ListItemAvatar from '@mui/material/ListItemAvatar';
// import Avatar from '@mui/material/Avatar';
// import Typography from '@mui/material/Typography';
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
import CommonListItem from './CommonListItem';
import Image from 'next/image'
import Doc from './Doc.png'

const data = [
    {
        name: "Sun",
        Patients: 29,
        Appoints: 15,
        Doctors: 4,
    },
    {
        name: "Mon",
        Patients: 32,
        Appoints: 32,
        Doctors: 5,
    },
    {
        name: "Tues",
        Patients: 38,
        Appoints: 33,
        Doctors: 4,
    },
    {
        name: "Wed",
        Patients: 32,
        Appoints: 15,
        Doctors: 7,
    },

    {
        name: "Thurs",
        Patients: 22,
        Appoints: 19,
        Doctors: 3,
    },
    {
        name: "Fri",
        Patients: 26,
        Appoints: 9,
        Doctors: 5,
    },
    {
        name: "Sat",
        Patients: 22,
        Appoints: 15,
        Doctors: 5,
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
        counter("count1", 0, 1999, 600);
        counter("count2", 0, 2999, 800);


        // Set the count state to the end value
        setCount(1999);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); // Empty dependency array ensures the effect runs only once on mount

    const Data = [
        {
            avatarSrc: "https://st2.depositphotos.com/45049140/44509/v/450/depositphotos_445090736-stock-illustration-flat-male-doctor-avatar-in.jpg",
            primaryText: "Brunch this weekend?",
            secondaryText: "Ali Connors — I'll be in your neighborhood doing errands this…",
        },
        {
            avatarSrc: "https://t4.ftcdn.net/jpg/01/34/29/31/360_F_134293169_ymHT6Lufl0i94WzyE0NNMyDkiMCH9HWx.jpg",
            primaryText: "Andonia tonight?",
            secondaryText: "Sorry, I have other plans already...",
        },
        {
            avatarSrc: "https://t4.ftcdn.net/jpg/01/34/29/31/360_F_134293169_ymHT6Lufl0i94WzyE0NNMyDkiMCH9HWx.jpg",
            primaryText: "DPplans ?",
            secondaryText: " I have other plans already...",
        },
        {
            avatarSrc: "https://t4.ftcdn.net/jpg/01/34/29/31/360_F_134293169_ymHT6Lufl0i94WzyE0NNMyDkiMCH9HWx.jpg",
            primaryText: "Actonr plans for tonight?",
            secondaryText: "Steve Smith — Sorry, I have other plans already...",
        },
        {
            avatarSrc: "https://t4.ftcdn.net/jpg/01/34/29/31/360_F_134293169_ymHT6Lufl0i94WzyE0NNMyDkiMCH9HWx.jpg",
            primaryText: "Star Price road",
            secondaryText: "Sorry, I have other plans already...",
        },
        {
            avatarSrc: "https://t4.ftcdn.net/jpg/01/34/29/31/360_F_134293169_ymHT6Lufl0i94WzyE0NNMyDkiMCH9HWx.jpg",
            primaryText: "Aquaf for tonight?",
            secondaryText: "Smith — Sorry, ...",
        },
        {
            avatarSrc: "https://t4.ftcdn.net/jpg/01/34/29/31/360_F_134293169_ymHT6Lufl0i94WzyE0NNMyDkiMCH9HWx.jpg",
            primaryText: "Dinner plans for tonight?",
            secondaryText: "Bob Smith — Sorry, I have other plans already...",
        },
        {
            avatarSrc: "https://t4.ftcdn.net/jpg/01/34/29/31/360_F_134293169_ymHT6Lufl0i94WzyE0NNMyDkiMCH9HWx.jpg",
            primaryText: "Dinner plans for tonight?",
            secondaryText: "Bob Smith — Sorry, I have other plans already...",
        },
        {
            avatarSrc: "https://t4.ftcdn.net/jpg/01/34/29/31/360_F_134293169_ymHT6Lufl0i94WzyE0NNMyDkiMCH9HWx.jpg",
            primaryText: "Dinner",
            secondaryText: " other plans already...",
        },
        {
            avatarSrc: "https://t4.ftcdn.net/jpg/01/34/29/31/360_F_134293169_ymHT6Lufl0i94WzyE0NNMyDkiMCH9HWx.jpg",
            primaryText: " for tonight?",
            secondaryText: " — Sorry, I have other plans already...",
        },
        // Add more data objects as needed
    ];

    return (
        <Grid container >

            <Grid item xs={8} style={{ flexWrap: 'wrap' }}>
                <Grid container item p={2} mt={1} xs={12}  >
                    <Grid  item xs={6} style={{ transition: 'box-shadow 0.3s'}} >
                        <div className="hov">
                            <div style={{background: 'linear-gradient(135deg,  #006494,#35CFF4, #35CFF4,#AEE3F0)', height: '10rem',  boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'  ,marginRight: '1rem', borderRadius: '10px' }}>
                             <Grid style={{display:'flex'}} item xs={12}>
                             <Grid itme xs={6}>
                               <h4  style={{ marginBottom:'0',paddingLeft:'2rem',  fontSize: '2rem', fontFamily: 'mainlux' }}>Patients</h4>
                                <span style={{paddingLeft:'2rem', color:'white', fontSize: '1.52rem' }} id="count1"></span>
                                <span style={{ color:'white', fontSize: '1.52rem'}}>+</span>
                               </Grid >
                               <Grid item xs={6}>
                              
                               </Grid>
                             </Grid>
                            </div>
                        </div>
                    </Grid>

                    <Grid className="hov" item xs={6} >
                        <div style={{ background: 'linear-gradient(-35deg,  #006494,#35CFF4, #35CFF4,#AEE3F0)' ,height: '10rem', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' , borderRadius: '10px' }}>
                        <Grid style={{display:'flex'}} item xs={12}>
                             <Grid itme xs={6}>
                             <h4 style={{paddingLeft:'2rem', marginBottom:'0',  fontSize: '2rem', fontFamily: 'mainlux' }}>Doctors</h4>
                            <span style={{paddingLeft:'2.5rem', color:'white', fontSize: '1.52rem' }} id="count2"></span>
                            <span style={{ color:'white', fontSize: '1.52rem'}}>+</span>

                               </Grid >
                               <Grid item xs={6}>
                                <div  style={{width:'70%',height:'100%',marginTop:'10%',marginLeft:'10%',backgroundColor:'white', paddingTop:'10px',borderRadius:'50%', position:'relative'}}>
                                <Image style={{position:'absolute',transform:'translate(15%)'}} height={100} width={100}  src={Doc}/>
                                </div>
                            

                               </Grid>
                             </Grid>
                           
                        </div>
                    </Grid>
                </Grid>

                <Grid p={2} item xs={12} style={{ display: 'flex' }}>
                    <Grid item xs={12} p={2}  style={{
                                boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',borderRadius: '5px' ,backgroundColor:'#FAFAFA'
                            }}>
                        <ComposedChart
                            width={680}
                            height={380}
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
                            <Area  type="monotone" dataKey="Appoints" fill="#35CFF4" stroke="#35CFF4" />
                            <Bar dataKey="Patients" barSize={20} fill="#244C73" />
                            <Line type="monotone" dataKey="Doctors" stroke="#ff7300" />
                        </ComposedChart>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item xs={4} p={1} pl={3}  >
                {/* <div style={{ backgroundColor: '#13293D' }}> */}

                <List style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',borderRadius: '5px', overflowY: 'scroll', height: 'calc(100vh - 90px)', backgroundColor: '#13293D' }} className='Colo' sx={{ width: '100%', maxWidth: 360 }}>

                    <h2 className='Colo' style={{ textAlign: 'center' }}>Appointments</h2>
                    {Data.map((item, index) => (
                        <CommonListItem
                            key={index}
                            avatarSrc={item.avatarSrc}
                            primaryText={item.primaryText}
                            secondaryText={item.secondaryText}
                        />
                    ))}

                </List>
                {/* </div> */}
            </Grid>
        </Grid>


    )
}

export default Chart



