import domToImage from 'dom-to-image';
import jsPDF from 'jspdf';
import { Moment } from 'moment';

export function downloadAsPdf(): void {
    const data = document.getElementsByTagName('main')[0];
    const width = data.clientWidth;
    const height = data.clientHeight + 40;
    let orientation = '';

    removeElements();

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
            pdf.addImage(result, 'PNG', 15, 10, width +10, height+200);
            pdf.save('file_name' + '.pdf');
            removeElements(true);
        })
        .catch(error => { });
}

//it does not allow to visible some elements in pdf
function removeElements(isElmRevert: boolean = false) {
    const elements: any = document.getElementsByClassName('no-visible-in-pdf');
    for (let element of elements) {
        if (isElmRevert) {
            element.classList.remove('hidden');
        } else {
            element.classList.add('hidden');
        }
    }
}
