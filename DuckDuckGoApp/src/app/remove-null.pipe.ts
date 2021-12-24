import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeNull'
})
export class RemoveNullPipe implements PipeTransform {

  transform(relatedTopics: any[]): any {
    if (!relatedTopics) {
      return relatedTopics;
    }
    // filter relatedTopics array, relatedTopics which match and return true will be
    // kept, false will be filtered out
    return relatedTopics.filter(rt => rt.text);
  }

}
