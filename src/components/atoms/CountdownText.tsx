import { useEffect, useState } from "react";

type Props = {
  date: Date;
};

export const CountdownText = ({ date }: Props) => {
  const until = date.getTime() - new Date().getTime();
  const [time, setTime] = useState(until);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((time) => {
        if (time === 0) {
          clearInterval(timer);
          return 0;
        } else return time - 1000;
      });
    }, 1000);
  }, []);

  return <> {new Date(time).toLocaleTimeString("cs")}</>;
};
