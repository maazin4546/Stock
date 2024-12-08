import { Mongo_Connect } from '@/dbConfig/dbConfig';
import DB_Schema from '@/model/Schema';

export default async function GET(req, res) {
    try {
        await Mongo_Connect();
        const products = await DB_Schema.find();
        return res.status(200).json(products);

    } catch (error) {
        console.error("Error fetching products:", error);
        return res.status(500).json({ error: 'Failed to fetch products' });
    }

}
