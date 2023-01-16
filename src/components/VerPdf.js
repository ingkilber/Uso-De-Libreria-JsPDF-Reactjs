import { Grid, Typography, Container } from '@mui/material'
import '../App.css';
import LandingImage from '../img/background.jpg'

function VerPdf() {
    
  return (
    <>
    <div
      className="mt4"
      style={{
        backgroundColor: "#1976d2",
        width: "210mm",
        minHeight: "297mm",
        marginLeft: "auto",
        marginRight: "auto"
      }}
    >
      <Container maxWidth="sm">
        <Grid justify="center" alignItems="center">
          <div className="HomePageContainer">
            <Typography variant="h5">Lorem Ipsum App</Typography>
            <img
              alt="React Lorem Ipsum App"
              src={LandingImage}
            ></img>
            <Typography variant="subtitle1">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Typography>
          </div>
        </Grid>
      </Container>
      </div>
    </>
  );
}

export default VerPdf;
