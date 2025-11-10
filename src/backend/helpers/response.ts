import { ApiResponse } from "./types";

const apiResponse = (response: ApiResponse, status: number) => {
  return new Response(JSON.stringify(response), { status });
};

export default apiResponse;
