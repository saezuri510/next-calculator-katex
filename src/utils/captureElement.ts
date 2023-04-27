import html2canvas from "html2canvas";

export const captureElement = async (elementId: string) => {
  const captureElement = document.querySelector(elementId) as HTMLElement;
  if (captureElement) {
    const screenshot = await html2canvas(captureElement);

    const link = document.createElement("a");
    link.href = screenshot.toDataURL();
    link.download = "screenshot.png";
    link.click();
  } else {
    throw new Error(`element not found ${elementId}`);
  }
};
