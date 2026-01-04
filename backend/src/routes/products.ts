import { Router, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

// GET all products with pagination
router.get('/', async (req: Request, res: Response) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 12;
    const category = req.query.category as string;
    const skip = (page - 1) * limit;

    const where: any = {};
    if (category && category !== 'all') {
      where.category = { slug: category };
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

    res.json({
      success: true,
      data: products,
      total,
      page,
      pageSize: limit,
      totalPages: Math.ceil(total / limit),
    });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Error fetching products' });
  }
});

// GET featured products
router.get('/featured', async (req: Request, res: Response) => {
  try {
    const products = await prisma.product.findMany({
      where: { featured: true },
      include: { category: true },
      take: 6,
    });

    res.json({ success: true, data: products });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Error fetching featured products' });
  }
});

// GET random products (for gamification)
router.get('/random', async (req: Request, res: Response) => {
  try {
    const count = parseInt(req.query.count as string) || 1;
    
    const products = await prisma.product.findMany({
      include: { category: true },
      take: count,
      skip: Math.floor(Math.random() * 100),
    });

    res.json({ success: true, data: products });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Error fetching random products' });
  }
});

// GET product by ID
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const product = await prisma.product.findUnique({
      where: { id: req.params.id },
      include: {
        category: true,
        reviews: {
          include: { user: { select: { id: true, name: true, avatar: true } } },
          take: 10,
        },
      },
    });

    if (!product) {
      return res.status(404).json({ success: false, error: 'Product not found' });
    }

    res.json({ success: true, data: product });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Error fetching product' });
  }
});

// Search products
router.get('/search', async (req: Request, res: Response) => {
  try {
    const query = req.query.q as string;

    if (!query) {
      return res.status(400).json({ success: false, error: 'Search query required' });
    }

    const products = await prisma.product.findMany({
      where: {
        OR: [
          { name: { contains: query, mode: 'insensitive' } },
          { description: { contains: query, mode: 'insensitive' } },
        ],
      },
      include: { category: true },
      take: 20,
    });

    res.json({ success: true, data: products });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Error searching products' });
  }
});

export default router;
