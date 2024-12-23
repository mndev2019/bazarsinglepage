import useCountdown from "../hooks/useCountdown";



function Coundown() {
    const targetDate = new Date("2025-01-27T00:00:00").getTime();
const [day1, day2, hour1, hour2, minutes1, minutes2, seconds1, seconds2] = useCountdown(targetDate);
    

  return (
    <div
      className="flex min-[440px]:gap-5 gap-3 items-center mt-10 lg:text-sm text-xs font-medium z-10"
      style={{ textShadow: "0em 0.0375em 0.28125em rgba(0, 0, 0, 0.600000)", animation: "fadeInUpFull 0.5s ease-out" }}
    >
      <div>
        <div className="flex gap-1">
          <div className="count">{day1}</div>
          <div className="count">{day2}</div>
        </div>
        <p>DAYS</p>
      </div>
      <div>
        <div className="flex gap-1">
          <div className="count">{hour1}</div>
          <div className="count">{hour2}</div>
        </div>
        <p>HOURS</p>
      </div>
      <div>
        <div className="flex gap-1">
          <div className="count">{minutes1}</div>
          <div className="count">{minutes2}</div>
        </div>
        <p>MINUTES</p>
      </div>
      <div>
        <div className="flex gap-1">
          <div className="count">{seconds1}</div>
          <div className="count">{seconds2}</div>
        </div>
        <p>SECONDS</p>
      </div>
    </div>
  );
}

export default Coundown;
