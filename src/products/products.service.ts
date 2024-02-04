import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class ProductsService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createProductDto: Prisma.ProductCreateInput) {
    const result = await this.databaseService.product.create({
      data: createProductDto,
    });

    return {
      success: true,
      message: 'Successfully created a product',
      data: result,
    };
  }

  async findAll() {
    const result = await this.databaseService.product.findMany();
    return {
      success: true,
      message: 'Successfully retrieved all products',
      data: result,
    };
  }

  async findOne(id: number) {
    return this.databaseService.product.findUnique({ where: { id } });
  }

  async update(id: number, updateProductDto: Prisma.ProductUpdateInput) {
    const result = await this.databaseService.product.update({
      where: { id },
      data: updateProductDto,
    });

    return {
      success: true,
      message: 'Successfully updated a product',
      data: result,
    };
  }

  async remove(id: number) {
    const result = this.databaseService.product.delete({ where: { id } });
    return {
      success: true,
      message: 'Successfully deleted a product',
      data: result,
    };
  }
}
