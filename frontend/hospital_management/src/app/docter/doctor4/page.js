// import React from 'react'
// import { Grid, Card, CardContent, Typography, Button } from "@mui/material";
// import CardActions from "@mui/material/CardActions";
// import Container from "@mui/material/Container";
// import { CardActionArea, CardMedia } from "@mui/material";
// import Home from "@/app/dashboard/page";
// import { AccessAlarm, ThreeDRotation } from "@mui/icons-material";

// function page() {
//   return (
//     <div>
//         <Grid container spacing={5} style={{ marginTop: "20px" }}>
//            <Grid item xs={12} md={4} sm={3}>
//             <Card sx={{ maxWidth: 345 }}>
//               <CardActionArea>
//                 <CardMedia
//                   sx={{ height: 140, width:400, height:400 }}
                 
//                     image="https://thumbs.dreamstime.com/b/doctor-portrait-21332357.jpg"
//                   //   title="green iguana"
//                 />
//                 <CardContent>
//                   <Typography gutterBottom variant="h5" component="div">
//                     Dr. Sumit Jain
//                     <Typography variant="body2" color="text.secondary">
                      
//                       DrNB (Padiatric Cardiology)
//                       <Typography variant="body3" color="text.secondary">
//                        paediatric Cardiology
                       
//                       </Typography>
//                     </Typography>
//                   </Typography>
//                 </CardContent>
//                 <CardActions>
//                   <Button size="large"> Learn More</Button>  
//                 </CardActions>
//               </CardActionArea>
//             </Card>
//           </Grid>
//           </Grid>
//     </div>
//   )
// }

// export default page



const DoctorCard = () => {
  // ... (existing code remains unchanged)

  const handleBookAppointment = () => {
    if (selectedSlot) {
      setOpenModal(true); // Open the confirmation dialog
    }
  };

  const handleConfirmAppointment = () => {
    if (selectedSlot) {
      bookAppointment(selectedSlot); // Book the appointment only if a slot is selected
      setOpenModal(false); // Close the confirmation dialog
    }
  };

  return (
    // ... (existing code remains unchanged)

    <Grid item display="flex" justifyItems="center" marginBottom={2} justifyContent="center">
      <Button
        variant="contained"
        sx={{ padding: 1, width: 200, backgroundColor: "#2CD9C5", borderRadius: "10px" }}
        onClick={handleBookAppointment} // Updated to trigger dialog opening
      >
        Book Appointment
      </Button>
    </Grid>

    <Dialog open={openModal} onClose={() => setOpenModal(false)}>
      <DialogTitle>Confirm Appointment</DialogTitle>
      <DialogContent>
        <Typography variant="body1">
          Are you sure you want to book the appointment for {selectedSlot}?
        </Typography>
      </DialogContent>
      <Box sx={{ display: "flex", justifyContent: "space-between", p: 2 }}>
        <Button variant="contained" onClick={() => setOpenModal(false)}>Cancel</Button>
        <Button variant="contained" onClick={handleConfirmAppointment}>Confirm</Button>
      </Box>
    </Dialog>

    // ... (existing code remains unchanged)
  );
};

export default DoctorCard;