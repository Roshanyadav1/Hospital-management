'use client'
import { useEffect, useState } from 'react';
import { Grid, Button } from "@mui/material"
import List from '@mui/material/List';
import { useGetAllDoctorsQuery } from '@/services/Query';
import { useGetAllPatientsQuery } from '@/services/Query';
import { useGetGraphAppointInfoQuery } from '@/services/Query';
import { useGetAppointPatientDoctorDateQuery } from '@/services/Query';
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
import '../styles/dashboard.css'
import CommonListItem from '../components/CommonListItem';
import Image from 'next/image'
import Doc from '../assets/Doc.png'

function Chart() {

    const { data: ViewDoctor, isError: isErrorDoctor, isFetching: isFetchingDoctor } = useGetAllDoctorsQuery();
    const { data: ViewPatient, isError: isErrorPatient, isFetching: isFetchingPatient } = useGetAllPatientsQuery();

    const { data: appointmentData, isError: isErrorAppData, isFetching: isFetchingAppData } = useGetGraphAppointInfoQuery();
    const { data: appointmentCount, isError: isErrorAppCount, isFetching: isFetchingAppCount, refetch: refetchAppCount } = useGetAppointPatientDoctorDateQuery();

    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    console.log(count1, count2)

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
            counter("count1", 0, ViewDoctor.count, 1550);
            counter("count2", 0, ViewPatient.count, 1400);
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

    const weeklyData = appointmentCount?.appointement_per_week?.map((appointment) => {
        return {
            name: appointment.appointment_date,
            Patients: appointment.patient_count,
            Appoints: appointment.appointment_count,
            Doctors: appointment.doctor_count,
        };
    });

    const Data = appointmentData?.data?.map((appointment) => {
        let diseaseSpecialist = "";
        if (Array.isArray(appointment.doctor.disease_specialist)) {
            diseaseSpecialist = appointment.doctor.disease_specialist.join(', ');
        } else {
            diseaseSpecialist = appointment.doctor.disease_specialist || "";
        }
        diseaseSpecialist = diseaseSpecialist.replace(/[[\]"]+/g, '');

        return {
            name: appointment.appointment_date,
            Patients: appointment.patient_count,
            Appoints: appointment.appointment_count,
            Doctors: appointment.doctor_count,
            avatarSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMjX02hunzz3i3dG7PG7J2AM61C5AVahSHBg&usqp=CAU",
            primaryText: appointment.doctor.employee.employee_name,
            secondaryText: `Appointment Date: ${appointment.appointment_date}`,
            disease_names: `Disease Name: ${appointment.disease.disease_name}`,
            patient_name: `Patient Name: ${appointment.patient.patient_name}`, // Corrected line
        };
    });

    const [searchTerm, setSearchTerm] = useState("");

    // Update the Data mapping to filter based on the search term
    const filteredData = searchTerm
        ? Data?.filter((item) => {
            const doctorName = item.primaryText.toLowerCase();
            const searchLower = searchTerm.toLowerCase();

            return doctorName.includes(searchLower);
        })
        : [];

    const displayedData = searchTerm ? filteredData : Data;


    const filteredCount = filteredData ? filteredData.length : 0;
    // it is still showing the error in filteredData.length
    console.log("Data for Chart:", Data);

    const showServerError = isErrorDoctor || isErrorPatient || isErrorAppData || isErrorAppCount;
    const showReloadButton = showServerError && !isFetchingDoctor && !isFetchingPatient && !isFetchingAppData && !isFetchingAppCount;

    return (
        <Grid container >

            <Grid item xs={8} style={{ flexWrap: 'wrap' }}>
                <Grid container item xs={12}  >

                    <Grid container item mt={1} xs={12}  >
                        <Grid item xs={6} style={{ transition: 'box-shadow 0.3s' }} >
                            <div className="hov">
                                <div style={{ background: 'linear-gradient(135deg,#006494,#35CFF4)', height: '10rem', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', marginRight: '1rem', borderRadius: '10px' }}>
                                    <Grid style={{ display: 'flex' }} item xs={12}>
                                        <Grid itme xs={6}>
                                            <h4 style={{ color: 'white', marginBottom: '0', paddingLeft: '2rem', fontSize: '2rem', fontFamily: 'mainlux' }}>Patients</h4>
                                            <span style={{ paddingLeft: '2rem', color: 'white', fontSize: '1.52rem' }} id="count2"></span>
                                            <span style={{ color: 'white', fontSize: '1.52rem' }}>+</span>
                                        </Grid >
                                        <Grid item xs={6}>
                                            {/* <div style={{backgroundColor:'white', borderTopLeftRadius:'50%',maxWidth:'5rem',height:'100px'}}></div> */}
                                        </Grid>
                                    </Grid>
                                </div>
                            </div>
                        </Grid>

                        <Grid className="hov" item xs={6} >
                            <div style={{ background: 'linear-gradient(-35deg, #35CFF4,#006494)', height: '10rem', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', borderRadius: '10px' }}>
                                <Grid style={{ display: 'flex' }} item xs={12}>
                                    <Grid itme xs={6}>
                                        <h4 style={{ color: 'white', paddingLeft: '2rem', marginBottom: '0', fontSize: '2rem', fontFamily: 'mainlux' }}>Doctors</h4>
                                        <span style={{ paddingLeft: '2.5rem', color: 'white', fontSize: '1.52rem' }} id="count1"></span>
                                        <span style={{ color: 'white', fontSize: '1.52rem' }}>+</span>

                                    </Grid >
                                    <Grid item xs={6}>
                                        <div style={{ width: '80%', height: '100%', marginTop: '8%', marginLeft: '10%', backgroundColor: 'white', paddingTop: '10px', borderRadius: '50%', position: 'relative' }}>
                                            <Image style={{ position: 'absolute', transform: 'translate(15%)' }} height={100} width={100} src={Doc} />
                                        </div>


                                    </Grid>
                                </Grid>

                            </div>
                        </Grid>

                    </Grid>
                </Grid>

                <Grid pt={3} mt={2} item xs={12} style={{ display: 'flex', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', borderRadius: '5px' }}>
                    {showServerError && (
                        <div>
                            <h2>Error fetching data from the server</h2>
                            {showReloadButton && (
                                <Button onClick={() => refetchAppCount()}>Reload</Button>
                            )}
                        </div>
                    )}
                    {!showServerError && (
                        <ComposedChart
                            width={650}
                            height={355}
                            data={weeklyData}
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
                                label={{ value: "Date", position: "insideBottomRight", offset: -10 }}
                            // scale="band"
                            />
                            <YAxis label={{ value: "Quantity", angle: -90, position: "insideLeft" }} />
                            <Tooltip />
                            <Legend />
                            <Area type="monotone" dataKey="Appoints" fill="#AEE3F0" stroke="#AEE3F0" />
                            <Bar dataKey="Patients" barSize={20} fill="#006494" />
                            <Line type="monotone" dataKey="Doctors" stroke="#ff7300" />            </ComposedChart>
                    )}
                </Grid>
            </Grid>
            <Grid item xs={4} pl={4}>

                <List  className='Colo'  sx={{
                    width: '100%', maxWidth: 385, paddingY: '0px'
                }} style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', borderRadius: '5px', marginTop: '2.5%', overflowY: 'scroll', height: 'calc(100vh - 95px)', backgroundColor: '#244C73', scrollbarColor: '#244C73 #0F1C2B', }}>
                    <div style={{ position: 'sticky', top: 0, backgroundColor: '#244C73', zIndex: 1,padding:'3%'}} >
                        <h2 className='Colo' style={{ textAlign: 'center', color: 'white' }}>Appointments</h2>
                        <Grid mb={2} ml={1} mr={1} p={1} xs={12} style={{ display: 'flex', alignItems: 'center', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
                            <Grid xs={2} >
                                {filteredCount > 0 && (
                                    <span style={{ color: 'black', textAlign: 'center', paddingLeft: '0.5rem', fontWeight: 'bold', fontSize: '1rem' }}>{filteredCount}</span>
                                )}
                            </Grid>
                            <Grid xs={10} style={{ textAlign: 'center' }}>
                                <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                                    <input
                                        type="text"
                                        placeholder="Search by Doctor Name"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        style={{
                                            width: '100%',
                                            border: 'none',
                                            padding: '0.25rem',
                                            borderRadius: '5px',
                                            marginRight: '0.25rem',
                                            outline: 'none',
                                            fontSize: '.8rem',
                                            fontWeight: 'bold'
                                        }}
                                    />
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                    <hr />

  {displayedData && displayedData.length > 0 ? (
      displayedData.map((item, index) => (
        <div style={{ borderRadius: '50px' }} key={index}>
          <CommonListItem
            avatarSrc={item.avatarSrc}
            primaryText={<span style={{ color: 'white', fontSize: '1rem', fontWeight: '525', fontFamily: 'verdana' }}>{item.primaryText}</span>}
            secondaryText={<span style={{ color: 'lightgreen', fontSize: '.7rem', fontFamily: 'verdana' }}>{item.secondaryText}</span>}
            disease_names={<span style={{ color: 'lightgreen', fontSize: '.7rem', fontFamily: 'verdana' }}>{item.disease_names}</span>}
            patient_name={<span style={{ color: 'lightgreen', fontSize: '.7rem', fontFamily: 'verdana' }}>{item.patient_name}</span>}
          />
      <hr/>
        </div>
      )) 
    ) : (
      <div style={{ textAlign: 'center', color: 'white', marginTop: '20px' }}>
        No Data Found
      </div>
    )}
                </List>
            </Grid>

        </Grid>
    );
}

export default Chart;