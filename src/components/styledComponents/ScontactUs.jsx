import styled from 'styled-components';

const StyledContactUs = styled.div`
color: #f5f7f7;

.ContactUs {
display: flex;
background-color: rgb(204, 220, 223);
color: #333333;


.select {
margin-top: 0.5rem;
font-family: 'Courier New', Courier, monospace;
color: #CCDCDF;
}

.textArea {
margin-bottom: 0.5rem;

}

.form {
padding-top: 1rem;
margin-left: 5rem;
font: inherit;
width: 30vw;
}

#name, #email, #option, #phone, #message {
width: 100%;
height: 2rem;
}

#message {
height: 10rem;
}

.form-but {
margin-left: 10rem;
margin-top: 1rem;
height: 2rem;
font-weight: 700;
}

.form p {
color: #f5f7f7;
}

.form p button {
margin-top: 0.5rem;
color: #f5f7f7;
}

.form input {
margin-top: 0.5rem;
}

.address {
margin-top: 13vh;
margin-left: 15rem;
color: #f5f7f7;
padding-top: 1rem;
padding-bottom: 1rem;
font-size: 1.5rem;
}

.map {
  margin-top: 1rem;
}

@media screen and (max-width: 700px) {
.form {
  margin-left: 1rem;
}
.form-but {
      width: 80%;
      margin-left: 1rem;
}

.address {
  margin-left: 8rem;
  font-size: 1.3rem;
  color: #333333;
}
}

.address a {
text-decoration: none;
color: #333333;
padding-top: 1rem;
}

.address p {
padding-top: 1rem;
color: #333333;
}
`;

export default StyledContactUs;
