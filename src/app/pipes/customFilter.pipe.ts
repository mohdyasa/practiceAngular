import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customFilter'
})
export class CustomFilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!args) {
      return value;
    }
    return value.filter((val) => {
      let rVal = (val.body.toLocaleLowerCase().includes(args)) || (val.title.toLocaleLowerCase().includes(args));
      return rVal;
    })

}

}
