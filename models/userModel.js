import { users } from "../data/userData.js";
import fs from "fs/promises";
import path from "path";

const dataPath = path.resolve('data/userData.js');

export const getAllUser = () => {
    return users;
}

export async function saveUser(users){
    await fs.writeFile(dataPath, JSON.stringify(users));
}