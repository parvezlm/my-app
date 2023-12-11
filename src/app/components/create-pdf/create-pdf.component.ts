import { Component, OnInit } from '@angular/core';
import { downloadAsPdf } from 'src/app/utils/pdf';

@Component({
  selector: 'app-create-pdf',
  templateUrl: './create-pdf.component.html',
  styleUrls: ['./create-pdf.component.scss']
})
export class CreatePdfComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

 downloadpdf() {
  downloadAsPdf();
 }

}
