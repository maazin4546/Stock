import { Mongo_Connect } from '@/dbConfig/dbConfig';
import DB_Schema from '@/model/Schema';

export default async function POST(req, res) {
    try {
        await Mongo_Connect();
        const body = await req.body;
        const { name, quantity, price } = body;

        const new_product = new DB_Schema({
            name,
            quantity,
            price,
        });

        const saveproduct = await new_product.save();
        console.log(saveproduct);

        return res.status(201).json({ message: 'Product added successfully!', product: saveproduct });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Failed to add product' });
    }
}



