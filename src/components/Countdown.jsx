import useCountdown from "../hooks/useCountdown";




function Countdown() {
  const targetDate = new Date("2025-01-27T00:00:00").getTime();
  const [day1, day2, hour1, hour2, minutes1, minutes2, seconds1, seconds2] = useCountdown(targetDate);


  return (
    <div
      className="flex min-[440px]:gap-5 gap-3 items-center mt-10 lg:text-xs text-xs font-medium z-10 justify-center py-4"
      style={{ textShadow: "0em 0.0375em 0.28125em rgba(0, 0, 0, 0.600000)", animation: "fadeInUpFull 0.5s ease-out" }}
    >
      <div>
        <div className="flex myFont">
          <div className="count myFont">{day1}</div>
          <div className="count myFont">{day2}</div>
        </div>
        <p className="text-black myFont">DAYS</p>
      </div>
      <div>
        <div className="flex ">
          <div className="count myFont">{hour1}</div>
          <div className="count myFont">{hour2}</div>
        </div>
        <p className="text-black myFont">HOURS</p>
      </div>
      <div>
        <div className="flex ">
          <div className="count myFont">{minutes1}</div>
          <div className="count myFont">{minutes2}</div>
        </div>
        <p className="text-black myFont">MINUTES</p>
      </div>
      <div>
        <div className="flex ">
          <div className="count myFont">{seconds1}</div>
          <div className="count myFont">{seconds2}</div>
        </div>
        <p className="text-black myFont">SECONDS</p>
      </div>
    </div>
  );
}

export default Countdown;
