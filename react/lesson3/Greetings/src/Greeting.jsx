import React from "react";
import moment from "moment";

// function getAge(dateString) {
//   var today = new Date();
//   var birthDate = new Date(dateString);
//   var age = today.getFullYear() - birthDate.getFullYear();
//   var m = today.getMonth() - birthDate.getMonth();
//   if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
//     age--;
//   }
//   return age;
// }

// function calAge() {
//   var date = document.getElementById("dob").value;
//   console.log(date)
//   var diff = moment(date).diff(moment(), 'milliseconds');
//   var duration = moment.duration(diff);
//   document.getElementById("result").innerHTML =duration.format().replace("-","");
// }

const age = date => moment().diff(date, 'years');

const Greeting = (props) => {
  return (
    <div className="greeting">
      My name is {props.firstName} {props.lastName}. I'm {age(props.birthDate)} years old
    </div>
  )
}

export default Greeting;