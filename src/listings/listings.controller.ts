import { Controller, Get, Post, Body } from '@nestjs/common';
import { ListingsService } from './listings.service';
import { Listing } from './listing.interface';

@Controller('listings')
export class ListingsController {
  constructor(private readonly listingsService: ListingsService) {}

  @Get()
  findAll(): Listing[] {
    return this.listingsService.findAll();
  }

  @Post()
  create(@Body() listing: Listing) {
    this.listingsService.create(listing);
  }
}
