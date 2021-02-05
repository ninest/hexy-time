import html2canvas from "html2canvas";
import getTime from "./hex-time";

const canShare = "share" in navigator;

async function shareImage() {
  const image = await generateImage();

  if (canShare) {
    // TODO: share file
    await navigator.share({
      url: "https://hexytime.now.sh",
      text: `The time is ${getTime(new Date()).hex}`,
      // files: image,
    } as any);
  } else {
    // Open new tab with image

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
}

async function generateImage() {
  const canvas = await html2canvas(document.body);
  return canvas.toDataURL();
}

export { canShare, shareImage };
