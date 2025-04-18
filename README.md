# K6-Performance-Test

# Important K6 Metrics

## `http_req_duration`
- **Description**: Measures the total time taken for an HTTP request.
- **Includes**: DNS lookup, TCP connection, TLS handshake, and server response time.
- **Example Threshold**: 
  ```javascript
  http_req_duration: ['p(90)<1300']
  ```

## `http_req_failed`
- **Description**: The percentage of failed HTTP requests.
- **Example Threshold**: 
  ```javascript
  http_req_failed: ['rate<0.01']
  ```

## `http_req_connecting`
- **Description**: Time spent establishing a TCP connection.

## `http_req_tls_handshaking`
- **Description**: Time spent performing TLS handshaking.

## `http_req_waiting`
- **Description**: Time spent waiting for the server to respond (TTFB - Time to FirstByte).

## `iterations`
- **Description**: The number of iterations completed by all virtual users.

## `vus`
- **Description**: The number of active virtual users at any given time.

## `data_received`
- **Description**: The amount of data received from the server during the test.

## `data_sent`
- **Description**: The amount of data sent to the server during the test.