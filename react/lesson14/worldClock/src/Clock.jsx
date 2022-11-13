import React, { useEffect, useState } from "react";
import moment from "moment";

const getTimeWithOffset = offset => {
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  return new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset));
}

const Clock = ({ offset, location }) => {
  const [time, setTime] = useState(moment(getTimeWithOffset(offset)).format('HH:mm:ss A'));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(moment(getTimeWithOffset(offset)).format('HH:mm:ss A'))
    }, 1000)
    return () => {
      clearInterval(interval)
    };
  }, []);

  return (
    <div className="clock">
      <div className="clock__location">
        {location}
      </div>
      <div className="clock__time">
        {time}
      </div>
    </div>
  )
}

export default Clock;