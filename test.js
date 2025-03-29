import http from 'k6/http';

// Import the sleep function to introduce delays. From this point, you can use the `sleep` function to introduce delays in your test script.
import { sleep,check } from 'k6';

export const options = {
    /*🍁Define the time for whihc the virtual user runs the test */
    // duration: '30s',
    // vus:20
    /*🍁.Stages for ramp */
    stages: [
        { duration: '10s', target: 100 }, // Ramp-up to 10 VUs over 10 seconds
        { duration: '20s', target: 500}, // Stay at 20 VUs for 20 seconds
        { duration: '5s', target: 0 }, // Stay at 20 VUs for 20 seconds
        // { duration: '10s', target: 0 },  // Ramp-down to 0 VUs over 10 seconds
    ],
    /*🍁.Threshold  */
        thresholds: {
        http_req_failed: ['rate<0.01'], // http errors should be less than 1%
        http_req_duration: ['p(90)<1300'], // 95% of requests should be below 2000ms
      },
    /*🍁.Examples */  
    // thresholds: {
    //     // Count: Incorrect content cannot be returned more than 99 times.
    //     Errors: ['count<100'],
    //     // Gauge: returned content must be smaller than 4000 bytes
    //     ContentSize: ['value<4000'],
    //     // Rate: content must be OK more than 95 times
    //     ContentOK: ['rate>0.95'],
    //     // Trend: Percentiles, averages, medians, and minimums
    //     // must be within specified milliseconds.
    //     RTT: ['p(99)<300', 'p(70)<250', 'avg<200', 'med<150', 'min<100'],
    //   },
  };

  export default function () {
    // Make a GET request to the target URL
    let res=http.get('http://localhost:3000/ping');
  
    // Sleep for 1 second to simulate real-world usage
    check(res, {
        'status was 200': (r) => r.status == 200,
        'transaction time OK': (r) => r.timings.duration < 200
      });
    sleep(1);
  }