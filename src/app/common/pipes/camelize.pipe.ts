import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'camelize'
})
export class CapitalizePipe implements PipeTransform {
    transform(value: string, _args?: any): any {
        if (!value)
            return value;

        return value.replace(/_/g, ' ').replace(/([A-Z])/g, ' $1').replace(/^./, function (str) {
            return str.toUpperCase();
        }).replace(/(?:^|\s|["'([{])+\S/g, match => match.toUpperCase());
    }
}