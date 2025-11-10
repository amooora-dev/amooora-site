import apiResponse from "@/backend/helpers/response";
import { addEmail } from "@/backend/service/newsletter";

export const POST = async (request: Request) => {
  try {
    const { email } = await request.json();

    const result = await addEmail(email);

    if (!result.success) {
      return apiResponse(result, 400);
    }
    return apiResponse(result, 200);
  } catch (error) {
    console.error("Error adding email to newsletter:", error);
    return apiResponse(
      { message: "Internal Server Error", success: false },
      500
    );
  }
};
