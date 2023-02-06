import { useState, useRef } from 'react';
import { Grid, Container, ButtonGroup, Button} from '@mui/material';
import './App.css';
import VistaContenido from './components/VerContenido';
import VerPdf from './components/VerPdf';
import jsPDF from 'jspdf'
import html2canvas from "html2canvas"

function App() {

  const printRef = useRef();

  const [verDocument, setVerDocument] = useState(null);
  const [verPdf, setVerPdf] = useState(false);

  const Menu = () => {

    // METODO 1
    // const generarPDF = () => {
    //   html2canvas(vistaContenidoRef.current, { useCORS: true }).then((canvas) => {
    //     const imgData = canvas.toDataURL("image/png");
    //     const pdf = new jsPDF("p", "pt", "a4");
    //     pdf.addImage(imgData, "JPEG", 0, 0);
    //     // pdf.output('dataurlnewwindow');
    //     pdf.save("download.pdf");
    //   });
    // };

    // METODO 2
    const generarPDF = async () => {
      const element = printRef.current;
      const canvas = await html2canvas(element);
      const data = canvas.toDataURL('image/png');
  
      const pdf = new jsPDF("p", "pt", "a4");
      const imgProperties = pdf.getImageProperties(data);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight =
        (imgProperties.height * pdfWidth) / imgProperties.width;
  
      pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('download.pdf');
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
    <div ref={printRef} >
    {verDocument ? <VistaContenido /> : null}
    {verPdf ? <VerPdf /> : false}
    </div> 
    </>
  );
}

export default App;
