import http from 'k6/http';
import { sleep, check } from 'k6';
import { Counter } from 'k6/metrics';
export const requests = new Counter('http_reqs');

//100 250 500
export const options = {
  vus: 100,
  duration: '15s',
  // thresholds: {
  //   http_req_failed: ['rate<0.1'],
  // },
}

//function or variable
function getRandomId() {
  return Math.floor(Math.random() * 1000010).toString();
}


export default function () {
let randomId = getRandomId();
  const res = http.get(`http://localhost:3000/qa/questions?product_id=${randomId}`);
  check(res, {
    'is status 200': (r) => r.status === 200,
    'transaction time < 25ms': (r) => r.timings.duration < 25,
    'transaction time < 50ms': (r) => r.timings.duration < 50,
    'transaction time < 100ms': (r) => r.timings.duration < 100,
    'transaction time < 200ms': (r) => r.timings.duration < 200,
    'transaction time < 500ms': (r) => r.timings.duration < 500,
    'transaction time < 1000ms': (r) => r.timings.duration < 1000,
    'transaction time < 2000ms': (r) => r.timings.duration < 2000,
  });
}