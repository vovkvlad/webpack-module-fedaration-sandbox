import React, { useState } from 'react';
import * as dayjs from 'dayjs'
import { trim } from 'lodash';

export function Timer() {
  const [time, setTime] = useState(dayjs().format());

  setInterval(() => {
    // setTime(dayjs().format());
    setTime(trim(dayjs().format()));
  }, 1000)

  return (
    <div style={{ background: 'beige' }}>
      {time}
    </div>
  );
}

export default Timer;