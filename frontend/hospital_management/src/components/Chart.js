'use client'
import { useEffect, useState } from 'react';
import { Grid } from "@mui/material"
import List from '@mui/material/List';
import { useGetAllDoctorsQuery } from '@/services/Query';
import { useGetAllPatientsQuery } from '@/services/Query';
import { useGetGraphAppointInfoQuery } from '@/services/Query';
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
        Appoints: 25,
        Doctors: 6,
    },
    {
        name: "Mon",
        Patients: 32,
        Appoints: 32,
        Doctors: 11,
    },
    {
        name: "Tues",
        Patients: 38,
        Appoints: 23,
        Doctors: 4,
    },
    {
        name: "Wed",
        Patients: 32,
        Appoints: 27,
        Doctors: 7,
    },

    {
        name: "Thurs",
        Patients: 22,
        Appoints: 15,
        Doctors: 3,
    },
    {
        name: "Fri",
        Patients: 26,
        Appoints: 19,
        Doctors: 9,
    },
    {
        name: "Sat",
        Patients: 22,
        Appoints: 15,
        Doctors: 7,
    },

];

function Chart() {

    const { data: ViewDoctor } = useGetAllDoctorsQuery();
    const { data: ViewPatient } = useGetAllPatientsQuery();

    const { data: appointmentData } = useGetGraphAppointInfoQuery();
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  console.log(count1,count2)

  useEffect(() => {
    if (ViewDoctor && ViewDoctor.count !== undefined) {
      setCount1(ViewDoctor.count);
    }
    if (ViewPatient && ViewPatient.count !== undefined) {
      setCount2(ViewPatient.count);
    }
    document.getElementById("count1").textContent = "";
    document.getElementById("count2").textContent = "";
    if (ViewDoctor && ViewPatient && ViewDoctor.count !== undefined && ViewPatient.count !== undefined) {
      startCounters();
    }
    function startCounters() {
      counter("count1", 0, ViewDoctor.count, 1250);
      counter("count2", 0, ViewPatient.count, 1000);
    }
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
  }, [ViewDoctor, ViewPatient]);

  const Data = appointmentData?.data?.map((appointment) => {
    let diseaseSpecialist = "";
    if (Array.isArray(appointment.doctor.disease_specialist)) {
      diseaseSpecialist = appointment.doctor.disease_specialist.join(', ');
    } else {
      diseaseSpecialist = appointment.doctor.disease_specialist || "";
    }

    return {
      avatarSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMjX02hunzz3i3dG7PG7J2AM61C5AVahSHBg&usqp=CAU",
      primaryText: appointment.doctor.employee.employee_name,
      secondaryText: `Appointment Date: ${appointment.appointment_date}`,
      disease_names: `Disease Specialist: ${diseaseSpecialist}`,
      patient_name: `Patient Name: ${appointment.patient.patient_name}`,
    };
});

    // const Data = [
    //     {
    //         avatarSrc: "https://st2.depositphotos.com/45049140/44509/v/450/depositphotos_445090736-stock-illustration-flat-male-doctor-avatar-in.jpg",
    //         primaryText: "Brunch this weekend?",
    //         secondaryText: "Ali Connors — I'll be in your neighborhood doing errands this…",
    //     },
    //     {
    //         avatarSrc: "https://t4.ftcdn.net/jpg/01/34/29/31/360_F_134293169_ymHT6Lufl0i94WzyE0NNMyDkiMCH9HWx.jpg",
    //         primaryText: "Andonia tonight?",
    //         secondaryText: "Sorry, I have other plans already...",
    //     },
    //     {
    //         avatarSrc: "https://t4.ftcdn.net/jpg/01/34/29/31/360_F_134293169_ymHT6Lufl0i94WzyE0NNMyDkiMCH9HWx.jpg",
    //         primaryText: "DPplans ?",
    //         secondaryText: " I have other plans already...",
    //     },
    //     {
    //         avatarSrc: "https://t4.ftcdn.net/jpg/01/34/29/31/360_F_134293169_ymHT6Lufl0i94WzyE0NNMyDkiMCH9HWx.jpg",
    //         primaryText: "Actonr plans for tonight?",
    //         secondaryText: "Steve Smith — Sorry, I have other plans already...",
    //     },
    //     {
    //         avatarSrc: "https://t4.ftcdn.net/jpg/01/34/29/31/360_F_134293169_ymHT6Lufl0i94WzyE0NNMyDkiMCH9HWx.jpg",
    //         primaryText: "Star Price road",
    //         secondaryText: "Sorry, I have other plans already...",
    //     },
    //     {
    //         avatarSrc: "https://t4.ftcdn.net/jpg/01/34/29/31/360_F_134293169_ymHT6Lufl0i94WzyE0NNMyDkiMCH9HWx.jpg",
    //         primaryText: "Aquaf for tonight?",
    //         secondaryText: "Smith — Sorry, ...",
    //     },
    //     {
    //         avatarSrc: "https://t4.ftcdn.net/jpg/01/34/29/31/360_F_134293169_ymHT6Lufl0i94WzyE0NNMyDkiMCH9HWx.jpg",
    //         primaryText: "Dinner plans for tonight?",
    //         secondaryText: "Bob Smith — Sorry, I have other plans already...",
    //     },
    //     {
    //         avatarSrc: "https://t4.ftcdn.net/jpg/01/34/29/31/360_F_134293169_ymHT6Lufl0i94WzyE0NNMyDkiMCH9HWx.jpg",
    //         primaryText: "Dinner plans for tonight?",
    //         secondaryText: "Bob Smith — Sorry, I have other plans already...",
    //     },
    //     {
    //         avatarSrc: "https://t4.ftcdn.net/jpg/01/34/29/31/360_F_134293169_ymHT6Lufl0i94WzyE0NNMyDkiMCH9HWx.jpg",
    //         primaryText: "Dinner",
    //         secondaryText: " other plans already...",
    //     },
    //     {
    //         avatarSrc: "https://t4.ftcdn.net/jpg/01/34/29/31/360_F_134293169_ymHT6Lufl0i94WzyE0NNMyDkiMCH9HWx.jpg",
    //         primaryText: " for tonight?",
    //         secondaryText: " — Sorry, I have other plans already...",
    //     },
    //     // Add more data objects as needed
    // ];

    return (
        <Grid container >

            <Grid item xs={8} style={{ flexWrap: 'wrap' }}>
                <Grid container item  mt={1} xs={12}  >
                    <Grid  item xs={6} style={{ transition: 'box-shadow 0.3s'}} >
                        <div className="hov">
                            <div style={{background: 'linear-gradient(135deg,#006494,#35CFF4)', height: '10rem',  boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'  ,marginRight: '1rem', borderRadius: '10px' }}>
                             <Grid style={{display:'flex'}} item xs={12}>
                             <Grid itme xs={6}>
                               <h4  style={{color:'white',  marginBottom:'0',paddingLeft:'2rem',  fontSize: '2rem', fontFamily: 'mainlux' }}>Patients</h4>
                                <span style={{paddingLeft:'2rem', color:'white', fontSize: '1.52rem' }} id="count2"></span>
                                <span style={{ color:'white', fontSize: '1.52rem'}}>+</span>
                               </Grid >
                               <Grid item xs={6}>
                                  {/* <div style={{backgroundColor:'white', borderTopLeftRadius:'50%',maxWidth:'5rem',height:'100px'}}></div> */}
                               </Grid>
                             </Grid>
                            </div>
                        </div>
                    </Grid>

                    <Grid className="hov" item xs={6} >
                        <div style={{ background: 'linear-gradient(-35deg, #35CFF4,#006494)' ,height: '10rem', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' , borderRadius: '10px' }}>
                        <Grid style={{display:'flex'}} item xs={12}>
                             <Grid itme xs={6}>
                             <h4 style={{color:'white',  paddingLeft:'2rem', marginBottom:'0',  fontSize: '2rem', fontFamily: 'mainlux' }}>Doctors</h4>
                            <span style={{paddingLeft:'2.5rem', color:'white', fontSize: '1.52rem' }} id="count1"></span>
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

                <Grid pt={3} item xs={12} style={{ display: 'flex' }}>
                    <Grid item xs={12}  style={{
                                boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',borderRadius: '5px' ,backgroundColor:'#FAFAFA',paddingTop:'1.5rem', paddingLeft:'2rem'
                            }}>
                        <ComposedChart
                            width={650}
                            height={420}
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
                            <Area  type="monotone" dataKey="Appoints" fill="#AEE3F0" stroke="#AEE3F0" />
                            <Bar dataKey="Patients" barSize={20} fill="#006494" />
                            <Line type="monotone" dataKey="Doctors" stroke="#ff7300" />
                        </ComposedChart>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item xs={4} pl={4} >
                {/* <div style={{ backgroundColor: '#13293D' }}> */}

                <List style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',borderRadius: '5px',marginTop:'2.5%', overflowY: 'scroll', height: 'calc(100vh - 95px)', backgroundColor: '#244C73' }} className='Colo' sx={{ width: '100%', maxWidth: 385 }}>

                    <h2 className='Colo' style={{ textAlign: 'center' }}>Appointments</h2>
                 {/* <div style={{backgroundColor:'white'}}> */}
                 {Data?.map((item, index) => (
          <div  style={{ backgroundColor: '#006494', borderRadius: '50px', marginBottom: '8px' }} key={index}>
          <CommonListItem
            avatarSrc={item.avatarSrc}
            primaryText={<span style={{ color: 'white' }}>{item.primaryText}</span>}
            secondaryText={<span style={{ color: 'white' }}>{item.secondaryText}</span>}
            disease_names={<span style={{ color: 'white' }}>{item.disease_names}</span>}
            patient_name={<span style={{ color: 'white' }}>{item.patient_name}</span>}
          />
        </div>
        ))}
                 {/* </div> */}
                </List>
                {/* </div> */}
            </Grid>
        </Grid>


    )
}

export default Chart
