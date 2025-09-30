import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temp',
  standalone: true,
})
export class TemperaturePipe implements PipeTransform {
  transform(
    value: string | number | null,
    inputType: 'c' | 'f',
    outputType?: 'c' | 'f'
  ) {
    if (!value) return value;

    // convert string to number if needed
    const val: number = typeof value === 'string' ? parseFloat(value) : value;

    let outputTemp: number;

    // convert temperature
    if (inputType === 'c' && outputType === 'f') {
      outputTemp = val * (9 / 5) + 32;
    } else if (inputType === 'f' && outputType === 'c') {
      outputTemp = (val - 32) * (5 / 9);
    } else {
      outputTemp = val; // no conversion
    }

    // determine the symbol to use
    // if no outputType is provided, use the inputType
    let symbol: '°F' | '°C';
    if (!outputType) {
      symbol = inputType === 'c' ? '°C' : '°F';
    } else {
      symbol = outputType === 'c' ? '°C' : '°F';
    }

    return `${outputTemp.toFixed(2)} ${symbol}`;
  }
}
