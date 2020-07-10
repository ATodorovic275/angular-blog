import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'shortStr' })
export class ShortStrPipe implements PipeTransform {
    transform(value: string): string {
        let newStringArray: string[];
        let newString: string = "";
        newStringArray = value.split(".", 3);
        newStringArray.forEach(element => {
            newString += element + ". ";
        });
        // console.log(newStringArray)
        // console.log(newString);
        return newString;
    }
}