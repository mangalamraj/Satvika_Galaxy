import { JWT } from "google-auth-library";
import { GoogleSpreadsheet } from "google-spreadsheet";

interface CareerData {
  name: string;
  phone: string;
  email: string;
  purpose: number;
}

const serviceAccountAuth = new JWT({
  email: process.env.NEXT_GOOGLE_CLIENT_EMAIL,
  key: process.env.GOOGLE_PRIVATE_KEY!.split(String.raw`\n`).join("\n"),
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

export async function POST(req: Request, res: Response) {
  try {
    const { name, phone, email, purpose } = (await req.json()) as CareerData;

    // Connect to the Google Sheet
    const doc = new GoogleSpreadsheet(
      process.env.NEW_GOOGLE_SPREADSHEET_ID!,
      serviceAccountAuth,
    );
    await doc.loadInfo(); // loads document properties and worksheets

    const sheet = doc.sheetsByIndex[0]; // assuming the first sheet is the one you want to write to

    // Add a new row with the form data

    await sheet.addRow({
      Name: name,
      Phone: phone,
      Email: email || "NA",
      Purpose: purpose || "NA",
    });

    return new Response("Success", {
      status: 200,
    });
  } catch (error) {
    console.error("Error submitting feedback:", error);
    return new Response("Internal Server Error", {
      status: 500,
    });
  }
}
