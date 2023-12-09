import moment from 'moment';

const useTimeSlots = () => {
  const createTimeSlots = (perPatientTime, times) => {
    let hashmap = {};

    times.forEach((time , index) => {
      const { start_time, end_time, slots: availableSlots, total_slots } = time;
      const startTime = moment(start_time, 'HH:mm:ss');
      const perSlotTime = moment.duration(perPatientTime);
      let currentSlotTime = startTime.clone();

      let bookedSlots = [];
      // Simulate booked slots, replace this with your actual booked slots logic
      for (let i = 0; i < availableSlots; i++) {
        bookedSlots.push(currentSlotTime.format('HH:mm:ss'));
        currentSlotTime.add(perSlotTime);
      }

      let nextAvailableSlots = [];
      let remainingSlots = total_slots - availableSlots;

      for (let i = 0; i < remainingSlots; i++) {
        let slot = currentSlotTime.format('HH:mm:ss');
        // Check if the slot is already booked
        while (bookedSlots.includes(slot)) {
          currentSlotTime.add(perSlotTime);
          slot = currentSlotTime.format('HH:mm:ss');
        }
        nextAvailableSlots.push(slot);
        bookedSlots.push(slot); // Mark the slot as booked
        currentSlotTime.add(perSlotTime);
      }

      // hashmap[start_time] = [...bookedSlots, ...nextAvailableSlots];
      hashmap[index + 1] = [...nextAvailableSlots];
    });

    return hashmap;
  };

  return { createTimeSlots };
};

export default useTimeSlots;
