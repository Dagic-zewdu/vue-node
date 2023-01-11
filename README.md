## This is Node test Server for authencticating user

  - This is test api recommended by Kazma Tecchnology.All api flows throught '/api'. It is hosted onrender with base url

  `https://vue-node-test.onrender.com/api`

Note:- that their is one user registered with the email and password `{"email":"xxx@gmail.com","Password":"abcd1234"}`

| Endpoint | `/authentication`  | 
| :-----:  | :-: | 
| body     | {"email":"xxx@gmail.com","Password":"abcd1234"} | 
| Http method | post|
| Response    |  `{first_name: String,last_name: String,mobile_no: [String],email: String,city_name: String,state_id: String,country_id: String,}`|
| Note       |  Email is the expected response but the other fields are optional because if they are empty the responses field are empty|

* user profile

| EndPoint | `/user`  | 
| :-----: | :-: |
| Header  |   `{Token:”authentication token”}` |
| Response | `{first_name: String,last_name: String,mobile_no: [String],email: String,city_name: String,state_id: String,country_id: String,}`|
| Http method |  get       |

* update profile this protected route needs a token in the header

|  EndPoint   |             `/user`              |
| :---------: | :------------------------------: |
| Response | `{first_name: String,last_name: String,mobile_no: [String],email: String,city_name: String,state_id: String,country_id: String,}`|
|   Header    | `{Token:”authentication token”}` |
| Http method |              post                |

* Additonal routes other than the required routes I added one route to register a user.

| Endpoint | `/signup`| 
| :-----: | :-: |
| body    | email and password is required |
| Response | `{first_name: String,last_name: String,mobile_no: [String],email: String,city_name: String,state_id: String,country_id: String,}`|
|   Header    | `{Token:”authentication token”}`  |
| Note | Email is the expected response but the other fields are optional because if they are empty the responses field are empty|

<p align="right">(<a href="#top">back to top</a>)</p>
 
 

