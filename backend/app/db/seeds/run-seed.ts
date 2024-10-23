import seed from "./seed";
import db from "../../connection";
import { Data } from "./data/test"; // Ensure Data is a properly defined type
import { testData } from "./data/test";

// const devData: Data[] = []; // Uncomment and define your dev data structure

const ENV = process.env.NODE_ENV || "development";

const runSeed = async (data: Data) => {
  try {
    await seed(data);
    console.log("Seeding completed successfully.");
  } catch (error) {
    console.error("Error seeding data:", error);
  } finally {
    await db.end();
  }
};

const dataToSeed = ENV === "test" ? testData : testData; // Use appropriate data based on the environment

if (dataToSeed) {
  runSeed(dataToSeed);
} else {
  console.warn("No seed data available for the current environment.");
}

export default runSeed;
