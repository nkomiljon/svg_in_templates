import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg',
  template: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      [attr.width]="width"
      height="36px"
      viewBox="0 0 1024 1024"
      class="icon"
      version="1.1"
    >
      <path
        d="M352.7 103m-32 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0Z"
        fill="#FFEB4D"
      />
      <path d="M807.7 951h-449V192L643.8 87l163.9 105z" fill="#F7D4FF" />
      <path d="M643.7 951h-285V192l285-105z" fill="#FFE0B6" />
      <path d="M523.7 951.5h-314v-531l199-74 115 74z" fill="#DAE5FF" />
      <path d="M408.4 951.5H209.7V420.4l199-73.9z" fill="#FFEB4D" />
      <path
        d="M951.7 686.6c-5 0-7.5-3-12.7-10.2-5.1-7.2-12-17-25.7-17s-20.7 9.8-25.7 17c-5.1 7.3-7.7 10.2-12.7 10.2-5 0-7.5-3-12.7-10.2-5.1-7.2-12-17-25.7-17-9.8 0-16.1 5-20.8 10.5v-24.3c3.4-3.1 5.9-6.8 8.2-9.9 5.1-7.3 7.7-10.2 12.7-10.2 5 0 7.5 3 12.7 10.2 5.1 7.2 12 17 25.7 17s20.7-9.8 25.7-17c5.1-7.3 7.7-10.2 12.7-10.2s7.5 3 12.7 10.2c5.1 7.2 12 17 25.7 17 4.4 0 8-3.6 8-8s-3.6-8-8-8c-5 0-7.5-3-12.7-10.2-5.1-7.2-12-17-25.7-17s-20.7 9.8-25.7 17c-5.1 7.3-7.7 10.2-12.7 10.2-5 0-7.5-3-12.7-10.2-5.1-7.2-12-17-25.7-17-9.8 0-16.1 5-20.8 10.5V192c0-2.7-1.4-5.3-3.7-6.7l-164-105.1c-1.3-0.8-2.8-1.3-4.3-1.3h-0.1c-0.9 0-1.9 0.2-2.8 0.5l-285 105.1c-3.1 1.2-5.2 4.2-5.2 7.5v167.5l-143.8 53.4c-3.1 1.2-5.2 4.2-5.2 7.5V943h-101c-4.4 0-8 3.6-8 8s3.6 8 8 8h106.2c0.9 0.3 1.8 0.5 2.8 0.5h314c1 0 1.9-0.2 2.8-0.5h398.2c4.4 0 8-3.6 8-8s-3.6-8-8-8h-109V695.5c3.4-3.1 5.9-6.8 8.1-9.9 5.1-7.3 7.7-10.2 12.7-10.2s7.5 3 12.7 10.2c5.1 7.2 12 17 25.7 17 13.8 0 20.7-9.8 25.7-17 5.1-7.3 7.7-10.2 12.7-10.2 5 0 7.5 3 12.7 10.2 5.1 7.2 12 17 25.7 17 4.4 0 8-3.6 8-8s-3.6-8-8-8z m-585-489l269-99.1V943h-104V420.5c0-2.7-1.4-5.3-3.7-6.7l-115-74c-0.1-0.1-0.2-0.1-0.4-0.2-0.1-0.1-0.2-0.1-0.3-0.2-0.2-0.1-0.3-0.2-0.5-0.2-0.1 0-0.2-0.1-0.3-0.1-0.2-0.1-0.4-0.1-0.5-0.2-0.1 0-0.2-0.1-0.4-0.1s-0.4-0.1-0.5-0.1c-0.1 0-0.3 0-0.4-0.1H407.9c-0.2 0-0.3 0.1-0.5 0.1-0.1 0-0.3 0-0.4 0.1-0.1 0-0.3 0.1-0.4 0.1-0.2 0-0.3 0.1-0.5 0.1l-39.2 14.6v-156z m49.9 163.6l99 63.7V943h-99.3l0.3-581.8z m-198.9 64.9l133-49.5 16-6 34-12.6-0.3 585H217.7V426.1zM799.6 943h-148V101.5l148 94.9V943zM111.1 282.6c13.8 0 20.7-9.8 25.7-17 5.1-7.3 7.7-10.2 12.7-10.2s7.5 3 12.7 10.2c5.1 7.2 12 17 25.7 17 13.8 0 20.7-9.8 25.7-17 5.1-7.3 7.7-10.2 12.7-10.2s7.5 3 12.7 10.2c5.1 7.2 12 17 25.7 17 4.4 0 8-3.6 8-8s-3.6-8-8-8c-5 0-7.5-3-12.7-10.2-5.1-7.2-12-17-25.7-17s-20.7 9.8-25.7 17c-5.1 7.3-7.7 10.2-12.7 10.2-5 0-7.5-3-12.7-10.2-5.1-7.2-12-17-25.7-17s-20.7 9.8-25.7 17c-5.1 7.3-7.7 10.2-12.7 10.2s-7.5-3-12.7-10.2c-5.1-7.2-12-17-25.7-17-4.4 0-8 3.6-8 8s3.6 8 8 8c5 0 7.5 3 12.7 10.2 5 7.2 11.9 17 25.7 17zM72.7 205.4c5 0 7.5 3 12.7 10.2 5.1 7.2 12 17 25.7 17s20.7-9.8 25.7-17c5.1-7.3 7.7-10.2 12.7-10.2s7.5 3 12.7 10.2c5.1 7.2 12 17 25.7 17 13.8 0 20.7-9.8 25.7-17 5.1-7.3 7.7-10.2 12.7-10.2s7.5 3 12.7 10.2c5.1 7.2 12 17 25.7 17 4.4 0 8-3.6 8-8s-3.6-8-8-8c-5 0-7.5-3-12.7-10.2-5.1-7.2-12-17-25.7-17s-20.7 9.8-25.7 17c-5.1 7.3-7.7 10.2-12.7 10.2-5 0-7.5-3-12.7-10.2-5.1-7.2-12-17-25.7-17s-20.7 9.8-25.7 17c-5.1 7.3-7.7 10.2-12.7 10.2s-7.5-3-12.7-10.2c-5.1-7.2-12-17-25.7-17-4.4 0-8 3.6-8 8s3.5 8 8 8zM352.7 143c22.1 0 40-17.9 40-40s-17.9-40-40-40-40 17.9-40 40 17.9 40 40 40z m0-64c13.2 0 24 10.8 24 24s-10.8 24-24 24-24-10.8-24-24 10.8-24 24-24z"
        fill="#9A2D2F"
      />
      <path
        d="M350.6 376.6l-133 49.5v139.3c20.6-29.8 27.8-74 30-88.4 5.5-35.5 35.5-26 79.5-49 31.1-16.2 43.5-39.7 46.4-59.9l-6.9 2.6-16 5.9zM366.7 353.6l12.8-4.7c11.3-18.6 15.9-43.6 59.7-58.8 48-16.7 15.5-65.8 33.5-98.5s65.3-9.8 105.3-45.8c13.7-12.3 19.9-24 22.1-34.1l-233.4 86v155.9z"
        fill="#FFFFFF"
      />
    </svg>
  `,
  styleUrls: ['./svg.component.scss'],
})
export class SvgComponent {
  @Input('width') width: string | undefined;
}
