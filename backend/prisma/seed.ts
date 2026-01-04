import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding database...');

  // Create categories
  const categories = await Promise.all([
    prisma.category.upsert({
      where: { slug: 'hello-kitty' },
      update: {},
      create: {
        name: 'Hello Kitty',
        slug: 'hello-kitty',
        description: 'Classic Hello Kitty collections',
      },
    }),
    prisma.category.upsert({
      where: { slug: 'my-melody' },
      update: {},
      create: {
        name: 'My Melody',
        slug: 'my-melody',
        description: 'Cute My Melody products',
      },
    }),
    prisma.category.upsert({
      where: { slug: 'badtz-maru' },
      update: {},
      create: {
        name: 'Badtz-Maru',
        slug: 'badtz-maru',
        description: 'Adorable Badtz-Maru items',
      },
    }),
  ]);

  // Create sample products
  await Promise.all([
    prisma.product.upsert({
      where: { sku: 'HK001' },
      update: {},
      create: {
        name: 'Hello Kitty Plush Toy',
        slug: 'hello-kitty-plush',
        description: 'Adorable and soft Hello Kitty plushie - perfect for collectors',
        price: 299,
        originalPrice: 399,
        sku: 'HK001',
        categoryId: categories[0].id,
        image: 'https://via.placeholder.com/300x300?text=Hello+Kitty',
        stock: 15,
        rating: 4.8,
        featured: true,
      },
    }),
    prisma.product.upsert({
      where: { sku: 'MM001' },
      update: {},
      create: {
        name: 'My Melody Ceramic Cup',
        slug: 'my-melody-cup',
        description: 'Cute ceramic cup with My Melody design - perfect for morning coffee',
        price: 199,
        sku: 'MM001',
        categoryId: categories[1].id,
        image: 'https://via.placeholder.com/300x300?text=My+Melody',
        stock: 25,
        rating: 4.6,
        featured: true,
      },
    }),
    prisma.product.upsert({
      where: { sku: 'BM001' },
      update: {},
      create: {
        name: 'Badtz-Maru Keychain',
        slug: 'badtz-maru-keychain',
        description: 'Tiny Badtz-Maru keychain - carry cuteness with you',
        price: 89,
        sku: 'BM001',
        categoryId: categories[2].id,
        image: 'https://via.placeholder.com/300x300?text=Badtz-Maru',
        stock: 50,
        rating: 4.9,
        featured: false,
      },
    }),
  ]);

  console.log('✅ Database seeded successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Seeding error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
