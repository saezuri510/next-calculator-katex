import html2canvas from "html2canvas";

export const captureElement = async (elementId: string) => {
  const element = document.querySelector(elementId) as HTMLElement;
  if (element) {
    const screenshot = await html2canvas(element);

    const link = document.createElement("a");
    link.href = screenshot.toDataURL();
    link.download = "screenshot.png";
    link.click();
  } else {
    throw new Error(`element not found ${elementId}`);
  }
};
