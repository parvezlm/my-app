import domToImage from 'dom-to-image';
import jsPDF from 'jspdf';
import {Moment} from 'moment';

export function downloadAsPdf(): void {
    const data = document.getElementsByTagName('main')[0];
    const downloadbtn = document.getElementById('download');
    const width = data.clientWidth;
    const height = data.clientHeight + 40;
    let orientation = '';

    downloadbtn?.setAttribute('data-html2canvas-ignore','true');

    if (width > height) {
        orientation = 'l';
    } else {
        orientation = 'p';
    }

    domToImage
    .toPng(data, {
        width: width,
        height: height
    })
    .then(result => {
            const jsPdfOptions: object = {
            orientation: orientation,
            unit: 'px',
            format: [width + 50, height + 220]
        };
    const pdf = new jsPDF(jsPdfOptions);
    pdf.addImage(result, 'PNG', 25, 185, width, height);
    pdf.save('file_name'+ '.pdf');
    })
    .catch(error => {
    });
    }