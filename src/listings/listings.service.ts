import { Injectable } from '@nestjs/common';
import { Listing } from './listing.interface';

@Injectable()
export class ListingsService {
  private readonly listings: Listing[] = [];

  findAll(): Listing[] {
    return this.listings;
  }

  create(listing: Listing) {
    this.listings.push(listing);
  }
}
