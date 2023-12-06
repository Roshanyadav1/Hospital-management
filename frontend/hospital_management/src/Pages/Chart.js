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
        disease_names: `Disease Specialist: ${diseaseSpecialist}`,
        patient_name: `Patient Name: ${appointment.patient.patient_name}`, // Corrected this line
    };
});

    console.log("Data for Chart:", Data);

    const showServerError = isErrorDoctor || isErrorPatient || isErrorAppData || isErrorAppCount;
    const showReloadButton = showServerError && !isFetchingDoctor && !isFetchingPatient && !isFetchingAppData && !isFetchingAppCount;

    return (
        <Grid container >

            <Grid item xs={8} style={{ flexWrap: 'wrap' }}>
                <Grid container item mt={1} xs={12}  >

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

                <Grid pt={3} item xs={12} style={{ display: 'flex' }}>
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
                            height={345}
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

            <Grid item xs={4} pl={4} >
                <List style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', borderRadius: '5px', marginTop: '2.5%', overflowY: 'scroll', height: 'calc(100vh - 95px)', backgroundColor: '#244C73', scrollbarColor: '#244C73 #0F1C2B', }} className='Colo' sx={{ width: '100%', maxWidth: 385 }}>
                    <h2 className='Colo' style={{ textAlign: 'center', color: 'white' }}>Appointments</h2>
                    {Data?.map((item, index) => (
                        <div style={{ borderRadius: '50px', marginBottom: '8px' }} key={index}>
                            <CommonListItem
                                avatarSrc={item.avatarSrc}
                                primaryText={<span style={{ color: 'white', fontSize: '1rem', fontWeight: '525', fontFamily: 'verdana' }}>{item.primaryText}</span>}
                                secondaryText={<span style={{ color: 'white', fontSize: '.7rem', fontFamily: 'verdana' }}>{item.secondaryText}</span>}
                                disease_names={<span style={{ color: 'white', fontSize: '.7rem', fontFamily: 'verdana' }}>{item.disease_names}</span>}
                                patient_name={<span style={{ color: 'lightgreen', fontSize: '.7rem', fontFamily: 'verdana' }}>{item.patient_name}</span>}
                            />
                        </div>
                    ))}                </List>
            </Grid>
        </Grid>
    );
}

export default Chart;



// {
//     "status": 200,
//     "message": "Appointment Data Retrieved Successfully",
//     "data": [
//         {
//             "appointment_id": "0fae2e3c-1007-47c3-a698-f16e44dc7f15",
//             "appointment_number": 2,
//             "appointment_time": "10:00:00",
//             "appointment_date": "2023-12-20",
//             "doctor": {
//                 "doctor_id": "044c330a-0b54-43ed-8968-aaeb2d941f15",
//                 "employee": {
//                     "employee_name": "John Smith"
//                 }
//             },
//             "patient": {
//                 "patient_id": "0f0885e1-c1aa-41a5-a27c-2978624b52fd",
//                 "patient_name": "John Doe"
//             },
//             "disease": {
//                 "disease_name": "Asthma"
//             },
//             "created_at": null
//         },
//         {
//             "appointment_id": "4e63a551-1fe9-4425-8a07-01452935601c",
//             "appointment_number": 3,
//             "appointment_time": "10:00:00",
//             "appointment_date": "2023-11-27",
//             "doctor": {
//                 "doctor_id": "044c330a-0b54-43ed-8968-aaeb2d941f15",
//                 "employee": {
//                     "employee_name": "John Smith"
//                 }
//             },
//             "patient": {
//                 "patient_id": "0f0885e1-c1aa-41a5-a27c-2978624b52fd",
//                 "patient_name": "John Doe"
//             },
//             "disease": {
//                 "disease_name": "Brain cancer"
//             },
//             "created_at": null
//         },
//         {
//             "appointment_id": "60bee72b-e89f-4f1d-9450-9c710ede3cd8",
//             "appointment_number": 4,
//             "appointment_time": "11:00:00",
//             "appointment_date": "2022-11-25",
//             "doctor": {
//                 "doctor_id": "091e0bcc-dce0-44de-a545-b512ff193bac",
//                 "employee": {
//                     "employee_name": "kavita porwal"
//                 }
//             },
//             "patient": {
//                 "patient_id": "0f0885e1-c1aa-41a5-a27c-2978624b52fd",
//                 "patient_name": "John Doe"
//             },
//             "disease": {
//                 "disease_name": "Chickenpox"
//             },
//             "created_at": null
//         },
//         {
//             "appointment_id": "0c9541dc-0826-494f-baf5-9dc56dbb59b9",
//             "appointment_number": 5,
//             "appointment_time": "21:30:00",
//             "appointment_date": "2023-11-29",
//             "doctor": {
//                 "doctor_id": "8da95926-dc8d-46af-963b-857de698898e",
//                 "employee": {
//                     "employee_name": "Mohammad Haris"
//                 }
//             },
//             "patient": {
//                 "patient_id": "83ffa146-7c56-4cdb-b0ba-933b819decad",
//                 "patient_name": "Goutam kushwa"
//             },
//             "disease": {
//                 "disease_name": "Harnia"
//             },
//             "created_at": null
//         },
//         {
//             "appointment_id": "88372151-85c5-46e3-a2ca-26327706bb79",
//             "appointment_number": 6,
//             "appointment_time": "02:05:00",
//             "appointment_date": "2024-02-02",
//             "doctor": {
//                 "doctor_id": "7702cbeb-4103-4e18-b900-dbd928614f03",
//                 "employee": {
//                     "employee_name": "Novi"
//                 }
//             },
//             "patient": {
//                 "patient_id": "06a974ef-325f-4490-a0aa-458f3aebab47",
//                 "patient_name": "Subham Meena"
//             },
//             "disease": {
//                 "disease_name": "Harnia"
//             },
//             "created_at": "2023-12-06T05:13:36.199000Z"
//         },
//         {
//             "appointment_id": "7cc6b01a-935d-4413-b23e-2fedb5b4f59c",
//             "appointment_number": 8,
//             "appointment_time": "14:05:00",
//             "appointment_date": "2024-12-05",
//             "doctor": {
//                 "doctor_id": "8da95926-dc8d-46af-963b-857de698898e",
//                 "employee": {
//                     "employee_name": "Mohammad Haris"
//                 }
//             },
//             "patient": {
//                 "patient_id": "329a5f32-5bbf-4a5d-b3af-75f013f6236f",
//                 "patient_name": "Harsh Sharma"
//             },
//             "disease": {
//                 "disease_name": "Lung cancer"
//             },
//             "created_at": "2023-12-06T05:14:08.205000Z"
//         },
//         {
//             "appointment_id": "3a6fef21-0834-45b5-b0ce-af7d1d12d321",
//             "appointment_number": 9,
//             "appointment_time": "02:00:00",
//             "appointment_date": "2023-12-12",
//             "doctor": {
//                 "doctor_id": "8da95926-dc8d-46af-963b-857de698898e",
//                 "employee": {
//                     "employee_name": "Mohammad Haris"
//                 }
//             },
//             "patient": {
//                 "patient_id": "83ffa146-7c56-4cdb-b0ba-933b819decad",
//                 "patient_name": "Goutam kushwa"
//             },
//             "disease": {
//                 "disease_name": "Malaria"
//             },
//             "created_at": "2023-12-06T05:15:18.001000Z"
//         }
//     ]
// }

//  the disease name and the patient name are not displayed from this api to the above code, please fix this and provide the proper api call to find the particular data