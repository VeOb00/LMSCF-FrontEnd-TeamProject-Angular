import { Pipe, PipeTransform } from '@angular/core';
import { Photography } from '../app/portfolio-page/photos';

@Pipe({
    name: 'portfolioFilters',
    pure: false
})
export class PortfolioFiltersPipe implements PipeTransform {

    transform(photos: Array<Photography>, selectedTypes: Set<string>): any {
        if (!photos || !selectedTypes) {
            return photos
        }
        return photos.filter(photo => selectedTypes.has(photo.type));
    }

}
