// import { pipe } from "framer-motion";
import prisma from "../../../prisma/prismaClient";
export async function getPractice() {
  let practice = await prisma.listing.aggregateRaw({
    pipeline:[

        {
            $match: { price: 700 }
          },
          // Using $facet to handle conditional logic
          {
            $facet: {
              // First pipeline: Further filter the documents with roomcount 5
              filtered: [
                { $match: { roomCount: 2 } }
              ],
              // Second pipeline: Keep the documents from the first stage as a backup
              backup: [
                { $match: {} }  // This will include all documents from the previous stage
              ]
            }
          },
          // Using $project to check if filtered results are empty and decide which result set to use
          {
            $project: {
              results: {
                $cond: {
                  if: { $eq: [{ $size: "$filtered" }, 0] },
                  then: "$backup",
                  else: "$filtered"
                }
              }
            }
          },
          // Unwind the results array to return documents individually
          {
            $unwind: "$results"
          },
          // Replace the root with the documents in results array
          {
            $replaceRoot: { newRoot: "$results" }
          }


    ]
  });

  return practice;
}