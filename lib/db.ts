import _mongoose, { connect } from "mongoose";

declare global {
    var mongoose: {
        promise: ReturnType<typeof connect> | null;
        conn: typeof _mongoose | null;
    };
}

const MONGO_DB_URL = process.env.MONGO_DB_URL;

if (!MONGO_DB_URL) {
    throw new Error(
        "Please define the MONGO_DB_URL environment variable inside .env.local",
    );
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections from growing exponentially
 * during API Route usage.
 */

let db = global.mongoose;

if (!db) {
    db = global.mongoose = { conn: null, promise: null };
}

export const dbConnect = async () => {
    if (db.conn) {
        return db.conn;
    }

    if (!db.promise) {
        const options = {
            bufferCommands: false,
        };

        db.promise = connect(MONGO_DB_URL!, options).then((mongoose) => {
            return mongoose;
        });
    }

    try {
        db.conn = await db.promise;
    } catch (error) {
        db.promise = null;
        throw error;
    }

    return db.conn;
};
