import { CategoryTab } from "../interfaces/CategoryTab.interface";
import axios from "axios";

export const getCategories = async () => {
  try {
    const response = await axios.get<CategoryTab[]>(
      `${process.env.NEXT_PUBLIC_FASTTY_CHAT_BACKEND_URL}/categories`
    );
    return response;
  } catch (error) {
    return { status: error instanceof Error ? error.message : "Unknown error" };
  }
};
