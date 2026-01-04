import { PrismaClient } from '@prisma/client';
import { Product } from '@prisma/client';

const prisma = new PrismaClient();

export class ProductService {
  static async getAllProducts(
    page: number = 1,
    limit: number = 12,
    categoryId?: string
  ) {
    const skip = (page - 1) * limit;
    const where: any = {};

    if (categoryId) {
      where.categoryId = categoryId;
    }

    const [products, total] = await Promise.all([
      prisma.product.findMany({
        where,
        include: { category: true },
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
      }),
      prisma.product.count({ where }),
    ]);

    return {
      products,
      total,
      page,
      pageSize: limit,
      totalPages: Math.ceil(total / limit),
    };
  }

  static async getProductById(id: string) {
    return prisma.product.findUnique({
      where: { id },
      include: {
        category: true,
        reviews: {
          include: { user: { select: { id: true, name: true, avatar: true } } },
        },
      },
    });
  }

  static async getFeaturedProducts(limit: number = 6) {
    return prisma.product.findMany({
      where: { featured: true },
      include: { category: true },
      take: limit,
    });
  }

  static async getRandomProducts(count: number = 1) {
    const products = await prisma.product.findMany({
      include: { category: true },
    });

    // Fisher-Yates shuffle
    const shuffled = products.sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
  }

  static async searchProducts(query: string, limit: number = 20) {
    return prisma.product.findMany({
      where: {
        OR: [
          { name: { contains: query, mode: 'insensitive' } },
          { description: { contains: query, mode: 'insensitive' } },
        ],
      },
      include: { category: true },
      take: limit,
    });
  }
}

export default ProductService;
