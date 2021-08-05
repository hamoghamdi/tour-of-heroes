import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'waveString'
})
export class WavePipe implements PipeTransform {
        transform(value:string): string{
            let updatedValue = [];
            for(let i=0; i<value.length; i++){
                if(i%2==0) {
                    updatedValue.push(value[i].toUpperCase());
                } else { 
                    updatedValue.push(value[i].toLowerCase());
                }
                
            }
            return updatedValue.join('')
        }
}