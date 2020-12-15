import html2canvas from "html2canvas";

const canShare = true; // "share" in navigator;

async function shareImage() {
  const canvas = await html2canvas(document.body);
  const image = canvas.toDataURL();

  const newWindow = window.open();
  newWindow?.document.write(`
    <style>
      body {
        margin: 0;
        height: 100vh;
        
        display: flex;
        justify-content: center;
        align-items: center;
      }
      
      img {
        display: block;
        max-width:100%;
        max-height:100%;
        width: auto;
        height: auto;
      }
    </style>
    <body>
      <img 
        src="${image}"
      ></img>
    </body>
  `);
}

export { canShare, shareImage };
