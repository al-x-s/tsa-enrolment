const { PrismaClient } = require("@prisma/client");
// const { categories, products } = require("./data.js");
const prisma = new PrismaClient();

async function schoolsAndPrograms() {
  const arcadia = await prisma.school.create({
    data: {
      name: "Arcadia PS",
      facility_hire: 0,
      resource_levy: 10,
      programs: {
        create: [
          {
            name: "B&G",
            description: "Band Rehearsal & Group Lessons",
            cost: 220,
            cost_breakdown: {
              "Group Tuition": 220,
              "Band Rehearsals": "Included",
            },
            status: "Active",
            enrol_fee: 30,
          },
          {
            name: "B&Pr",
            description: "Band Rehearsal & Private Lessons",
            cost: 610,
            cost_breakdown: {
              "Private Tuition": 500,
              "Band Rehearsals": 110,
            },
            status: "Active",
            enrol_fee: 30,
          },
        ],
      },
    },
  });

  const smr = await prisma.school.create({
    data: {
      name: "St Mary's Rydalmere",
      facility_hire: 0,
      resource_levy: 10,
      programs: {
        connect: [{ name: "B&G" }, { name: "B&Pr" }],
        create: [
          {
            name: "Key",
            description: "Keyboard Lessons",
            cost: 220,
            cost_breakdown: {
              "Group Tuition": 220,
            },
            status: "Active",
            enrol_fee: 30,
          },
        ],
      },
    },
  });
}

async function instrumentsAndAccessories() {
  const clarinet = await prisma.instrument.create({
    data: {
      name: "Clarinet",
      purchase_options: [
        {
          name: "Yamaha Clarinet",
          model: "YCL255",
          image:
            "https://duralmusic.com.au/cdn/shop/products/0001500_yamaha-ycl255id-clarinet-nickel-plated-silver-keys_625_720x.jpg?v=1626752264",
          rrp: 1099.0,
          sale_price: 849.0,
        },
        {
          name: "Jupiter Clarinet",
          model: "JC700NA",
          image:
            "https://duralmusic.com.au/cdn/shop/files/JCL700NA-1_720x.jpg?v=1689054012",
          rrp: 895.0,
          sale_price: 685.0,
        },
      ],
      hire_cost: 43,
      hire_insurance: 3,
      accessories: {
        create: [
          {
            name: "Music Stand",
            price: 31.0,
            image:
              "https://duralmusic.com.au/cdn/shop/files/OSSM7122BB_720x.jpg?v=1693275595",
          },
          {
            name: "Clarinet Reeds",
            description: "Box of 10",
            price: 43.0,
            image:
              "https://duralmusic.com.au/cdn/shop/products/ds_rca1020_main_transparent_720x.png?v=1650352286",
          },
        ],
      },
    },
  });

  const trumpet = await prisma.instrument.create({
    data: {
      name: "Trumpet",
      purchase_options: [
        {
          name: "Yamaha Trumpet",
          model: "YTR2330",
          image:
            "https://duralmusic.com.au/cdn/shop/products/2330_720x.png?v=1626758001",
          rrp: 1099.0,
          sale_price: 849.0,
        },
        {
          name: "Schagerl Trumpet",
          model: "SLTR355",
          image:
            "https://duralmusic.com.au/cdn/shop/files/HmbDpnYw_720x.jpg?v=1687238535",
          rrp: 1299.0,
          sale_price: 849.0,
        },
      ],
      hire_cost: 43,
      hire_insurance: 3,
      accessories: {
        connect: [{ name: "Music Stand" }],
        create: [
          {
            name: "Mouthpiece Brush",
            description: "Narrow brush for cleaning mouthpiece",
            price: 5.0,
            image:
              "https://duralmusic.com.au/cdn/shop/products/YMBLS_720x.jpg?v=1663567704",
          },
          {
            name: "Cleaning Snake",
            description: "Brush on a flexible pipe for instrument body",
            price: 11.0,
            image:
              "https://duralmusic.com.au/cdn/shop/products/YFCS_720x.jpg?v=1663567603",
          },
        ],
      },
    },
  });
}

const load = async () => {
  try {
    await prisma.school.deleteMany();
    console.log("Deleted records in School table");

    await prisma.program.deleteMany();
    console.log("Deleted records in Program table");

    await prisma.school_Program.deleteMany();
    console.log("Deleted records in School_Program table");

    await prisma.instrument.deleteMany();
    console.log("Deleted records in Program table");

    await prisma.accessory.deleteMany();
    console.log("Deleted records in Accessory table");

    await prisma.instrument_Accessory.deleteMany();
    console.log("Deleted records in Instrument_Accessory table");

    await prisma.enrolment_Accessory.deleteMany();
    console.log("Deleted records in Enrolment_Accessory table");

    // await prisma.$queryRaw`ALTER TABLE Product AUTO_INCREMENT = 1`;
    // console.log("reset product auto increment to 1");

    // await prisma.$queryRaw`ALTER TABLE Category AUTO_INCREMENT = 1`;
    // console.log("reset category auto increment to 1");

    // await prisma.category.createMany({
    //   data: categories,
    // });
    // console.log("Added category data");

    // await prisma.product.createMany({
    //   data: products,
    // });
    // console.log("Added product data");

    schoolsAndPrograms();
    instrumentsAndAccessories();
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
};

load();
