import { ICard } from "@/shared/types/card";
import { couchdb } from "./couchdbClient";
import { PETS_DB_NAME } from "@/consts/consts";

export const getPetsList = async (): Promise<ICard[] | undefined> => {
  try {
    const response = await couchdb.get(`/${PETS_DB_NAME}/pets_list`);
    const data = response.data;
    const { cats } = data;
    return cats;
  } catch (error) {
    console.error(error);
  }
}
