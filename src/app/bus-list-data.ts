import { BusList } from './models/bus-list';

export class BusLists{
    public static buslist : BusList[] = [
        {id: 1, name: "ZING BUS", deptTime: "19:35", coachType: "AC Sleeper", seats:22, fare:900, source:"Jaipur", destination:"Bhilwara"},
        {id: 2, name: "PARSHWANATH TRAVELS", deptTime: "13:30", coachType: "AC Sleeper", seats:36, fare:1200, source:"Jaipur", destination:"Bhilwara"},
        {id: 3, name: "SHREENATH TRAVELS", deptTime: "07:20", coachType: "Non-AC Seater", seats:20, fare:1000, source:"Jodhpur", destination:"Ajmer"},
        {id: 4, name: "MAHALAXMI BUS TRAVELS", deptTime: "16:40", coachType: "AC Sleeper", seats:30, fare:1400, source:"Jodhpur", destination:"Ajmer"},
        {id: 5, name: "ASHOK TOURS AND TRAVELS", deptTime: "06:30", coachType: "AC Seater", seats:26, fare:600, source:"Kishangarh", destination:"Bhilwara"},
        {id: 6, name: "ZING BUS", deptTime: "18:00", coachType: "AC Sleeper", seats:20, fare:800, source:"Udaipur", destination:"Jaipur"},
        {id: 7, name: "GREEN LINE", deptTime: "15:30", coachType: "Non-AC Seater", seats:26, fare:700, source:"Jaipur", destination:"Delhi"},
        {id: 8, name: "SHREENATH TRAVELS", deptTime: "19:35", coachType: "AC Sleeper", seats:22, fare:900, source:"Jaipur", destination:"Delhi"},
        {id: 9, name: "GREEN LINE", deptTime: "20:30", coachType: "AC Sleeper", seats:22, fare:800, source:"Delhi", destination:"Chandigarh"},
        {id: 10, name: "ZING BUS", deptTime: "22:00", coachType: "AC Sleeper", seats:36, fare:1000, source:"Delhi", destination:"Chandigarh"},
      ] 
}