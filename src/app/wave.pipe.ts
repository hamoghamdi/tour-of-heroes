import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'waveString'
})
export class WavePipe implements PipeTransform {
        transform(value:string): string{

            return value.split("").map( (letter,index) => (
                index%2==0 ? letter.toUpperCase() : letter.toLowerCase()
            )).join('')

        }
}