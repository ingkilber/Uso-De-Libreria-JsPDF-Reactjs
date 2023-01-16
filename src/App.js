import { useState, useRef } from 'react';
import { Grid, Container, ButtonGroup, Button} from '@mui/material';
import './App.css';
import VistaContenido from './components/VerContenido';
import VerPdf from './components/VerPdf';
import jsPDF from 'jspdf'

function App(props) {

  const vistaContenidoRef = useRef(null);

  const [verDocument, setVerDocument] = useState(null);
  const [verPdf, setVerPdf] = useState(false);

  const Menu = () => {

    const generarPDF = () => {
      const doc = new jsPDF("p", "pt", "a4");
      doc.html(vistaContenidoRef.current, {
        async callback(doc) {
          await doc.save('document');
        },
      });
    };

    return (
    <>
    <Container maxWidth="sm">
    <Grid justify='center' alignItems='center'>
    <div className='HomePageContainer'>
    <ButtonGroup disableElevation variant="contained" 
    aria-label="Disabled elevation buttons" sx={{mb: 4}}>

{/* Boton Ver Web */}
      <Button onClick={() => {
        setVerDocument(!verDocument);
        setVerPdf(false)
        }}>
          {verDocument ? "Ocultar web" : "Ver Información web"}
          </Button>

{/* Boton Ver PDF */}
      {<Button onClick={() => {
        setVerDocument(false)
        setVerPdf(!verPdf)
        }}>
          {verPdf ? "Ocultar PDF" : "Ver PDF"}
        </Button>}
      
{/* Boton Descargar PDF */}
        <Button onClick={() => generarPDF()}>Descargar PDF</Button> 
    </ButtonGroup>
              </div>
        </Grid>
        </Container>
    </>
    )
  };
    
  return (
    <>
    <Menu />
    <div ref={vistaContenidoRef} >
    {verDocument ? <VistaContenido /> : null}
    {verPdf ? <VerPdf /> : false}
    </div> 
    </>
  );
}

export default App;
