let arr =  [
    {
        appointment_id: "a0600720-09c4-4d99-a6ef-1416b433e977",
        appointment_number: 1,
        checked: false,
        appointment_time: "09:00:00",
        appointment_date: "2023-12-15",
        created_at: "2023-12-10T16:02:17.699000Z",
        patient: {
            patient_id: "ea6e944f-0a27-4c25-b3b2-1fa126a7bd4a",
            patient_name: "Keshav Agrawal"
        },
        doctor: {
            doctor_id: "e5e6f8c6-3c66-4de5-b7df-d5e2bcff7ba5",
            employee: {
                employee_id: "98b655c7-2904-4464-8dd7-287df87f9cb0",
                employee_name: "Jagrati Junwal"
            }
        },
        disease: {
            disease_id: "c5f17ce4-5757-4f15-91aa-0232dca38e3e",
            disease_name: "Common cold"
        }
    },
    {
        appointment_id: "ce0a6bb4-42b6-4c0d-ab1f-e59eec3926f0",
        appointment_number: 1,
        checked: false,
        appointment_time: "02:00:00",
        appointment_date: "2023-12-12",
        created_at: "2023-12-12T08:08:52.935000Z",
        patient: {
            patient_id: "61cc8d7f-34f6-44d4-ae26-5fea62eb0036",
            patient_name: "Prashant"
        },
        doctor: {
            doctor_id: "e5e6f8c6-3c66-4de5-b7df-d5e2bcff7ba5",
            employee: {
                employee_id: "98b655c7-2904-4464-8dd7-287df87f9cb0",
                employee_name: "Jagrati Junwal"
            }
        },
        disease: {
            disease_id: "72d9291c-f119-46f3-b0ed-44ff32697320",
            disease_name: "Asthma"
        }
    },
    {
        appointment_id: "9e5299a0-ddd3-4e2e-a112-15a19b194429",
        appointment_number: 1,
        checked: false,
        appointment_time: "02:00:00",
        appointment_date: "2023-12-16",
        created_at: "2023-12-14T05:03:57.991000Z",
        patient: {
            patient_id: "2586e4f6-d171-4f73-bb61-5c2469dad398",
            patient_name: "Aditi Agrawal"
        },
        doctor: {
            doctor_id: "e5e6f8c6-3c66-4de5-b7df-d5e2bcff7ba5",
            employee: {
                employee_id: "98b655c7-2904-4464-8dd7-287df87f9cb0",
                employee_name: "Jagrati Junwal"
            }
        },
        disease: {
            disease_id: "72d9291c-f119-46f3-b0ed-44ff32697320",
            disease_name: "Asthma"
        }
    }
]

const appointmentsByDate = arr.reduce((acc =[], appointment =[]) => {
    const date = appointment.appointment_date;

    if (!acc[date]) {
        acc[date] = [];
    }

    acc[date].push({
        patient_id: appointment.patient.patient_id,
        patient_name: appointment.patient.patient_name,
        doctor_name: appointment.doctor.employee.employee_name,
        disease_name: appointment.disease.disease_name,
        appointment_time: appointment.appointment_time,
        checked: appointment.checked,
    });

    return acc;
}, {});

// Printing the result
console.log(appointmentsByDate);              

