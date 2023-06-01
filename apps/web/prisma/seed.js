const { PrismaClient } = require('@prisma/client')
const { mock } = require('./mock.js')
const prisma = new PrismaClient()

const load = async () => {
  try {
    await prisma.user.deleteMany()
    console.log('Deleted records from user table')

    await prisma.session.deleteMany()
    console.log('Deleted records from session table')

    await prisma.account.deleteMany()
    console.log('Deleted records from account table')

    await prisma.verificationToken.deleteMany()
    console.log('Deleted records from verificationToken table')

    await prisma.spot.deleteMany()
    console.log('Deleted records from spot table')

    await prisma.tag.deleteMany()
    console.log('Deleted records from tag table')

    await prisma.rating.deleteMany()
    console.log('Deleted records from rating table')

    await prisma.favorite.deleteMany()
    console.log('Deleted records from favorite table')

    await prisma.user.createMany({
      data: mock.users,
    })

    console.log('Added records to user table')

    await prisma.tag.createMany({
      data: mock.tags,
    })

    console.log('Added records to tag table')

    await prisma.spot.createMany({
      data: mock.spots,
    })

    console.log('Added records to spot table')

    await prisma.rating.createMany({
      data: mock.ratings,
    })

    console.log('Added records to rating table')

    await prisma.favorite.createMany({
      data: mock.favorites,
    })

    console.log('Added records to favorite table')
  } catch (e) {
    console.error(e)
    process.exit(1)
  } finally {
    await prisma.$disconnect()
  }
}

load()
